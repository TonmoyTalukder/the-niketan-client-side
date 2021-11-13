import './App.css';
import Home from './Pages/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Login from './Pages/Login/Login/Login';
import Apartments from './Pages/Apartments/Apartments/Apartments';
import Header from './Pages/Shared/Header/Header';
import FAQ from './Pages/FAQ/FAQ';
import Contact from './Pages/Contact/Contact';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import ApartmentDetails from './Pages/Apartments/ApartmentDetails/ApartmentDetails';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute> 
            <Route exact path="/apartments">
              <Apartments></Apartments>
            </Route> 
            <PrivateRoute exact path="/apartment-details/:apartmentId">
              <ApartmentDetails></ApartmentDetails>
            </PrivateRoute> 
            <Route exact path="/faq">
              <FAQ></FAQ>
            </Route> 
            <Route exact path="/contact"> 
              <Contact></Contact>
            </Route>
            <Route exact path="/login"> 
              <Login></Login>
            </Route>
            <Route exact path="/register">
              <Register></Register>
            </Route> 
          </Switch>
        </Router>
      </AuthProvider>

      {/* 
      
      Admin Route--
      Private Route Set--
      displayName on Header--
      Booking--
      Booking Cancel--
      Delete Booking, Processing Booking--
      Delete Apartment--
      Make Admin--
      Review--
      
      */}
    </div>
  );
}

export default App;
