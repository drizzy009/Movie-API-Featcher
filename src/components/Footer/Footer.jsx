import {
  BiLogoFacebookSquare,
  BiLogoInstagram,
  BiLogoTwitter,
  BiLogoYoutube,
} from "react-icons/bi";
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={`${styles.mainFooter}`}>
      <div className={styles.footerCol1}>
        <ul>
          <li>{<BiLogoFacebookSquare />}</li>
          <li>{<BiLogoInstagram />}</li>
          <li>{<BiLogoTwitter />}</li>
          <li>{<BiLogoYoutube />}</li>
        </ul>
      </div>
      <div className={styles.footerCol2}>
        <ul>
          <li>Conditions of Use</li>
          <li>Privacy & Policy</li>
          <li>Press Room</li>
        </ul>
      </div>
      <div className={styles.footerCol3}>
        <span>© 2021 MovieBox by Adriana Eka Prayudha</span>
      </div>
    </footer>
  );
};

export default Footer;
