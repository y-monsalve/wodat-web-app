import "./App.css";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import LogIn from "./components/authentification/LogIn";
import SignUp from "./components/authentification/SignUp";
function App() {
  return (
    <>
      <Navbar />
      <Homepage />
      {/* <h1>WoDat?</h1> */}
      <LogIn />
      <SignUp />
    </>
  );
}

export default App;
