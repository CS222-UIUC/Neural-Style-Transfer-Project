import React, { Component } from 'react';
import { MenuItems } from "./Pages.js"
import { Button } from "./Button.js"
import './Navbar.css'


class Navbar extends Component {
    state = { clicked: false } 
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }


    render() {
        return(
            <nav className = "NavbarItems">
                <h1 className = "navbar-logo">Neural Style Transfer Web App<i></i></h1>
                <div className="menu-icon" onClick = {this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className = {this.state.clicked ? 'nav-menu active' : 'nav-menu'} >
                    {MenuItems.map((item, index) => {
                        return(
                            <li key = {index}>
                                <a className = {item.cName} href={item.url}>
                                {item.icon}{item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default Navbar