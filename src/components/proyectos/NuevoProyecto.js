import React, { Fragment, useState, useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';

const NuevoProyecto = () => {

    const proyectosContext = useContext(proyectoContext);
    const { 
        formulario, 
        errorformulario, 
        mostrarFormulario, 
        agregarProyecto, 
        mostrarError 
    } = proyectosContext;

    const [ proyecto, setProyecto ] = useState({
        nombre: ''
    });
    const { nombre } = proyecto;

    const onChangeProyecto = e => {
        setProyecto({
            ...proyecto,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitProyecto = e => {
        e.preventDefault();

        // Validar proyecto
        if( nombre === '' ) {
            mostrarError();
            return;
        }

        // Agregar al state
        agregarProyecto(proyecto);

        // Reiniciar el form
        setProyecto({
            nombre: ''
        })
    }

    return ( 
        <Fragment>

            <button
                type="button"
                className="btn btn-block btn-primario"
                onClick={() => mostrarFormulario()}
            >Nuevo proyecto</button>

            { formulario ?
                (
                    <form
                        className="formulario-nuevo-proyecto"
                        onSubmit={onSubmitProyecto}
                    >
                        <input
                            type="text"
                            name="nombre"
                            className="input-text"
                            placeholder="Nombre proyecto"
                            autoComplete="off"
                            value={nombre}
                            onChange={onChangeProyecto}
                        />
                        
                        <input
                            type="submit"
                            className="btn btn-primario btn-block"
                            placeholder="Nombre proyecto"
                            value="Agregar proyecto"
                        />

                    </form>
                )
                : null 
            }

            { errorformulario ? <p className="mensaje error">El nombre del proyecto es obligatorio</p> : null}

        </Fragment>
     );
}
 
export default NuevoProyecto;