import { 
    OBTENER_TAREAS, 
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    ESTADO_TAREA,
    TAREA_ACTUAL,
    ACTUALIZAR_TAREA
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
                // Esta al reves para que haga el push al principio y la animacion quede
                // mas bonita
                tareas: [ action.payload, ...state.tareas ],
                errortarea: false
            }
        
        case VALIDAR_TAREA:
            return {
                ...state,
                errortarea: true
            }

        case ELIMINAR_TAREA:
            return {
                ...state,
                tareas: state.tareas.filter(tarea => tarea.id !== action.payload)
            }

        case ACTUALIZAR_TAREA:
        case ESTADO_TAREA:
            return {
                ...state,
                tareas: state.tareas.map(tarea => tarea.id === action.payload.id ? 
                    action.payload
                    : tarea),
                    tareaseleccionada: null
            }
    
        case TAREA_ACTUAL:
            return {
                ...state,
                tareaseleccionada: action.payload
            }

        default:
            return state;
    }
}