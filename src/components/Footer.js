import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <div className="footer">
      <Container style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        {/* <Row className="align-items-center"> */}
          {/* <MailchimpForm /> */}
          {/* <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col> */}
          {/* <Col size={12} sm={6} className="text-center text-sm-end"> */}
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/yin-hsuan-liao-1a0708165/" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="linkedin-icon" /></a>
              <a href="https://www.facebook.com/profile.php?id=100003094233788" target="_blank" rel="noopener noreferrer"><img src={navIcon2} alt="facebook-icon" /></a>
              <a href="https://instagram.com/sandyliaooo?igshid=NTc4MTIwNjQ2YQ==" target="_blank" rel="noopener noreferrer"><img src={navIcon3} alt="instagram-icon" /></a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          {/* </Col> */}
        {/* </Row> */}
      </Container>
    </div>
  )
}
