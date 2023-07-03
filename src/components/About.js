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
                        <p>Yin-Hsuan is a highly skilled Web Developer with expertise in network specialization and 3 years of industry experience. During her time at Microsoft Taiwan, she successfully developed a medical system for healthcare professionals, effectively resolving more than 40 billing issues within a year. Her specialization lies in Software-Defined Network (SDN) and optical edge data center networking systems, where she has demonstrated exceptional proficiency.</p>
                        <p>In 2023, Yin-Hsuan showcased her passion for innovation by creating an open-source personal portfolio using React on GitHub. She is committed to delivering user-centric tools and continuously enhancing her skills to provide innovative solutions. With her strong background in web development and network technologies, Yin-Hsuan is a valuable asset capable of delivering exceptional results.</p>
                    </div>
                {/* </div>}
                </TrackVisibility> */}
            </Col>
          
        </Row>
      </Container>
    </section>
  )
}