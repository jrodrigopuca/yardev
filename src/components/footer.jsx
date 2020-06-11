import React, { Component } from 'react';

class MyFooter extends Component{

    render(){

        const styles= {
            backgroundColor: "#e6e1e9",
            margin:0,
            padding:'10px',
            color:'#664c6f',
        }

        return(
            <p style={styles}>Yardev.net - Web desarrollada usando React JS - <a href="https://about.me/jrodrigopuca">Ing. Juan Puca</a> </p>
        )
    }
}

export default MyFooter;