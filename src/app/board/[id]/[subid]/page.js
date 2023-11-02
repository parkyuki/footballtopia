import React from 'react';
import { BsPersonCircle } from 'react-icons/bs';
import { MdSend } from 'react-icons/md';

const page = async (props) => {
    const { id, subid } = props.params;

    const res = await fetch(`http://localhost:9999/${id}/${subid}`, { cache: 'no-cache' });
    const data = await res.json();
    const comments = data.comments;
    console.log(comments)


    return (
        <section className='post'>
            <div className='topic'>
                <div className='info'>
                    <BsPersonCircle />
                    <div className='user'>
                        <h4>{data.user}</h4>
                        <div className='date'>{data.date}</div>
                    </div>
                </div>
                <div className='body'>
                    {data.body}
                </div>
            </div>
            <div className='commentForm'>
                <div className='bar'>
                    <textarea placeholder='메세지를 입력하세요'
                    />
                    <button >
                        <MdSend />
                    </button>
                </div>
            </div>
            <section className='comments'>
                {comments?.map((c, key) => (
                    <article key={key}>
                        <div className='info'>
                            <BsPersonCircle />
                            <div className='user'>
                                <h4>{c.user}</h4>
                                <div className='date'>{c.date}</div>
                            </div>
                        </div>
                        <div className='body'>
                            {c.body}
                        </div>
                    </article>
                ))}
            </section>
        </section >
    );
};

export default page;