import React from 'react';

const page = (props) => {
    const { id, subid } = props.params;
    console.log(id, subid)
    return (
        <div>
            1111
        </div>
    );
};

export default page;