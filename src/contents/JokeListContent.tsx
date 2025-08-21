import axios from 'axios'
import { useEffect, useState } from 'react'
const JokeListContent = () => {

  const API_end_point = "https://official-joke-api.appspot.com/jokes/ten";

  interface Joke {
    id: number;
    setup: string;
    punchline: string;
    type: string
  }

  const [jokeList, setJokeList] = useState<any[]>([]);
  const [joke, setJoke] = useState<Joke |null>(null);
  const [likes, setLikes]= useState<Joke[]>([]);
  useEffect(() => {axios.get(API_end_point).then(res => {setJokeList(Object.values(res.data));})
      .catch(err => console.error(err));
  }, []);

  const likeJoke = () => {
    if (!joke) return
    const isAlreadyLiked = likes.some(item => item.id === joke.id);
    if (isAlreadyLiked)return;

    const updatedList = [...likes, joke];
    localStorage.setItem("likes", JSON.stringify(updatedList));
    setLikes(updatedList);
  }

  return (
      <main>
        {jokeList && jokeList.map((joke, i) => (
          <div className="jokes" key={i}>
            <p>{joke.setup}</p>
            <p>{joke.punchline}</p>
            <button className ="getJoke" onClick={() => likeJoke()}>Like</button>
          </div>
        ))}
        <button className="getJoke" onClick={() => {axios.get(API_end_point).then((res) => {setJokeList(res.data);});}}>New Joke List</button>
      </main>
  )
}

export default JokeListContent