import React, { useEffect, useState } from "react";

const MaintainUser = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [
      { id: 1, name: "Riya Sharma", email: "riya@gmail.com" },
      { id: 2, name: "Aman Gupta", email: "aman@gmail.com" },
    ];
    setUsers(storedUsers);
  }, []);

  const deleteUser = (id) => {
    const updated = users.filter((u) => u.id !== id);
    setUsers(updated);
    localStorage.setItem("users", JSON.stringify(updated));
  };

  return (
    <div>
      <h4 className="mb-3 text-primary">Maintain Users</h4>
      {users.length === 0 ? (
        <p>No users available.</p>
      ) : (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>ID</th><th>Name</th><th>Email</th><th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id}>
                <td>{u.id}</td>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => deleteUser(u.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MaintainUser;
