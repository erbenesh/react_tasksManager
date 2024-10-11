import { useRef, useState, useCallback } from 'react'

import styles from './Task.module.css'

import { IoIosRadioButtonOff } from "react-icons/io";
import { IoIosRadioButtonOn } from "react-icons/io";
import { FiEdit3 } from "react-icons/fi";
import { PiDotsThreeOutlineLight } from "react-icons/pi";
import { ActionButtonsListWindow } from './ActionButtonsListWindow';

export const Task = (props) => {

    let date = new Date(props.task.date).toLocaleDateString();
    let month = Number(date.slice(3,5));
    let isTaskOverdue = new Date(props.task.date + 'T' + props.task.time).getTime() < new Date().getTime();
    const buttonRef = useRef(null);

    const [showActionListWindow, setShowActionListWindow] = useState(false);

    const  onShowActionListWindow = useCallback(() => {
        setShowActionListWindow(!showActionListWindow);
    }, [showActionListWindow]);

    const isClickOutsideActionList = useCallback(() => {
        setShowActionListWindow(false);
    }, [setShowActionListWindow]);

    return (
        <div className={styles.task}>

            <button className={styles.task_radio_button} onClick={() => props.setDoneTask(props.task)}>            
                {

                    props.task.isTaskDone ?  
                    <IoIosRadioButtonOn className={styles.task_radio_ico} />
                    : <IoIosRadioButtonOff className={styles.task_radio_ico} />

                }
            </button>

            <div className={styles.task_info}>

                <span><p className={styles.task_description} style={props.task.isTaskDone ? {textDecorationLine: "line-through"} : {}}>
                    {props.task.description}
                </p></span>


                <div className={styles.date_and_time}>

                    <span>
                        <p className={styles.task_date}
                        style={isTaskOverdue && !props.task.isTaskDone ? {color: '#985c5c'} : {}}>
                        {
                            date === new Date().toLocaleDateString() ? 
                            'Сегодня' 
                            : date.slice(0,2)
                        }
                            &nbsp;
                            <span>

                                {
                                    date === new Date().toLocaleDateString() ? '' :
                                    month === 1 ? 
                                    'Января'
                                    : month === 2 ?
                                    'Февраля' 
                                    : month === 3 ?
                                    'Марта' 
                                    : month === 4 ?
                                    'Апреля' 
                                    : month === 5 ?
                                    'Мая' 
                                    : month === 6 ?
                                    'Июня' 
                                    : month === 7 ?
                                    'Июля' 
                                    : month === 8 ?
                                    'Августа' 
                                    : month === 9 ?
                                    'Сентября' 
                                    : month === 10 ?
                                    'Октября' 
                                    : month === 11 ?
                                    'Ноября' 
                                    : month === 12 ?
                                    'Декабря' 
                                    : 'Неизвестный месяц'
                                }

                            </span>
                    
                        </p>
                    </span>

                    <span><p className={styles.task_date}
                        style={isTaskOverdue && !props.task.isTaskDone ? {color: '#985c5c'} : {}}>
                        {props.task.time}
                    </p></span>

                </div>

            </div>

            <div className={styles.action_buttons}>
                <button type='button'>
                    <FiEdit3 className={styles.dots_ico}/>
                </button>

                <button ref={buttonRef} type='button' onClick={() => onShowActionListWindow()}>
                    <PiDotsThreeOutlineLight className={styles.dots_ico}/>
                </button>
            </div>

            {showActionListWindow && <ActionButtonsListWindow buttonRef={buttonRef} showActionListWindow={showActionListWindow}
                                                             isClickOutsideActionList={isClickOutsideActionList} deleteTask={props.deleteTask} task={props.task}/>}

        </div>
    );
}