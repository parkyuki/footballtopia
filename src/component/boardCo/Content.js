import Link from 'next/link';
import React from 'react';
import Postform from './Postform';


const Content = (props) => {
    const { data, teamPath } = props;
    console.log(teamPath);
    return (
        <div className='content'>
            <Postform />
            <div className='postlist'>
                {data?.map((topic) => (
                    <div className='post' key={topic.topic.id}>
                        <Link href={`${teamPath}/${topic.topic.id}`}>
                            <div >{topic.topic.user}</div>
                            <div>{topic.topic.date}</div>
                            <div>{topic.topic.body}</div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );


};

export default Content;