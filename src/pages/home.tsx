import HomeContent from '../contents/HomeContent.tsx'
import Header from '../reusable_components/header.tsx'

const home = () => {
  return(
    <div className="App">
      <Header/>
      <HomeContent/>
    </div>
  );
}

export default home