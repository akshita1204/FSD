import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [id]);

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h2 className="text-xl font-bold">{user.name}</h2>
      <p>Email: {user.email}</p>
      <Link to={`/edituser/${id}`} className="bg-green-500 text-white px-4 py-2">Edit</Link>
    </div>
  );
};

export default UserDetails;
