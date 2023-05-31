import { useCallback, useRef, useState, useEffect } from 'react'

import PostGrid from './PostGrid'
import LoadMoreButton from './LoadMoreButton';
import TagsFilter from './TagsFilter';
import SearchStyles from '../styles/modules/Search.module.scss';
import Config from "../app.config"

export default function Search() {
  
  const postsPerPage = Config.postsPerPage; // Set how many posts should load on button click
  const defaultPostsCount = postsPerPage; // Set how many posts load by default

  const defaultPosts = require('../cache/data').posts;
  
  const searchRef = useRef<HTMLInputElement>(null)
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<any[]>(defaultPosts)
  const [loaded, setLoaded] = useState<boolean>(true)
  const [loadingResults, setLoadingResults] = useState(false);
  const [morePosts, setMorePosts] = useState(results.slice(0, defaultPostsCount));

  const getTags = (newResults: any[]) => {
    return newResults.map(item => {
      const container = item.tags ? item.tags : item.item.tags
      return container
    })
  }

  const [tags, setTags] = useState<any[]>([...new Set(getTags(results).join(",").split(","))]);
  const [tagsFilter, setTagsFilter] = useState<any[]>([]);

  const searchEndpoint = (query: string, tags: string) => `/api/search?q=${query}&tags=${tags}`

  // const getResults = (query: string, tags: string[]) => {
  //   if (loaded) {
  //   setLoaded(false)
  //   if (query.length || tags.length) {
  //       fetch(searchEndpoint(query, encodeURIComponent(JSON.stringify(tags))))
  //         .then(res => res.json())
  //         .then(res => {
  //           setResults(res.results)
  //           setMorePosts(res.results.slice(0, defaultPostsCount))
  //           setLoaded(true)
  //         })
  //     } else {
  //       setResults(defaultPosts)
  //       setMorePosts(defaultPosts.slice(0, defaultPostsCount))
  //       setLoaded(true)
  //     }
  //       console.log(results)
  //       setTags([...new Set(getTags(defaultPosts).join(",").split(","))])
  //   }
  // }

  const getResults = (query: string, tags: string[]) => {
    if (query.length || tags.length) {
      setLoaded(false);
      fetch(searchEndpoint(query, encodeURIComponent(JSON.stringify(tags))))
        .then(res => res.json())
        .then(res => {
          setResults(res.results);
          setMorePosts(res.results.slice(0, defaultPostsCount));
        })
        .catch(error => {
          // Handle the error here, such as displaying an error message or resetting the state
          console.error('Error fetching search results:', error);
          setResults([]);
          setMorePosts([]);
        })
        .finally(() => {
          setLoaded(true);
        });
    } else {
      setResults(defaultPosts);
      setMorePosts(defaultPosts.slice(0, defaultPostsCount));
    }
  };

  const onChange = useCallback((event) => {
    const query = event.target.value;
    setQuery(query)
    getResults(query, tagsFilter)
  }, [getResults, tagsFilter, query])
  
  const loadMorePosts = (event: any) => {
    let postsToShow = morePosts.length + postsPerPage;
    setMorePosts(results.slice(0, postsToShow))
  
    if (results.length <= postsToShow) {
      event.target?.classList.add("hidden");
    }
  }

  const handleTagChange = (isChecked: boolean, value: any) => {
    if(isChecked === true){
      setTagsFilter([...tagsFilter, value]);
    }
    else if(isChecked === false){
      let freshArray = tagsFilter.filter(val => val !== value);
      setTagsFilter([...freshArray]);
    }
  }

  useEffect(() => {
    if (!loadingResults) {
      setLoaded(true);
    }
    getResults(query, tagsFilter);
  }, [query, tagsFilter]);

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
          <div className={`container`}>
            <TagsFilter tags={tags} handleTagChange={handleTagChange} />
          </div>
          <PostGrid posts={morePosts} key={'item'} loading={!loaded} />
          <LoadMoreButton postsVisible={morePosts.length} totalPosts={results.length} loadMorePosts={loadMorePosts} />
        </>
      ) }
    </div>
  )
}