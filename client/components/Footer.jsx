import React from 'react'
import { HashRouter as NavLink, Link } from 'react-router-dom';

class Footer extends React.Component {


    render() {
        return (
            <React.Fragment>
                <div className="footerFlex">
                    <div className="footerLink"><a href="mailto:housecoffee@xtra.co.nz">housecoffee@xtra.co.nz</a></div>
                    <div className="footerInfo">Copyright &copy; 2020 House Coffee. All rights reserved.<br />
                     Website design and build by <a href="https://www.phearnoc.com" target="_blank">PHEARNOC Digital</a></div>
                    <div className="footerLink"><a href="tel:021842319">021 842 319</a></div>
                </div>
            </React.Fragment>

        )
    }
}


export default Footer