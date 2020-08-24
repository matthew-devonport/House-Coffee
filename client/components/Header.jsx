import React from 'react'
import { HashRouter as NavLink, Link } from 'react-router-dom';

import Nav from './Nav'

class Header extends React.Component {


    render() {
        return (
            <React.Fragment>
                <img src="./img/housecoffee-header.jpg" alt="Header Picture" className="headerLogo"></img>
        <Nav />
            </React.Fragment>

        )
    }
}


export default Header