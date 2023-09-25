import React from 'react';


const Sidebar = ({teamName}) => {
    teamName.sort();
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
