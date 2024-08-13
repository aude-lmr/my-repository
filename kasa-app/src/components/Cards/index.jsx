import { URL_APPARTMENT } from "../../routing/constants";
import styles from "./cards.module.scss";
import { Link } from "react-router-dom";

function Cards(props) {
  return (
    <Link to={URL_APPARTMENT.replace(":id", props.appartment.id)}>
      {/* Create a link to a dynamic URL based on the appartment's ID */}
      <div className={styles.card}>
        <div className={styles.overlayClass}></div>
        <img
          className={styles.cardCover}
          src={props.appartment.cover}
          alt="cover"
        />
        <h2 className={styles.cardTitle}>{props.appartment.title}</h2>
      </div>
    </Link>
  );
}

export default Cards;
