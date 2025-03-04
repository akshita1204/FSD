import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UsersList from "./pages/UsersList";
import UserDetails from "./pages/UserDetails";
import CreateUser from "./pages/CreateUser";
import EditUser from "./pages/EditUser";

function App() {
  return (
    <Router>
      <div className="p-5">
        <h1 className="text-2xl font-bold">User Management</h1>
        <Routes>
          <Route path="/users" element={<UsersList />} />
          <Route path="/users/:id" element={<UserDetails />} />
          <Route path="/createuser" element={<CreateUser />} />
          <Route path="/edituser/:id" element={<EditUser />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
