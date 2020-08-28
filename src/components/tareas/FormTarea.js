import React, { useContext, useState } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';

const FormTarea = () => {

    // Extraer context necesario
    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;
    const tareasContext = useContext(tareaContext)
    const { agregarTarea, mostrarError, obtenerTareas, errortarea } = tareasContext;

    const [ tarea, setTarea ] = useState({
        nombre: '',
    });

    const { nombre } = tarea;

    if(!proyecto) return null;
 
    // Extraer proyecto actual
    const [ proyectoActual ] = proyecto;

    // Crear tarea nueva
    const onChangeTarea = e => {
        setTarea({
            [e.target.name]: e.target.value,
            estado: false,
            proyectoId: proyectoActual.id
        })
    }

    // Agregar tarea nueva
    const onSubmitTarea = e => {
        e.preventDefault();

        // Validamos
        if (nombre.trim() === '') {
            mostrarError(true);
            return;
        }

        agregarTarea(tarea);
        // Reiniciamos formulario
        setTarea({
            nombre: ''
        });
        // Obtener nuevas tareas
        obtenerTareas(proyectoActual.id);
    }

    return ( 
        <div className="formulario">
            <form
                onSubmit={onSubmitTarea}
            >
                <div className="contenedor-input">
                    <input
                        name="nombre"
                        type="text"
                        className="input-text"
                        placeholder="Nombre de la tarea"
                        autoComplete="off"
                        value={nombre}
                        onChange={onChangeTarea}
                    />
                </div>

                <div className="contenedor-input">
                    <input
                        name="Agregar tarea"
                        type="submit"
                        className="btn btn-primario btn-submit btn-block"
                        placeholder="Nombre de la tarea"
                        value="Agregar tarea"
                    />
                </div>
            </form>
            { errortarea ? <p className="mensaje error">El nombre de la tarea es obligatorio</p> 
            : null}
        </div>
        
     );
}
 
export default FormTarea;