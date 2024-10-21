import { useRef } from 'react' 

import { PiTrashLight } from "react-icons/pi";

import styles from './ActionButtonsListWindow.module.css'

import { useClickOutsideWithButton } from '../../../hooks/useClickOutside';

export const ActionButtonsListWindow = (props) => {

    const listRef = useRef(null);
    useClickOutsideWithButton(listRef, () => props.isClickOutsideActionList(),
                                             props.showActionListWindow,
                                             props.buttonRef
                                            );


    return (
        <div ref={listRef} className={styles.buttons_action_list}>

            <button type='button' onClick={() => props.deleteTask(props.task)}>
                <PiTrashLight className={styles.trash_ico}/>
                Удалить
            </button>

        </div>
    );
}