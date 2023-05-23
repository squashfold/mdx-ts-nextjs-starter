import { getAllPosts } from "../../utils/mdxUtils";

const posts = process.env.NODE_ENV === 'production' ? require('../../cache/data').posts : getAllPosts([
  'title',
  'slug',
  'date',
  'description',
  'thumbnail'
])

type Props = {
  req: any,
  res: any,
  post: any
}

export default (req, res) => {
  const query = req.query.q.toLowerCase();
  const results = req.query.q ?
    posts.filter(post => post.title.toLowerCase().includes(query)) : []
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify({ results }))
}