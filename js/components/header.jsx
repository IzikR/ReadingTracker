import React from 'react';

class Header extends React.Component{
    render(){
        return <div className="header">
            <div className="main-title-section">
                <h1 className="main-title">Reading Tracker</h1>
                <h3 className="main-subtitle">Track your reading goals for the year</h3>
            </div>
        </div>

    }
}

export default Header;
