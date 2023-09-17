/* eslint-disable react/no-unescaped-entities */
import styles from "./HomePage.module.css";
import Header from "./../../components/Header/Header";
import MovieList from "./../../components/MovieList/MovieList";
import { imdb, rt } from "../../assets";
import { BsFillPlayCircleFill } from "react-icons/bs";

const HomePage = () => {
  return (
    <>
      <main className={`${styles.homePage} ${styles.homePage_mob}`}>
        <Header />
        <div className={styles.homeHeading}>
          <h1>John Wick 3: Parabellum</h1>
          <div className={styles.innerchild}>
            <span>
              <img src={imdb} alt="imdb" />
              86.0/100
            </span>
            <span>
              <img src={rt} alt="rotten tomatoes" />
              97%
            </span>
          </div>
          <p>
            John Wick is on the run after killing a member of the international
            assassins' guild, and with a $14 million price tag on his head, he is
            the target of hit men and women everywhere.
          </p>
          <button>
            < BsFillPlayCircleFill/> <a href="#">Watch Trailer</a>
          </button>
        </div>
      </main>
      <MovieList />
    </>
  );
};

export default HomePage;
