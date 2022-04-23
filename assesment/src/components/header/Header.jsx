import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

export default function Header() {
  return (
    <div className="header">
      <Link className="buttonbig" to="/">Home</Link>
      <Link className="buttonbig" to="/profile">Profile</Link>
    </div>
  );
}
