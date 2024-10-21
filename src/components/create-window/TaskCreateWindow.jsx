import { useState, useRef, useCallback } from 'react'
import styles from './CreateWindow.module.css'

import { CreateWindowDescriptionInput } from "./window/CreateWindowDescriptionInput";
import { CreateWindowDateInputs } from "./window/CreateWindowDateInputs";
import { CreateWindowButtons } from "./window/CreateWindowButtons";
import { CreateWindowActionButtons } from './window/CreateWindowActionButtons';

export const TaskCreateWindow = (props) => {

    const [ showDateInputs, setShowDateInputs ] = useState(false);
    const [ dateValue, setDateValue ] = useState(new Date());
    const [ timeValue, setTimeValue ] = useState('');

    const closeDateInputsWindow = useCallback(() => {
        setShowDateInputs(!showDateInputs)
    }, [showDateInputs])

    const setNewTimeValue = useCallback((event) => {
        setTimeValue(event.target.value);
    }, [])

    const buttonRef = useRef(null);

    return (
        <div id='forms' className={styles.create_window}>

            <CreateWindowDescriptionInput />  

            <CreateWindowActionButtons buttonRef={buttonRef} closeDateInputsWindow={closeDateInputsWindow}/>

            <CreateWindowDateInputs 
                buttonRef={buttonRef} 
                closeDateInputsWindow={closeDateInputsWindow}
                showDateInputs={showDateInputs}
                dateValue={dateValue}
                setDateValue={setDateValue}
                timeValue={timeValue}
                setNewTimeValue={setNewTimeValue}
            />

            <CreateWindowButtons onWindow={props.onShowCreateWindow} createTask={props.createTask}/>

        </div>
    );
}