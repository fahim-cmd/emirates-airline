import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NavbarRoute from './components/NavbarRoute/NavbarRoute';
import NotMatch from './components/NotMatch/NotMatch';
import { createContext, useState } from 'react';
import TicketDetails from './components/TicketDetails/TicketDetails';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {

  const [user, setUser] = useState({})  
// console.log(user)
  return (
    <UserContext.Provider value={[user, setUser]}>
      <Router>  
      <NavbarRoute ></NavbarRoute>
      <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>      
           <Route path="/login">
             <Login></Login>
           </Route>
           <PrivateRoute path="/ticketDetails/:id">
           <TicketDetails></TicketDetails>
           </PrivateRoute>
          <Route exact path="/">
            <Home></Home>
          </Route>          
          <Route path="*">
            <NotMatch></NotMatch>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;