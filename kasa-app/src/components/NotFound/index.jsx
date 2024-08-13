import { Link } from "react-router-dom";
import Header from "../Header";
import { URL_HOMEPAGE } from "../../routing/constants";
import styles from ".//NotFound.module.scss";
import Footer from "../Footer";
import body from "../../utils/style/body.module.scss";

function Error() {
  return (
    <>
      <div className={body.bodyContainer}>
        <Header />

        <div className={styles.container}>
          <h1 className={styles.error}>404</h1>
          <h2 className={styles.message}>
            Oups! La page que vous demandez n'existe pas.
          </h2>
          <Link className={styles.Link} to={URL_HOMEPAGE}>
            Retour sur la page d'accueil
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Error;
