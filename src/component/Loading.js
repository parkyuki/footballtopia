import React from 'react';
import Image from 'next/image';
import logo from '@/assets/img/logo.png'

const Loading = () => {
    return (
        <div className='loading'>
             <Image 
                className='img'
                src={logo}
                alt="logo"
                width={300}
                height={300}
             />
        </div>
    );
};

export default Loading;