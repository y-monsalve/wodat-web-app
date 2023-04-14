import "./App.css";
import Homepage from "./components/Homepage";
import LogIn from "./components/authentification/LogIn";
import SignUp from "./components/authentification/SignUp";
import SafePlaceForm from "./components/forms/SafePlaceForm";

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/submit-safe-place" element={<SafePlaceForm />} />
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
