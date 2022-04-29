import React from 'react';
import "./Home.css";
import {NavLink} from "react-router-dom";

function Home() {
    return (
        <section className="container">
            <div className="item">
                <h1 className="item-b">DemoDrop</h1>
                <p className="item-b">Welkom op DemoDrop. In samenwerking met Don Diablo is het nu mogelijk om hier eenvoudig je demo te droppen. Ons team kan je demo voorzien van feedback en commentaar en wellicht contact opnemen om jouw demo te gebruiken in een van zijn nieuwe hits!</p>
                <ul className="item-b">
                    <li>
                        <h4>Maak nu een account aan!</h4>
                    </li>
                    <li>
                        <NavLink to="/sign-up">
                            Aanmelden
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div className="item">
                <h1 className="item-b">Top 5 Demo's</h1>
                <ul className="demo-list">
                    <li>Top 5 demo tile 1</li>
                    <li>Top 5 demo tile 2</li>
                    <li>Top 5 demo tile 3</li>
                    <li>Top 5 demo tile 4</li>
                    <li>Top 5 demo tile 5</li>
                </ul>
            </div>
        </section>
    );
}

export default Home;