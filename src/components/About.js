import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
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
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                {/* </div>}
                </TrackVisibility> */}
            </Col>
          
        </Row>
      </Container>
    </section>
  )
}