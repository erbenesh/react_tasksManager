import styles from './CreateWindow.module.css'

import { CreateWindowDescriptionInput } from "./window/CreateWindowDescriptionInput";
import { CreateWindowDateInputs } from "./window/CreateWindowDateInputs";
import { CreateWindowButtons } from "./window/CreateWindowButtons";

export const TaskCreateWindow = (props) => {
    return (
        <div id='forms' className={styles.create_window}>

            <CreateWindowDateInputs />

            <CreateWindowDescriptionInput />  

            <CreateWindowButtons onWindow={props.onShowCreateWindow} createTask={props.createTask}/>

        </div>
    );
}