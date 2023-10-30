import Link from 'next/link';
import React from 'react';
import Postform from './Postform';


const Content = async ({ teamPath }) => {

    const ress = await fetch(`http://localhost:9999/${teamPath}`, { cache: 'no-cache' });
    const data = await ress.json();


    return (
        <div className='content'>
            <Postform teamPath={teamPath} />
            <div className='postlist'>
                {Array.isArray(data) ? (
                    data.reverse().map((topic) => (
                        <div className='post' key={topic.id}>
                            <Link href={`${teamPath}/${topic.id}`}>
                                <div>{topic.user}</div>
                                <div>{topic.date}</div>
                                <div>{topic.body}</div>
                            </Link>
                        </div>
                    ))
                ) : (
                    <div className='empty'>등록된 글이 없습니다.</div>
                )}

            </div>
        </div>
    );


};

export default Content;