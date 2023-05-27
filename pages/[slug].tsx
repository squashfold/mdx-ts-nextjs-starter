import { serialize } from 'next-mdx-remote/serialize';
import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import Config from "../app.config"

import Thumbnail from '../components/Thumbnail';
import { IPost } from '../interfaces/post';
import { getAllPages, getPage } from '../utils/mdxUtils';
import { ParsedUrlQuery } from 'querystring';

// props type
type Props = {
    source: MDXRemoteSerializeResult,
    frontMatter: Omit<IPost, 'slug'>;
}

// components to render
const components = {
}

const PostPage: React.FC<Props> = ({ source, frontMatter }: Props) => {

    return (
        <>
            <Head>
                <title>{frontMatter.title + ' | ' + Config.title}</title>
                <meta property="og:title" content={frontMatter.title} key="ogtitle" />
                <meta property="og:image" content={frontMatter.thumbnail} key="ogimg" />
            </Head>
            <div className="container">

                <article className="">
                    <div className="">
                        <Thumbnail title={frontMatter.title} src={frontMatter.coverImage} />
                    </div>

                    <h1>{frontMatter.title}</h1>

                    <p>{frontMatter.description}</p>

                    <MDXRemote components={components} {...source} />
                </article>
            </div>
        </>
    )
}

export default PostPage;

interface Iparams extends ParsedUrlQuery {
    slug: string
}

export const getStaticProps: GetStaticProps = async (context) => {

    const { slug } = context.params as Iparams;
    // get the slug
    const { content, data } = getPage(slug);
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
    const posts = getAllPages(['slug']);

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