import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

const Header = () => {
    return (
        <header className="level">
            <i className="mdi mdi-repeat ml-5 icon-logo" />
            <Link
                to="/"
                className="level-left level-item title is-3 mt-4 ml-3 is-lowercase"
            >
                Stream Connect
            </Link>
            <div className="level-right mr-5">
                <Link
                    to="/"
                    className="button is-link is-light has-text-black level-item mr-3"
                >
                    All Streams
                </Link>
                <GoogleAuth />
            </div>
        </header>
    );
};

export default Header;
