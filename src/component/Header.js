'use client'
import { useRouter } from 'next/navigation'
import React from 'react';
import Image from 'next/image';
import logo from '@/assets/img/logo.png'
import Link from 'next/link';

const Header = () => {
    const router=useRouter();
    const onClickHandle=()=>{
        router.push('/'); 
        router.refresh()
    }
    return (
        <div className='header'>
            <div  onClick={onClickHandle}>
                <Image
                    src={logo}
                    alt="logo"
                    width={300}
                    height={300}
                />
            </div>
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