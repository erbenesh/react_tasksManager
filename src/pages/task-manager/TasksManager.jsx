import { useState, useRef} from "react";

import styles from './TasksManager.module.css'

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { taskService } from "../../services/task.service";
import { settingsService } from "../../services/settings.service";
import { useShowSome } from '../../hooks/useShowSome';
import { useCurrents } from '../../hooks/useCurrents';
import { useLists } from '../../hooks/useLists';
import { useFilters } from "../../hooks/useFilters";
import { useTaskActions } from "../../hooks/useTaskActions";

import { TaskCreateAbsoluteWindow } from "../../components/create-task-window/TaskCreateAbsoluteWindow";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { CurrentDisplay } from "../../components/current-display/CurrentDisplay";
import { ChooseDisplayWindow } from "../../components/choose-display-window/ChooseDisplayWindow";

import { VscSettings } from "react-icons/vsc";

export const today = String(new Date().toLocaleDateString());
export const todayTime = String(new Date().toString().slice(16, 21));
export const todayFormatted = `${today.slice(-4)}-${today.slice(3, 5)}-${today.slice(0, 2)}T${todayTime}`;

export const TasksManager = (props) => {

    const queryClient = useQueryClient();

    const { isPending, data, error } = useQuery({
        queryKey: ['task list'],
        queryFn: () => taskService.getTasks()
    });

    const settingsData = useQuery({
        queryKey: ['settings'],
        queryFn: () => settingsService.getSettings(),
    });

    const mutShowCompletedTasks = useMutation({
        mutationKey: ['show completed tasks'],
        mutationFn: (value) => settingsService.patchShowCompletedTasks(value),
        onSuccess() {
            queryClient.refetchQueries({queryKey: ['settings']})
        }
    });

    const mutNewTask = useMutation({
        mutationKey: ['create task'],
        mutationFn: (newTodo) => taskService.sendTask(newTodo),
        onSuccess() {
            queryClient.refetchQueries({queryKey: ['task list']})
        } 
    });

    const mutCompleteTask = useMutation({
        mutationKey: ['complete task'],
        mutationFn: (todo) => taskService.completeTask(todo), 
        onSuccess() {
            queryClient.refetchQueries({queryKey: ['task list']})
        } 
    });

    const mutDeleteTask = useMutation({
        mutationKey: ['delete task'],
        mutationFn: (todo) => taskService.deleteTask(todo),
        onSuccess() {
            queryClient.refetchQueries({queryKey: ['task list']})
        } 
    });

    const { onShowDisplayTasks, onShowSidebar, onShowCreateWindow, onShowAbsoluteCreateWindow, 
            showCreateWindow, showAbsoluteCreateWindow, showSidebar, showDisplayTasks, 
            setCompletedTasksSetting, isClickOutside, isClickOutsideCreateWindow } = useShowSome(mutShowCompletedTasks);

    const { chooseTasksCategory, chooseFiltersCategory, currentCategory, currentFilter } = useCurrents();

    const { filtersCategories } = useFilters(); 

    const { incomingTasks, todayTasks, sevenDaysTasks, overdue, tasksCategories} = useLists(isPending, data, settingsData.data?.showCompletedTasks);

    const {createTask, deleteTask, setDoneTask} = useTaskActions(onShowAbsoluteCreateWindow, onShowCreateWindow, showAbsoluteCreateWindow, 
                                                                                    showCreateWindow, mutNewTask, mutDeleteTask, mutCompleteTask);

    const buttonRef = useRef(null);

    const [displayID, setDisplayID] = useState(0);


    if (isPending) return (
        <div className="loader-container">	
            <i className="loader-circle"></i>
        </div>
    )

    if (error) return 'An error has occurred: ' + error.message

    return (
        <div className={styles.main_task_manager}>

            <Sidebar  
                    showSidebar={showSidebar}
                    chooseTasksCategory={chooseTasksCategory}
                    chooseFiltersCategory={chooseFiltersCategory}
                    onShowAbsoluteCreateWindow={onShowAbsoluteCreateWindow}

                    tasksCategories={tasksCategories}
                    currentCategory={currentCategory}
                    filtersCategories={filtersCategories}
                    currentFilter={currentFilter}
                    onShowSidebar={onShowSidebar}
            />

            {showAbsoluteCreateWindow && 
                    <TaskCreateAbsoluteWindow 
                        showAbsoluteCreateWindow={showAbsoluteCreateWindow}
                        onShowAbsoluteCreateWindow={onShowAbsoluteCreateWindow} 
                        createTask={createTask}
                        isClickOutsideCreateWindow={isClickOutsideCreateWindow}
                    />            
            }

            <div className={styles.task_manager}>

                <CurrentDisplay 
                    setDoneTask={setDoneTask}
                    currentCategory={currentCategory}
                    incomingTasks={incomingTasks}
                    todayTasks={todayTasks}
                    sevenDaysTasks={sevenDaysTasks}
                    overdue={overdue}
                    showCreateWindow={showCreateWindow}
                    deleteTask={deleteTask}
                    onShowCreateWindow={onShowCreateWindow}
                    createTask={createTask}

                    displayID={displayID}
                />

            </div>

            <button ref={buttonRef} className={styles.displays_button} onClick={() => onShowDisplayTasks()}>
                <VscSettings className={styles.displays_ico}/>
                <p>Отображение</p>
            </button>

            <ChooseDisplayWindow setDisplayID={setDisplayID} showDisplayTasks={showDisplayTasks}
                                    isClickOutside={isClickOutside} buttonRef={buttonRef}
                                    isShowCompletedTasks={!settingsData.isPending? settingsData.data?.showCompletedTasks : false} setIsShowCompletedTasks={setCompletedTasksSetting}
                                    />

        </div>
    );

}