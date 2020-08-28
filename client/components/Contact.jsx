import React from 'react'
import { HashRouter as NavLink, Link } from 'react-router-dom';

import Header from './Header'
import Footer from './Footer'

class Contact extends React.Component {


    render() {
        return (
            <React.Fragment>
              <Header />
              <div className="mainTitle borderBottom">HOW CAN I GET IN CONTACT?
              </div>
              <div className="aboutBody">
   
              <div className="mainText">

              </div>
              </div>
              <Footer />
            </React.Fragment>

        )
    }
}


export default Contact