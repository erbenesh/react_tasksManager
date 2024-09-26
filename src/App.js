import {useState} from "react";

import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {TasksManager} from "./components/todolist/TasksManager";
import {TasksBoard} from "./components/board/TasksBoard";
import {TasksCalendar} from "./components/calendar/TasksCalendar";

export const App = (props) => {

    const [appId, setAppId] = useState(0);
    const [showNav, setShowNav] = useState(false);
    const [showAppsList, setShowAppsList] = useState(false);

    function onShowNav(){
        setShowNav(!showNav);
    }

    function onShowAppsList() {
        setShowAppsList(!showAppsList);
    }

    function isClickOutside() {
        setShowAppsList(false);
    }

    function chooseAppId(id) {
        setAppId(id)
    }

    const checkAppId = () => {

          const id = appId;

          const appChoice = () => {
              switch (id) {
                  case 0:
                      return <TasksManager setAppId={chooseAppId} showNav={showNav}/>
                  case 1:
                      return <TasksBoard showNav={showNav}/>
                  case 2:
                      return <TasksCalendar showNav={showNav}/>
                  default:
                      return <TasksManager />
              }
          }

          return (
              <div>
                  {appChoice()}
              </div>
          )
    }

    return (
        <div className="wrapper">

            <Header onShowNav={onShowNav} showNav={showNav} onShowAppsList={onShowAppsList} showAppsList={showAppsList} setAppId={chooseAppId} isClickOutside={isClickOutside}/>

            {checkAppId()}

            <Footer />

        </div>
    );

}
