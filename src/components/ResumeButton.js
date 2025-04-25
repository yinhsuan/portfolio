import React from 'react';
import { Container, Row, Col, Button } from "react-bootstrap";

const ResumeButton = () => {
  const resumePath = '/portfolio/resume.pdf';
  
  // Function to open the resume in a new tab
  const openResume = () => {
    window.open(resumePath, '_blank');
  };
  
  // Custom button style with hover state handled through CSS
  const buttonStyle = {
    borderRadius: '10px', 
    padding: '10px 20px',
    borderColor: '#28809f', 
    borderWidth: '2px',
    fontSize: '18px',
    color: '#000000',
    transition: 'all 0.3s ease-in-out'
  };
  
  return (
    <section className="resume" id="resume">
      <Container>
        <Row>
          <Col size={12}>
            <h2>Resume</h2>
            <p>View my full resume to learn more about me</p>
            
            <div className="resume-btn-container d-flex justify-content-center mt-5">
              <Button 
                variant="outline-light" 
                className="resume-btn d-flex align-items-center justify-content-between" 
                onClick={openResume}
                style={buttonStyle}
              >
                <span>Resume</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  fill="currentColor" 
                  className="bi bi-download ms-2" 
                  viewBox="0 0 16 16"
                  style={{ marginLeft: '10px' }}
                >
                  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                  <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                </svg>
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ResumeButton;