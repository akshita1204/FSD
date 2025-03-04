import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState({ name: "", email: "" });
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:5000/edituser`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, ...user }),
    }).then(() => navigate("/users"));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="text" value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })} className="border p-2 w-full" required />
      <input type="email" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} className="border p-2 w-full" required />
      <button type="submit" className="bg-green-500 text-white px-4 py-2">Update</button>
    </form>
  );
};

export default EditUser;
