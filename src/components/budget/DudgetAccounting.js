import React, {Component} from 'react';

class BudgetAccounting extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <main style={this.props.showNav === true ? {paddingLeft: 20 + '%'} : {paddingRight: 0, width: 100 + "%"}}>

                <div>
                    <section className="top-toolbar">
                        <h1>Бюджет</h1>
                    </section>

                    <section className='tasks-list'>

                    </section>

                </div>


            </main>
        );
    }
}

export default BudgetAccounting;