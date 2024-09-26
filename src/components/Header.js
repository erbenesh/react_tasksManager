import React, {useRef} from 'react';
import { BsLayoutSidebar } from "react-icons/bs";
import { VscSettings } from "react-icons/vsc";

import {AppsList} from "./AppsList";

export const Header = (props) => {

    const buttonRef = useRef(null);

    return (
        <header>
            <div className='header-nav'>
                <button className='menu-button' onClick={() => props.onShowNav()}
                        style={props.showNav === true ? {} : {marginLeft: 1 + '%'}}>
                    <BsLayoutSidebar className='sidebar-menu-ico' /></button>
                {/*            <span className='search-input'>
                <input type="search" placeholder='Быстрый поиск'/>
            </span>*/}
                <button ref={buttonRef} className='apps-button' onClick={() => props.onShowAppsList()}>
                    <VscSettings className='apps-ico'/></button>
                <AppsList setAppId={props.setAppId} showAppsList={props.showAppsList}
                          isClickOutside={props.isClickOutside} buttonRef={buttonRef}/>
            </div>
        </header>
    );
}