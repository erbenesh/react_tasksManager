import { CreateWindowDescriptionInput } from "./createWindow/CreateWindowDescriptionInput";
import { CreateWindowDateInputs } from "./createWindow/CreateWindowDateInputs";
import { CreateWindowButtons } from "./createWindow/CreateWindowButtons";

export const TaskCreateWindow = (props) => {
    return (
        <div id='forms' className='create-window'>

            <CreateWindowDateInputs />

            <CreateWindowDescriptionInput />  

            <CreateWindowButtons onWindow={props.onShowCreateWindow} createTask={props.createTask}/>

        </div>
    );
}