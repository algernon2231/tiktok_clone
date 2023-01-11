import React from 'react'
import Button from '../../../../Button'
import classNames from 'classnames/bind'
import styles from './Menu.module.scss'
const cx = classNames.bind(styles);

const MenuItem = ({ data, onClick   }) => {
  let classes = cx('menu-item', {
    'subMenu-item': data.code
  })
  return (
    <Button className={ classes } leftIcon={data.icon} to={data.to} onClick = { onClick }>{data.title}</Button>
  )
}

export default MenuItem