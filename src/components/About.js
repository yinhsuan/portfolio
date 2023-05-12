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
                        <p>In 2020, Yin-Hsuan completed a one-year internship as a Technical Assistant Intern at Microsoft Taiwan, where she developed webpages using ASP.NET MVC. Currently, she is focused on her research on the cutting-edge topic of 5G Optical Edge Data Centers.</p>
                        <p>Yin-Hsuan has expertise in network engineering, web development, and programming languages such as C++, Python, and JavaScript. She excels in popular JavaScript libraries like React.js. Furthermore, her deep understanding of networking and software-defined networks positions her as a valuable asset in her field.</p>
                    </div>
                {/* </div>}
                </TrackVisibility> */}
            </Col>
          
        </Row>
      </Container>
    </section>
  )
}