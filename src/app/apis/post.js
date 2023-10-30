import React from 'react';

const post = async (user, date, body, teamPath) => {
    const res = await fetch(`http://localhost:9999/${teamPath}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ user, date, body, comments: {} })
    });

};

export default post;