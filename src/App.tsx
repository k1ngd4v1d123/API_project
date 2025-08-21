import {Routes, Route} from 'react-router-dom'
import Home from './pages/home.tsx'
import JokeList from './pages/jokeList.tsx'
import Likes from './pages/likes.tsx'
import './App.css'

function App() {
  return(
    <Routes>
      <Route path ="/" element = {<Home/>}/>
      <Route path ="/JokeList" element = {<JokeList/>}/>
      <Route path ="/Likes" element = {<Likes/>}/>
    </Routes>
  );
}

export default App
