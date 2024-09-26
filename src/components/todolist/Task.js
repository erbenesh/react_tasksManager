
import { IoIosRadioButtonOff } from "react-icons/io";
import { IoIosRadioButtonOn } from "react-icons/io";

import {todayFormatted} from "./TasksManager";
import {useState} from "react";

export const Task = (props) => {

    let isTaskOverdue = new Date(props.task.date + 'T' + props.task.time).getTime() < new Date(todayFormatted).getTime();
    const [checked, setChecked] = useState(props.task.isTaskDone);

    const getTaskCheckRadio = () => {

        if (props.task.isTaskDone) {
            return <IoIosRadioButtonOn className='task-radio-ico' onClick={() => props.setDoneTask(props.task.id, setChecked)}/>
        } else {
            return <IoIosRadioButtonOff className='task-radio-ico' onClick={() => props.setDoneTask(props.task.id, setChecked)}/>
        }
    }

    return (
        <div className="Task" >
            {getTaskCheckRadio()}
            <div className='task-info'>
                <p className='task-description'>{props.task.description}</p>
                <div className='date-inline'>
                    <p className='task-date'
                       style={isTaskOverdue === true ? {color: '#985c5c'} : {}}>{props.task.time}</p>
                    <p className='task-date'
                       style={isTaskOverdue === true ? {color: '#985c5c'} : {}}>{new Date(props.task.date).toLocaleDateString()}</p>
                </div>

            </div>
        </div>
    );
}