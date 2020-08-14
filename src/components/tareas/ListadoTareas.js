import React, { Fragment } from 'react';
import Tarea from './Tarea';

const ListadoTareas = () => {
    
    const tareasProyecto = [
        { nombre: 'CSS Calendario', estado: true },
        { nombre: 'Terminar APIs', estado: false },
        { nombre: 'Pegarse dos tiros', estado: false },
    ]

    return ( 
        <Fragment>
            <h2>Proyecto: Agenda con calendario</h2>

            <ul className="listado-tareas">
                {tareasProyecto.length === 0
                    ?  <li className="tarea"><p>No hay tareas</p></li> 
                    : tareasProyecto.map(tarea => (
                        <Tarea 
                            tarea={tarea}
                        />
                    ))
                }
            </ul>

            <button
                type="button"
                className="btn btn-primario"
            >Eliminar proyecto</button>
        </Fragment>
     );
}

export default ListadoTareas;