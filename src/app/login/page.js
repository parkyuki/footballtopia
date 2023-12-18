"use client"
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

function Page() {
    const [loginId, setLoginId] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);
    const router = useRouter()

    useEffect(() => {
        const session = window.sessionStorage;
        const storedLoginId = session.getItem("loginId");
        if (storedLoginId) {
            setLoginId(storedLoginId);
            setIsLoggedIn(true);
        }
        setLoading(false);
    }, []);

    const handleLogin = () => {
        const session = window.sessionStorage;
        session.setItem("loginId", loginId);
        setIsLoggedIn(true);
        router.back();
    }

    const handleLogout = () => {
        const session = window.sessionStorage;
        session.removeItem("loginId");
        setIsLoggedIn(false);
        setLoginId("");
    }

    return (
        <div className='login'>
            {loading ? (
                <div>Loading...</div>
            ) : isLoggedIn ? (
                <div className='user'>
                    <div>{loginId}님 환영합니다.</div>
                    <button onClick={handleLogout}>로그아웃</button>
                </div>
            ) : (
                <div className='loginform'>
                    <input
                        type="text"
                        placeholder='닉네임'
                        autoComplete='off'
                        value={loginId}
                        onChange={(e) => { setLoginId(e.target.value) }}
                    />
                    <button onClick={handleLogin}>Login</button>
                </div>
            )}
        </div>
    );
}

export default Page;
