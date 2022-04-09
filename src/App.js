import Home from "./components/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/signin/Login";
import Signhome from "./components/Signhome/Signhome";
import Dashboard from "./components/dashboard/Dashboard";
import Create from "./components/Create/Create";
import Consume from "./components/signin/Consume";
import AdminSignUp from "./components/Register/AdminSignUp";
import AdminSignin from "./components/Register/AdminSignin";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<AdminSignUp />} />
          <Route path="/signin" element={<AdminSignin />} />
          <Route path="/dash" element={<Dashboard />} />
          <Route path="/create" element={<Create />} />
          <Route path="/consume" element={<Consume />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
