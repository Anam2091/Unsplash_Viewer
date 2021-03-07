import React, { useState, useEffect,} from 'react' 
import ReactDOM from 'react-dom' 
import axios from 'axios'



function Project() {
    const [data, setData] = useState({ results: [] });
   
    useEffect(async () => {
      const result = await axios(
        'https://swapi.dev/api/people',
      );
   
      setData(result.data);
    });
   
    return (
      <ul>
        {data.results.map(item => (
          <li key={item.gender}>
            <a href={item.name}>
        {item.name}-{item.mass}</a>
          </li>
        ))}
      </ul>
    );
  }
   
 


export default Project;