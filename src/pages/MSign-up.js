import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

function MSignUp() {
    // state voor het formulier
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [adres, setAdres] = useState('');
    const [postcode, setPostcode] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // state voor functionaliteit
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);

    // we maken een canceltoken aan voor ons netwerk-request
    const source = axios.CancelToken.source();
    const history = useHistory();

    // mocht onze pagina ge-unmount worden voor we klaar zijn met data ophalen, aborten we het request
    useEffect(() => {
        return function cleanup() {
            source.cancel();
        }
    }, []);

    async function handleSubmit(e) {
        e.preventDefault();
        toggleError(false);
        toggleLoading(true);

        try {
            await axios.post('http://localhost:3000/register', {
                email: email,
                password: password,
                username: username,
            }, {
                cancelToken: source.token,
            });

            // als alles goed gegaan is, linken we dyoor naar de login-pagina
            history.push('/login');
        } catch(e) {
            console.error(e);
            toggleError(true);
        }

        toggleLoading(false);
    }

    return(

        <section className="login-container">
            <h1>Aanmelden</h1>
            <p>Om u aan te melden dient u de volgende gegevens in te vullen:</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstname">
                    Voornaam:
                    <input
                        type="text"
                        id="firstname-field"
                        name="firstname"
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value)}
                    />
                </label>
                <label htmlFor="lastname">
                    Achternaam:
                    <input
                        type="text"
                        id="lastname-field"
                        name="lastname"
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                    />
                </label>
                <label htmlFor="adres">
                    Adres:
                    <input
                        type="text"
                        id="adres-field"
                        name="adres"
                        value={adres}
                        onChange={(e) => setAdres(e.target.value)}
                    />
                </label>
                <label htmlFor="postcode">
                    Postcode:
                    <input
                        type="text"
                        id="postcode-field"
                        name="postcode"
                        value={postcode}
                        onChange={(e) => setPostcode(e.target.value)}
                    />
                </label>
                <label htmlFor="city">
                    Stad:
                    <input
                        type="text"
                        id="city-field"
                        name="city"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                </label>
                <label htmlFor="country">
                    Land:
                    <input
                        type="text"
                        id="country-field"
                        name="country"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                    />
                </label>
                <label htmlFor="email">
                    Email:
                    <input
                        type="email"
                        id="email-field"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <label htmlFor="username">
                    Gebruikersnaam:
                    <input
                        type="text"
                        id="username-field"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </label>
                <label htmlFor="password">
                    Wachtwoord:
                    <input
                        type="password"
                        id="password-field"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                {error && <p className="error">Dit account bestaat al. Probeer een ander emailadres.</p>}
                <button
                    type="submit"
                    className="form-button"
                    disabled={loading}
                >
                    Registreren
                </button>
            </form>
            <p>Maak je geen deel uit van het managementteam? Meld je dan <Link to="/msign-up">hier</Link> aan.</p>
        </section>
    )

}

export default MSignUp;