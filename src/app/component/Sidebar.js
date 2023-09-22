import React from 'react';


const Sidebar = ({team}) => {

    return (
        <div>
            <ul>
                {team?.map((team,key)=>(
                    <li key={key}>{team.team.name}</li>
                ))}
            </ul>
        </div>
    );
};


export default Sidebar;
