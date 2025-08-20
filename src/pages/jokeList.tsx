import JokeListContent from '../contents/JokeListContent.tsx'
import Header from '../reusable_components/header.tsx'

const jokeList = () => {
  return(
    <div className="App">
      <Header/>
      <JokeListContent/>
    </div>
  );
}

export default jokeList