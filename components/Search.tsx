import { useCallback, useRef, useState, useEffect } from 'react'
import PostGrid from './PostGrid'

export default function Search() {

  const searchRef = useRef<HTMLInputElement>(null)
  const [query, setQuery] = useState('')
  const [active, setActive] = useState(false)
  const [results, setResults] = useState<any[]>([])
  const [loaded, setLoaded] = useState<boolean>(false)

  const searchEndpoint = (query: string) => `/api/search?q=${query}`

  const getResults = (query: string) => {
    fetch(searchEndpoint(query))
    .then(res => res.json())
    .then(res => {
      setResults(res.results)
      console.log(res.results)
    })

    // replace this with the code below if you don't want to show all posts when nothing is input
  
    // if (query.length) {
    //   fetch(searchEndpoint(query))
    //     .then(res => res.json())
    //     .then(res => {
    //       setResults(res.results)
    //     })
    // } else {
    //   setResults([])
    // }
  }

  const onChange = useCallback((event) => {
    const query = event.target.value;
    setQuery(query)
    getResults(query)
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

  useEffect(() => {
    if (!loaded) {
      getResults(query)
      setLoaded(true)
    }
  });

  return (
    
    <div ref={searchRef}>
      <input
        onChange={onChange}
        onFocus={onFocus}
        placeholder='Search posts'
        type='text'
        value={query}
      />
      { results.length > 0 && (
        <PostGrid posts={results} />
      ) }
    </div>
  )
}