// frontend/src/pages/Dashboard.js
import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import { FaTasks, FaCalendarAlt, FaHourglassHalf, FaStickyNote } from 'react-icons/fa';

const Dashboard = () => {
  return (
    <Container className="mt-4">
      <h1 className="text-center mb-5">StudyZodiac</h1>
      <Row>
        <Col md={6} lg={4} className="mb-4">
          <Card className="h-100 shadow-sm border-0">
            <Card.Body className="d-flex flex-column align-items-center">
              <FaTasks size={50} className="mb-3 text-primary" />
              <Card.Title>Task Manager</Card.Title>
              <Card.Text className="text-center">
                Manage your tasks efficiently with an intuitive and organized interface.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={6} lg={4} className="mb-4">
          <Card className="h-100 shadow-sm border-0">
            <Card.Body className="d-flex flex-column align-items-center">
              <FaCalendarAlt size={50} className="mb-3 text-success" />
              <Card.Title>Study Planner</Card.Title>
              <Card.Text className="text-center">
                Plan your study sessions effectively and never miss a deadline.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={6} lg={4} className="mb-4">
          <Card className="h-100 shadow-sm border-0">
            <Card.Body className="d-flex flex-column align-items-center">
              <FaHourglassHalf size={50} className="mb-3 text-warning" />
              <Card.Title>Pomodoro Timer</Card.Title>
              <Card.Text className="text-center">
                Boost your focus with the Pomodoro technique and track your sessions.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={6} lg={4} className="mb-4">
          <Card className="h-100 shadow-sm border-0">
            <Card.Body className="d-flex flex-column align-items-center">
              <FaStickyNote size={50} className="mb-3 text-danger" />
              <Card.Title>Notes</Card.Title>
              <Card.Text className="text-center">
                Take and organize notes all in one place for quick access and review.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
