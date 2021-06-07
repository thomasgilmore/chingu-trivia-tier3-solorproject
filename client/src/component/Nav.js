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
                        <a href="" className="navItem">Home</a>
                    </li>
                    <li>
                        <a href="" className="navItem">Questions</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;