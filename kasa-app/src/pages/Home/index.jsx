import Cards from "../../components/Cards";
import bannerHome from "../../assets/home-background.png";
import Banner from "../../components/Banner";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useAppartments } from "../../hooks/useAppartments";
import styles from "../../components/Cards/cards.module.scss";
import body from "../../utils/style/body.module.scss";

function Home() {
  const { appartments } = useAppartments();
  return (
    <>
      <div className={body.bodyContainer}>
        <Header /> {/* Render the Header component at the top of the page */}
        {/* Display a Banner component with a background image and a title */}
        <Banner
          imgSrc={bannerHome}
          title={"Chez vous,\n partout et ailleurs"}
        />{" "}
        {/* Map over the list of appartments and create a Cards component for each one */}
        <div className={styles.cardContainer}>
          {appartments.map((appartment) => (
            <Cards appartment={appartment} key={appartment.id} />
          ))}
        </div>
      </div>
      <Footer /> {/* Render the Footer component at the bottom of the page */}
    </>
  );
}

export default Home;
