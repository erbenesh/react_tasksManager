import { useRef, useState, useCallback} from "react";

import styles from './CreateWindow.module.css'

import { useClickOutside } from "./../../hooks/useClickOutside";

import { CreateWindowDescriptionInput } from "./window/CreateWindowDescriptionInput";
import { CreateWindowDateInputs } from "./window/CreateWindowDateInputs";
import { CreateWindowButtons } from "./window/CreateWindowButtons";
import { CreateWindowActionButtons } from './window/CreateWindowActionButtons';


export const TaskCreateAbsoluteWindow = (props) => {

    const windowRef = useRef(null);
    useClickOutside(windowRef, () => props.isClickOutsideCreateWindow(), props.showAbsoluteCreateWindow);

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
        <div className={styles.background_window}>

            <div id='forms' className={styles.create_absolute_window} ref={windowRef}>

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

        </div>
    );
}