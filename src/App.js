import Footer from "./components/Footer";
import {Component, useEffect} from "react";
import TasksManager from "./components/todolist/TasksManager";
import BudgetAccounting from "./components/budget/DudgetAccounting";
import Header from "./components/Header";
import Notes from "./components/notes/Notes";
import Kanban from "./components/kanban/Kanban";

export const useClickOutside = (ref, callback, check, buttonRef) => {

    const handleClick = (event) => {
        if (ref.current && !ref.current.contains(event.target) && buttonRef.current && !buttonRef.current.contains(event.target)) {
            callback();
        }
    };

    useEffect(() => {
        if (check === false) return ;
        document.addEventListener("mousedown", handleClick);
        return () => {
            document.removeEventListener("mousedown", handleClick);
        };
    });
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        appID: 0,
        showNav: false,
        showAppsList: false,
    }

    this.checkAppId = this.checkAppId.bind(this);
    this.setAppId = this.setAppId.bind(this);
    this.showNav = this.showNav.bind(this);
    this.showAppsList = this.showAppsList.bind(this);
    this.isClickOutside = this.isClickOutside.bind(this);
  }

    render() {
        return (
            <div className="wrapper">

                <Header onShowNav={this.showNav} onShowAppsList={this.showAppsList} showAppsList={this.state.showAppsList} setAppId={this.setAppId} isClickOutside={this.isClickOutside}/>

                {this.checkAppId()}

                <Footer />

            </div>
        );
    }

    showNav(){
        this.setState({showNav: !this.state.showNav});
    }

    showAppsList() {
        this.setState({showAppsList: !this.state.showAppsList});
    }

    isClickOutside() {
        this.setState({showAppsList: false});
    }

    setAppId(id) {
      this.setState({appID: id})
    }

    checkAppId = () => {

      const id = this.state.appID;

      const appChoice = () => {
          switch (id) {
              case 0:
                  return <TasksManager setAppId={this.setAppId} showNav={this.state.showNav}/>
              case 1:
                  return <BudgetAccounting showNav={this.state.showNav}/>
              case 2:
                  return <Notes showNav={this.state.showNav}/>
              case 3:
                  return <Kanban showNav={this.state.showNav}/>
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

}

export default App;
