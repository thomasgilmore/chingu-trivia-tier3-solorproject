import React from 'react';
import './nav.css';

const Nav = () => {
    return (
        <nav>
            <div>
                <h1 className="chinguTriviaTitle">Chingu Trivia</h1>
            </div>
            <div className="divNavUl">
                <ul className="navUl">
                    <li>
                        <p className="navItem">Home</p>
                    </li>
                    <li>
                        <p className="navItem">Questions</p>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;