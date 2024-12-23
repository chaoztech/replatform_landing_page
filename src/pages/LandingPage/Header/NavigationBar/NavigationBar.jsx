import {useState} from 'react';
import { Link, NavLink } from "react-router-dom";

import logo from "../../../../assets/RePlatform_logo.png";
import hamburgerLogo from "../../../../assets/commonImages/hamburger-full-width.svg";
import closeLogo from "../../../../assets/commonImages/close.svg";

import "./NavigationBar.scss";

const NavigationBar = () => {

    const [isSticky, setIsSticky] = useState(false);
    const [isMobileView, setIsMobileView] = useState(false);

    const toggleMobileView = () => {
        setIsMobileView((prev) => (!prev));
    }

    const user = false;
    return (
        <nav className={`${isMobileView ? "navigation-mobile-view" : "navigation-bar-wrapper" } ${isSticky ? "sticky" : ""}`}>
            <div className='left-part'>
                <div className='replatform-logo'>
                    <NavLink to={"/"} > <img src={logo} alt="" /> </NavLink>
                </div>
                {isMobileView && 
                    <div className="hamburger-menu">
                        <img className="close" src={closeLogo} alt="close" onClick={toggleMobileView} />
                    </div> 
                }
            </div>
            <div className="navigation-link-section">
                <ul>
                    <li>
                        <a href="/#demo">Demo</a>
                    </li>
                    <li>
                        <a href="/#features">Features</a>
                    </li>
                    <li>
                        <a href="/#blog">Blog</a>
                    </li>
                    <li>
                        <a href="https://chaoztech.github.io/portfolio/" target='_blank'>Project</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                    <li>
                        {/* conditional user name rendring  */}
                        {user ? (
                            <Link to={"/dashboard"} className="dashboard-link">
                                <button className="dashboard-button">
                                    {user.name}
                                    <span className="live-indicator"></span>
                                </button>
                            </Link>
                        ) : (
                            <Link className='login-link' to={"/login"}>
                                <button className="login-btn">
                                    Login
                                </button>
                            </Link>
                        )}
                    </li>
                </ul>

                <div id="indicator"></div>    
            </div>
            { !isMobileView &&
                <div className="hamburger-menu">
                    <img src={hamburgerLogo} alt="hamburger" onClick={toggleMobileView} />
                </div>
            }
        </nav>
    )
}

export default NavigationBar;