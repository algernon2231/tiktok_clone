import React, { forwardRef, useState  } from 'react'
import images from '../../assets/images';
import styles from './Image.module.scss'
import classNames from 'classnames'

const Image = ( { src, alt, className,...props}, ref ) => {
  const [fallback, setFallback] = useState('');
  const handleError = () => {
     setFallback(images.noImage);
  }
  // eslint-disable-next-line jsx-a11y/alt-text
    return <img className= { classNames(styles.wrapper, className)} {...props} ref = { ref } src= { fallback || src } alt = { alt } onError = {handleError} />
}

export default forwardRef(Image);