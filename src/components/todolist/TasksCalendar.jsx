

export const TasksCalendar = (props) => {

    return (
        <main style={props.showNav === true ? {paddingLeft: 20 + '%'} : {paddingRight: 0, width: 100 + "%"}}>

            <div>
                <section className="top-toolbar">
                    <h1>Календарь</h1>
                </section>

                <section className='tasks-list'>

                </section>

            </div>


        </main>
    );
}