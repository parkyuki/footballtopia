import React from 'react';

const page = async (props) => {
    const { id, subid } = props.params;

    const res = await fetch(`http://localhost:9999/${id}/${subid}`);
    const data = await res.json();
    console.log(props)



    return (
        <div className='comments'>
            111
        </div>
    );
};

export default page;