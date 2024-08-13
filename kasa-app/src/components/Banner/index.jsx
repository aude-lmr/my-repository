import styles from "./banner.module.scss";

export const Banner = (props) => {
  return (
    <div className={`${styles.bannerContainer} ${props.className}`}>
      <img src={props.imgSrc} alt={"background"} className={styles.bannerImg} />
      {props.title && <h1 className={styles.text}>{props.title}</h1>}
    </div>
  );
};

export default Banner;
