import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const Sidebar = async () => {
    const res = await fetch("https://shy-imported-dime.glitch.me/posts");
    const team = await res.json();
    const teamInfo = team.map((team) => team.team);
    const sortedTeams = teamInfo.slice().sort((a, b) => a.name.localeCompare(b.name));

    return (
        <div className='sidebar'>
            <ul>
                {sortedTeams?.map((team, key) => (
                    <li key={key}>
                        <Link href={`/board/${team.abbreviation}`}>
                            <Image src={team.logo}
                                alt="logo"
                                width={500}
                                height={500}
                            />
                            <div className='text'>{team.name}</div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};


export default Sidebar;
