import React from 'react'
import styles from './AccountItem.module.scss'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx  = classNames.bind(styles);
const AccountItem = () => {
  return (
     <div className={cx('wrapper')}>
          <img className={cx('avatar')} src="https://icdn.24h.com.vn/upload/1-2023/images/2023-01-04/Ve-dep-dien-dao-chung-sinh-cua-co-gai-sinh-nam-1999-lot-top-guong-mat-dep-nhat-the-gioi-57068584_2351143488502839_871658938696715268_n-1672812988-819-width1080height1080.jpg" alt="girl_xinh" />
            <div className={ cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className={cx('check')} icon = { faCheckCircle } />
                </h4>
                <span className={cx('username')}>nguyenvana</span>
            </div>
     </div>
  )
}

export default AccountItem