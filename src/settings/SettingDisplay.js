import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

export function SettingDisplay({ id, opBal, cname, address, city, country, telephone, currency }) {

  const history = useHistory();
  return (
    <div>
      <header className="header">
        <p>Petty Cash Manager</p>
        <div className="div-header">
          <Link to="/home">Home</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/logout">Logout</Link>
        </div>
      </header>
      <div className="settings-container">
        <h3 className="settings-header">Account Settings</h3>
        <div className="form-container">
          <div className="form-group">
            <label htmlFor="opbal">Opening Balance : </label>
            <input name="opbal" className="form-control" defaultValue={opBal} readOnly></input>
          </div>
          <div className="form-group">
            <label htmlFor="cname">Company name : </label>
            <input name="cname" className="form-control" defaultValue={cname} readOnly></input>
          </div>
          <div className="form-group">
            <label htmlFor="address">Address : </label>
            <input name="address" className="form-control" defaultValue={address} readOnly></input>
          </div>
          <div className="form-group">
            <label htmlFor="city">City : </label>
            <input name="city" className="form-control" defaultValue={city} readOnly></input>
          </div>
          <div className="form-group">
            <label htmlFor="country">Country : </label>
            <input name="country" className="form-control" defaultValue={country} readOnly></input>
          </div>
          <div className="form-group">
            <label htmlFor="telephone">Telephone : </label>
            <input name="telephone" className="form-control" defaultValue={telephone} readOnly></input>
          </div>
          <div className="form-group">
            <label htmlFor="currency">Currency : </label>
            <input name="currency" className="form-control" defaultValue={currency} readOnly></input>
          </div>
            <button className="submit" onClick={ () => history.push("/settings/edit/"+id)}>Edit</button>
        </div>
      </div>
    </div>
  );
}
