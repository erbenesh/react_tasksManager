import styles from './CurrentTaskWindow.module.css'

import { useRef } from 'react'
import { useClickOutside } from '../../../../hooks/useClickOutside';

import { TaskRadioButton } from '../TaskRadioButton';
import { TaskTitle } from '../TaskTitle';
import { TaskDescription } from '../TaskDescription';

import { CgChevronDown } from "react-icons/cg";
import { CgChevronUp } from "react-icons/cg";
import { CgClose } from "react-icons/cg";
import { PiDotsThreeOutlineLight } from "react-icons/pi";
import { AiOutlinePlus } from "react-icons/ai";

export const CurrentTaskWindow = (props) => {

    const windowRef = useRef(null);
    useClickOutside(windowRef, () => props.closeCurrentTaskWindow(), props.showCurrentTaskWindow);

    return (
        <div className={styles.task_window_bg}>

            <div ref={windowRef} className={styles.task_window}>

                <div className={styles.task_toolbar}>

                    <button className={styles.project_button} type='button'>
                        Входящие
                    </button>

                    <div className={styles.task_window__action_buttons}>
                        <button className={styles.action_buttons}>
                            <CgChevronUp className={styles.action_buttons_ico}/>
                        </button>
                        
                        <button className={styles.action_buttons}>
                            <CgChevronDown className={styles.action_buttons_ico}/>
                        </button>
                        
                        <button className={styles.action_buttons}>
                            <PiDotsThreeOutlineLight className={styles.action_buttons_ico}/>
                        </button>
                        
                        <button className={styles.action_buttons}>
                            <CgClose className={styles.action_buttons_ico} onClick={() => props.closeCurrentTaskWindow(false)}/>
                        </button>
                    </div>

                </div>

                <div className={styles.task_container}>

                    <div className={styles.task_radio_button}>

                        <TaskRadioButton task={props.task} setDoneTask={props.setDoneTask}/>

                    </div>
                    
                    <div className={styles.task_info}>

                        <div className={styles.task_card}>
                            
                            <div className={styles.task_card__info}>
                                <TaskTitle task={props.task}/>
                                <TaskDescription task={props.task} showCurrentTaskWindow={props.showCurrentTaskWindow}/>
                                <br/>
                                <button className={styles.add_subtask_button}>
                                    <AiOutlinePlus className={styles.add_subtask_ico}/>
                                    Добавить подзадачу
                                </button>
                            </div>
                        </div>

                        <div className={styles.task_comments_list}>
                            Комментарии
                        </div>

                    </div>

                    <div className={styles.right_sidebar}>
                        <p>Проект</p>
                        <button>Входящие</button>
                    </div>

                </div>

            </div>
        </div>
    )
}