import { useLikes } from "../context/LikesContext";

const LikesContent = () => {

  const { likes, removeLike } = useLikes();

  if (likes.length === 0) {
    return <main>You haven’t liked any jokes yet</main>;
  }

  return (
    <main>
      <h2>Liked Jokes</h2>
      {likes.map((joke) => (
        <div className="jokes" key={joke.id}>
          <p>{joke.setup}</p>
          <p>{joke.punchline}</p>
          <button className="getJoke" onClick={() => removeLike(joke.id)}>Remove</button>
        </div>
      ))}
    </main>
  );
}

export default LikesContent