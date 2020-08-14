import React, { Fragment, useState } from 'react';

const NuevoProyecto = () => {

    const [ proyecto, setProyecto ] = useState({
        nombre: ''
    });
    const [ error, setError ] = useState(false);

    const { nombre } = proyecto;

    const onChangeProyecto = e => {
        setProyecto({
            ...proyecto,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitProyecto = e => {
        e.preventDefault();

        if( nombre.trim() === '' ) {
            setError(true);
            return
        }
    }

    return ( 
        <Fragment>

            <button
                type="button"
                className="btn btn-block btn-primario"
            >Nuevo proyecto</button>

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

        </Fragment>
     );
}
 
export default NuevoProyecto;