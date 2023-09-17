import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Card from "../Cards/Card";
import styles from "./SearchResults.module.css";
import { Suspense, useState, useEffect } from "react";
import Loader from "../Loader/Loader";
import Header from "./../Header/Header";
import { BiSolidHomeAlt2 } from "react-icons/bi";

const SearchResults = ({ searchResults }) => {
  const [loadingDelay, setLoadingDelay] = useState(true);

  useEffect(() => {
    const delayTimeout = setTimeout(() => {
      setLoadingDelay(false);
    }, 3000);

    return () => {
      clearTimeout(delayTimeout);
    };
  }, []);

  const gridSingleResult =
    searchResults.length === 1 ? styles.singleResult : styles.gridResults;

  return (
    <div className={styles.mainResults}>
      <Header style={{ padding: "20px 0", background: "var(--red)" }} />
      <div className={styles.headerContainer}>
        <h1>Search Results</h1>
        <Link to="/">
          <BiSolidHomeAlt2 />
        </Link>
      </div>
      <div className={gridSingleResult}>
        <Suspense fallback={<Loader />}>
          {loadingDelay ? (
            <Loader />
          ) : (
            searchResults.map((movie) => <Card key={movie.id} movie={movie} />)
          )}
        </Suspense>
      </div>
    </div>
  );
};

SearchResults.propTypes = {
  searchResults: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      popularity: PropTypes.number,
      vote_average: PropTypes.number,
      poster_path: PropTypes.string,
      release_date: PropTypes.string,
    })
  ).isRequired,
};

export default SearchResults;
