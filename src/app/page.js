import React from 'react';
import Image from 'next/image';

export default async function Home() {

  const res = await fetch("http://localhost:9999/posts", { cache: 'no-store' });
  const team = await res.json();

  return (
    <div className="home">
      <table className='table'>
        <thead>
          <tr>
            <th>순위</th>
            <th style={{ width: '50%' }}>클럽</th>
            <th>경기</th>
            <th>승</th>
            <th>무</th>
            <th>패</th>
            <th>득점</th>
            <th>실점</th>
            <th>득실</th>
            <th>승점</th>
          </tr>
        </thead>
        <tbody>
          {team.map((team, key) => (
            <tr key={key}>
              <td>{key + 1}</td>
              <td>
                <div className='teamName'>
                  <Image src={team.team.logo}
                    alt="logo"
                    width={500}
                    height={500}
                    style={{
                      width: '20%',
                      height: 'auto',
                    }} />
                  <div>
                    {team.team.abbreviation}
                  </div>
                </div>
              </td>
              <td>{team.stats.gamesPlayed}</td>
              <td>{team.stats.wins}</td>
              <td>{team.stats.ties}</td>
              <td>{team.stats.losses}</td>
              <td>{team.stats.goalsFor}</td>
              <td>{team.stats.goalDifference}</td>
              <td>{team.stats.goalsAgainst}</td>
              <td>{team.stats.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

