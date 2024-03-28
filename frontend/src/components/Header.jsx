import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-purple-900 text-white px-4 md:px-8 py-6">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-xl md:text-3xl font-semibold"><a href="/">Performance Tracker</a></h1>
                <nav>
                    <ul className="text-sm md:text-base flex space-x-4">
                        <li><Link to="/home" className="hover:text-white">Home</Link></li>
                        <li><Link to="/addMentor" className="hover:text-white">Add Mentor</Link></li>
                        <li><Link to="/" className="hover:text-white">Select Mentor</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;