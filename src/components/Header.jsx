import {useRef, useState} from 'react';
import { BsLayoutSidebar } from "react-icons/bs";
import { VscSettings } from "react-icons/vsc";

import {AppsList} from "./AppsList";

export const Header = (props) => {

    const [showAppsList, setShowAppsList] = useState(false);

    function onShowAppsList() {
        setShowAppsList(!showAppsList);
    }

    function isClickOutside() {
        setShowAppsList(false);
    }


    const buttonRef = useRef(null);

    return (
        <header>
            <div className='header-nav'>

                <button className='menu-button' onClick={() => props.onShowNav()}
                        style={props.showNav === true ? {} : {marginLeft: 1 + '%'}}>

                    <BsLayoutSidebar className='sidebar-menu-ico' />

                </button>

                <button ref={buttonRef} className='apps-button'
                        onClick={() => onShowAppsList()}>

                    <VscSettings className='apps-ico'/><p>Отображение</p>

                </button>

                <AppsList setAppId={props.setAppId} showAppsList={showAppsList}
                          isClickOutside={isClickOutside} buttonRef={buttonRef}/>

            </div>
        </header>
    );
}