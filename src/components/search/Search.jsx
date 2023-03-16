import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styles from './Search.module.css'

export default function Search() {
    const [inputValue, setInputValue] = useState("");
    const handleSubmit = (e)=>{
        e.preventDefault()
        // history.push(`/?search= ${inputValue}`)
    }

    const [query, setQuery] = useSearchParams();
    const search = query.get('search');

    useEffect(() => {
      setInputValue(search || '');
    }, [search]);
  return (
    <form className={styles.searchContainer} onSubmit={handleSubmit}>
      <div className={styles.searchBox}>
        <input
          type="text"
          placeholder='title movies'
          aria-label='Search Movies'
          className={styles.searchInput}
          value={inputValue}
          onChange={(e) =>{
            const value = e.target.value
            setQuery({search: value})
          }}
        />
        <button type="submit" className={styles.searchButton}>
          Buscar
        </button>
      </div>
    </form>
  );
}
