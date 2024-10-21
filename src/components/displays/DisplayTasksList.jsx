import { useState } from 'react'
import styles from './DisplayTasksList.module.css'

import { DisplayTitle } from "./DisplayTitle";
import { TasksList } from "./tasklist/TasksList";
import { TaskCreateWindow } from "../create-window/TaskCreateWindow";

import {AiOutlinePlus} from "react-icons/ai";

export const DisplayTasksList = (props) => {

    const [ showAddChapterButton, setShowAddChapterButton] = useState(false);

    return (
        <div className={styles.tasks_list}>

            <DisplayTitle currentCategory={props.currentCategory}/>

            <TasksList 
                setDoneTask={props.setDoneTask}
                currentCategory={props.currentCategory}
                incomingTasks={props.incomingTasks}
                todayTasks={props.todayTasks}
                sevenDaysTasks={props.sevenDaysTasks}
                overdue={props.overdue}
                showCreateWindow={props.showCreateWindow}
                deleteTask={props.deleteTask}

            />

            {
                props.showCreateWindow === false ? 
                <button className={styles.tasks_add_button} onClick={() => {props.onShowCreateWindow()}}>
                    <AiOutlinePlus className={styles.edit_ico}/>
                    Добавить задачу
                </button>
                : <TaskCreateWindow onShowCreateWindow={props.onShowCreateWindow} createTask={props.createTask}/>
            }

            <div onMouseOver={() => setShowAddChapterButton(true)} onMouseOut={() => setShowAddChapterButton(false)}>

                <button className={showAddChapterButton ? styles.add_chapter_button_show : styles.add_chapter_button}>
                    Добавить раздел
                </button>

            </div>

        </div>
    );
}