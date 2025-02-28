// frontend/src/pages/Dashboard.js
import React from 'react';
import { Container, Card } from 'react-bootstrap';

const Dashboard = () => {
  return (
    <Container className="mt-4">
      <h1 className="text-center mb-4">Student Productivity Dashboard</h1>

      {/* Task Manager */}
      <Card className="mb-4">
        <Card.Body>
          <Card.Title>Task Manager</Card.Title>
          <Card.Text>Manage your tasks efficiently.</Card.Text>
        </Card.Body>
      </Card>

      {/* Study Planner */}
      <Card className="mb-4">
        <Card.Body>
          <Card.Title>Study Planner</Card.Title>
          <Card.Text>Plan your study sessions effectively.</Card.Text>
        </Card.Body>
      </Card>

      {/* Pomodoro Timer */}
      <Card className="mb-4">
        <Card.Body>
          <Card.Title>Pomodoro Timer</Card.Title>
          <Card.Text>Stay focused with the Pomodoro technique.</Card.Text>
        </Card.Body>
      </Card>

      {/* Notes Section */}
      <Card className="mb-4">
        <Card.Body>
          <Card.Title>Notes</Card.Title>
          <Card.Text>Take notes and stay organized.</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Dashboard;