import { Component } from 'react';

import './header.css';

import { Link } from 'react-router-dom';

class Header extends Component {
    changeTheme;
    render() {
        document.body.style.backgroundColor = this.props.theme.background;
        this.changeTheme = this.props.theme.description === "dark" ? this.props.actions.changeToLightMode : this.props.actions.changeToDarkMode;
        return (
        <header style={{ backgroundColor: this.props.theme.elements, boxShadow: this.props.theme.shadow }} className="header row ml-0">
            <div className="header-left-side col-8 d-flex align-items-center">
                <Link className="header-title-container" to={"/"}>
                    <h3 style={{ color: this.props.theme.text }} className="header-title">
                        Where in the world?
                    </h3>
                </Link>
            </div>
            <div className="header-theme-changer col-4 d-flex align-items-center justify-content-end">
                <p className="header-theme-changer row">
                   <span className="mr-2" onClick={this.changeTheme}>
                       <img height={15} width={15} src={this.props.theme.moon} alt="moon" />
                    </span> 
                    <span style={{ color: this.props.theme.text }} onClick={this.changeTheme}>
                        Dark Mode
                    </span> 
                </p>
            </div>
        </header>
        )
    }
}


export default Header;