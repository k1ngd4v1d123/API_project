import axios from 'axios'
import { useEffect, useState } from 'react'
const JokeListContent = () => {

  const API_end_point = "https://official-joke-api.appspot.com/jokes/ten";
  const [joke, setJoke] = useState<any[]>([]);
  useEffect(() => {axios.get(API_end_point).then(res => {
        console.log(res.data); setJoke(Object.values(res.data)); 
      })
      .catch(err => console.error(err));
  }, []);

  return (
      <main>
        {joke && joke.map((joke, i) => (
          <div className="jokes" key={i}>
            <p>{joke.setup}</p>
            <p>{joke.punchline}</p>
          </div>
        ))}
        <button className="getJoke" onClick={() => {axios.get(API_end_point).then((res) => {setJoke(res.data);});}}>New Joke List</button>
      </main>
  )
}

export default JokeListContent