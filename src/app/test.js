import React from 'react';

const test = () => { // const res = await fetch("http://localhost:9999/posts",{cache:"no-cache"});
  // const team = await res.json();
  const [mounted, setMounted] = useState(false);
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
      )}
    </div>
  )
}

export default test;