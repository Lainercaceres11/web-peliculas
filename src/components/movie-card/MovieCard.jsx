
import { Link } from 'react-router-dom';
import './MovieCard.css';
import placeholder from '../../assets/placeholder-image.png';
export default function MovieCard({ movie }) {
  const imageUrl = movie.poster_path
    ? "https://image.tmdb.org/t/p/w300" + movie.poster_path
    : placeholder;
  return (
    <Link to={`/movies/${movie.id}`}>
      <li className="movie-card">
        <img src={imageUrl} alt={movie.title} width="230px" height="345px" />
        <p className="movie-title">{movie.title}</p>
      </li>
    </Link>
  );
}
