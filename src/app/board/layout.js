import React from 'react';

const layout = ({ children }) => {
    return (
        <div className='board'>
            {children}
        </div>
    );
};

export default layout;