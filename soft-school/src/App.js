import React from 'react';
import { Route, Switch } from 'react-router';
import "./style/App.css";
import Hero from "./pages/Hero";
import StudentCourse from "./pages/StudentCourse";
import EmotionalIntelligence from "./pages/EmotionalIntelligence";
import CoursePage2 from './pages/CoursePage2';
import CoursePage3 from './pages/CoursePage3';

function App() {
  return (
    <Switch>
      <Route exact path="/soft-school" component={Hero} />
      <Route exact path="/studentCourse" component={StudentCourse} />
      <Route exact path="/emotionalIntelligence" component={EmotionalIntelligence} />
      <Route exact path="/coursePage2" component={CoursePage2} />
      <Route exact path="/coursePage3" component={CoursePage3} />
    </Switch>
  );
}

export default App;
