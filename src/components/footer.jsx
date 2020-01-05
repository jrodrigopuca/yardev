import React, { Component } from 'react';

class MyFooter extends Component{

    render(){

        const styles= {
            backgroundColor: "#fff1c1",
            margin:0,
            padding:'10px',
            color:'#293462',
        }

        return(
            <p style={styles}>Yardev.net - Web desarrollada usando ReactJS - Ing. Juan Puca</p>
        )
    }
}

export default MyFooter;