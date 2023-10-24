import Link from 'next/link';
import React from 'react';

const Content = async (props) => {
    const { data, teamPath } = props;
    console.log(teamPath);
    return (
        <div className='contents'>
            {data?.map((topic) => (
                <Link
                    key={topic.topic.id}
                    href={`${teamPath}/${topic.topic.id}`}
                    className='content'>
                    <div >{topic.topic.id}{topic.topic.user}</div>
                </Link>
            ))}
        </div>
    );
};

export default Content;