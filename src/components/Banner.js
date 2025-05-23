import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

import { Navbar, Nav } from "react-bootstrap";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer", "Networking Engineer", "Instagrammer" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            {/* <TrackVisibility> */}
              {/* {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}> */}
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm YIN-HSUAN`}</h1>
                  <h2> <span className="txt-rotate" dataperiod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h2>
                  <p>Yin-Hsuan Liao was born in Taipei in 1998 and is currently based in the city. She holds a dual Bachelor’s degree in Mechanical Engineering and Computer Science from National Yang Ming Chiao Tung University (NYCU), where she also completed her Master’s degree in Institute of Network Engineering in 2023. She expanded her academic experience through an exchange program at the University of Mannheim in Germany, studying at the School of Business Informatics and Mathematics. With a strong foundation in both engineering and computer science, Yin-Hsuan brings a multidisciplinary perspective to her work in technology and innovation.</p>
                  <button onClick={() => console.log('connect')}>More about Me<a href="#about"><ArrowRightCircle size={25} /></a></button>
              {/* </div>} */}
            {/* </TrackVisibility> */}
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                  {/* <img src={headerImg} style={{ width: '500px', height: '500px' }} alt="Header Img"/> */}
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
