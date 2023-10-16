import Link from 'next/link';
import React from 'react';


const Sidebar = async () => {
    const res = await fetch("http://localhost:9999/posts");
    const team = await res.json();
    const teamInfo = team.map((team) => team.team);

    const sortedTeams = team.slice().sort((a, b) => a.name.localeCompare(b.name));

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
