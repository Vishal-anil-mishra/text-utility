import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";
import About from "./components/About";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);
  const [mystyle, setmystyle] = useState({
    color: "rgb(255 255 255)",
    backgroundColor: "#939ca4",
  });
  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };
  const togglemode = () => {
    if (mode === "light") {
      setmode("dark");
      setmystyle({
        color: "rgb(5 5 5)",
        backgroundColor: "rgb(240 246 246)",
      });
      showalert("Darkmode has been Enabled", "success");
      document.body.style.backgroundColor = "rgb(30 90 158)";
    } else {
      setmode("light");
      setmystyle({
        color: "rgb(255 255 255)",
        backgroundColor: "#939ca4",
      });
      showalert("Lightmode has been Enabled", "success");
      document.body.style.backgroundColor = "#ced4da";
    }
  };
  return (
    <>
      <Router>
        <Navbar title="TextUtils" togglemode={togglemode} mode={mode} />
        <Alert showalert={showalert} alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/">
              <Textform heading="Enter your text below to Analyze" showalert={showalert} mode={mode}/>
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
