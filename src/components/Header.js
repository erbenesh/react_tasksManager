import React, {useRef} from 'react';
import { IoMenu } from "react-icons/io5";
import { IoIosApps } from "react-icons/io";

import AppsList from "./AppsList";

function Header (props) {

    const buttonRef = useRef(null);

    return (
        <header>
            <button className='menu-button' onClick={() => props.onShowNav()}><IoMenu className='menu-ico'/></button>
            <span className='search-input'>
                <input type="search" placeholder='Быстрый поиск'/>
            </span>
            <button ref={buttonRef} className='apps-button' onClick={() => props.onShowAppsList()}><IoIosApps className='apps-ico'/></button>
            <AppsList setAppId={props.setAppId} showAppsList={props.showAppsList} isClickOutside={props.isClickOutside} buttonRef={buttonRef}/>
        </header>
    );
}

export default Header;