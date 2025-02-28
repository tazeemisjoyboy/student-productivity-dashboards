// frontend/src/components/TaskManager.js
import React, { useState, useEffect } from 'react';
import { collection, addDoc, query, onSnapshot, doc, updateDoc, deleteDoc, where } from "firebase/firestore";
import { db, auth } from '../firebase';

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  // Fetch tasks from Firestore when the component mounts
  useEffect(() => {
    const fetchTasks = async () => {
      const user = auth.currentUser;
      if (!user) return;

      const q = query(collection(db, "tasks"), where("userId", "==", user.uid));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const tasksData = [];
        querySnapshot.forEach((doc) => {
          tasksData.push({ id: doc.id, ...doc.data() });
        });
        setTasks(tasksData);
      });

      return unsubscribe; // Cleanup listener
    };

    fetchTasks();
  }, []);

  // Add a task to Firestore
  const addTask = async () => {
    if (!newTask.trim()) return;

    const user = auth.currentUser;
    if (!user) {
      alert("You must be logged in to add tasks.");
      return;
    }

    try {
      await addDoc(collection(db, "tasks"), {
        text: newTask,
        completed: false,
        userId: user.uid, // Associate task with the logged-in user
        createdAt: new Date(),
      });
      setNewTask('');
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  // Toggle task completion in Firestore
  const toggleTask = async (id, completed) => {
    try {
      const taskRef = doc(db, "tasks", id);
      await updateDoc(taskRef, { completed: !completed });
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  // Delete a task from Firestore
  const deleteTask = async (id) => {
    try {
      const taskRef = doc(db, "tasks", id);
      await deleteDoc(taskRef);
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Task Manager</h2>

      {/* Add Task Input */}
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button className="btn btn-primary" onClick={addTask}>
          Add Task
        </button>
      </div>

      {/* Task List */}
      <ul className="list-group">
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`list-group-item d-flex justify-content-between align-items-center ${
              task.completed ? 'bg-success text-white' : ''
            }`}
          >
            <span
              style={{ cursor: 'pointer', textDecoration: task.completed ? 'line-through' : 'none' }}
              onClick={() => toggleTask(task.id, task.completed)}
            >
              {task.text}
            </span>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => deleteTask(task.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;