import MoviesGrid from "../components/movie-grid/MoviesGrid";
import Search from "../components/search/Search";
import { useDebounce } from "../hooks/useDebounce";
import { useQuery } from "../hooks/useQuery";


export default function AppHome() {
  const query = useQuery();
  const search = query.get('search');
  const debounce = useDebounce(search, 1000)
  return (
    <div>
      <Search />
      <MoviesGrid key={debounce} search={debounce} />
    </div>
  );
}
