import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login';
import MyTickets from './components/Tickets/MyTickets';
import SignUp from './components/SignUp';
import Favourites from './components/Favourites/Favourites';
import Messages from './components/Messages/Messages';
import Transaction from './components/Transaction/Transaction';
import Settings from './components/Settings/Settings';


function App() {
  return (
    <Router>
    <div>
      <Switch>
        <Route exact path={'/'}>
          <Login />
        </Route>

        <Route path={'/dash-board'}>
          <Dashboard />
        </Route>

        <Route path={'/sign-up'}>
          <SignUp/>
        </Route>

        <Route path={'/tickets'}>
          <MyTickets/>
        </Route>

        <Route path={'/favourites'}>
          <Favourites/>
        </Route>

        <Route path={'/message'}>
          <Messages/>
        </Route>

        <Route path={'/transaction'}>
          <Transaction/>
        </Route>

        <Route path={'/settings'}>
          <Settings/>
        </Route>

        <Route path={"/tours/:id"}>
          <Favourites/>
        </Route>


      </Switch>
    </div>



    </Router>
  );
}

export default App;
