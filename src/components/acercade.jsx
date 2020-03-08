import React, { Component } from 'react';

class AcercaDe extends Component {

    render() {
        const textCont={
            position:'relative',
            backgroundColor:'rgba(41,52,98,0.5)',
            border:'none',
            overflow:"hidden",
            fontSize: 'calc(10px + 2vmin)',
            color: '#fff1c1',
        }

        const textStyle={
            display:'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 2em',
        }

        const videoStyle={
            minWidth: "100%",
            minHeight: "100%",
            top: "50%",
            left: "50%",
            WebkitTransform: "translate(-50%, -50%)",
            msTransform: "translate(-50%, -50%)",
            transform: "translate(-50%, -50%)",
            overflow:"hidden",
            width:'auto',
            height:'auto',
            position:'absolute',
        }

        const videoCont ={
            position:"absolute",
            overflow:"hidden",
            width:'100%',
            height:'100%',
            border:'none',
        }
        

        return (
            <>
                <section style={videoCont}>
                    <video autoPlay style={videoStyle} loop muted poster="cover/Spacious.jpg">
                        <source src="cover/Spacious.mp4" type='video/mp4' />
                        <source src="cover/Spacious.webm" type='video/webm' />
                        Tu navegador no soporta videos
                    </video>
                </section>
                <section style={textCont}>
                    <div style={textStyle}>
                        <h1 className="Acerca-header"> Yardev </h1>
                        <h2>programando( );</h2>
                        <legend>
                            Un punto de partida para emplear diversas tecnologías, probar sin restricciones y obtener
                            nuevos productos. 
                        </legend>
                        <legend>Software creado desde Salta, Argentina.</legend>
            
                        {/*
                        <img src={this.props.imagen} alt="logo" width="100px" height="100px" className="logo"/>
                        */}
                    </div>
                </section>
            </>
        );
    }
}

export default AcercaDe;