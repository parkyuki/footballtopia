"use client"
import { MdSend } from 'react-icons/md';
import { useRouter } from 'next/navigation';
import { post, postComment } from '@/app/apis/post';
import React, { useState } from 'react';

export default function Postform({ id, comments }) {
    console.log("sssid:" + id.subid);
    const router = useRouter()
    const [body, setBody] = useState("")
    const [date, setDate] = useState(new Date().toLocaleDateString())
    const [login, setLogin] = useState(false)


    const Checklogin = () => {
        const session = window.sessionStorage;
        const id = session.getItem("loginId")
        const noLogin = () => { alert("로그인이 필요합니다."), router.push('/login') }
        id ? setLogin(true) : noLogin()
    }
    const handlePost = () => {
        const session = window.sessionStorage;
        const user = session.getItem("loginId")
        setDate(new Date().toLocaleDateString());
        id.subid ? postComment(comments, user, date, body, id.id, id.subid) :
            post(user, date, body, id);
        router.refresh();
        setBody("")
    }

    return (
        <div className='postform'>
            <div className='bar'>
                <textarea value={body} placeholder='메세지를 입력하세요'
                    onClick={Checklogin}
                    onChange={(e) => { setBody(e.target.value) }} />
                <button disabled={!login} onClick={handlePost} >
                    <MdSend />
                </button>
            </div>
        </div>
    );
}