import React from 'react';
import { Route, Switch } from 'react-router';
import "./style/App.css";
import Hero from "./pages/Hero";
import StudentCourse from "./pages/StudentCourse";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Hero} />
      <Route exact path="/studentCourse" component={StudentCourse} />
    </Switch>
  );
}

export default App;
