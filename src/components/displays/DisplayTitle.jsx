import styles from './DisplayTitle.module.css'

export const DisplayTitle = (props) => {
    return (
        <div className={styles.top_toolbar}>
            <h1>
                {
                props.currentCategory === 'incomingTasks' ?
                    'Входящие' :
                    props.currentCategory === 'todayTasks' ?
                        'Сегодня' :
                        props.currentCategory === 'sevenDaysTasks' ?
                            'Предстоящее' :
                            props.currentCategory === 'overdue' ?
                                'Просрочено' :
                                'Какое-то окно'
                }
            </h1>
        </div>
    );
}