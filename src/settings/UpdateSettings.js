import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";


export function UpdateSettings({ edit }) {

  const history = useHistory();
  const [opBal, setOpBal] = useState(edit.opBal);
  const [cname, setCname] = useState(edit.cname);
  const [address, setAddress] = useState(edit.address);
  const [city, setCity] = useState(edit.city);
  const [country, setCountry] = useState(edit.country);
  const [telephone, setTelephone] = useState(edit.telephone);
  const [currency, setCurrency] = useState(edit.currency);

  const updateSettings = () => {

    const token = localStorage.getItem("x-auth-token");

    if (!token) {
      history.push("/user/login")
    }

    const updateSetting = {
      opBal: opBal,
      cname: cname,
      address: address,
      city: city,
      country: country,
      telephone: telephone,
      currency: currency,
    };

    fetch("https://petty-cash-manager-server.herokuapp.com/settings/" + edit._id, {
      method: "PUT",
      body: JSON.stringify(updateSetting),
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": token
      },
    }).then(() => history.push("/settings"));
  };

  return (
    <div>
      <header className="header">
        <p>Petty Cash Manager</p>
        <div className="div-header">
          <Link to="/home">Home</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About</Link>
        </div>
      </header>
      <div className="settings-container">
        <h3 className="settings-header">Account Settings</h3>
        <div className="form-container">
          <div className="form-group">
            <label htmlFor="opbal">Opening Balance : </label>
            <input
              name="opbal"
              className="form-control"
              value={opBal}
              onChange={(event) => setOpBal(event.target.value)}
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="cname">Company name : </label>
            <input
              name="cname"
              className="form-control"
              value={cname}
              onChange={(event) => setCname(event.target.value)}
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="address">Address : </label>
            <input
              name="address"
              className="form-control"
              value={address}
              onChange={(event) => setAddress(event.target.value)}
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="city">City : </label>
            <input
              name="city"
              className="form-control"
              value={city}
              onChange={(event) => setCity(event.target.value)}
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="country">Country : </label>
            <input
              name="country"
              className="form-control"
              value={country}
              onChange={(event) => setCountry(event.target.value)}
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="telephone">Telephone : </label>
            <input
              name="telephone"
              className="form-control"
              value={telephone}
              onChange={(event) => setTelephone(event.target.value)}
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="currency">Currency : </label>
            <input
              name="currency"
              className="form-control"
              value={currency}
              onChange={(event) => setCurrency(event.target.value)}
            ></input>
          </div>
          <button
            className="submit"
            onClick={() => {
              updateSettings();
            }}
          >
            SAVE
          </button>
        </div>
      </div>
    </div>
  );
}
