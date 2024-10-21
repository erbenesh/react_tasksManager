import { useCallback } from "react";

export function useTaskActions (onShowAbsoluteCreateWindow, onShowCreateWindow, showAbsoluteCreateWindow, showCreateWindow, mutNewTask, mutDeleteTask, mutCompleteTask) {

    const createTask = useCallback(() => {
        let inputAll = Array.from(document.querySelectorAll('#forms input, textarea'));
        let obj = {};

        let checkFieldsLength = inputAll.every((el) => el.value.length);

        if (checkFieldsLength) {
            for (const input of inputAll) {
                obj[input.id] = input.value;
            }
            obj['id'] = crypto.randomUUID();
            obj['isTaskDone'] = false;
            delete obj[""];

            mutNewTask.mutate(obj);
            
            showCreateWindow && onShowCreateWindow();
            showAbsoluteCreateWindow && onShowAbsoluteCreateWindow();

            return console.log('Добавлена задача: ', obj);
        }
        return alert('Не все поля заполнены');
    }, [onShowAbsoluteCreateWindow, onShowCreateWindow, showAbsoluteCreateWindow, showCreateWindow, mutNewTask]);

    const deleteTask = useCallback((obj) => {

        mutDeleteTask.mutate(obj);

    }, [mutDeleteTask]);

    const setDoneTask = useCallback((obj) => {

        mutCompleteTask.mutate(obj);

    }, [mutCompleteTask]);

    return {createTask, deleteTask, setDoneTask}
}