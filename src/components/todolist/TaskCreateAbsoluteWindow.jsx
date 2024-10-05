import { useRef } from "react";

import { useClickOutside } from "../hooks/useClickOutside";

import { CreateWindowDescriptionInput } from "./createWindow/CreateWindowDescriptionInput";
import { CreateWindowDateInputs } from "./createWindow/CreateWindowDateInputs";
import { CreateWindowButtons } from "./createWindow/CreateWindowButtons";


export const TaskCreateAbsoluteWindow = (props) => {

    const windowRef = useRef(null);
    useClickOutside(windowRef, () => props.isClickOutsideCreateWindow(), props.showAbsoluteCreateWindow);

    return (
        <div className='background-window'>

            <div id='forms' className='create-absolute-window' ref={windowRef}>

                <CreateWindowDateInputs />

                <CreateWindowDescriptionInput />  

                <CreateWindowButtons onWindow={props.onShowAbsoluteCreateWindow} createTask={props.createTask}/>

            </div>

        </div>
    );
}