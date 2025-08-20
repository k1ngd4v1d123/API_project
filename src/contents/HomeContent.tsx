import axios from 'axios'
import { useEffect, useState } from 'react'

const HomeContent = () => {
  const API_end_point = "https://official-joke-api.appspot.com/random_joke";
  const [joke, setJoke] = useState<any>({});
  useEffect(() => {axios.get(API_end_point).then(res => {
        setJoke(res.data); 
      })
      .catch(err => console.error(err));
  }, []);
  
  return (
      <main>
        {joke && (
          <div className="jokes">
            <p>{joke.setup}</p>
            <p>{joke.punchline}</p>
            <button className="getJoke" onClick={() => {axios.get(API_end_point).then((res) => {setJoke(res.data);});}}>New Joke</button>
          </div>
        )}
        
      </main>
  )
}

export default HomeContent