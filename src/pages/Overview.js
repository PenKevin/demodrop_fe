import React from 'react';
import { Link } from 'react-router-dom';
import './Overview.css';


function Overview() {
    return (
        <section className="container">
            <h1 className="header">Gebruikers Portal</h1>
            <div className="item">
                <h1 className="demo-list-title">Nieuwe Demo's</h1>
                <ul className="demo-list">
                    <li>Nieuwe demo tile 1</li>
                    <li>Nieuwe demo tile 2</li>
                    <li>Nieuwe demo tile 3</li>
                    <li>Nieuwe demo tile 4</li>
                    <li>Nieuwe demo tile 5</li>
                </ul>
                <h1>Upload je bestand hier:</h1>
            </div>
            <div className="item">
                <h1 className="demo-list-title">Top 5 Demo's</h1>
                <ul className="demo-list">
                    <li>Top 5 demo tile 1</li>
                    <li>Top 5 demo tile 2</li>
                    <li>Top 5 demo tile 3</li>
                    <li>Top 5 demo tile 4</li>
                    <li>Top 5 demo tile 5</li>
                </ul>
            </div>


           {/* <h1>Demo overzichtspagina</h1>
            <h3>Aantal demo's: {posts.length}</h3>
            <ul>
                {posts.map((post) => {
                    return <li key={post.id}>
                        <Link to={`blog/${post.id}`}>
                            {post.title}
                        </Link>
                    </li>
                })}
            </ul>*/}
        </section>
    );
}

export default Overview;