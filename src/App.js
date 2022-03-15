import './index.css';
import Header from './Header';
import MovieCatalogue from './MovieCatalogue';
import MovieInfo from './MovieInfo';

// import 2 pieces from the Router library which will allow us to configure the routes within this app
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="wrapper">
      <Header />

      {/* now we need to define our routing confirguartion (this is often done within the App component) */}

      {/* step 1: use the Routes component to act as a parent container to all of the subsequently defined Routes AKA defined URL paths */}
      <Routes>
        {/* step 2: define the individual routes / URL paths which are available within your app, as well as the components which are visible at those paths */}
        {/* here is where you will define which component is visible at what path */}
        <Route path="/" element={ <MovieCatalogue /> }/>
        {/* the MovieInfo component should be shown when the route looks like: */}
        {/* www.homepage.com/movieIdHere */}
        <Route path="/:movieId" element={ <MovieInfo />} />

      </Routes>


    </div>
  );
}

export default App;
