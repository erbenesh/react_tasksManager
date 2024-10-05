import React, {useRef} from 'react';

import { FaTasks } from "react-icons/fa";
import { BsKanban } from "react-icons/bs";
import { BsCalendar3 } from "react-icons/bs";
import {useClickOutsideWithButton} from "./hooks/useClickOutside";

export const AppsList = (props) => {

    const menuRef = useRef(null);
    useClickOutsideWithButton(menuRef, () => props.isClickOutside(),
                                            props.showAppsList,
                                            props.buttonRef);

    return (
        <div ref={menuRef} className="apps-list"
             style={props.showAppsList === true? {}
                 : {transform: 'translateY(-70px) scaleY(0%)', color: 'transparent'}
             }>

            <h4>Отображение</h4>

            <div className='apps-matrix'>
                <div className='app-box' onClick={() => props.setAppId(0)}>
                    <FaTasks className='apps-icon'/>
                    <p className='app-name'>Список</p>
                </div>

                <div className='app-box' onClick={() => props.setAppId(1)}>
                    <BsKanban className='apps-icon'/>
                    <p className='app-name'>Доска</p>
                </div>

                <div className='app-box' onClick={() => props.setAppId(2)}>
                    <BsCalendar3 className='apps-icon'/>
                    <p className='app-name'>Календарь</p>
                </div>

            </div>
        </div>
    );
}