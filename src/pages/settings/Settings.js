import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { SettingDisplay } from "./SettingDisplay.js";
import Form from "../../components/form/form";
import Nav from "../../components/nav/nav.js";
import "./settings.css";

export function Settings() {
  const [setting, setSetting] = useState([]);
  const history = useHistory();

  const getSetting = () => {

    const token = localStorage.getItem("x-auth-token");

    if (!token) {
      history.push("/user/login");
    }

    fetch("https://petty-cash-manager-server.herokuapp.com/settings", {
      headers: {
        "x-auth-token": token
      }
    })
      .then((data) => data.json())
      .then((sett) => {
        console.log(sett[0])
        setSetting(sett)
      });
  };

  useEffect(getSetting, []);

  const settingsData = [
    { type: "input", label: "Opening Balance", inputType: "text" },
    { type: "input", label: "Company Name", inputType: "text" },
    { type: "input", label: "Address", inputType: "text" },
    { type: "input", label: "City", inputType: "text" },
    { type: "input", label: "Country", inputType: "text" },
    { type: "input", label: "Telephone", inputType: "number" },
    { type: "input", label: "Currency", inputType: "text" },
    { type: "submit", label: "Edit", inputType: "submit" },
  ]

  const navItems = ["Home", "Bills", "Contact"];

  return (
    <div>
      <Nav items={navItems} />
      <div className="settings-container">
        <h3 className="settings-header">Account Settings</h3>
        <div className="form-container">
          <Form data={settingsData} />
        </div>
      </div>
    </div>
  );
}


