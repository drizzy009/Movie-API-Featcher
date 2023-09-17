import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import { imdb, rt, like, unlike } from "../../assets";

const Card = ({ movie }) => {
  const toUTC = (dateString) => {
    const date = new Date(dateString);
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "UTC",
    };
    return date.toLocaleDateString("en-US", options);
  };

  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const storedLiked = localStorage.getItem(`liked_${movie.id}`);
    if (storedLiked) {
      setLiked(JSON.parse(storedLiked));
    }
  }, [movie.id]);

  const toggleLike = () => {
    const newLiked = !liked;
    setLiked(newLiked);
    localStorage.setItem(`liked_${movie.id}`, JSON.stringify(newLiked));
  };

  return (
    <div data-testid="movie-card" className={styles.flexBox}>
      <Link to={`/movies/${movie.id}`}>
        <img
          data-testid="movie-poster"
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
          className={styles.flexBox_img}
        />
        <span data-testid="movie-release-date">
          {toUTC(movie.release_date)}
        </span>
        <span data-testid="movie-title">{movie.title}</span>
      </Link>
      <div className={styles.likeToggle}>
        <button
          className={liked ? styles.likedButton : styles.likeButton}
          onClick={toggleLike}
        >
          {liked ? (
            <img src={like} alt="Unlike" />
          ) : (
            <img src={unlike} alt="Like" />
          )}
        </button>
      </div>
      <div className={styles.rating}>
        <span data-testid="movie-ratings">
          <img src={imdb} alt={imdb} />
          {movie.vote_average}/100
        </span>
        <span data-testid="movie-ratings">
          <img src={rt} alt={rt} />
          {movie.vote_average * 10}%
        </span>
      </div>
      
    </div>
  );
};

export default Card;

Card.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    popularity: PropTypes.number,
    vote_average: PropTypes.number,
    poster_path: PropTypes.string,
    release_date: PropTypes.string,
  }).isRequired,
};
