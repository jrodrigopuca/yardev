import React, { Component } from 'react';
import './proyectos.scss';

function Elemento(props) {
    const item = props.item;
    return (
        <li className="card" key={item.id}>
            <div className="card-text">
                <p className="card-title">{item.titulo}</p>
                <p className="card-subtitle">{item.subtitulo}</p>
                <p className="card-description">{item.descripcion}</p>
            </div>
            <div className="card-actions">
                {item.links.map(e => (<a className="card-action" key={e.id} href={e.link}>{e.descripcion}</a>))}
            </div>
        </li>
    )
}


class Proyectos extends Component {
    render() {
        const data = this.props.data;
        return (
            <section className="proyectos">
                <h1> Proyectos </h1>
                <ul>
                    {data.map(e => (<Elemento key={e.id} item={e} />))}
                </ul>
            </section>
        )
    }
}

export default Proyectos;