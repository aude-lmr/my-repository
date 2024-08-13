import FooterLogo from "../../assets/FOOTER-LOGO.png";
import styled from "../Footer/footer.module.scss";

function Footer() {
  return (
    <div className={styled.footerContainer}>
      <img className={styled.logo} src={FooterLogo} alt="Logo" />
      <p className={styled.notice}>© 2020 Kasa. All rights reserved</p>
    </div>
  );
}

export default Footer;
