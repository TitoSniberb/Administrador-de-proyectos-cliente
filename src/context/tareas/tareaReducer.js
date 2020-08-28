import { 
    OBTENER_TAREAS, 
    AGREGAR_TAREA
} from '../../types/index';

export default (state, action) => {
    switch(action.type) {
        
        case OBTENER_TAREAS:
            return {
                ...state,
                tareasproyecto: state.tareas.filter(tarea => tarea.proyectoId === 
                    action.payload)
            }

        case AGREGAR_TAREA:
            return {
                ...state,
                tareas: [...state.tareas, action.payload]
            }

        default:
            return state;
    }
}