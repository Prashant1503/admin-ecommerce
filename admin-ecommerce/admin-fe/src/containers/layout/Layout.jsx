import React from 'react';
import './layout.css';

import { Nav } from 'react-bootstrap';

const Layout = () => {
    return (
        <div class="sidebar">
            <a class="active" href="#home">Home</a>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
        </div>
    )
}

export default Layout;
