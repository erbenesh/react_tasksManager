import {useRef} from 'react';

import styles from './ChooseDisplayWindow.module.css'

import Switch from '@mui/material/Switch';

import { useClickOutsideWithButton } from '../hooks/useClickOutside';

import { FaTasks } from "react-icons/fa";
import { BsKanban } from "react-icons/bs";
import { BsCalendar3 } from "react-icons/bs";
import { GoCheckCircle } from "react-icons/go";

export const ChooseDisplayWindow = (props) => {

    const menuRef = useRef(null);
    useClickOutsideWithButton(menuRef, () => props.isClickOutside(),
                                            props.showDisplayTasks,
                                            props.buttonRef);

    return (
        <div ref={menuRef} className={styles.background_displays_window} style={props.showDisplayTasks === true? {}
                                                                        : {transform: 'translateY(-50px) scaleY(0%)', color: 'transparent'}}>

            <div className={styles.displays_list}>

                <h4>Отображение</h4>

                <div className={styles.displays_matrix}>
                    <button className={styles.display_box} onClick={() => props.setDisplayID(0)}>
                        <FaTasks className={styles.displays_icon}/>
                        <p className={styles.display_name}>Список</p>
                    </button>

                    <button className={styles.display_box} onClick={() => props.setDisplayID(1)}>
                        <BsKanban className={styles.displays_icon}/>
                        <p className={styles.display_name}>Доска</p>
                    </button>

                    <button className={styles.display_box} onClick={() => props.setDisplayID(2)}>
                        <BsCalendar3 className={styles.displays_icon}/>
                        <p className={styles.display_name}>Календарь</p>
                    </button>

                </div>

            </div>

            <div className={styles.display_show_completed_task}>

                <button className={styles.show_completed_task_button} onClick={() => props.setIsShowCompletedTasks(!props.isShowCompletedTasks)}>

                    <GoCheckCircle className={styles.completed_icon}/>
                    <span className={styles.span_p}>Выполненные задачи</span>
                    <Switch checked={props.isShowCompletedTasks} style={{width: 'auto', pointerEvents: 'none'}} size="small"/>

                </button>

            </div>

        </div>
    );
}