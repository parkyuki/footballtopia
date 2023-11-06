import Link from 'next/link';
import React from 'react';
import Postform from './Postform';
import { BsPersonCircle } from 'react-icons/bs';



const Content = async ({ teamPath }) => {

    const ress = await fetch(`https://shy-imported-dime.glitch.me/${teamPath}`, { cache: 'no-cache' });
    const data = await ress.json();


    return (
        <div className='content'>
            <Postform id={teamPath} />
            <section className='postlist'>
                {data && data.length > 0 ? (
                    data.reverse().map((topic) => (
                        <article className='posts' key={topic.key}>
                            <Link href={{
                                pathname: `${teamPath}/${topic.id}`,
                            }}
                            >
                                <div className='info'>
                                    <BsPersonCircle />
                                    <div className='user'>
                                        <h4>{topic.user}</h4>
                                        <div className='date'>{topic.date}</div>
                                    </div>
                                </div>
                                <div className='body'>
                                    {topic.body}
                                </div>
                            </Link>
                        </article>

                    ))
                ) : (
                    <div className='empty'>등록된 글이 없습니다.</div>
                )}

            </section>
        </div>
    );


};

export default Content;