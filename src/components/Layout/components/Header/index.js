import React from 'react'
import styles from './Header.module.scss'
import classNames from 'classnames/bind'
import images from '../../../../assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical, faEarthAsia, faCircleQuestion, faKeyboard, faUser, faCoins, faGear, faSignOut } from '@fortawesome/free-solid-svg-icons'

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import Button from '../../../Button';
import Menu from '../Popper/Menu';
import { MessageIcon, PlusIcon, TinnhanIcon } from '../../../Icons';
import Image from '../../../Image';
import Search from '../Search';
import { Link } from 'react-router-dom';
import routesConfig from '../../../../config/routes';

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: 'English',
    children: {
      title: 'Language',
      data: [
        { type: 'language', code: 'en', title: 'English' },
        { type: 'language', code: 'vn', title: 'Vietnam' },
      ]
    }
  },
  { icon: <FontAwesomeIcon icon={faCircleQuestion} />, title: 'Feedback and help', to: '/feedback' },
  { icon: <FontAwesomeIcon icon={faKeyboard} />, title: 'Keyboard shortcuts' }

]
const cx = classNames.bind(styles);
const Header = () => {

  const currentUser = true;

  const handleOnChange = (menuItem) => {
    console.log(menuItem);
  }
  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: 'View profile',
      to: '/feedback'
    },
    {
      icon: <FontAwesomeIcon icon={faCoins} />,
      title: 'Get coins',
      to: '/feedback'
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: 'Setting',
      to: '/feedback'
    },
    ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faSignOut} />,
      title: 'Sign out',
      to: '/feedback',
      seperate: true
    }


  ]
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <Link to={routesConfig.home} className={cx('logo-link')}>
            <img src={images.logo} alt="TiktokLogo" />
          </Link>
        </div>

        {/* Search */}

        <Search />

        <div className={cx('actions')}>
          {currentUser ? (
            <>

              <button className={cx('action-btn', 'icon_upload')}>
                <PlusIcon className={cx('plus_icon')} width="20" height='20' />
                <span className={cx('title_icon')}>Tải lên</span>
              </button>

              <Tippy offset={[16, 12]} delay={[0, 200]} content='Tin nhắn'>
                <button className={cx('action-btn', 'tinnhan_icon')}>
                  <TinnhanIcon />
                </button>
              </Tippy>

              <Tippy offset={[16, 12]} delay={[0, 200]} content='Hộp thư'>
                <button className={cx('action-btn', 'message_icon')}>
                  <MessageIcon />
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button text >Upload</Button>
              <Button primary >Log in</Button>
            </>
          )}
          <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleOnChange} >
            {currentUser ? (
              <Image
                src='https://icdn.24h.com.vn/upload/1-2023/images/2023-01-04/Ve-dep-dien-dao-chung-sinh-cua-co-gai-sinh-nam-1999-lot-top-guong-mat-dep-nhat-the-gioi-57068584_2351143488502839_871658938696715268_n-1672812988-819-width1080height1080.jpg'
                className={cx('user-avatar')}
                alt="user-avatar"
              />
            ) : (
              <button className={cx('more-btn')}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  )
}

export default Header
