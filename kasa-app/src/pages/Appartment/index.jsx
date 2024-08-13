import { useParams } from "react-router-dom";
import { useAppartment } from "../../hooks/useAppartment";
import { Collapse } from "../../components/Collapse";
import Header from "../../components/Header";
import Rating from "../../components/Rating";
import styles from "../Appartment/appartment.module.scss";
import Slideshow from "../../components/Slideshow";
import Footer from "../../components/Footer";
import body from "../../utils/style/body.module.scss";

// Define the Appartment component
export const Appartment = () => {
  const { id } = useParams(); // Get the "id" parameter from the URL
  const { appartment } = useAppartment(id); // Use the custom hook to fetch appartment data based on the ID
  if (!appartment) {
    return null;
  }
  return (
    <>
      <div className={body.bodyContainer}>
        <Header />
        <Slideshow slides={appartment.pictures} />
        {/* Section for displaying appartment information */}
        <section className={styles.apptInfosContainer}>
          <div className={styles.apptInfos}>
            <div className={styles.apptTitle}>
              <h1 className={styles.apptName}>{appartment.title}</h1>
              <p className={styles.location}>{appartment.location}</p>
            </div>
            {/* Container for appartment tags */}
            <div className={styles.apptTagsContainer}>
              {appartment.tags.map((tags, index) => {
                return (
                  <div className={styles.tags} key={index}>
                    {tags}
                  </div>
                );
              })}
            </div>
          </div>
          {/* Section for displaying host information */}
          <div className={styles.hostInfosContainer}>
            <div className={styles.hostInfos}>
              <p className={styles.hostName}>{appartment.host.name}</p>
              <img
                className={styles.hostPicture}
                src={appartment && appartment.host.picture}
                alt={appartment && appartment.host.name}
              />
            </div>
            {/* Display the host's picture and name */}
            <Rating score={appartment && appartment.rating} />
          </div>
        </section>
        {/* Section for displaying collapsible content */}
        <section className={styles.collapseContainer}>
          {/* Create a collapsible section with a title "Description" */}
          <Collapse title={"Description"}>
            <p className={styles.collapseTxt}>{appartment.description}</p>
          </Collapse>
          {/* Create a collapsible section with a title "Equipements" */}
          <Collapse title={"Equipements"} className={styles.equipmentsCollapse}>
            <ul className={styles.equipList}>
              {appartment.equipments.map((equip, index) => {
                return (
                  <li className={styles.collapseTxt} key={index}>
                    {equip}
                  </li>
                );
              })}
            </ul>
          </Collapse>
        </section>
      </div>
      <Footer className={styles.footer} />
    </>
  );
};

export default Appartment;
