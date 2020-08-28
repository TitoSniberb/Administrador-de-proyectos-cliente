import React, { useReducer } from 'react';
import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer';
import { 
    OBTENER_TAREAS, 
    AGREGAR_TAREA
} from '../../types/index';

const TareaState = props => {
    const initialState = {
        tareas: [
            { nombre: 'CSS Calendario', estado: true, proyectoId: 1 },
            { nombre: 'Terminar APIs', estado: false, proyectoId: 2 },
            { nombre: 'Pegarse dos tiros', estado: false, proyectoId: 3 },
            { nombre: 'CSS Calendario', estado: true, proyectoId: 1 },
            { nombre: 'Terminar APIs', estado: false, proyectoId: 3 },
            { nombre: 'Pegarse dos tiros', estado: false, proyectoId: 1 },
        ],
        tareasproyecto: null
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

    return (
        <TareaContext.Provider
            value={{
                tareas: state.tareas,
                tareasproyecto: state.tareasproyecto,
                obtenerTareas,
                agregarTarea
            }}
        >
            {props.children}
        </TareaContext.Provider>
    )
}

export default TareaState;