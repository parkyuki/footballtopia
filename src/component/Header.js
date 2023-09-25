import React from 'react';
import Image from 'next/image';
import logo from '@/assets/img/logo.png'

const Header = () => {
    return (
        <div className='header'>
            <div className='logo'>
             <Image 
                src={logo}
                alt="logo"
                width={300}
                height={300}
                style={{ width: "100%", height: "auto" }}/>
            </div>
            <div>
                <button className='header-button'>login</button>
                <button className='header-button'>join</button>
           </div>
        </div>
    );
};

export default Header;