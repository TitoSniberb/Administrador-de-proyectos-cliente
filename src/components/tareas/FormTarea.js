import React, { useContext, useState } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';

const FormTarea = () => {

    // Extraer proyectos de state inicial
    const proyectosContext = useContext(proyectoContext);
    const { proyecto, agregarTarea } = proyectosContext;

    const [ tarea, setTarea ] = useState({
        nombre: '',
        estado: false,
        proyectoId: null
    });

    const { nombre } = tarea;

    if(!proyecto) return null;
 
    // Extraer proyecto actual
    const proyectoActual = proyecto;

    // Crear tarea nueva
    const onChangeTarea = e => {
        setTarea({
            [e.target.name]: e.target.value,
            estado: false,
            proyectoId: proyectoActual[0].id
        })
    }

    // Agregar tarea nueva
    const onSubmitTarea = e => {
        e.preventDefault();

        // Validamos
        if (nombre.trim() === '') {
            return;
        }

        agregarTarea(tarea)
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
        </div>
        
     );
}
 
export default FormTarea;