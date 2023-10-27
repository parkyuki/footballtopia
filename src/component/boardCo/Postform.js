"use client"
import { MdSend } from 'react-icons/md';

import React from 'react';

export default function Postform() {
    return (
        <div className='postform'>
            <div className='bar'>
                <textarea name="body" placeholder='body' />
                <button type="submit">
                    <MdSend />
                </button>
            </div>
        </div>
    );
}