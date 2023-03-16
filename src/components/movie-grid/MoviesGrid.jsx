import { useEffect, useState } from "react";
import { get } from "../../utils/data";
import Loader from "../loader/Loader";
import MovieCard from "../movie-card/MovieCard";
import "./MoviesGrid.css";
import InfiniteScroll from "react-infinite-scroll-component";
import { Empty } from "../empty/Empty";


export default function MoviesGrid({search}) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)

  useEffect(() => {
    setIsLoading(true);
    const searchUrl = search
      ? `/search/movie?query=${search}&page=${page}`
      : `/discover/movie?page=${page}`;
    get(searchUrl).then((data) => {
      setMovies((prevMovies) => prevMovies.concat(data.results));
      setHasMore(data.page < data.total_pages)
      setIsLoading(false);
    });
  }, [search, page]);

  // if(isLoading){
  //   return <Loader />
  // }

  if( !isLoading && movies.length === 0){
    return <Empty />
  }
  return (
    <section>
      <InfiniteScroll
        dataLength={movies.length}
        hasMore={hasMore}
        next={() => setPage((prevState) => prevState + 1)}
        loader={<Loader />}
      >
        <ul className="movies-grid">
          {movies.map((movie) => {
            return (
              <>
                <MovieCard key={movie.id} movie={movie} />
              </>
            );
          })}
        </ul>
      </InfiniteScroll>
    </section>
  );
}
