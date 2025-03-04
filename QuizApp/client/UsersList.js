import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <Link to="/createuser" className="bg-blue-500 text-white px-4 py-2">Add User</Link>
      <ul className="mt-4">
        {users.map((user) => (
          <li key={user.id} className="border p-3 my-2">
            <Link to={`/users/${user.id}`} className="text-blue-600">{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
