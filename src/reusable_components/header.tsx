import { Link } from 'react-router-dom'

const Header = () => {
  return(
    <header>
      <nav className="links">
        <Link to='/'>Home</Link>
        <Link to='/JokeList'>Joke List</Link>
        {/* <Link to='/Watched'>Watched</Link> */}
      </nav>
    </header>
  );
}

export default Header