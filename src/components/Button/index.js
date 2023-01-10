import React from 'react'
import classNames from 'classnames/bind'
import styles from './Button.module.scss'
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
const Button = ({  
      to,
       href, 
      primary= false,
      outline= false,
       small= false, 
      text= false,  
      large = false, 
      rounded = false ,
      children ,
      disabled = false ,
      className,
      leftIcon,
      rightIcon,
      onClick,
      ...passProps 
    }) => {
    let Comp = 'button';
    let classes = cx('wrapper');
    const props = {
         onClick,
         ...passProps
    }
    if( to ) {
         props.to = to; 
         Comp = Link;
    }else if (href) {
         props.href = href;
         Comp = 'a'
    }
    if( disabled) {
         delete props.onClick;
    }
    classes = cx('wrapper', {
         primary,
         outline,
         small,
         large,
         text,
         disabled,
         [className]  : className,
        rounded
    })
  return (
    <Comp className = { classes }  {...props} >  
    { leftIcon && <span className={cx('icon')}>{ leftIcon }</span>}
            <span className={ cx('title')}>{ children} </span>
    { rightIcon && <span className={cx('icon')}>{ rightIcon }</span>}
    </Comp>
  )
}

export default Button