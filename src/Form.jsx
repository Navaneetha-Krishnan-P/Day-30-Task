import React, { useState } from 'react';

const Form = ({ addUser, editing, currentUser, cancelEdit, updateUser, name, setName, username, setUsername, email, setEmail }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editing) {
      updateUser(currentUser.id, { name, username, email });
    } else {
      addUser({ name, username, email });
      setName('');
      setUsername('');
      setEmail('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>&nbsp;
      <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />&nbsp;&nbsp;&nbsp;&nbsp;

      <label htmlFor="username">Username:</label>&nbsp;
      <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />&nbsp;&nbsp;&nbsp;&nbsp;

      <label htmlFor="email">Email:</label>&nbsp;
      <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />&nbsp;&nbsp;
      
<button className='createButton' type="submit">{editing ? 'Update' : 'Add'}</button>&nbsp;&nbsp;
      {editing && <button type="button" className="cancelButton" onClick={cancelEdit}>Cancel</button>}
    </form>
  );
};

export default Form;