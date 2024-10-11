import styles from './TasksList.module.css'

import {Task} from "./Task";

export const TasksList = (props) => {

    if ((props.currentCategory === 'incomingTasks' && props.incomingTasks.array.length === 0) ||
        (props.currentCategory === 'todayTasks' && props.todayTasks.array.length === 0) ||
        (props.currentCategory === 'sevenDaysTasks' && props.sevenDaysTasks.array.length === 0) ||
        (props.currentCategory === 'overdue' && props.overdue.array.length === 0)) {
        if (props.showCreateWindow === false){
            return (
                <div className={styles.tasks_empty}>
                    <img src={'./images/tasks-empty.svg'} alt="sdfsdf"/>
                    <h2>Ваше спокойствие бесценно</h2>
                    <p>Отличная работа! Все ваши задачи организованы как надо.</p>
                </div>
            )
        }
        return (
            <div className={styles.tasks_empty}>

            </div>
        )
    }

    const renderTask = (el) => (<Task key={el.id} task={el} deleteTask={props.deleteTask} setDoneTask={props.setDoneTask}/>)

    const currentArray = () => {
        if (props.currentCategory === 'incomingTasks') {
            return props.incomingTasks.array
        } else if (props.currentCategory === 'todayTasks'){
            return props.todayTasks.array
        } else if (props.currentCategory === 'sevenDaysTasks'){
            return props.sevenDaysTasks.array
        } else if (props.currentCategory === 'overdue'){
            return props.overdue.array
        } else {
            return []
        }
    }

    return (
        <div>
            {currentArray().map(el => renderTask(el))}
        </div>
    )
}