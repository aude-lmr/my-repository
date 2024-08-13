import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import styles from "./collapse.module.scss";

export const Collapse = (props) => {
  const [isOpen, setIsOpen] = useState(false); // Create a state variable "isOpen" and a function "setIsOpen" using the useState hook, initially set to false

  return isOpen ? ( // If "isOpen" is true, render the following content
    <>
      <div>
        <button className={styles.collapseBtn} onClick={() => setIsOpen(false)}>
          <span className={styles.title}>{props.title}</span>

          <FontAwesomeIcon className={styles.icon} icon={faChevronUp} />
        </button>

        <div className={styles.textContainer}>{props.children}</div>
      </div>
    </>
  ) : (
    // If "isOpen" is false, render the following content
    <>
      <button className={styles.collapseBtn} onClick={() => setIsOpen(true)}>
        <span className={styles.title}>{props.title}</span>
        <FontAwesomeIcon
          className={styles.icon}
          icon={faChevronUp}
          rotation={180}
        />
      </button>
    </>
  );
};
