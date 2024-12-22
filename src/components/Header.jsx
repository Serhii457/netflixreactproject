import React from 'react';
import netflixLogo from '../assets/netflix-logo.png';
import searchIcon from '../assets/fe_search.png';
import avatarIcon from '../assets/Ellipse 2.png';
function Header(props) {
    
    return (
        <div>
            <header className="top-part">
            <div className="top-left">
                <div className="netflix-logo">
                    <img src={netflixLogo} alt="Logo Netflix"/>
                </div>
                <div>
                    <h4 className="date">
                        Friday July 8th
                    </h4>
                </div>
            </div>
            <div className="top-right">
                <img className="search-icon" src={searchIcon} alt="Search"/>
                <img className="avatar-icon" src={avatarIcon} alt="Ellipse"/>
            </div>
    </header>
        </div>
    );
}
export default Header;



