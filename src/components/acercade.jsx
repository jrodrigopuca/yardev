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
                    <video autoPlay style={videoStyle} loop muted>
                        <source src="https://jrodrigopuca.github.io/videos/portada.mp4" type='video/mp4' />
                    </video>
                </section>
                <section style={textCont}>
                    <div style={textStyle}>
                        <h1>Yardev</h1>
                        <legend>
                            Este es mi punto de partida para emplear diversas tecnologías, probar sin restricciones y obtener
                            nuevos productos.
                        </legend>
                    </div>
                </section>
            </>
        );
    }
}

export default AcercaDe;