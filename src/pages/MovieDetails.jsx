
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/loader/Loader";
import { get } from "../utils/data";
import placeholder from '../assets/placeholder-image.png';
import css from './MovieDetails.module.css';
export default function MovieDetails() {
  const {movieId} = useParams();
  const [movie, setMovies] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  
  useEffect(()=>{
    setIsLoading(true)
    get("/movie/" + movieId).then((data) => {
      setIsLoading(false)
        setMovies(data);
      });
  }, [movieId])

  if(isLoading){
    return <Loader />
  }

  if(!movie){
    return null
  }

  const imageUrl = movie.poster_path
  ? "https://image.tmdb.org/t/p/w300" + movie.poster_path
  : placeholder;

  return (
    <div className={css.movieDetails}>
      <img src={imageUrl} alt={movie.title} className={css.col} />
      <div className={css.col}>
        <p className={css.movieTitle}>
          <strong>Title:</strong> {movie.title}
        </p>
        <p>
          <strong>Genres:</strong>
          {movie.genres.map((gen) => gen.name).join(" , ")}
        </p>
        <p>
          {" "}
          <strong>Description: </strong> {movie.overview}
        </p>
      </div>
    </div>
  );
}
