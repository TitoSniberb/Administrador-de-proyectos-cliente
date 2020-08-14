import React from 'react';

const FormTarea = () => {
    return ( 
        <div className="formulario">
            <form>

                <div className="contenedor-input">
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Nombre de la tarea"
                        autoComplete="off"
                        name="nombre"
                    />
                </div>

                <div className="contenedor-input">
                    <input
                        type="submit"
                        className="btn btn-primario btn-submit btn-block"
                        placeholder="Nombre de la tarea"
                        name="Agregar tarea"
                    />
                </div>

            </form>
        </div>
        
     );
}
 
export default FormTarea;