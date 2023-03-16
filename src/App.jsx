import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import './App.css';
import AppHome from './pages/AppHome';
import MovieDetails from './pages/MovieDetails';

export default function App() {
  return (
    <BrowserRouter>
      <header className="header">
        <Link to="/">
          <h1 className="title">Movies</h1>
        </Link>
      </header>

      <main>
        <Switch>
          <Route exact path="/movies/:movieId">
            <MovieDetails />
          </Route>
          <Route path="/">
            <AppHome />
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  );
}
