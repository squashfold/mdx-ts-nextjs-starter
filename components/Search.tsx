import { useCallback, useRef, useState, useEffect } from 'react'
import Fuse from 'fuse.js'

import PostGrid from './PostGrid'
import SearchStyles from '../styles/modules/Search.module.scss';

export default function Search() {
  
  const postsPerPage = 6; // Set how many posts should load on button click
  const defaultPostsCount = postsPerPage; // Set how many posts load by default

  const defaultPosts = require('../cache/data').posts;
  
  const searchRef = useRef<HTMLInputElement>(null)
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<any[]>(defaultPosts)
  const [loaded, setLoaded] = useState<boolean>(false)
  const [morePosts, setMorePosts] = useState(results.slice(0, defaultPostsCount));

  const fuse = new Fuse(defaultPosts, {keys: ['title', 'tags', 'description']})

  const getResults = (query: string) => {

    if (query.length) {
      const fuzzySearch = fuse.search(query);
      setResults(fuzzySearch)
      setMorePosts(fuzzySearch.slice(0, defaultPostsCount))
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

  const loadMorePosts = (event: any, toShow: number) => {
    let postsToShow = morePosts.length + toShow;
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