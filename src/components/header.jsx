import React, { Component } from 'react';

class MyHeader extends Component {

    render() {
        const {imagen} = this.props;
        return (
            <header className="App-header">
                <img src={imagen} className="App-logo" alt="logo"/>
                <h1> Yardev dot net </h1>
                <h3> Desarrollo de software </h3>
            </header>
        )
    }
}

export default MyHeader;