import "./App.css";

import { Routes, Route } from "react-router-dom";
import Login from "./routes/login/login.component";
import Home from "./routes/home/home.component";
import UserData from "./routes/user-data/user-data.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="home" element={<Home />} />
      <Route path="userData" element={<UserData />} />
    </Routes>
  );
}

export default App;
