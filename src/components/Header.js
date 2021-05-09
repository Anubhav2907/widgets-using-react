import React from 'react';
const Header = () => {
    return (
        <div className = "ui secondary pointing menu">
            <a className="item" href="/">Accordian</a>
            <a className="item" href="/list">Search</a>
            <a className="item" href="/dropdown">Dropdown</a>
            <a className="item" href="/translate">Translate</a>
        </div>
    )
}
export default Header;