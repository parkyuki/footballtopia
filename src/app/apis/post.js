import React from 'react';

export const post = async (user, date, body, teamPath) => {
    try {
        const res = await fetch(`http://localhost:9999/${teamPath}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ user, date, body, comments: [] })
        });
        if (res.ok) {
            console.log("post 성공")
        } else {
            console.error("post 실패")
        }

    } catch (error) {
        console.error("에러")
    }

};
export const postComment = async (comments, user, date, body, id, subid) => {
    try {
        const res = await fetch(`http://localhost:9999/${id}/${subid}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ comments: [...comments, { user, date, body }] })
        });

        if (res.ok) {
            console.log("comment 성공")
        } else {
            console.error("post 실패" + { user, date, body }, id, subid)
        }

    } catch (error) {
        console.error("에러")
    }
};

