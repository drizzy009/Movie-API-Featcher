import { useEffect, useState } from "react";
import Card from "../Cards/Card";
import { fetchTopMovies } from "../../services/api";
import { handleApiError } from "../../utils/errorHandler";
import styles from "./MovieList.module.css";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const topMovies = await fetchTopMovies();
        setMovies(topMovies);
      } catch (error) {
        setError(handleApiError(error));
      }
    };

    fetchData();
  }, []);

  return (
    <>
    <div className={styles.featuredFlex}>
        <h2>Featured Movie</h2>
        <button>
          <a href="/" role="button">
            See more
          </a>
        </button>
      </div>
    <div className={styles.movieList}>
      
      {error ? (
        <div className={styles.error}>{error}</div>
      ) : (
        <div className={styles.gridCards}>
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
    </>
  );
};

export default MovieList;
