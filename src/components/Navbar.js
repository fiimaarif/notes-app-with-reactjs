import React from 'react';

export default function Navbar({ searchTitle, onSearch }) {
  return (
    <nav className="navbar navbar-light bg-light sticky-top">
      <div className="container">
        <a className="navbar-brand text-success" href="/">
          Notes-app
        </a>
        <form className="d-flex w-50">
          <input
            className="form-control me-2 shadow-none rounded-pill"
            type="text"
            placeholder="Search Note title..."
            aria-label="Search"
            value={searchTitle}
            onChange={onSearch}
          />
        </form>
      </div>
    </nav>
  );
}
