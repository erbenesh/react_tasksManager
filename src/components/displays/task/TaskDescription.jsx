import styles from './TaskDescription.module.css'

export const TaskDescription = (props) => {

    return (
        <p className={props.showCurrentTaskWindow ? styles.task_description_full : styles.task_description} style={props.task.isTaskDone ? {textDecorationLine: "line-through"} : {}}>
            {props.task.description}
        </p>
    );
}