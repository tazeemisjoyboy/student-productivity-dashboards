// frontend/src/components/NotesSection.js
import React, { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import './NotesSection.css';

const NotesSection = () => {
  const [notes, setNotes] = useState('');
  const [savedNotes, setSavedNotes] = useState([]); // Store saved notes

  const saveNote = () => {
    if (notes.trim() !== '') {
      setSavedNotes([...savedNotes, notes]); // Append new note to the list
      setNotes(''); // Clear input after saving
    } else {
      alert('Please write something before saving.');
    }
  };

  return (
    <div className="container mt-4">
      <Card className="p-4 shadow-sm">
        <h2 className="mb-3 text-center">Notes</h2>
        <Form.Control
          as="textarea"
          rows={5}
          placeholder="Write your notes here..."
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
        <Button variant="primary" className="mt-3 w-100" onClick={saveNote}>
          Save Note
        </Button>
      </Card>

      {/* Display saved notes */}
      {savedNotes.length > 0 && (
        <Card className="mt-4 p-4 shadow-sm">
          <h4 className="text-center mb-3">Saved Notes</h4>
          <ul className="list-group">
            {savedNotes.map((note, index) => (
              <li key={index} className="list-group-item">
                {note}
              </li>
            ))}
          </ul>
        </Card>
      )}
    </div>
  );
};

export default NotesSection;
