import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useQuery } from '../../hooks/useQuery';
import styles from './Search.module.css'

export default function Search() {
    const [inputValue, setInputValue] = useState("");
    const history = useHistory();
    const handleSubmit = (e)=>{
        e.preventDefault()
        // history.push(`/?search= ${inputValue}`)
    }

    const query = useQuery();
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
            setInputValue(e.target.value)
            history.push(`/?search= ${e.target.value}`)
          }}
        />
        <button type="submit" className={styles.searchButton}>
          Buscar
        </button>
      </div>
    </form>
  );
}
