import React, { useReducer } from 'react';
import authContext from './authContext';
import authReducer from './authReducer';
import clienteAxios from '../../config/axios';

import { 
    REGISTRO_EXITOSO,
    REGISTRO_ERROR,
    OBTENER_USUARIO,
    LOGIN_EXITOSO,
    CERRAR_SESION
} from '../../types';

const AuthState = props => {

    const initialState = {
        token: localStorage.getItem('token'),
        autenticado: null,
        usuario: null,
        mensaje: null
    }

    const [ state, dispatch ] = useReducer(authReducer, initialState);

    const registrarUsuario = async datos => {
        try {
            const res = await clienteAxios.post('/api/usuarios', datos);
            console.log(res.data);
            dispatch({
                type: REGISTRO_EXITOSO,
                payload: res.data
            })
            
        } catch (error) {
            //console.log(error.response.data);
            const alerta = {
                msg: error.response.data.msg,
                categoria: 'alerta-error'
            }
            dispatch({
                type: REGISTRO_ERROR,
                payload: alerta
            })
        }
    }

    return ( 
        <authContext.Provider
            value={{
                token: state.token,
                autenticado: state.autenticado,
                usuario: state.usuario,
                mensaje: state.mensaje,
                registrarUsuario
            }}
        >
            {props.children}
        </authContext.Provider>
    );
}
 
export default AuthState;