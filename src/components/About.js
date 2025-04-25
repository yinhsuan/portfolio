import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import headerImg from "../assets/img/about-img.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';

import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const About = () => {



  return (
    <section className="about" id="about">
      <Container>
        <Row className="aligh-items-center">
            <Col xs={12} md={6} xl={5}>
                <TrackVisibility>
                {({ isVisible }) =>
                    <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                      <img src={headerImg} alt="Header Img"/>
                    </div>}
                </TrackVisibility>
            </Col>
            <Col xs={12} md={6} xl={7}>
                {/* <TrackVisibility>
                {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}> */}
                    <div>
                        <h2>About</h2>
                        <p>Yin-Hsuan Liao is a skilled web developer with 3 years of industry experience and a strong background in networking technologies. She began her professional journey at Microsoft Taiwan, where she contributed to the development of a healthcare system for medical professionals. She later joined MediaTek as a software engineer, focusing on system-level low-power optimization.</p>
                        <p>Her expertise spans Software-Defined Networking (SDN), optical edge data center technologies, and modern web development. In 2023, she showcased her passion for innovation by building an open-source personal portfolio using ReactJS, published on GitHub. Yin-Hsuan is driven by a commitment to creating user-centric, impactful tools and is constantly exploring new technologies to expand her capabilities.</p>
                    </div>
                {/* </div>}
                </TrackVisibility> */}
            </Col>
          
        </Row>
      </Container>
    </section>
  )
}