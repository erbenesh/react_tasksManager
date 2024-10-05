import { FaChevronDown } from "react-icons/fa";

export const CreateWindowButtons = (props) => {

    return (
        <div className='buttons'>

            <button className='task-add-button project'>
                Проект <FaChevronDown className='project-ico'/>
            </button>

            <div className='event-buttons'>

                <button className='exit-button exit' onClick={() => props.onWindow()}>
                    Отмена
                </button>

                <button type='button' name='task-add-button' id='task-add-button' value='submit'
                        onClick={() => props.createTask()} className='task-add-button'>Добавить задачу
                </button>

            </div>

        </div>
    );
}