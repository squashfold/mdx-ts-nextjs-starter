import { useCallback, useRef, useState, useEffect } from 'react'
import PostGrid from './PostGrid'

export default function Search() {

  
  const postsPerPage = 6; // Set how many posts should load on button click
  const defaultPostsCount = postsPerPage; // Set how many posts load by default

  const searchRef = useRef<HTMLInputElement>(null)
  const [query, setQuery] = useState('')
  const [active, setActive] = useState(false)
  const [results, setResults] = useState<any[]>([])
  const [loaded, setLoaded] = useState<boolean>(false)
  const [morePosts, setMorePosts] = useState(results.slice(0, defaultPostsCount));

  const searchEndpoint = (query: string) => `/api/search?q=${query}`


  const getResults = (query: string) => {
    fetch(searchEndpoint(query))
        .then(res => res.json())
        .then(res => {
          setResults(res.results)
          setMorePosts(res.results.slice(0, defaultPostsCount))
        })
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

  const loadMorePosts = (event: any, toShow: number) => {
    let postsToShow = morePosts.length + toShow;
    setMorePosts(results.slice(0, postsToShow))
  
    if (results.length <= postsToShow) {
      event.target?.classList.add("hidden");
    }
  }

  return (
    
    <div ref={searchRef}>
      <div className="container">
        <label htmlFor="searchInput">Filter:</label>
        <input
          onChange={onChange}
          onFocus={onFocus}
          placeholder='Search posts'
          type='text'
          value={query}
          id="searchInput"
        />
      </div>
      { results.length > 0 && (
        <>
          <PostGrid posts={morePosts} />
          <div className="container">
            <div className="align-center load-more">
              {((morePosts.length) <= results.length) && (
                <button className={`button button--primary button--fill`} onClick={(event) => loadMorePosts(event, postsPerPage)}>Load more</button>
              )}
            </div>

            <div className="align-center">
              {morePosts.length} of {results.length} posts
            </div>
          </div>
        </>
      ) }
    </div>
  )
}