import React, {useRef} from 'react';

import { FaTasks } from "react-icons/fa";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { FaRegNoteSticky } from "react-icons/fa6";
import { PiKanban } from "react-icons/pi";
import {useClickOutside} from "../App";

function AppsList(props) {

    const menuRef = useRef(null);
    useClickOutside(menuRef, () => props.isClickOutside(), props.showAppsList, props.buttonRef);

        return (
            <div ref={menuRef} className="apps-list" style={props.showAppsList === true? {} : {transform: 'translateY(-128px) scaleY(0%)', color: 'transparent'}}>
                <h4>Приложения</h4>
                <div className='apps-matrix'>
                    <div className='app-box' onClick={() => props.setAppId(0)}>
                        <FaTasks className='apps-icon'/>
                        <p className='app-name'>Задачи</p>
                    </div>

                    <div className='app-box' onClick={() => props.setAppId(1)}>
                        <FaMoneyCheckDollar className='apps-icon'/>
                        <p className='app-name'>Бюджет</p>
                    </div>

                    <div className='app-box' onClick={() => props.setAppId(2)}>
                        <FaRegNoteSticky className='apps-icon'/>
                        <p className='app-name'>Заметки</p>
                    </div>

                    <div className='app-box' onClick={() => props.setAppId(3)}>
                        <PiKanban className='apps-icon'/>
                        <p className='app-name'>Канбан</p>
                    </div>

                </div>
            </div>
        );
}

export default AppsList;