import { FaChevronDown } from "react-icons/fa";

import styles from '../CreateWindow.module.css'

export const CreateWindowButtons = (props) => {

    return (
        <div className={styles.buttons}>

            <button className={styles.project_button} >
                Проект <FaChevronDown className={styles.project_ico}/>
            </button>

            <div className={styles.event_buttons}>

                <button className={styles.exit_button} onClick={() => props.onWindow()}>
                    Отмена
                </button>

                <button type='button' name='task-add-button' id='task-add-button' value='submit'
                        onClick={() => props.createTask()} className={styles.task_add_button}>
                            Добавить задачу
                </button>

            </div>

        </div>
    );
}