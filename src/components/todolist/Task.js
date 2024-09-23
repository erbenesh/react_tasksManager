import React, {Component} from 'react';

import { TiDeleteOutline } from "react-icons/ti";

class Task extends Component {
    render() {
        return (
            <div className="Task">

                <p className='task-description'>{this.props.task.description}</p>
                <div className='date-inline'>
                    <p className='task-date'>{this.props.task.date}</p>
                    <p className='task-date'>{this.props.task.time}</p>
                </div>
                <button onClick={() => this.props.onDelete(this.props.task.id)} className='task-delete-button'>
                    <TiDeleteOutline className='delete-ico'/></button>

            </div>
        );
    }
}

export default Task;