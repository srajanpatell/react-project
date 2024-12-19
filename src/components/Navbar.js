import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <h4 className='fname'>Srajan</h4>
      <h4 className='lname'>Patel</h4>

      
      <div className="navbar-links">
        <Link to="/" className="nav-link" activeClassName="active">Educational Background</Link>
        <Link to="/features" className="nav-link" activeClassName="active">Skills</Link>
        <Link to="/about" className="nav-link" activeClassName="active">Contact</Link>
      </div>
    </nav>
  );
}
