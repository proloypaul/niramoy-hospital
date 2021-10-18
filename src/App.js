
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import Notfind from './Pages/Notfind/Notfind';
import Services from './Pages/Services/Services';

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
          <Route path="*">
            <Notfind></Notfind>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
