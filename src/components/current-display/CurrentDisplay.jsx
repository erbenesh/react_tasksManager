import { DisplayTasksList } from './../display-tasks-list/DisplayTasksList';
import { DisplayTasksBoard } from './../display-tasks-board/DisplayTasksBoard';

export const CurrentDisplay = (props) => {

    return (
        <>
            {
                props.displayID === 0 ? 
                <DisplayTasksList 
                    setDoneTask={props.setDoneTask}
                    currentCategory={props.currentCategory}
                    incomingTasks={props.incomingTasks}
                    todayTasks={props.todayTasks}
                    sevenDaysTasks={props.sevenDaysTasks}
                    overdue={props.overdue}
                    showCreateWindow={props.showCreateWindow}
                    tasks={props.tasks}
                    deleteTask={props.deleteTask}
                    onShowCreateWindow={props.onShowCreateWindow}
                    createTask={props.createTask}
                /> : 
                props.displayID === 1 && 
                <DisplayTasksBoard 
                    setDoneTask={props.setDoneTask}
                    currentCategory={props.currentCategory}
                    incomingTasks={props.incomingTasks}
                    todayTasks={props.todayTasks}
                    sevenDaysTasks={props.sevenDaysTasks}
                    overdue={props.overdue}
                    showCreateWindow={props.showCreateWindow}
                    tasks={props.tasks}
                    deleteTask={props.deleteTask}
                    onShowCreateWindow={props.onShowCreateWindow}
                    createTask={props.createTask}
                />
            }
        </>
    );
}