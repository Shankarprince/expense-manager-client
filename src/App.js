import './App.css';
import { Route, Switch } from 'react-router-dom';
import { Signup } from './pages/signup/Signup.js';
import { Login } from './pages/login/Login';
import { Home } from './pages/home/home';
import { Settings } from './pages/settings/Settings';
import { Contact } from './pages/contact/Contact';
import { Logout } from './components/auth/Logout';
import { EditSettings } from './pages/settings/EditSettings';
import { Bills } from './pages/bills/bills';
import { AddBill } from './pages/bills/AddBill';
import { EditBill } from './pages/bills/EditBill';
import { RequireAuth } from "./components/auth/auth";

function App() {

  return (
    <div>
      <Switch>
        <Route path="/login"><Login /></Route>
        <Route path="/signup"><Signup /></Route>
        {/* <RequireAuth> */}
          <Route path="/contact"><Contact /></Route>
          <Route path="/logout"><Logout /></Route>
          <Route exact path="/settings"><Settings /></Route>
          <Route path="/settings/edit/:id"><EditSettings /></Route>
          <Route exact path="/bills"><Bills /></Route>
          <Route path="/bills/add"><AddBill /></Route>
          <Route path="/bills/:id"><EditBill /></Route>
          <Route path="/"><Home /></Route>
        {/* </RequireAuth> */}
      </Switch>
    </div>
  );
}

export default App;
