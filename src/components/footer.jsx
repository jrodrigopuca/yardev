import React, { Component } from 'react';

class MyFooter extends Component{

    render(){

        const styles= {
            backgroundColor: "antiquewhite",
            margin:0,
            padding:'10px',
            color:'#293462',
        }

        return(
            <p style={styles}>Yardev.net - Web desarrollada usando React JS - <a href="https://about.me/jrodrigopuca">Ing. Juan Puca</a> </p>
        )
    }
}

export default MyFooter;