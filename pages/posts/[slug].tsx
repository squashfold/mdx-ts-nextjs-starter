import { serialize } from 'next-mdx-remote/serialize';
import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import { useEffect } from 'react';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { useMdxComponentsContext } from '../../context/mdxContext';
import Thumbnail from '../../components/Thumbnail';
import { IPost } from '../../interfaces/post';
import { getPost, getAllPosts } from '../../utils/mdxUtils';
import Prerequisites from '../../components/Prerequisites';
import { ParsedUrlQuery } from 'querystring';
import Tags from '../../components/Tags';
import GistEmbed from '../../components/GistEmbed';
import Config from "../../app.config"

import PostStyles from '../../styles/modules/Post.module.scss';

// props type
type Props = {
    source: MDXRemoteSerializeResult,
    frontMatter: Omit<IPost, 'slug'>;
}

// components to render
const components = {
    Prerequisites,
    Tags,
    GistEmbed,
}

const PostPage: React.FC<Props> = ({ source, frontMatter }: Props) => {

    // get setters
    const { setPrerequisites, setTags } = useMdxComponentsContext();

    useEffect(() => {
        // set prerequisites
        setPrerequisites!(frontMatter.prerequisites);
        // set tags
        setTags!(frontMatter.tags);
    }, [
        setPrerequisites,
        setTags,
        frontMatter.prerequisites,
        frontMatter.tags
    ]);

    return (
        <div>
            <Head>
                <title>{frontMatter.title + ' | ' + Config.title}</title>
                <meta property="og:title" content={frontMatter.title} key="ogtitle" />
                <meta property="og:description" content={frontMatter.description} key="ogtitle" />
                <meta property="og:image" content={frontMatter.thumbnail} key="ogimg" />
                <meta property="og:type" content="article" />
            </Head>
            <article className="container">

                <div className={`${PostStyles['post-header']}`}>
                    <div>
                        <Thumbnail title={frontMatter.title} src={frontMatter.thumbnail} />
                    </div>
                    <div>
                        <h1>{frontMatter.title}</h1>
                        <p>{frontMatter.description}</p>
                    </div>
                </div>

                <MDXRemote components={components} {...source} />
            </article>
        </div>
    )
}

export default PostPage;

interface Iparams extends ParsedUrlQuery {
    slug: string
}

export const getStaticProps: GetStaticProps = async (context) => {

    const { slug } = context.params as Iparams;
    // get the slug
    const { content, data } = getPost(slug);
    // serialize the data on the server side
    const mdxSource = await serialize(content, { scope: data });
    return {
        props: {
            source: mdxSource,
            frontMatter: data
        }
    }
}

export const getStaticPaths: GetStaticPaths = () => {
    //only get the slug from posts 
    const posts = getAllPosts(['slug']);

    // map through to return post paths
    const paths = posts.map((post) => ({
        params: {
            slug: post.slug
        }
    }));

    return {
        paths,
        fallback: false
    }
}