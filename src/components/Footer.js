import { Container, Row, Col } from "react-bootstrap";
import { ContactComponent } from "./ContactComponent";
import logo from '../assets/img/MTD_logo3.png';
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <ContactComponent/>
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/malcolmbreckenridge/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.facebook.com/BreckenridgeInvestmentGroup"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/malcolmbreckenridge/"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
