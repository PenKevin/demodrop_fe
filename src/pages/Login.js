import React, {useContext, useState, useEffect} from 'react';
import {NavLink, Link} from 'react-router-dom';
import axios from 'axios';
import {AuthContext} from "../context/AuthContext";
import './Login.css';

function Login({ toggleAuth }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, toggleError] = useState(false);
    const {login} = useContext(AuthContext);
    const source = axios.CancelToken.source();

    useEffect(() => {
        return function cleanup(){
            source.cancel();
        }
    }, []);

    async function handleSubmit(e) {
        e.preventDefault();
        toggleError(false);

        try {
            const result = await axios.post('http://localhost:3000/login', {
                username: username,
                password: password,
            }, {
                cancelToken: source.token,
            });
            // log het resultaat in de console
            console.log(result.data);

            // geef de JWT token aan de login-functie van de context mee
            login(result.data.accessToken);

        } catch(e) {
            console.error(e);
            toggleError(true);
        }
    }

    return (
        <section className="login-container">
            <h1>Login</h1>
            <form onSubmit={handleSubmit} className="login-item">
                <label htmlFor="Gebruikersnaam">
                    Gebruikersnaam:
                    <input
                        type="input"
                        id="username-field"
                        name="gebruikersnaam"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </label>
                <label htmlFor="Wachtwoord">
                    Wachtwoord:
                    <input
                        type="password"
                        id="password-field"
                        name="wachtwoord"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                {error && <p className="error">Combinatie van gebruikersnaam en wachtwoord in incorrect</p>}

                <button
                    type="submit"
                    className="form-button"
                >
                    Inloggen
                </button>
            </form>

            <ul className="login-item">
                <li>
                    <h4>Maak nu een account aan!</h4>
                </li>
                <li>
                    <NavLink to="/sign-up">
                        Aanmelden
                    </NavLink>
                </li>
            </ul>

        </section>
    );
}

export default Login;