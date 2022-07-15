import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { SettingDisplay } from "./SettingDisplay.js";
import Form from "../components/form/form";

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

  return (
    <div>
      {setting.map(
        (sett) => (<SettingDisplay
          key={sett._id}
          id={sett._id}
          opBal={sett.opBal}
          cname={sett.cname}
          address={sett.address}
          city={sett.city}
          country={sett.country}
          telephone={sett.telephone}
          currency={sett.currency} />))}
      {/* <Form data={settingsData} /> */}
    </div>
  );
}


