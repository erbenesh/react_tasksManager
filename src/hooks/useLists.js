import { todayFormatted } from "../TasksManager";

export function useLists (isPending, data, isCompletedTasksHidden) {

    const mainTasksArray = isPending === false ? data.data : [];
    const completedTasksHiddenArray = mainTasksArray.filter(el => el.isTaskDone === false);
    const tasksArray = !isCompletedTasksHidden ? completedTasksHiddenArray : mainTasksArray;

    const incomingTasks = {
        key: 'incomingTasks',
        name: 'Входящие',
        array: tasksArray
    };
    const todayTasks = {
        key: 'todayTasks',
        name: 'Сегодня',
        array: tasksArray.filter(el => new Date(el.date).getTime() === new Date(todayFormatted.slice(0,10)).getTime())
    };
    const sevenDaysTasks = {
        key: 'sevenDaysTasks',
        name: 'Предстоящее',
        array: tasksArray.filter(el => new Date(el.date).getTime() > (new Date().getTime()))
    };
    const overdue = {
        key: 'overdue',
        name: 'Просрочено',
        array: tasksArray.filter(el => new Date(el.date+'T'+el.time).getTime() < new Date(todayFormatted).getTime())
    };

    const tasksCategories = [incomingTasks, todayTasks, sevenDaysTasks, overdue];

    return {incomingTasks, todayTasks, sevenDaysTasks, overdue, tasksCategories}
}