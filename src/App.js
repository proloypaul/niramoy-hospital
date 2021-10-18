
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import DoctorDetail from './Pages/DoctorDetail/DoctorDetail';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import News from './Pages/News/News';
import Notfind from './Pages/Notfind/Notfind';
import Services from './Pages/Services/Services';
import Specialist from './Pages/Specialist/Specialist';

function App() {
  return (
    <div>
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
          <Route path="/service:Idname">
            <DoctorDetail></DoctorDetail>
          </Route>
          <Route path="/news">
            <News></News>
          </Route>
          <Route path="/specialist">
            <Specialist></Specialist>
          </Route>
          <Route path="*">
            <Notfind></Notfind>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
