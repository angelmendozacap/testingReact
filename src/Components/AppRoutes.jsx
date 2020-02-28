import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Pages/Home.jsx';
import Courses from './Pages/Courses.jsx';
import Course from './Pages/Course.jsx';
import MainMenu from './Organisms/MainMenu.jsx'
import Users from './Pages/Users.jsx';

const AppRoutes = () => {
  return (
    <Router>
      <div className="bg-gray-200 min-h-screen font-nunito font-sans">
        <MainMenu />
        <div className="container mx-auto px-4 pt-4">
          <Switch>
            <Route path="/" exact component={Home} />

            <Route path="/cursos" exact component={Courses} />

            <Route path="/usuarios" exact component={Users} />

            <Route path="/cursos/:id" exact component={Course} />

            <Route component={() => <h1 className="text-red-500">404 Not Found</h1>} />
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default AppRoutes
