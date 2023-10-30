"use client"
import { MdSend } from 'react-icons/md';
import { useRouter } from 'next/navigation';
import post from '@/app/apis/post';
import React, { useState } from 'react';

export default function Postform({ teamPath }) {
    const router = useRouter()
    const [body, setBody] = useState("")
    const [date, setDate] = useState(new Date().toLocaleDateString())

    const handlePost = () => {
        const session = window.sessionStorage;
        const user = session.getItem("loginId")
        setDate(new Date().toLocaleDateString());
        post(user, date, body, teamPath);
        router.refresh();
        setBody("")
    }

    return (
        <div className='postform'>
            <div className='bar'>
                <textarea value={body} placeholder='메세지를 입력하세요'
                    onChange={(e) => { setBody(e.target.value) }} />
                <button onClick={handlePost}>
                    <MdSend />
                </button>
            </div>
        </div>
    );
}