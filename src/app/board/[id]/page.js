import React from 'react';
import Image from 'next/image';

const page = async (props) => {

    //클릭한 팀
    const teamPath = props.params.id;
    //클릭한 팀 찾아서 데이터 불러오기 
    const res = await fetch("http://localhost:9999/posts");
    const team = await res.json();
    const teamInfo = team.find((team) => team.team.abbreviation === teamPath);
    const logo = teamInfo.team.logo;
    const info = teamInfo.stats;

    return (
        <div className='board'>
            <div className='team'>
                <Image
                    src={logo}
                    alt="logo"
                    width={300}
                    height={300}
                />
                <div className={`name ${teamPath}`}>
                    {teamInfo.team.name}
                </div>
                <div className='info'>
                    {info.rank}위 {info.wins}승 {info.ties}무 {info.losses}패 {info.points}승점 {info.goalsFor}
                </div>
            </div>

        </div>
    );
};

export default page;