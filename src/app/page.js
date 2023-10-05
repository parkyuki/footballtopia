"use client"
import React from 'react';
import { useEffect,useState } from 'react';
import Image from 'next/image';

export default function Home() {

  const [team, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
     try {
         const res = await fetch("http://localhost:9999/posts");
         const result = await res.json();
         setData(result);
      } catch (error) {
         console.error('Error fetching data: ', error);
        throw error;
      }
    }
     fetchData();
  }, []);


  return (
    <div className="home">
      {team ? (
        <div className='table'>
          <tr>
            <th>순위</th>
            <th style={{width:'50%'}}>클럽</th>
            <th>경기</th>
            <th>승</th>
            <th>무</th>
            <th>패</th>
            <th>득점</th>
            <th>실점</th>
            <th>득실</th>
            <th>승점</th>
          </tr>
        {team.map((team,key)=>(
        <tr key={key}>
          <td>{key+1}</td>
          <td>
           <div className='teamName'>
            <Image src={team.team.logo}
              alt="logo"
              width={500}
              height={500}
              style={{
                width: '20%',
                height: 'auto',
            }}/>
            <div>
             {team.team.abbreviation}
            </div>
            </div>
          </td>
          <td>{team.stats.gamesPlayed}</td>
          <td>{team.stats.wins}</td>
          <td>{team.stats.gamesPlayed-team.stats.losses-team.stats.wins}</td>
          <td>{team.stats.losses}</td>
          <td>{team.stats.goalsFor}</td>
          <td>{team.stats.goalDifference}</td>
          <td>{team.stats.goalsAgainst}</td>
          <td>{team.stats.points}</td>
        </tr>
        ))}</div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

