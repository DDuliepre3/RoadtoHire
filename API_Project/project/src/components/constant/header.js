import React from 'react';
import {NavLink} from 'react-router-dom';
import auth0Client from '../../Auth';

const topBar = () => {
    return(
        
        <div>
            <header>
                <nav className="navbar--top">
                    <ul>
                        <li><NavLink to="/"><img src="https://images.vexels.com/media/users/3/135991/isolated/lists/ee03f76ed0711b770c0c797d83bd2ea0-gaming-controller-icon.png" alt="logo" className="navbar__logo"/></NavLink></li>
                        <li className="navbar__links" id="selected"><NavLink activeClassName="active" to="/" exact>Home</NavLink></li>
                        <li className="navbar__links"><NavLink activeClassName="active" to="/products">Products</NavLink></li>
                        <li className="navbar__links"><NavLink activeClassName="active" to="/contact">Contact</NavLink></li>
                    {auth0Client.isAuthenticated() ? <li className="navbar__links"><NavLink to="/admin" activeClassName="active">Admin</NavLink></li> : null}                        
                    </ul>
                    {auth0Client.isAuthenticated() && (
                        <div className="navbar__auth">
                            <button className="header__auth" onClick={auth0Client.signOut} >Log Out</button>
                        </div>
                        // add username when logged in
                    )}
                    {!auth0Client.isAuthenticated() && (
                        <div className="navbar__auth">
                            <button className="header__auth" onClick={auth0Client.signIn} >Log In</button>
                        </div>
                    )}
                </nav>
            </header>
        </div>
    );
}

export default topBar;