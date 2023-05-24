import { getAllPosts } from "../../utils/mdxUtils";
import type { NextApiRequest, NextApiResponse } from 'next'
import type Keyable from '../../interfaces/keyable'

const posts = process.env.NODE_ENV === 'production' ? require('../../cache/data').posts : getAllPosts([
  'title',
  'slug',
  'date',
  'description',
  'thumbnail'
])

export default (req: NextApiRequest, res: NextApiResponse) => {
  const query = req.query.q ? req.query.q.toString().toLowerCase() : '';
  const results = req.query.q ?
    posts.filter((post: Keyable) => post.title.toLowerCase().includes(query)) : posts
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify({ results }))
}