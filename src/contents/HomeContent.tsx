import axios from 'axios'
import { useEffect, useState } from 'react'
import { useLikes } from "../context/LikesContext";

const HomeContent = () => {
  const API_end_point = "https://official-joke-api.appspot.com/random_joke";
  const { addLike } = useLikes();

  interface Joke {
    id: number;
    setup: string;
    punchline: string;
    type: string
  }
  const [joke, setJoke] = useState<Joke |null>(null);
  useEffect(() => {axios.get(API_end_point).then(res => {
        setJoke(res.data);
      })
      .catch(err => console.error(err));
  }, []);

  
  return (
      <main>
        {joke && (
          <div className="jokes" key={joke.id}>
            <p>{joke.setup}</p>
            <p>{joke.punchline}</p>
            <button className="getJoke" onClick={() => {axios.get(API_end_point).then((res) => {setJoke(res.data);});}}>New Joke</button>
            <button className="getJoke" onClick={() => {addLike(joke)}}>Like</button>
          </div>
        )}
        
      </main>
  )
}

export default HomeContent