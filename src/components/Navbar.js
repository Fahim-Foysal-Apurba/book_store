import React from 'react';
import { exportToCSV } from '../utils/csvExport';

const Navbar = ({ books }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
      <div className="container">
        <a className="navbar-brand" href="/">Book Explorer</a>
        <button className="btn btn-outline-light" onClick={() => exportToCSV(books)}>
          Export to CSV
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

