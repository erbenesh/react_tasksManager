import styles from '../CreateWindow.module.css'

export const CreateWindowDateInputs = (props) => {
    return (
        <div className={styles.create_window_date_inputs}>
            <input id='date' type="date"/>
            <input id='time' type="time"/>
        </div>
    );
}