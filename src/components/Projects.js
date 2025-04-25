import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
// import projImg1 from "../assets/img/project-img1.png";
// import projImg2 from "../assets/img/project-img2.png";
// import projImg3 from "../assets/img/project-img3.png";

import projImg1 from "../assets/img/project1.png";
import projImg2 from "../assets/img/project2.png";
import projImg3 from "../assets/img/project3.png";
import projImg4 from "../assets/img/project4.png";
import projImg5 from "../assets/img/project5.png";
import projImg6 from "../assets/img/project6.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Personal Portfolio",
      githubUrl: "https://github.com/yinhsuan/portfolio",
      imgUrl: projImg1,
    },
    {
      title: "Software Backplane Design for the Real-time Monitoring and Visualization System in Optical Edge Data Center",
      githubUrl: "https://thesis.lib.nycu.edu.tw/items/d207dd60-66e1-43b2-89e2-0ba25faf4cbc",
      imgUrl: projImg2,
    },
    {
      title: "High-Performance Reinforcement Learning Optimization",
      githubUrl: "https://github.com/yinhsuan/Parallel_Reinforcement_Learning",
      imgUrl: projImg3,
    },
    {
      title: "SDN-Based Network with VLAN Isolation for Multi-Tenancy",
      githubUrl: "https://github.com/yinhsuan/Multi-Tenancy",
      imgUrl: projImg4,
    },
    {
      title: "https://github.com/yinhsuan/Multi-Tenancy",
      githubUrl: "https://github.com/yinhsuan/VLAN-Based-Segment-Routing-App",
      imgUrl: projImg5,
    },
    {
      title: "Multi-User Chat Room",
      githubUrl: "https://github.com/yinhsuan/Multiple-User-Chat-Room",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <h2>Projects</h2>
            <p>Yin-Hsuan is a web developer with a strong background in network technologies, skilled in C, C++, JavaScript, Python, and SDN. Her portfolio showcases a wide range of projects—from real-time monitoring systems for optical edge data centers to interactive web apps and SDN-based network solutions. With hands-on experience in ReactJS, Node.js, Mininet, ONOS, and RYU, she builds practical, scalable, and user-focused solutions across both frontend and backend development.</p>
            {/* <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}> */}
                <Row>
                  {
                    projects.map((project, index) => {
                      return (
                        <ProjectCard
                          key={index}
                          {...project}
                          />
                      )
                    })
                  }
                </Row>
                
                {/* <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container> */}
              {/* </div>}
            </TrackVisibility> */}
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-right" src={colorSharp2}></img> */}
    </section>
  )
}
