import React, { useReducer } from 'react';
import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer';
import { 
    OBTENER_TAREAS, 
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA
} from '../../types/index';

const TareaState = props => {
    const initialState = {
        tareas: [
            { id: 1, nombre: 'CSS Calendario', estado: true, proyectoId: 1 },
            { id: 2, nombre: 'Terminar APIs', estado: false, proyectoId: 2 },
            { id: 3, nombre: 'Pegarse dos tiros', estado: false, proyectoId: 3 },
            { id: 4, nombre: 'CSS Calendario', estado: true, proyectoId: 1 },
            { id: 5, nombre: 'Terminar APIs', estado: false, proyectoId: 3 },
            { id: 6, nombre: 'Pegarse dos tiros', estado: false, proyectoId: 1 },
        ],
        tareasproyecto: null,
        errortarea: false
    }

    const [ state, dispatch ] = useReducer(TareaReducer, initialState);

    // Obtener tareas de un proyecto
    const obtenerTareas = proyectoId => {
        dispatch({
            type: OBTENER_TAREAS,
            payload: proyectoId
        })
    }

    // Agregar tareas a un proyecto
    const agregarTarea = tarea => {
        dispatch({
            type: AGREGAR_TAREA,
            payload: tarea
        })
    }

    // Validar formulario
    const mostrarError = () => {
        dispatch({
            type: VALIDAR_TAREA
        })
    }

    // Elimiar tarea
    const eliminarTarea = tareaId => {
        dispatch({
            type: ELIMINAR_TAREA,
            payload: tareaId
        })
    }

    return (
        <TareaContext.Provider
            value={{
                tareas: state.tareas,
                tareasproyecto: state.tareasproyecto,
                errortarea: state.errortarea,
                obtenerTareas,
                agregarTarea,
                eliminarTarea,
                mostrarError
            }}
        >
            {props.children}
        </TareaContext.Provider>
    )
}

export default TareaState;