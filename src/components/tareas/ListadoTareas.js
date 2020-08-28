import React, { Fragment, useContext } from 'react';
import Tarea from './Tarea';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';

const ListadoTareas = () => {

    // Extraer proyectos de state inicial
    const proyectosContext = useContext(proyectoContext);
    const { proyecto, eliminarProyecto } = proyectosContext;
    const tareasContext = useContext(tareaContext)
    const { tareasproyecto } = tareasContext;

    if(!proyecto) return <h2>Selecciona un proyecto</h2>

    // Extraer proyecto actual
    const [ proyectoActual ] = proyecto;

    return ( 
        <Fragment>
            <h2>{ proyectoActual.nombre }</h2>

            <ul className="listado-tareas">
                {tareasproyecto.length === 0
                    ?  <li className="tarea"><p>No hay tareas</p></li> 
                    : tareasproyecto.map(tarea => (
                        <Tarea
                            key={tarea.id}
                            tarea={tarea}
                        />
                    ))
                }
            </ul>

            <button
                type="button"
                className="btn btn-primario"
                onClick={() => eliminarProyecto(proyectoActual.id)}
            >Eliminar proyecto</button>
        </Fragment>
     );
}

export default ListadoTareas;