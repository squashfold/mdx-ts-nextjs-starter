import { useCallback, useRef, useState } from 'react'
import Link from 'next/link'
import PostGrid from './PostGrid'

export default function Search() {

  const searchRef = useRef(null)
  const [query, setQuery] = useState('')
  const [active, setActive] = useState(false)
  const [results, setResults] = useState<any[]>([])

  const searchEndpoint = (query) => `/api/search?q=${query}`

  const onChange = useCallback((event) => {
    // TODO: show all posts if no search is set
    const query = event.target.value;
    setQuery(query)
    if (query.length) {
      fetch(searchEndpoint(query))
        .then(res => res.json())
        .then(res => {
          setResults(res.results)
        })
    } else {
      setResults([])
    }
  }, [])

  const onFocus = useCallback(() => {
    setActive(true)
    window.addEventListener('click', onClick)
  }, [])

  const onClick = useCallback((event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setActive(false)
      window.removeEventListener('click', onClick)
    }
  }, [])

  console.log(results);

  return (
    <div ref={searchRef}>
      <input
        onChange={onChange}
        onFocus={onFocus}
        placeholder='Search posts'
        type='text'
        value={query}
      />
      { active && results.length > 0 && (
        <PostGrid posts={results} />
        // <ul>
        //   {results.map(({ id, title }) => (
        //     <li key={id}>
        //       <Link href="/posts/[id]" as={`/posts/${id}`}>
        //         <a>{title}</a>
        //       </Link>
        //     </li>
        //   ))}
        // </ul>
      ) }
    </div>
  )
}