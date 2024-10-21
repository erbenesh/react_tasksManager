import { useRef, useState, useCallback } from 'react'

import styles from './Task.module.css'

import { FiEdit3 } from "react-icons/fi";
import { PiDotsThreeOutlineLight } from "react-icons/pi";
import { ActionButtonsListWindow } from './ActionButtonsListWindow';
import { CurrentTaskWindow } from './current-task-window/CurrentTaskWindow';
import { TaskRadioButton } from './TaskRadioButton';
import { TaskTitle } from './TaskTitle';
import { TaskDescription } from './TaskDescription';

export const Task = (props) => {

    let date = new Date(props.task.date).toLocaleDateString();
    let month = Number(date.slice(3,5));
    let isTaskOverdue = new Date(props.task.date + 'T' + props.task.time).getTime() < new Date().getTime();
    const buttonRef = useRef(null);

    const [ showActionButtons, setShowActionButtons ] = useState(false);
    const [ showActionListWindow, setShowActionListWindow ] = useState(false);
    const [ showCurrentTaskWindow, setShowCurrentTaskWindow ] = useState(false);

    const onShowActionListWindow = useCallback(() => {
        setShowActionListWindow(!showActionListWindow);
    }, [showActionListWindow]);

    const isClickOutsideActionList = useCallback(() => {
        setShowActionListWindow(false);
    }, [setShowActionListWindow]);

    const closeCurrentTaskWindow = useCallback(() => {
        setShowCurrentTaskWindow(false)
    }, [setShowCurrentTaskWindow])

    // const dragOverHandler = (e) => {
    //     e.preventDefault();
    //     if (e.target.className === 'task') {
    //         e.target.style.boxShadow = '0 2px 3px gray'
    //     }
    // }

    // const dragLeaveHandler = (e) => {
    //     e.target.style.boxShadow = 'none'
    // }

    // const dragStartHandler = (e, chapter, task) => {
        
    // }

    // const dragEndHandler = (e) => {
    //     e.target.style.boxShadow = 'none'
    // }

    // const dropHandler = (e, chapter, task) => {
    //     e.preventDefault();
    // }

    return (
        <div 
        // draggable={true} 
        // onDragOver={(e) => dragOverHandler(e)}
        // onDragLeave={e => dragLeaveHandler(e)}
        // onDragStart={(e) => dragStartHandler(e, chapter, task)}
        // onDragEnd={(e) => dragEndHandler(e)}
        // onDrop={(e) => dropHandler(e, chapter, task)}

        className={styles.task} onMouseOver={() => setShowActionButtons(true)} 
        onMouseOut={() => setShowActionButtons(false)}
        >

            <div className={styles.task_left_block}>

                <TaskRadioButton task={props.task} setDoneTask={props.setDoneTask}/>


                <div className={styles.task_info} onClick={() => setShowCurrentTaskWindow(true)}>

                    <TaskTitle task={props.task}/>

                    <TaskDescription task={props.task} showCurrentTaskWindow={showCurrentTaskWindow}/>

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

            </div>

            <div className={showActionButtons ? styles.action_buttons_show : styles.action_buttons}>
                <button type='button'>
                    <FiEdit3 className={styles.dots_ico}/>
                </button>

                <button ref={buttonRef} type='button' onClick={() => onShowActionListWindow()}>
                    <PiDotsThreeOutlineLight className={styles.dots_ico}/>
                </button>
            </div>

            {showActionListWindow && <ActionButtonsListWindow buttonRef={buttonRef} showActionListWindow={showActionListWindow}
                                                             isClickOutsideActionList={isClickOutsideActionList} deleteTask={props.deleteTask} task={props.task}/>}

            {showCurrentTaskWindow && <CurrentTaskWindow task={props.task} setDoneTask={props.setDoneTask} closeCurrentTaskWindow={closeCurrentTaskWindow} 
                                                        showCurrentTaskWindow={showCurrentTaskWindow}/>}
        </div>
    );
}