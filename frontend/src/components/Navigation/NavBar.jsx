import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';



const Navbar = () => {
  return (
    <nav>
      <div className="navbar">
        <div className="logo">
          <img src="https://amw.gdynia.pl/images/AMW/Logotypy/AMW/amw2.png" alt="AMW Logo" />
        </div>
        <ul>
          <li>
          <a href="/">Logowanie</a>
          </li>
          <li>
            <a href="/home">Strona Główna</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
