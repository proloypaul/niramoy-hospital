
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Context/PrivateRoute';
import DoctorDetail from './Pages/DoctorDetail/DoctorDetail';
import Footer from './Pages/Footer/Footer';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import News from './Pages/News/News';
import Notfind from './Pages/Notfind/Notfind';
import Register from './Pages/Register/Register';
import Services from './Pages/Services/Services';
import Specialist from './Pages/Specialist/Specialist';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <PrivateRoute path="/service:Idname">
              <DoctorDetail></DoctorDetail>
            </PrivateRoute>
            <PrivateRoute path="/news">
              <News></News>
            </PrivateRoute>
            <Route path="/specialist">
              <Specialist></Specialist>
            </Route>
            <Route to="/register">
              <Register></Register>
            </Route>
            <Route path="*">
              <Notfind></Notfind>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
