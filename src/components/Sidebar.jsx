import styles from './Sidebar.module.css';

import { MdOutlineCalendarToday } from "react-icons/md";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { LuInbox } from "react-icons/lu";
import { GoDotFill } from "react-icons/go";
import { LuClock4 } from "react-icons/lu";
import { FaChevronDown } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { BsLayoutSidebar } from "react-icons/bs";

import {useState, useCallback, useEffect, useRef} from "react";

export const Sidebar = (props) => {

    const sidebarRef = useRef(null);
    const [isResizing, setIsResizing] = useState(false);
    const [sidebarWidth, setSidebarWidth] = useState(280);
  
    const startResizing = useCallback((mouseDownEvent) => {
      setIsResizing(true);
    }, []);
  
    const stopResizing = useCallback(() => {
      setIsResizing(false);
    }, []);
  
    const resize = useCallback(
      (mouseMoveEvent) => {
        if (isResizing) {
          setSidebarWidth(
            mouseMoveEvent.clientX -
              sidebarRef.current.getBoundingClientRect().left
          );
        }
    }, [isResizing]);
  
    useEffect(() => {
        window.addEventListener("mousemove", resize);
        window.addEventListener("mouseup", stopResizing);
        return () => {
            window.removeEventListener("mousemove", resize);
            window.removeEventListener("mouseup", stopResizing);
        };
    }, [resize, stopResizing]);

    const renderCategoriesIcon = (el) => {
        switch (el.key) {
            case 'incomingTasks':
                return <LuInbox style={{color: '#5c7a98'}} className={styles.nav_icons}/>
            case 'todayTasks':
                return <MdOutlineCalendarToday style={{color: '#5c9861'}} className={styles.nav_icons}/>
            case 'sevenDaysTasks':
                return <MdOutlineCalendarMonth style={{color: '#945c98'}} className={styles.nav_icons}/>
            case 'overdue':
                return <LuClock4 style={{color: '#985c5c'}} className={styles.nav_icons}/>
            default:
                return <GoDotFill style={{color: '#945c98'}} className={styles.nav_icons}/>
        }
    }

    const getLengthTasks = (len) => {
        return <b className={styles.tasks_length_checker}>{len}</b>;
    }

    const getCurrentTasksListLength = (el) => el.array.length > 0 ? getLengthTasks(el.array.length) : ""

    return (
        <nav 
            ref={sidebarRef}
            onMouseDown={(e) => e.preventDefault()}
            className={props.showSidebar === true ? '' : styles.closed}

            style={isResizing === true ? 
                    {transition: .0 + "s", width: sidebarWidth} 
                    : props.showSidebar === false ? 
                    {minWidth: 0, width: 0, transition: .3 + "s"} 
                    : {transition: .3 + "s", width: sidebarWidth}}>
            <ul>


                <div className={styles.top_buttons}>

                    <li className={styles.user_profile_button}>
                        <CgProfile className={styles.nav_icon_profile}/>
                        <span>Егор</span>
                    </li>

                    <button className={styles.menu_button} onClick={() => props.onShowSidebar()}
                            style={props.showSidebar === true ? {left: 0} : {left: 50}}>

                        <BsLayoutSidebar className={styles.sidebar_menu_ico} />
                    </button>

                </div>

                <li className={styles.nav_create_task_button} onClick={() => {props.onShowAbsoluteCreateWindow()}}>
                    <AiOutlinePlus className={styles.nav_icons}/>
                    <span>Добавить задачу</span>
                </li>

                <li>
                    <CiSearch className={styles.nav_icons}/>
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
                    <li className={styles.filter_li}
                        style={props.currentFilter === el.key ? {fontWeight: 400, background: 'rgb(60,67,97)'} : {}}
                        key={el.key} onClick={() => props.chooseFiltersCategory(el.key)}>

                        <div className={styles.filter_title}>
                            <span>
                                <FaChevronDown className={styles.filters_ico}
                                               style={props.currentFilter === el.key ? {} : {transform: 'rotate(-90deg)'}}/>
                                {el.name}
                            </span>
                            <AiOutlinePlus className={styles.filter_edit_ico}/>
                        </div>

                        <div className={props.currentFilter === el.key ? styles.sidebar_filter_content_open : styles.sidebar_filter_content}>
                            Какие то кнопки, списки и всякое такое(Фича)
                        </div>

                    </li>
                ))}

            </ul>
            {props.showSidebar && <div className={styles.app_sidebar_resizer} onMouseDown={startResizing} />}

        </nav>
    );

}