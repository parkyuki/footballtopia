import React from 'react';
import Link from 'next/link';

const page = () => {
    return (
        <div className='login'>
            <div className='loginform'>
                <input type="text" placeholder='아이디' name="id" />
                <input type="password" placeholder='비밀번호' name="pw" />
                <button>Login</button>
                <Link href={"/join"}>Join</Link>
            </div>
        </div>
    );
};

export default page;