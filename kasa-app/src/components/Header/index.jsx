import { Link } from "react-router-dom";
import Logo from "../../assets/LOGO.png";
import styles from "./header.module.scss";
import { URL_HOMEPAGE } from "../../routing/constants";

function Header() {
  return (
    <div className={styles.navContainer}>
      <Link to={URL_HOMEPAGE}>
        <img src={Logo} alt="Logo" className={styles.logo} />
      </Link>
      <nav>
        <div>
          <Link
            className={`${styles.headerLink} ${styles.spaceBetweenLink}`}
            to="/"
          >
            Accueil
          </Link>

          <Link className={styles.headerLink} to="/About">
            {" "}
            A Propos
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Header;
