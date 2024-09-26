import {AiOutlinePlus} from "react-icons/ai";

import {TaskEditWindow} from "./TaskEditWindow";
import {useState} from "react";
import {Task} from "./Task";
import {TasksNav} from "./TasksNav";

export const today = String(new Date().toLocaleDateString());
export const todayTime = String(new Date().toString().slice(16, 21));
export let todayFormatted = `${today.slice(-4)}-${today.slice(3, 5)}-${today.slice(0, 2)}T${todayTime}`;

export const TasksManager = (props) => {

    const [showEditWindow, setShowEditTaskWindow] = useState(false);
    const [tasks, setTasks] = useState([]);
    const [currentCategory, setCurrentCategory] = useState('incomingTasks');
    const [currentFilter, setCurrentFilter] = useState('');

    const incomingTasks ={
        key: 'incomingTasks',
        name: 'Входящие',
        timeRangeStart: '',
        timeRangeEnd: '',
        array: [],
    };
    const todayTasks ={
        key: 'todayTasks',
        name: 'Сегодня',
        timeRange: '',
        timeRangeEnd: '',
        array: [],
    };
    const sevenDaysTasks ={
        key: 'sevenDaysTasks',
        name: 'Предстоящее',
        timeRange: '',
        timeRangeEnd: '',
        array: [],
    };
    const overdue ={
        key: 'overdue',
        name: 'Просрочено',
        timeRange: '',
        timeRangeEnd: '',
        array: [],
    };

    const projects = {
        key: 'projects',
        name: 'Проекты',
    };
    const marks = {
        key: 'marks',
        name: 'Метки',
    };
    const filters = {
        key: 'filters',
        name: 'Фильтры',
    };

    const tasksCategories = [incomingTasks, todayTasks, sevenDaysTasks, overdue];
    const filtersCategories = [projects, marks, filters];

    incomingTasks.array = tasks;
    todayTasks.array = tasks.filter(el => new Date(el.date).getTime() === new Date(todayFormatted.slice(0,10)).getTime());
    sevenDaysTasks.array = tasks.filter(el => new Date(el.date).getTime() > (new Date(todayFormatted.slice(0,10)).getTime()) &&
                                                new Date(el.date).getTime() < (new Date(todayFormatted.slice(0,10)).getTime() + (1000*60*60*24*7)))
    overdue.array = tasks.filter(el => new Date(el.date+'T'+el.time).getTime() < new Date(todayFormatted).getTime());

    function chooseTasksCategory(category, rangeStart, rangeEnd) {
        /*setCurrentTasks(tasks.filter(el => new Date(el.date).getTime() > (new Date(rangeStart).getTime()) &&
                                             new Date(el.date).getTime() < (new Date(rangeEnd).getTime()))*/
        setCurrentCategory(category);
        setCurrentFilter('');
    }

    function chooseFiltersCategory(filter) {
        setCurrentFilter(filter);
    }

    const getLengthTasks = (len) => {
        return <b className='tasks-length-checker'>{len}</b>;
    }

    const showTasks = () => {

        if ((currentCategory === 'incomingTasks' && incomingTasks.array.length === 0) ||
            (currentCategory === 'todayTasks' && todayTasks.array.length === 0) ||
            (currentCategory === 'sevenDaysTasks' && sevenDaysTasks.array.length === 0) ||
            (currentCategory === 'overdue' && overdue.array.length === 0)) {
            return (
                <div className='tasks-empty'>
                    <img src={'./images/tasks-empty.svg'} alt="sdfsdf"/>
                    <h2>Ваше спокойствие бесценно</h2>
                    <p>Отличная работа! Все ваши задачи организованы как надо.</p>
                </div>
            )
        }

        return (
            <div>
                {
                    currentCategory === 'incomingTasks' ?
                        incomingTasks.array.map(el => (
                            <Task onDelete={deleteTask} key={el.id} task={el} setDoneTask={setDoneTask}/>)) :
                        currentCategory === 'todayTasks' ?
                            todayTasks.array.map(el => (
                                <Task onDelete={deleteTask} key={el.id} task={el} setDoneTask={setDoneTask}/>)) :
                            currentCategory === 'sevenDaysTasks' ?
                                sevenDaysTasks.array.map(el => (
                                    <Task onDelete={deleteTask} key={el.id} task={el} setDoneTask={setDoneTask}/>)) :
                                currentCategory === 'overdue' ?
                                    overdue.array.map(el => (
                                        <Task onDelete={deleteTask} key={el.id} task={el} setDoneTask={setDoneTask}/>)) :

                    tasks.filter(el => new Date(el.date).getTime() > (new Date(todayFormatted).getTime()) &&
                                        new Date(el.date).getTime() < (new Date(todayFormatted).getTime()))
                }
            </div>
        )
    }

    function onShowEditWindow() {
        setShowEditTaskWindow(!showEditWindow);
    }

    function createTask() {
        let inputAll = Array.from(document.querySelectorAll('#forms input, textarea'));
        let arr = tasks;
        let obj = {};

        let checkFieldsLength = inputAll.every((el) => el.value.length);

        if (checkFieldsLength) {
            for (const input of inputAll) {
                obj[input.id] = input.value;
            }
            obj['id'] = crypto.randomUUID();
            obj['isTaskDone'] = false;

            arr.push(obj);

            setTasks(arr);
            onShowEditWindow();
            return console.log('Добавлена задача: ', obj, 'В список: ', arr);
        }
        return alert('Не все поля заполнены');
    }

    const deleteTask = (id) => {
        setTasks(tasks.filter(el => el.id !== id));
        console.log(tasks);
    }

    function setDoneTask(id, funcSetCheckedState) {
        let task = tasks.find(el => el.id === id);

        task.isTaskDone = !task.isTaskDone;
        funcSetCheckedState(task.isTaskDone);
        setTimeout(() => deleteTask(id),3000);
    }

    return (
        <main>
            <TasksNav setAppId={props.setAppId} showNav={props.showNav}
                      getLengthTasks={getLengthTasks} chooseTasksCategory={chooseTasksCategory}
                      chooseFiltersCategory={chooseFiltersCategory}
                      onShowItemWindow={onShowEditWindow}

                      tasks={tasks}
                      tasksCategories={tasksCategories}
                      currentCategory={currentCategory}
                      filtersCategories={filtersCategories}
                      currentFilter={currentFilter}
            />

            <div className='task-manager' style={props.showNav === true ? {paddingLeft: 10 + '%'} : {}}>

                <section className='tasks-list' style={props.showNav === true ? {width: 47 + '%'} : {}}>

                    <section className="top-toolbar">
                        <h1>{
                            currentCategory === 'incomingTasks' ?
                                'Входящие' :
                                currentCategory === 'todayTasks' ?
                                    'Сегодня' :
                                    currentCategory === 'sevenDaysTasks' ?
                                        'Предстоящее' :
                                        currentCategory === 'overdue' ?
                                            'Просрочено' :
                                            'Какое-то окно'
                        }
                        </h1>
                    </section>

                    {showTasks()}
                    <button className='tasks-add-button' onClick={() => {onShowEditWindow()}}>
                        <AiOutlinePlus className='edit-ico'/>Добавить задачу
                    </button>

                    {showEditWindow &&
                        <TaskEditWindow onShowItemWindow={onShowEditWindow} onCreateTask={createTask}/>}

                </section>

            </div>

        </main>
    );

}