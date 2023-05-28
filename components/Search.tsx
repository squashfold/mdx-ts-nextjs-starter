import { useCallback, useRef, useState, useEffect } from 'react'

import PostGrid from './PostGrid'
import LoadMoreButton from '../components/LoadMoreButton';
import SearchStyles from '../styles/modules/Search.module.scss';
import Config from "../app.config"

export default function Search() {
  
  const postsPerPage = Config.postsPerPage; // Set how many posts should load on button click
  const defaultPostsCount = postsPerPage; // Set how many posts load by default

  const defaultPosts = require('../cache/data').posts;
  
  const searchRef = useRef<HTMLInputElement>(null)
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<any[]>(defaultPosts)
  const [loaded, setLoaded] = useState<boolean>(false)
  const [morePosts, setMorePosts] = useState(results.slice(0, defaultPostsCount));

  const searchEndpoint = (query: string) => `/api/search?q=${query}`

  const getResults = (query: string) => {

    if (query.length) {
      fetch(searchEndpoint(query))
        .then(res => res.json())
        .then(res => {
          setResults(res.results)
          setMorePosts(res.results.slice(0, defaultPostsCount))
          setLoaded(true)
        })
    } else {
      setResults(defaultPosts)
      setMorePosts(defaultPosts.slice(0, defaultPostsCount))
    }
      setLoaded(true)
  }

  const onChange = useCallback((event) => {
    const query = event.target.value;
    setQuery(query)
    getResults(query)
  }, [])

  useEffect(() => {
    if (!loaded) {
      setLoaded(true)
    }
  }, [loaded]);

  const loadMorePosts = (event: any) => {
    let postsToShow = morePosts.length + postsPerPage;
    setMorePosts(results.slice(0, postsToShow))
  
    if (results.length <= postsToShow) {
      event.target?.classList.add("hidden");
    }
  }

  return (
    <div ref={searchRef}>
      <div className={`${SearchStyles['search']} container`}>
        <label htmlFor="searchInput">Filter:</label>
        <input
          onChange={onChange}
          placeholder='Search posts'
          type='text'
          value={query}
          id="searchInput"
          className={`${SearchStyles['search__input']}`}
        />
      </div>
      { results.length > 0 && (
        <>
          <PostGrid posts={morePosts} key={'item'} loading={!loaded} />
          <LoadMoreButton postsVisible={morePosts.length} totalPosts={results.length} loadMorePosts={loadMorePosts} />
        </>
      ) }
    </div>
  )
}