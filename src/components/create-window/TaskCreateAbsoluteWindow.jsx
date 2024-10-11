import { useRef } from "react";

import styles from './CreateWindow.module.css'

import { useClickOutside } from "./../../hooks/useClickOutside";

import { CreateWindowDescriptionInput } from "./window/CreateWindowDescriptionInput";
import { CreateWindowDateInputs } from "./window/CreateWindowDateInputs";
import { CreateWindowButtons } from "./window/CreateWindowButtons";


export const TaskCreateAbsoluteWindow = (props) => {

    const windowRef = useRef(null);
    useClickOutside(windowRef, () => props.isClickOutsideCreateWindow(), props.showAbsoluteCreateWindow);

    return (
        <div className={styles.background_window}>

            <div id='forms' className={styles.create_absolute_window} ref={windowRef}>

                <CreateWindowDateInputs />

                <CreateWindowDescriptionInput />  

                <CreateWindowButtons onWindow={props.onShowAbsoluteCreateWindow} createTask={props.createTask}/>

            </div>

        </div>
    );
}