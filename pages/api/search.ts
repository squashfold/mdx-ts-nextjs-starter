import { getAllPosts } from "../../utils/mdxUtils";
import type { NextApiRequest, NextApiResponse } from 'next'
import Fuse from 'fuse.js'

const posts = process.env.NODE_ENV === 'production' ? require('../../cache/data').posts : getAllPosts([
  'title',
  'slug',
  'date',
  'description',
  'thumbnail',
  'tags'
])

export default (req: NextApiRequest, res: NextApiResponse) => {
  const fuse = new Fuse(posts, {keys: ['title', 'tags', 'description']})
  const query = req.query.q ? req.query.q.toString().toLowerCase() : ''
  let results: Result[] = query.length ? fuse.search(query) : posts
  const tags = req.query.tags ? eval(JSON.parse(JSON.stringify(req.query.tags))): []

  interface Result {
    item: {
      title: string;
      tags: string[];
      slug: string;
      date: string;
      description: string;
      thumbnail: string;
    }
  }

  const filterResultsByTags = (results: any[], tags: any[]): Result[] => {
    return results.filter(result => {
      const itemTags = result.tags ? result.tags : result.item.tags
      return tags.some(tag => itemTags.includes(tag))
    })
  }

  if (tags.length) {
    results = filterResultsByTags(results, tags);
  }

  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify({ results }))
}