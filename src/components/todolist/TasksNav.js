import { MdOutlineCalendarToday } from "react-icons/md";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { LuInbox } from "react-icons/lu";
import { GoDotFill } from "react-icons/go";
import { LuClock4 } from "react-icons/lu";
import { FaChevronDown } from "react-icons/fa";
import {AiOutlinePlus} from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";

export const TasksNav = (props) => {

    const renderCategoriesIcon = (el) => {
        switch (el.key) {
            case 'incomingTasks':
                return <LuInbox id='inbox-ico' className='nav-icons'/>
            case 'todayTasks':
                return <MdOutlineCalendarToday id='today-ico' className='nav-icons'/>
            case 'sevenDaysTasks':
                return <MdOutlineCalendarMonth id='seven-days-ico' className='nav-icons'/>
            case 'overdue':
                return <LuClock4 id='overdue-ico' className='nav-icons'/>
            default:
                return <GoDotFill id='week-ico' className='nav-icons'/>
        }
    }

    const getCurrentTasksListLength = (el) => el.array.length > 0 ? props.getLengthTasks(el.array.length) : ""

    return (
        <nav style={props.showNav === true ? {} : {transform: 'translateX(-350px)'}}>

            <ul>

                <li className='user-profile-button'>
                    <CgProfile className='nav-icon-profile'/>
                    <span>Егор</span>
                </li>

                <li className='nav-create-task-button' onClick={() => {props.onShowItemWindow()}}>
                    <AiOutlinePlus className='nav-icons'/>
                    <span>Добавить задачу</span>
                </li>

                <li><CiSearch className='nav-icons'/>
                    <span>Поиск</span>
                </li>

                {props.tasksCategories.map(el => (
                    <li style={props.currentCategory === el.key ? {fontWeight: 400, background: 'rgb(60,67,97)'} : {}}
                        key={el.key}
                        onClick={() => props.chooseTasksCategory(el.key, el.timeRange, el.timeRangeEnd)}>

                        {renderCategoriesIcon(el)}
                        <span>{el.name}{getCurrentTasksListLength(el)}</span>
                    </li>
                ))}
                <div style={{paddingTop: 20 + 'px'}}></div>
                {props.filtersCategories.map(el => (
                    <li className={props.currentFilter === el.key ? 'filter-li open' : 'filter-li'}
                        style={props.currentFilter === el.key ? {fontWeight: 400, background: 'rgb(60,67,97)'} : {}}
                        key={el.key} onClick={() => props.chooseFiltersCategory(el.key)}>

                        <div className='filter-title'>
                            <span>
                                <FaChevronDown className='filters-ico'
                                               style={props.currentFilter === el.key ? {} : {transform: 'rotate(-90deg)'}}/>
                                {el.name}
                            </span>
                            <AiOutlinePlus className='filter-edit-ico'/>
                        </div>

                        <div className='sidebar-filter-content'>
                            Какие то кнопки, списки и всякое такое(Фича)
                        </div>

                    </li>
                ))}

            </ul>

        </nav>
    );

}