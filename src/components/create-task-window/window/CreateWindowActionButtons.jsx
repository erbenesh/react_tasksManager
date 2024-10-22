import styles from '../CreateWindow.module.css'

import { PiDotsThreeOutlineFill } from "react-icons/pi";
import { BsCalendar3Event } from "react-icons/bs";
import { IoFlagOutline } from "react-icons/io5";
import { IoAlarmOutline } from "react-icons/io5";

export const CreateWindowActionButtons = (props) => {

    return (
        <div className={styles.create_window__action_input_buttons}>
            <button ref={props.buttonRef} className={styles.action_input_buttons} 
                    onClick={() => props.closeDateInputsWindow()}>
                <BsCalendar3Event className={styles.buttons_sub_ico}/>
                Срок выполнения
            </button>
            <button className={styles.action_input_buttons}>
                <IoFlagOutline className={styles.buttons_sub_ico} style={{width: 14}}/>
                Приоритет
            </button>
            <button className={styles.action_input_buttons}>
                <IoAlarmOutline className={styles.buttons_sub_ico} style={{width: 14}}/>
                Напоминания
            </button>
            <button className={styles.action_input_buttons}>
                <PiDotsThreeOutlineFill className={styles.three_dots_ico}/>
            </button>
        </div>
    );
}