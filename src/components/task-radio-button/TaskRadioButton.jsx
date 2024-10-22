import styles from './TaskRadioButton.module.css'

import { IoIosRadioButtonOff } from "react-icons/io";
import { IoIosRadioButtonOn } from "react-icons/io";

export const TaskRadioButton = (props) => {

    return(
        <button className={styles.task_radio_button} onClick={() => props.setDoneTask(props.task)}>            
        {

            props.task.isTaskDone ?  
            <IoIosRadioButtonOn className={styles.task_radio_ico} />
            : <IoIosRadioButtonOff className={styles.task_radio_ico} />

        }
        </button>
    );
}