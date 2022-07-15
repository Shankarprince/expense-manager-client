import './App.css';
import { Route, Switch } from 'react-router-dom';
import { Signup } from './user/Signup.js';
import { Login } from './user/Login.js';
import { Home } from './pages/home';
import { Settings } from './settings/Settings';
import { Contact } from './misc/Contact';
import { Logout } from './misc/Logout';
import { EditSettings } from './settings/EditSettings';
import { Bills } from './bills/bills';
import { AddBill } from './bills/AddBill';
import { EditBill } from './bills/EditBill';
import { RequireAuth } from "./components/auth/auth";

function App() {

  return (
    <div>
      <Switch>
        <Route path="/login"><Login /></Route>
        <Route path="/signup"><Signup /></Route>
        <RequireAuth>
          <Route path="/"><Home /></Route>
          <Route path="/contact"><Contact /></Route>
          <Route path="/logout"><Logout /></Route>
          <Route exact path="/settings"><Settings /></Route>
          <Route path="/settings/edit/:id"><EditSettings /></Route>
          <Route exact path="/bills"><Bills /></Route>
          <Route path="/bills/add"><AddBill /></Route>
          <Route path="/bills/:id"><EditBill /></Route>
        </RequireAuth>
      </Switch>
    </div>
  );
}

export default App;
