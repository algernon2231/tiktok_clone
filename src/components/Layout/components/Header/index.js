import React, { useState, useEffect  } from 'react'
import styles from  './Header.module.scss'
import classNames from 'classnames/bind'
import images from '../../../../assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faSpinner, faMagnifyingGlass, faSignIn  } from '@fortawesome/free-solid-svg-icons'
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; 
import { Wrapper as PopperWrapper  } from '../Popper';
import AccountItem from '../../../SearchAccount';
import Button from '../../../Button';

const cx = classNames.bind(styles);
const Header = () => {

  const [searchResult, setSearchResult] = useState([]);

  useEffect( () => {  
      const timeOut = setTimeout( () => {
            setSearchResult([]);
      },0);
      return () => {
          clearTimeout(timeOut);
      }
  },[])
  return (
      <header className= { cx('wrapper')}>
          <div className={ cx('inner')}>
            <div className= { cx('logo')}>
                  <img src={ images.logo} alt="TiktokLogo" />
            </div>
                <Tippy
                  interactive = { true }
                  visible = { searchResult.length > 0 }
                  render={attrs =>(
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                 <h4 className={ cx('search-title')}>
                                    Accounts 
                                 </h4>
                                 <AccountItem/>
                                 <AccountItem/>
                                 <AccountItem/>
                                 <AccountItem/>
                                 <AccountItem/>
                            </PopperWrapper>
                          </div>
                  )}  
                >
            <div className={ cx('search')}>
                <input type="text" placeholder='Search accounts and videos' spellCheck={false} />
                <button className={ cx('clear')}>
                    <FontAwesomeIcon icon = { faCircleXmark } />
                </button>
                <div className={ cx('loading')}>
                    <FontAwesomeIcon icon = { faSpinner } />
                </div>
                  <button className={cx('search-btn')}>
                    <FontAwesomeIcon icon = { faMagnifyingGlass } />
                  </button>
            </div>
        </Tippy> 
            <div className={cx('actions')}>
                <Button text >Upload</Button>
                {/* <Button primary rightIcon={<FontAwesomeIcon icon={faSignIn} />  } >Log in</Button> */}
                <Button primary >Log in</Button>
            </div>
          </div>
      </header>
  )
}

export default Header