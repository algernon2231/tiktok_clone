import React, { useState } from 'react'
import styles from './Menu.module.scss'
import classNames from 'classnames/bind'
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '../../Popper'
import 'tippy.js/dist/tippy.css';
import MenuItem from './MenuItem';
import Header from './Header';


const cx = classNames.bind(styles);

const defaultFn = () => { }

const Menu = ({ children, items = [], hideOnClick = false, onChange = defaultFn }) => {

    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    const renderItems = () => {
        return current && current.data.map((item, index) => {
            return <MenuItem key={index} data={item} onClick={() => {
                if (!!item.children) {
                    setHistory(prev => [...prev, item.children])
                } else {
                    onChange(item);
                }
            }} />
        })
    }
    return (
        <Tippy
            interactive={true}
            delay={[0, 700]}
            offset={[12, 8]}
            hideOnClick={hideOnClick}
            //  visible
            //   animation = { false }
            placement='bottom-end'
            render={attrs => (
                <div className={cx('content')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        {history.length > 1 && <Header title="Language" onBack={() => setHistory(prev => prev.slice(0, history.length - 1))} />}
                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}
            onHide={() => setHistory(prev => prev.slice(0, 1))}
        >
            {children}
        </Tippy>
    )
}

export default Menu