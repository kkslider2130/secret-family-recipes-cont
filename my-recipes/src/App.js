import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProtectedRoute from './utils/ProtectedRoute';
import './App.css';
import Nav from './components/Navigation/Nav';
import AddRecipe from './components/RecipeForm';
import LoginForm from './components/Login/LoginForm';
import RegisterForm from './components/Register/RegisterForm';
import Home from './components/Home/HomePage';
import HomeNav from './components/Home/HomeNav';


function App() {
  return (
  <Router>
    <div className="App">
    
    <Route exact path="/register">
    <Nav />
       <RegisterForm />
    </Route>    
    
    <Route exact path="/login">
    <Nav />
        <LoginForm />
    </Route>
   
    <Switch>
  
  <ProtectedRoute exact path='/home'>
      <HomeNav />
        <Home />
  </ProtectedRoute>

  <ProtectedRoute exact path='/newRecipe'>
    <HomeNav />
    <AddRecipe />
  </ProtectedRoute>
     
    </Switch>
    </div>
    </Router>
     );
}

export default App;
