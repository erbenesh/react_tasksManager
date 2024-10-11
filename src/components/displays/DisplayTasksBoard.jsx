import { DisplayTitle } from "./DisplayTitle";
import { TasksList } from "./list/TasksList";
import { TaskCreateWindow } from "../create-window/TaskCreateWindow";

import {AiOutlinePlus} from "react-icons/ai";

export const DisplayTasksBoard = (props) => {
    
    return (
        <div className='tasks-list' style={props.showNav === true ? {width: 47 + '%'} : {}}>

            <DisplayTitle currentCategory={props.currentCategory}/>

            <TasksList 
                setDoneTask={props.setDoneTask}
                currentCategory={props.currentCategory}
                incomingTasks={props.incomingTasks}
                todayTasks={props.todayTasks}
                sevenDaysTasks={props.sevenDaysTasks}
                overdue={props.overdue}
                showCreateWindow={props.showCreateWindow}
                tasks={props.tasks}
                deleteTask={props.deleteTask}
            />

            {
                props.showCreateWindow === false ? 
                <button className='tasks-add-button' onClick={() => {props.onShowCreateWindow()}}>
                    <AiOutlinePlus className='edit-ico'/>
                    Добавить задачу
                </button>
                : <TaskCreateWindow onShowCreateWindow={props.onShowCreateWindow} createTask={props.createTask}/>
            }


        </div>
    );
}