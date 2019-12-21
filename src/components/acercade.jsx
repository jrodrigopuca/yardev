import React, { Component } from 'react';

class AcercaDe extends Component {

    render() {
        const textCont={
            position:'relative',
            color:'white',
            backgroundColor:'rgba(200,55,55,0.5)',
            border:'none',
            overflow:"hidden",
            fontSize: 'calc(10px + 2vmin)',
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
                    <video autoPlay style={videoStyle} loop muted>
                        <source src="https://jrodrigopuca.github.io/videos/portada.mp4" type='video/mp4' />
                    </video>
                </section>
                <section style={textCont}>
                    <div style={textStyle}>
                        <h1>¿Qué es Yardev?</h1>
                        <p>
                            Es un gran conjunto de proyectos en los que participo activamente 
                            realizando el desarrollo de software. Este es mi punto de partida 
                            para mezclar diversas tecnologías, probar sin restricciones y obtener
                            nuevos productos.
                        </p>
                    </div>
                </section>
            </>
        );
    }
}

export default AcercaDe;