import React, { useContext, useState, useEffect } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';

const FormTarea = () => {

    // Extraer context necesario
    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;
    
    // Context tarea
    const tareasContext = useContext(tareaContext)
    const { 
        agregarTarea, 
        mostrarError, 
        obtenerTareas,
        actualizarTarea, 
        errortarea, 
        tareaseleccionada } = tareasContext;
    
    // Effect que detecta si hay una tarea seleccionada
    useEffect(() => {
        if( tareaseleccionada !== null) {
            setTarea(tareaseleccionada)
        } else {
            setTarea({
                nombre: ''
            })
        }
    }, [tareaseleccionada]);

    // State del formulario
    const [ tarea, setTarea ] = useState({
        nombre: '',
    });
    
    // Extraer el nombre del proyecto
    const { nombre } = tarea;
    
    // Si no hay ningun proyecto seleccionado
    if(!proyecto) return null;
 
    // Extraer proyecto actual con array destructuring
    const [ proyectoActual ] = proyecto;

    // Crear tarea nueva
    const onChangeTarea = e => {
        setTarea({
            ...tarea,
            [e.target.name]: e.target.value
        })
    }

    // Agregar tarea nueva
    const onSubmitTarea = e => {
        e.preventDefault();

        // Validamos
        if (nombre.trim() === '') {
            mostrarError();
            return;
        }

        // Es una tarea nueva o estas editando?
        if (tareaseleccionada === null) {
            tarea.proyecto = proyectoActual.id
            agregarTarea(tarea); 
        }
        else actualizarTarea(tarea);

        obtenerTareas(proyectoActual.id);

        // Reiniciamos formulario
        setTarea({
            nombre: ''
        });
        
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
                        value={tareaseleccionada ? 'Editar tarea' : "Agregar tarea"}
                    />
                </div>
            </form>
            { errortarea ? <p className="mensaje error">El nombre de la tarea es obligatorio</p> 
            : null}
        </div>
        
     );
}
 
export default FormTarea;