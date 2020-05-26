import React, {useState, useEffect} from 'react';
import {doGet, getIdFromUrl} from '../../helpers/ApiHelper';
import {Link} from 'react-router-dom';
const Home = () => {

  const [people, setPeople] = useState([]);
  useEffect(() =>{
    doGet('/people').then(response => setPeople(response.results));

  },[]);

  if (!people || !people.length) {
    return <h1>Loading...</h1>;

  }
  
  const peoplelist=people.map(p =>{
    const id = getIdFromUrl(p.url);
    return (
     <li key={p.url}>
        <Link to={`/Details/${id}`}> {p.name}</Link>
     </li>
  )});
  
  
  return (
  <>
    <h1>Characters</h1>
    <ul>{peoplelist}</ul> 
  </>
  
  
  );
}

export default Home;
