import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {

    const [ usuario, setUsuario ] = useState({
        nombre: '',
        email: '',
        password: '',
        confirmar: ''
    });
    const [ error, setError ] = useState(false);

    const { nombre, email, password, confirmar } = usuario;

    const onChange = e => {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    };

    const onSubmit = e => {
        e.preventDefault();

        if( nombre.trim() === '' || email.trim() === '' || password.trim() === '' || confirmar.trim() === '' ) {
            setError(true);
            return

        } else {
            if( password != confirmar || password.length < 6 ) {
                setError(true);
                return
            
            } else {
                
            }
        }
    }

    return ( 
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">

                <h1>Obtener una cuenta</h1>

                <form>

                    <div className="campo-form">
                        <label htmlFor="nombre">Nombre</label>
                        <input 
                            type="email"
                            id="nombre"
                            name="nombre"
                            placeholder="Tu nombre"
                            autoComplete="off"
                            value={nombre}
                            onChange={onChange} 
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Tu email"
                            autoComplete="off"
                            value={email}
                            onChange={onChange} 
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Tu password"
                            autoComplete="off"
                            value={password}
                            onChange={onChange} 
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="confirmar">Confirmar password</label>
                        <input 
                            type="password"
                            id="confirmar"
                            name="confirmar"
                            placeholder="Repite tu password"
                            autoComplete="off"
                            value={confirmar}
                            onChange={onChange} 
                        />
                    </div>

                    <div className="campo-form">
                        <input type="submit" className="btn btn-primario btn-block" 
                            value="Registrarse"
                        />
                    </div>

                </form>
                <Link to={'/'} className="enlace-cuenta">
                    Ya tengo cuenta
                </Link>
            </div>
        </div>
     );
}

export default Register;