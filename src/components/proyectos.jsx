import React, { Component } from 'react';
import data from './proyectos-data';

function Elemento (props){
    const item= props.item;
    return(
        <li>
            <h2>{item.nombre}</h2>
            <h3>{item.descripcion}</h3>
            <a href={item.acceso}>Acceder</a>
        </li>
    )
} 


class Proyectos extends Component {
    render(){       
        return(
            <ul>
                {data.map(e=>(<Elemento item={e} />))}
            </ul>
        )
    }
}

export default Proyectos;