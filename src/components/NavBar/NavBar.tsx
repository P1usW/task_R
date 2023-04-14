import React from 'react';
import {NavLink} from "react-router-dom";
import SearchInput from "../Input/SearchInput";

import '../../style/_nav.scss'

interface NavBarProps {
    search: string,
    setSearch: React.Dispatch<string>
}

const NavBar = ({search, setSearch}: NavBarProps) => {
    return (
        <header className='head'>
            <nav className='nav-bar'>
                <div className='nav-bar_left'>
                    <NavLink className='nav-item' to='/'>Refloor</NavLink>
                    <NavLink className='nav-item' to='/calc'>Калькулятор</NavLink>
                </div>
                <div className='nav-bar_right'>
                    <SearchInput search={search} setSearch={setSearch}/>
                </div>
            </nav>
        </header>
    );
};

export default NavBar;