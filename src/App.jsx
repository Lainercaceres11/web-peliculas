import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom';
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
        <Routes>
          <Route
            path="/movies/:movieId"
            element={<MovieDetails />}
          ></Route>
          <Route path="/" element={<AppHome />}></Route>
          <Route path='*' element={<Navigate replace to={'/'} />} ></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}
