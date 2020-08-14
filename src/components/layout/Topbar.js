import React from 'react';

const Topbar = () => {
    return ( 
        <header className="app-header">
            <p className="nombre-usuario">Bienvenido <span>Aldimir</span>!</p>

            <nav className="nav-principal">
                <a href="#!">Cerrar sesión</a>
            </nav>
            
        </header>
     );
}
 
export default Topbar;