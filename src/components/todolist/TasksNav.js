import { MdOutlineCalendarToday } from "react-icons/md";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { LuInbox } from "react-icons/lu";
import { GoDotFill } from "react-icons/go";
import { LuClock4 } from "react-icons/lu";
import {Component} from "react";

class TasksNav extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    renderCategoriesIcon = (el) => {
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

    getCurrentTasksListLength = (el) => el.len > 0 ? this.props.getLengthTasks(el.len) : ""

    render() {
        return (
            <nav style={this.props.showNav === true ? {} : {width: 0 + "px", minWidth: 0}}>

                <ul style={this.props.showNav === true ? {} : {transform: 'scaleX(0%)', color: 'transparent'}}>

                    {this.props.tasksCategories.map(el => (
                        <li style={this.props.currentCategory === el.key ? {fontWeight: 400, background: '#292e3e'} : {}} key={el.key} onClick={() => this.props.chooseTasksCategory(el.key, el.timeRange, el.timeRangeEnd)}>
                            {this.renderCategoriesIcon(el)}
                            {el.name}{this.getCurrentTasksListLength(el)}
                        </li>
                    ))}

                </ul>

            </nav>
        );
    }

}

export default TasksNav;