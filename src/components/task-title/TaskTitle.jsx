import styles from './TaskTitle.module.css'

export const TaskTitle = (props) => {

    return (
        <p className={styles.task_title} style={props.task.isTaskDone ? {textDecorationLine: "line-through"} : {}}>
            {props.task.title}
        </p>
    );
}