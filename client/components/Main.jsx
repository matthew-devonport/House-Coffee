import React from 'react'
import { HashRouter as NavLink, Link } from 'react-router-dom';


class Main extends React.Component {


    render() {
        return (
            <React.Fragment>
                    <div className="mainTitle borderBottom">ALL THE LATEST BRANDS OF DESIGNER ESPRESSO MACHINES IN NEW ZEALAND
                    </div>
                <div className="mainBody">
                    <div className="mainText">House Coffee New Zealand supply designer coffee machines to domestic consumers and offer servicing
                    options for a range of different brands and models, most notably the new Rocket Evoluzione Espresso
                    machine. This machine and others like it represent the absolute pinnacle of coffee machine
                    technology and are made of durable, stainless materials that are sure to consistently impress and
                    inspire. These attractive products will compliment any kitchen and retain an essence of timeless
                    style for years to come, not to mention save you money on store bought coffees!
                    </div>
                    <a href="https://rocket-espresso.co.nz/" target="_blank" className="learnButton">CLICK HERE TO LEARN MORE</a>
                </div>
            </React.Fragment>

        )
    }
}


export default Main