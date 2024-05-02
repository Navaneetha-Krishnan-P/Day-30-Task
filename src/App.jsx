
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from './Table';
import Form from './Form';
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    setUsers(response.data);
  };

  const addUser = async (user) => {
    const response = await axios.post('https://jsonplaceholder.typicode.com/users', user);
    setUsers([...users, response.data]);
  };

  const updateUser = async (id, updatedUser) => {
    const response = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, updatedUser);
    setUsers(users.map((user) => (user.id === id ? response.data : user)));
    setEditing(false);
    setCurrentUser(null);
    setName('');
    setUsername('');
    setEmail('');
  };

  const deleteUser = async (id) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    setUsers(users.filter((user) => user.id !== id));
  };

  const editRow = (user) => {
    setEditing(true);
    setCurrentUser(user);
    setName(user.name);
    setUsername(user.username);
    setEmail(user.email);
  };

  const cancelEdit = () => {
    setEditing(false);
    setCurrentUser(null);
    setName('');
    setUsername('');
    setEmail('');
  };

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div className="container">
      <div><h1 className='heading'>User Datas</h1></div>
      <div><h4 className='heading'>Create New User Data</h4></div>
      <div className='form'><Form addUser={addUser} editing={editing} currentUser={currentUser} cancelEdit={cancelEdit} updateUser={updateUser} name={name} setName={setName} username={username} setUsername={setUsername} email={email} setEmail={setEmail} /></div>
      <div className='table'><Table users={users} editRow={editRow} deleteUser={deleteUser} /></div>
    </div>
  );
}

export default App;