import { useState } from "react";
import { logosidebar, menu } from "../../assets";
import { Link } from "react-router-dom";
import styles from "./Sidebar.module.css";
import { GrHomeRounded } from "react-icons/gr";
import { BiCameraMovie } from "react-icons/bi";
import { IoCloseCircleOutline, IoLogOutOutline } from "react-icons/io5";
import { BsPlayBtn, BsCalendar2Minus } from "react-icons/bs";

const Sidebar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <aside className={`${styles.aside} ${menuOpen ? styles.open : ""}`}>
      <div className={styles.hamburger} onClick={toggleMenu}>
        {menuOpen ? (
          <IoCloseCircleOutline />
        ) : (
          <>
            <img src={menu} alt="" />
          </>
        )}
      </div>
      <div className={styles.desktopSidebar}>
        <Link to="/">
          <img src={logosidebar} alt="Logo" />
        </Link>
        <ul className={styles.sidebarItems}>
          <Link to="/" style={{ color: "var(--text-gray)" }}>
            <li>
              <GrHomeRounded />
              Home
            </li>
          </Link>
          <li>
            <BiCameraMovie />
            Movies
          </li>
          <li>
            <BsPlayBtn />
            TV Series
          </li>
          <li>
            <BsCalendar2Minus />
            Upcoming
          </li>
        </ul>
        <div className={styles.sidebarPlay}>
          <span>Play movie quizes and earn free tickets</span>
          <span>50k people are playing now</span>
          <a href="#">Start playing</a>
        </div>
        <div className={styles.Logout}>
          <button role="button">
            <IoLogOutOutline />
            <a href="#">Log out</a>
          </button>
        </div>
      </div>

      <div className={styles.mobileSidebar}>
        <Link to="/">
          <img src={logosidebar} alt="Logo" />
        </Link>
        <ul className={styles.sidebarItems}>
          <Link to="/" style={{ color: "var(--text-gray)" }}>
            <li>
              <GrHomeRounded />
              Home
            </li>
          </Link>
          <li>
            <BiCameraMovie />
            Movies
          </li>
          <li>
            <BsPlayBtn />
            TV Series
          </li>
          <li>
            <BsCalendar2Minus />
            Upcoming
          </li>
        </ul>
        <div className={styles.sidebarPlay}>
          <span>Play movie quizes and earn free tickets</span>
          <span>50k people are playing now</span>
          <a href="#">Start playing</a>
        </div>
        <div className={styles.Logout}>
          <button role="button">
            <IoLogOutOutline />
            <a href="#">Log out</a>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
