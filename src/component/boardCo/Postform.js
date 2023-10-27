"use client"
import { MdSend } from 'react-icons/md';

import React from 'react';

export default function Postform() {
    return (
        <div className='postform'>
            <textarea name="body" placeholder='body' />
            <button type="submit">
                <MdSend />
            </button>
        </div>
    );
}