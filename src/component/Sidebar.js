import Link from 'next/link';
import React from 'react';


const Sidebar = ({ teamInfo }) => {

    const sortedTeams = teamInfo.slice().sort((a, b) => a.name.localeCompare(b.name));

    return (
        <div className='sidebar'>
            <ul>
                {sortedTeams?.map((team, key) => (
                    <li key={key}>
                        <Link href={`/board/${team.abbreviation}`}>
                            {team.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};


export default Sidebar;
