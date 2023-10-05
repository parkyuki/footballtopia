
import Image from "next/image";


export default async function Home() {
  const res = await fetch("http://localhost:9999/posts",{cache:"no-cache"});
  const team = await res.json();
  
    return (
      <div className="home">
      <div><tr>
      <th>순위</th>
      <th>클럽</th>
      <th>경기</th>
      <th>승</th>
      <th>무</th>
      <th>패</th>
      <th>득점</th>
      <th>실점</th>
      <th>득실</th>
      <th>승점</th>
      </tr>
    {team ? (
        <div>
      {team.map((team,key)=>(
      <tr key={key} className="teamTable">
        <td>{key+1}</td>
        <td>
          <Image src={team.team.logo}
          alt="logo"
          width={500}
          height={500}
          style={{
            width: '20%',
            height: 'auto',
          }}
          />
          {team.team.abbreviation}</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      ))}</div>
    ) : (
      <p>Loading...</p>
    )}</div>
  </div>
)
}
