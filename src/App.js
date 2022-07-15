import './App.css';
import { Route, Switch } from 'react-router-dom';
import { Intro } from './misc/Intro.js';
import { Signup } from './user/Signup.js';
import { Login } from './user/Login.js';
import { Home } from './misc/Home';
import { Settings } from './settings/Settings';
import { Contact } from './misc/Contact';
import { Logout } from './misc/Logout';
import { EditSettings } from './settings/EditSettings';
import { Bills } from './bills/bills';
import { AddBill } from './bills/AddBill';
import { EditBill } from './bills/EditBill';

function App() {

  

  return (
    <div>
      <Switch>
        <Route exact path="/"><Intro /></Route>
        <Route path="/user/signup"><Signup /></Route>
        <Route path="/user/login"><Login /></Route>
        <Route path="/home"><Home /></Route>
        <Route path="/contact"><Contact /></Route>
        <Route path="/logout"><Logout /></Route>
        <Route exact path="/settings"><Settings /></Route>
        <Route path="/settings/edit/:id"><EditSettings /></Route> 
        <Route exact path="/bills"><Bills /></Route>
        <Route path="/bills/add"><AddBill /></Route>
        <Route path="/bills/:id"><EditBill /></Route>  
      </Switch>
    </div>
  );
}

export default App;
