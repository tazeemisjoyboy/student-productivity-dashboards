// frontend/src/components/NotesSection.js
import React, { useState, useEffect } from 'react';
import { Form, Button, Card, ListGroup } from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';

const NotesSection = () => {
  const [notes, setNotes] = useState('');
  const [savedNotes, setSavedNotes] = useState(() => {
    const localData = localStorage.getItem('savedNotes');
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem('savedNotes', JSON.stringify(savedNotes));
  }, [savedNotes]);

  const saveNote = () => {
    if (notes.trim() !== '') {
      setSavedNotes(prevNotes => [...prevNotes, notes.trim()]);
      setNotes('');
    } else {
      alert('Please write something before saving.');
    }
  };

  const deleteNote = (index) => {
    setSavedNotes(prevNotes => prevNotes.filter((_, i) => i !== index));
  };

  return (
    <div className="container mt-4">
      <Card className="p-4 shadow-sm">
        <h2 className="mb-3 text-center">Notes</h2>
        <Form.Group controlId="noteTextarea">
          <Form.Label>Write your note</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            placeholder="Enter your note here..."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" className="mt-3 w-100" onClick={saveNote}>
          Save Note
        </Button>
      </Card>

      {savedNotes.length > 0 && (
        <Card className="mt-4 shadow-sm">
          <Card.Header className="text-center">Saved Notes</Card.Header>
          <ListGroup variant="flush">
            {savedNotes.map((note, index) => (
              <ListGroup.Item 
                key={index} 
                className="d-flex justify-content-between align-items-center"
              >
                <span>{note}</span>
                <Button 
                  variant="outline-danger" 
                  size="sm" 
                  onClick={() => deleteNote(index)}
                >
                  <FaTrash />
                </Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card>
      )}
    </div>
  );
};

export default NotesSection;
