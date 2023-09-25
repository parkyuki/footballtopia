import React from 'react';


const Sidebar = ({teamName}) => {

    return (
        <div className='sidebar'>
            <ul>
                {teamName?.map((team,key)=>(
                    <li key={key}>{team}</li>
                ))}
            </ul>
        </div>
    );
};


export default Sidebar;
