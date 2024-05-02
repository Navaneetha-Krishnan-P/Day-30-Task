import React from 'react';
import "bootstrap/dist/css/bootstrap.css"

const Table = ({ users, editRow, deleteUser }) => {
  return (
    <table className="table">
      <thead className='table-dark'>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody className='table-light'>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>
              <button className='editButton' onClick={() => editRow(user)}>Edit</button>
            </td>
            <td><button className="deleteButton" onClick={() => deleteUser(user.id)}>Delete</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;