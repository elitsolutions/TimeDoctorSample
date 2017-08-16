import React from 'react';
import Header from './Header'
import Main from './Main'

class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Main /> 
            </div>
        );
    }
}

export default Dashboard;