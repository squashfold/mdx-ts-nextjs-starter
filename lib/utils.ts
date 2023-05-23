import fs from 'fs'

export async function getAllPostsWithFrontMatter(dataType: string) {
    const files = fs.readdirSync(path.join(root, 'data', dataType))
    // @ts-ignore
    return files.reduce((allPosts, postSlug) => {
      const source = fs.readFileSync(path.join(root, 'data', dataType, postSlug), 'utf8')
      const { data } = matter(source)
      return [
        {
          frontMatter: data,
          slug: postSlug.replace('.md', ''),
        },
        ...allPosts,
      ]
    }, [])
  }
  
  export async function cachedPostData(dataType: string) {
    const posts = await getAllPostsWithFrontMatter(dataType)
    return `export const cachedPosts = ${JSON.stringify(posts)}`
  }