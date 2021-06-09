import React from 'react';
import './nav.css';

function Nav(props) {
    return (
        <nav>
            <div>
                <h1 className="chinguTriviaTitle">Chingu Trivia</h1>
            </div>
            <div className="divNavUl">
                <ul className="navUl">
                    <li>
                        <button onClick={props.onClick} className="navItem">Home</button>
                    </li>
                    <li>
                        <button onClick={props.onClick} className="navItem">Questions</button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;