import React from 'react';
import { NavBarProp } from './common.type';

const NavBar = (props: NavBarProp) => {
    return (
        <header className='navbar'>
            <div className='navbar__title navbar__item'>Techxotica</div>
            <div className='navbar__item'>Home</div>
            <div className='navbar__item'>Community</div>
            <div className='navbar__item'>Residences</div>
            <div className='navbar__item'>Availibility</div>
            <div className='navbar__item'>Vicinity</div>
        </header>
    );
};



export default NavBar;