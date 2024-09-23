import {AiOutlinePlus} from "react-icons/ai";

import TaskEditWindow from "./TaskEditWindow";
import {Component} from "react";
import Task from "./Task";
import TasksNav from "./TasksNav";


const today = String(new Date().toLocaleDateString());
let todayFormatted = `${today.slice(-4)}-${today.slice(3, 5)}-${today.slice(0, 2)}`;

class TasksManager extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showEditWindow: false,
            tasks: [],
            currentTasks: [],
            todayTasks: [],

            tasksCategories: [
                {
                    key: 'incomingTasks',
                    name: 'Входящие',
                    timeRangeStart: '',
                    timeRangeEnd: '',
                    len: 0,
                },
                {
                    key: 'todayTasks',
                    name: 'Сегодня',
                    timeRange: '',
                    timeRangeEnd: '',
                    len: 0,
                },
                {
                    key: 'sevenDaysTasks',
                    name: 'Следующие 7 дней',
                    timeRange: '',
                    timeRangeEnd: '',
                    len: 0,
                },
                {
                    key: 'overdue',
                    name: 'Просрочено',
                    timeRange: '',
                    timeRangeEnd: '',
                    len: 0,
                },
                {
                    key: 'twoWeeksTasks',
                    name: 'Эти 2 недели',
                    timeRange: '2024-09-23',
                    timeRangeEnd: '2024-10-07',
                    len: 0,
                },
            ],

            currentCategory: 'incomingTasks',
        }

        this.state.currentTasks = this.state.tasks;

        this.onShowEditWindow = this.onShowEditWindow.bind(this);
        this.createTask = this.createTask.bind(this);
        this.showTasks = this.showTasks.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
        this.getLengthTasks = this.getLengthTasks.bind(this);
        this.chooseTasksCategory = this.chooseTasksCategory.bind(this);
    }

    render(){
        return (
            <main style={this.props.showNav === true ? {paddingLeft: 20 + '%'} : {paddingRight: 0, width: 100 + "%"}}>
                    <TasksNav setAppId={this.props.setAppId} showNav={this.props.showNav}
                              getLengthTasks={this.getLengthTasks} chooseTasksCategory={this.chooseTasksCategory}

                              tasks={this.state.tasks} currentTasks={this.state.currentTasks}
                              tasksCategories={this.state.tasksCategories}
                              currentCategory={this.state.currentCategory}
                    />

                    <div>
                        <section className="top-toolbar">
                            <h1>Менеджер задач</h1>
                        </section>

                        <section className='tasks-list'>

                            {this.state.currentTasks.length > 0 ?
                               this.showTasks(this.state.currentTasks) : this.showNothing()}

                           {this.state.showEditWindow &&
                               <TaskEditWindow onShowItemWindow={this.onShowEditWindow} onCreateTask={this.createTask}/>}

                      </section>
                      <button className='tasks-add-button' onClick={() => {
                           this.onShowEditWindow()
                       }}><AiOutlinePlus className='edit-ico'/></button>

                    </div>


            </main>
    );
    }

    chooseTasksCategory(category, rangeStart, rangeEnd) {
        switch (category) {
            case 'incomingTasks':
                this.setState({currentTasks: this.state.tasks});
                break;
            case 'todayTasks':
                this.setState({currentTasks: this.state.tasks.filter(el => new Date(el.date).getTime() === new Date(todayFormatted).getTime())});
                break;
            case 'sevenDaysTasks':
                this.setState({currentTasks: this.state.tasks.filter(el => new Date(el.date).getTime() > (new Date(todayFormatted).getTime()) &&
                                                                                    new Date(el.date).getTime() < (new Date(todayFormatted).getTime() + (1000*60*60*24*7)))
                });
                break;
            case 'overdue':
                this.setState({currentTasks: this.state.tasks.filter(el => new Date(el.date).getTime() < new Date(todayFormatted).getTime())});
                break;
            default:
                this.setState({currentTasks: this.state.tasks.filter(el => new Date(el.date).getTime() > (new Date(rangeStart).getTime()) &&
                                                                                    new Date(el.date).getTime() < (new Date(rangeEnd).getTime()))
                });
                break;
        }
        this.setState({currentCategory: category});
        alert(this.state.tasks.filter(el => el.date === todayFormatted).length + " ДАТА: " + (new Date('2024-10-06').getTime()))
    }

    getLengthTasks = (len) => {
        return <b className='tasks-length-checker'>{len}</b>;
    }

    showTasks = () => {

        return (
            <div>
                {this.state.currentTasks.map(el => (
                    <Task onDelete={this.deleteTask} key={el.id} task={el}/>
                ))}
            </div>
        )
    }

    showNothing = () => {
        return (
            <div className='tasks-empty'>
                Задач пока нет...
            </div>
        )
    }

    onShowEditWindow() {
        this.setState({showEditWindow: !this.state.showEditWindow});
    }

    createTask() {
        let inputAll = Array.from(document.querySelectorAll('#forms input, textarea'));
        let arr = this.state.tasks;
        let obj = {};

        let checkFieldsLength = inputAll.every((el) => el.value.length);

        if (checkFieldsLength) {
            for (const input of inputAll) {
                obj[input.id] = input.value;
            }
            obj['id'] = crypto.randomUUID();
            arr.push(obj);
            this.setState({tasks: arr});
            this.onShowEditWindow();
            return console.log('Добавлена задача: ' + arr);
        }
        return alert('Не все поля заполнены');
    }

    deleteTask(id){
        this.setState({tasks: this.state.tasks.filter(el => el.id !== id)});
    }

}

export default TasksManager;