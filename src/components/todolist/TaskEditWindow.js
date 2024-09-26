import { RxCross2 } from "react-icons/rx";

export const TaskEditWindow = (props) => {
    return (
        <div className='edit-window'>
            <div id='forms' className='edit-task'>
                <button className='exit-button' onClick={() => props.onShowItemWindow()}>
                    <RxCross2 className='cancel-ico'/></button>
                <p className='edit-task-p'>Дата : </p>
                <div className='top'>
                    <input id='date' type="date"/>
                    <input id='time' type="time"/>
                </div>

                <p className='edit-task-p'>Описание :</p>
                <div className='bottom'>
                    <textarea name="description" id="description" cols="30" rows="10" minLength={2} maxLength={450}
                              placeholder='До 450 символов'></textarea>
                    <button type='button' name='task-add-button' id='task-add-button' value='submit'
                            onClick={() => props.onCreateTask()} className='task-add-button'>Добавить задачу
                    </button>
                </div>
            </div>
        </div>
    );
}