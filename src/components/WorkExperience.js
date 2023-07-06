import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Container } from "react-bootstrap";

const WorkIcon = () => <i className="fas fa-briefcase" />;
const SchoolIcon = () => <i className="fas fa-graduation-cap" />;
const StarIcon = () => <i className="fas fa-star" />;

const WorkExperience = () => {
  return (
    <section className="work_experience" id="work_experience">
      <Container>
        <h2>Work Experience</h2>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work custom-rounded-edge"
            contentStyle={{ background: 'rgb(255, 245, 236)', color: 'black', padding: "40px"
                            // paddingTop: "40px", paddingBottom: "40px", paddingLeft: "40px", paddingRight: "40px" 
                          }}
            // contentArrowStyle={{
            //   borderRight: '7px solid rgb(255, 245, 236)',
            //   // boxShadow: '0 3px 0 rgba(0, 0, 0, 0.3)'
            // }}
            contentArrowStyle={{ display: 'none' }}
            date={<span className="timeline-date">Jun 2022 - Today</span>}
            // date="Jun 2022 - Today"
            iconStyle={{ background: 'rgb(220, 164, 155)', color: '#fff' }}
            icon={<WorkIcon />}
          >
            <div className="rounded-content">
              <h3 className="vertical-timeline-element-title">Research Assistant</h3>
              <h4 className="vertical-timeline-element-subtitle">GeNopsys, Taiwan</h4>
              <br></br>
              <ul>
                <li>Developed a dashboard for an optical edge data center networking system, showcasing the capability of the traffic load balancing algorithm of OPTUNS across 4 dimensions : real-time system load, traffic distribution, resource utilization, and system capacity</li>
                <br></br>
                <li>Developed automated testing pipelines, resulting in a 30% improvement in testing efficiency by reducing the time required for testing. Created visualizations to analyze the differences in Round-Trip Time (RTT) values after component faults in 8 different faulty cases</li>
                <br></br>
                <li>Resolved technical issues across 4 types of physical machines, including servers, ToR switches, OADSs, and OSISs and addressed network slowdowns to ensure optimal system performance</li>
              </ul>
              {/* <p>User Experience, Visual Design</p> */}
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work custom-rounded-edge "
            contentStyle={{ background: 'rgb(255, 245, 236)', color: 'black', padding: "40px" }}
            contentArrowStyle={{ display: 'none' }}
            date={<span className="timeline-date">Sep 2021 - Jun 2022</span>}
            // date="Sep 2021 - Jun 2022"
            iconStyle={{ background: 'rgb(220, 164, 155)', color: '#fff' }}
            icon={<WorkIcon />}
          >
            <div className="rounded-content">
              <h3 className="vertical-timeline-element-title">Teaching Assistant</h3>
              <h4 className="vertical-timeline-element-subtitle">NYCU, Taiwan</h4>
              <br></br>
              <ul>
                <li>Served as a Teaching Assistant (TA) for the courses ”Data Structure” (Sep 2021 - Jan 2022) and ”Operating System” (Feb 2022 - Jun 2022)</li>
                <br></br>
                <li>Provided academic support to 170+ students by addressing their questions. Designed 30+ questions for assignments and exams, providing detailed feedback and assessment to students</li>
              </ul>
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work custom-rounded-edge "
            contentStyle={{ background: 'rgb(255, 245, 236)', color: 'black', padding: "40px" }}
            contentArrowStyle={{ display: 'none' }}
            date={<span className="timeline-date">Jun 2020 - Jun 2021</span>}
            // date="Sep 2021 - Jun 2022"
            iconStyle={{ background: 'rgb(220, 164, 155)', color: '#fff' }}
            icon={<WorkIcon />}
          >
            <div className="rounded-content">
              <h3 className="vertical-timeline-element-title">Software Intern</h3>
              <h4 className="vertical-timeline-element-subtitle">Microsoft, Taiwan</h4>
              <br></br>
              <ul>
                <li>Developed a web page using the ASP.NET MVC framework for healthcare professionals to search for patients. Utilized Knockout.js for visualizing billing data and leveraged C# for service development to process and retrieve data from MSSQL</li>
                <br></br>
                <li>Maintained and resolved issues related to service models, including frontend, backend, and database. Successfully addressed 40+ billing-related issues</li>
                <br></br>
                <li>Organized an orientation for 100+ interns, facilitating relationships across 11 departments</li>
                <br></br>
                <li>Served as a campus ambassador and organized a campus forum with 100+ participants</li>
              </ul>
            </div>
          </VerticalTimelineElement>


          
        </VerticalTimeline>
      </Container>
      </section>
  );
};

export default WorkExperience;
