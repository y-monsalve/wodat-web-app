import "./App.css";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import LogIn from "./components/authentification/LogIn";
import SignUp from "./components/authentification/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
      {/* <Navbar />
      <Homepage />
      {/* <h1>WoDat?</h1> */}
      {/* <LogIn />
      <SignUp />  */}
    </>
  );
}

export default App;
