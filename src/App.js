import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/screens/Home";
import Profile from "./components/screens/Profile";
import Signin from "./components/screens/Signin";
import Signup from "./components/screens/Signup";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/">
            <Home/>
        </Route>
        <Route exact path="/profile">
            <Profile/>
        </Route>
        <Route exact path="/signin">
            <Signin/>
        </Route>
        <Route exact path="/signup">
            <Signup/>
        </Route>
      </div>
    </Router>
  );
}

export default App;
