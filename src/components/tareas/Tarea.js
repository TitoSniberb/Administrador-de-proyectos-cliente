import React, { useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';

const Tarea = ({tarea}) => {

    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;
    const tareasContext = useContext(tareaContext)
    const { eliminarTarea, obtenerTareas, cambiarEstadoTarea, setTareaActual } = tareasContext;

    // Extraer proyecto array
    const [ proyectoActual ] = proyecto;

    const onClickEliminar = () => {
        eliminarTarea(tarea.id)
        obtenerTareas(proyectoActual.id)
    }

    // Modificar estado
    const cambiarEstado = tarea => {
        tarea.estado ? tarea.estado = false : tarea.estado = true;
        cambiarEstadoTarea(tarea)
    }

    const seleccionarTarea = tarea => {
        setTareaActual(tarea);
    }

    return ( 
        <li className="tarea sombra">
            <p> {tarea.nombre} </p>

            <div className="estado">
                {tarea.estado 
                    ? 
                        (
                            <button
                                type="button"
                                className="completo"
                                onClick={() => cambiarEstado(tarea)}
                            >Completo</button>
                        )
                    :
                        (
                            <button
                                type="button"
                                className="incompleto"
                                onClick={() => cambiarEstado(tarea)}
                            >Incompleto</button>
                        )
                }
            </div>

            <div className="acciones">
                <button
                    type="button"
                    className="btn btn-primario"
                    onClick={() => seleccionarTarea(tarea)}
                >Editar</button>

                <button
                    type="button"
                    className="btn btn-primario"
                    onClick={onClickEliminar}
                >Eliminar</button>
            </div>
        </li>
     );
}

export default Tarea;