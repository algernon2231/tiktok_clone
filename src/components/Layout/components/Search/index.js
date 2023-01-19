import React, { useState, useEffect, useRef  } from 'react'
import HeadlessTippy from '@tippyjs/react/headless';
import AccountItem from '../../../SearchAccount'; 
import { Wrapper as PopperWrapper } from '../Popper';
import styles from './Search.module.scss';
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'


const cx = classNames.bind(styles);

const Search = () => {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
   const[loading, setLoading] = useState(false);
    const inputRef = useRef();
    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
        if(!searchValue.trim()) {
            setSearchResult([]);
            return ;
        } 
        setLoading(true);
       fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchValue)}&type=less`, { signal : signal })
       .then( res => res.json())
       .then(res => {
            setSearchResult(res.data);
            setLoading(false);
       })
       .catch(() => {
        setLoading(false);
       })
       return () => {
           controller.abort();
       }
    }, [searchValue])
    const handleClear = () => {
        setSearchValue('');
         inputRef.current.focus();
         setSearchResult([]);
    }
    const handleHideResult = () => {
            setShowResult(false);
    }
  return (
      < HeadlessTippy
          interactive={true}
          visible={ showResult && searchResult.length > 0}
          render={attrs => (
              <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                  <PopperWrapper>
                      <h4 className={cx('search-title')}>
                          Accounts
                      </h4>
                      { searchResult.map( result => (
                             <AccountItem key = {result.id} data = { result } />
                      ))}
                     
                  </PopperWrapper>
              </div>
          )}
          onClickOutside = { handleHideResult }
      >
          <div className={cx('search')}>
              <input  
                type="text"
                ref = { inputRef }
                value = { searchValue }
                 placeholder='Search accounts and videos'
                spellCheck={false}
                onChange = { (e) => setSearchValue(e.target.value)}
                onFocus = { () =>setShowResult(true)}
                />
             { !!searchValue && !loading  && (
                  <button className={cx('clear')} onClick= {handleClear }>
                  <FontAwesomeIcon icon={faCircleXmark} />
              </button>   
             ) }
               { loading &&  <div className={cx('loading')}>
                  <FontAwesomeIcon icon={faSpinner} />
              </div> }
              <button className={cx('search-btn')}>
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
          </div>
      </HeadlessTippy>
  )
}
export default Search