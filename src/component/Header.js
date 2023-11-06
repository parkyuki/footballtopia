'use client'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react';
import React from 'react';
import Image from 'next/image';
import logo from '@/assets/img/logo.png'
import Link from 'next/link';

const Header = () => {
    const [loginId, setLoginId] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const session = window.sessionStorage;
        const storedLoginId = session.getItem("loginId");
        if (storedLoginId) {
            setIsLoggedIn(true);
            setLoginId(storedLoginId)
        }
    }, []);

    const handleLogout = () => {
        const session = window.sessionStorage;
        session.removeItem("loginId");
        setIsLoggedIn(false);
        setLoginId("");
    }

    const router = useRouter();
    const onClickHandle = () => {
        router.push('/');
        router.refresh()
    }
    return (
        <div className='header'>
            <div onClick={onClickHandle}>
                <Image
                    src={logo}
                    alt="logo"
                    width={200}
                    height={200}
                    loading='eager'
                />
            </div>
            <div>
                {isLoggedIn ?
                    <div>
                        {loginId}님
                        <button
                            className='logout'
                            onClick={handleLogout}>logout</button>
                    </div>
                    :
                    <Link href={"/login"}>
                        <button className='header-button'>login</button>
                    </Link>
                }
            </div>
        </div>
    );
};

export default Header;