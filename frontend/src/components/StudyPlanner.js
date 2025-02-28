// frontend/src/components/StudyPlanner.js
import React, { useState } from 'react';
import { Table, Form, Button, InputGroup } from 'react-bootstrap';

const StudyPlanner = () => {
  // State to store study sessions
  const [sessions, setSessions] = useState([]);
  const [newSession, setNewSession] = useState({
    date: '',
    subject: '',
    duration: '',
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewSession({ ...newSession, [name]: value });
  };

  // Add a new study session
  const addSession = () => {
    if (!newSession.date || !newSession.subject || !newSession.duration) {
      alert('Please fill in all fields.');
      return;
    }

    const session = {
      id: Date.now(),
      ...newSession,
    };

    setSessions([...sessions, session]);
    setNewSession({ date: '', subject: '', duration: '' }); // Reset form
  };

  // Delete a study session
  const deleteSession = (id) => {
    const updatedSessions = sessions.filter((session) => session.id !== id);
    setSessions(updatedSessions);
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Study Planner</h2>

      {/* Add Study Session Form */}
      <Form>
        <h5 className="mb-3">Add a New Study Session</h5>
        <InputGroup className="mb-3">
          <InputGroup.Text>Date</InputGroup.Text>
          <Form.Control
            type="date"
            name="date"
            value={newSession.date}
            onChange={handleChange}
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text>Subject</InputGroup.Text>
          <Form.Control
            type="text"
            placeholder="Enter subject"
            name="subject"
            value={newSession.subject}
            onChange={handleChange}
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text>Duration (hours)</InputGroup.Text>
          <Form.Control
            type="number"
            placeholder="Enter duration"
            name="duration"
            value={newSession.duration}
            onChange={handleChange}
          />
        </InputGroup>

        <Button variant="primary" onClick={addSession}>
          Add Session
        </Button>
      </Form>

      {/* Study Sessions Table */}
      <h5 className="mt-5 mb-3">Your Study Sessions</h5>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Date</th>
            <th>Subject</th>
            <th>Duration(hours)</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {sessions.length > 0 ? (
            sessions.map((session) => (
              <tr key={session.id}>
                <td>{session.date}</td>
                <td>{session.subject}</td>
                <td>{session.duration}</td>
                <td>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => deleteSession(session.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center">
                No study sessions planned yet.
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default StudyPlanner;