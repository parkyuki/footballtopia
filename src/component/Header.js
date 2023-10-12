import React from 'react';
import Image from 'next/image';
import logo from '@/assets/img/logo.png'
import Link from 'next/link';

const Header = () => {
    return (
        <div className='header'>
            <Link href={"/"}>
                <Image
                    src={logo}
                    alt="logo"
                    width={300}
                    height={300}
                />
            </Link>
            <div>
                <Link href={"/login"}>
                    <button className='header-button'>login</button>
                </Link>
                <button className='header-button'>join</button>
            </div>
        </div>
    );
};

export default Header;