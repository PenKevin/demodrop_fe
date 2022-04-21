import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';

function Navigation({ isAuth, toggleAuth }) {
    const history = useHistory();

    function signOut() {
        toggleAuth(false);
        history.push('/')
    }

    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">
                        Home
                    </NavLink>
                </li>
                {isAuth === true
                    ? <>
                        <li>
                            <NavLink to="/blogposts">
                                Blogposts
                            </NavLink>
                        </li>
                        <li>
                            <button type="button" onClick={signOut}>
                                Uitloggen
                            </button>
                        </li>
                    </>
                    :
                    <li>
                        <NavLink to="/login">
                            Login
                        </NavLink>
                    </li>}
            </ul>
        </nav>
    );
}

export default Navigation;