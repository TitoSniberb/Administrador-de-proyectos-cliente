import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import AlertaContext from '../../context/alertas/alertaContext';
import AuthContext from '../../context/autenticacion/authContext';

const Register = () => {

    // Extraer valores del context
    const alertaContext = useContext(AlertaContext);
    const { alerta, mostrarAlerta } = alertaContext;

    const authContext = useContext(AuthContext);
    const { registrarUsuario } = authContext;

    // State para iniciar sesion
    const [ usuario, setUsuario ] = useState({
        nombre: '',
        email: '',
        password: '',
        confirmar: ''
    });

    const { nombre, email, password, confirmar } = usuario;

    const onChange = e => {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    };

    const onSubmit = e => {
        e.preventDefault();

        if( nombre.trim() === '' || email.trim() === '' || 
            password.trim() === '' || confirmar.trim() === '' ) {
            mostrarAlerta('Todos los campos son obligatorios', 'alerta-error');
            return;
        }

        if( password.length < 6 ) {
            mostrarAlerta('La contraseña tiene que tener al menos 6 caracteres', 'alerta-error');
            return;
        } 

        if( password != confirmar ) {
            mostrarAlerta('Las contraseñas no coinciden', 'alerta-error');
            return;
        }

        // Pasarlo al action
        registrarUsuario({
            nombre,
            email,
            password
        })
        
    }

    return ( 
        <div className="form-usuario">
            { alerta ? (<div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div> ) 
            : null }
            <div className="contenedor-form sombra-dark">
                <h1>Obtener una cuenta</h1>

                <form
                    onSubmit={onSubmit}
                >

                    <div className="campo-form">
                        <label htmlFor="nombre">Nombre</label>
                        <input 
                            type="text"
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