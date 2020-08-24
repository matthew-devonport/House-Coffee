import React from 'react'




class Nav extends React.Component {


    render() {
        return (
            <React.Fragment>
                <div className="navFlex">
<div className="navMain">
    <img src="./img/logo.png" alt="Main Logo" className="mainLogo"></img>
    </div>
<div className="navLink">
    <div className="links">HOME</div>
    <div className="links">COFFEE</div>
    <div className="links">CONTACT</div>
</div>
</div>

            </React.Fragment>

        )
    }
}


export default Nav