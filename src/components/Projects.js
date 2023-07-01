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
      title: "Parallelizing Reinforcement Learning",
      githubUrl: "https://github.com/yinhsuan/Parallel_Reinforcement_Learning",
      imgUrl: projImg2,
    },
    {
      title: "Multi-Tenancy Application for Data Center",
      githubUrl: "https://github.com/yinhsuan/Multi-Tenancy",
      imgUrl: projImg3,
    },
    {
      title: "VLAN-Based Segment Routing Application",
      githubUrl: "https://github.com/yinhsuan/VLAN-Based-Segment-Routing-App",
      imgUrl: projImg4,
    },
    {
      title: "Proxy Server for HTTP and FTP",
      githubUrl: "https://github.com/yinhsuan/Proxy-Server-for-HTTP-and-FTP",
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
            <p>As a skilled Web Developer specializing in network technologies, Yin-Hsuan possesses expertise in C, C++, JavaScript, Python, SDN, and more. Her portfolio showcases her proficiency in web development, demonstrating a strong knowledge of networking principles. Yin-Hsuan has successfully completed projects in various domains, reflecting her ability to apply these skills to real-world scenarios.</p>
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
