import React from 'react';
import { Route, Switch } from 'react-router';
import "./style/App.css";
import Hero from "./pages/Hero";
import StudentCourse from "./pages/StudentCourse";
import EmotionalIntelligence from "./pages/EmotionalIntelligence";

function App() {
  return (
    <Switch>
      <Route exact path="/soft-school" component={Hero} />
      <Route exact path="/studentCourse" component={StudentCourse} />
      <Route exact path="/emotionalIntelligence" component={EmotionalIntelligence} />
    </Switch>
  );
}

export default App;
