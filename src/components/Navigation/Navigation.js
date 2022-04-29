import React, {useContext} from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import './Navigation.css';
import logo from '../../assets/oie_transparent.png';
import {AuthContext} from "../../context/AuthContext";

function Navigation() {
    const { isAuth, logout } = useContext(AuthContext);
    const history = useHistory();

    return (
        <nav>
            <img src={logo} alt="Demo Drop logo"/>
            <ul>
                <li className="image-logo">

                </li>
                <li>
                    <NavLink to="/">
                        Home
                    </NavLink>
                </li>
                {isAuth ?
                    <>
                        <li>
                            <NavLink onClick={() => history.push('/overview')} to="/overview">
                                Portal
                            </NavLink>
                        </li>
                        <li onClick={logout}>
                            <NavLink to="/">
                                Uitloggen
                            </NavLink>
                        </li>
                    </>
                    :
                    <>
                        <li>
                            <NavLink to="/login">
                                Login
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/sign-up">
                                Aanmelden
                            </NavLink>
                        </li>
                    </>
                }

            </ul>
        </nav>
    );
}

export default Navigation;