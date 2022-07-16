import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { SettingDisplay } from "./SettingDisplay.js";
import Form from "../../components/form/form";
import Nav from "../../components/nav/nav.js";
import "./settings.css";

export function Settings() {

  const [setting, setSetting] = useState({ opBal: "", cname: "", addr: "", city: "", country: "", phone: "", curr: "" });
  const history = useHistory();
  const [edit, setEdit] = useState(false);
  const settingsData = [
    { type: "input", label: "Opening Balance", inputType: "text", id: "opBal", value: setting.opBal },
    { type: "input", label: "Company Name", inputType: "text", id: "cname", value: setting.cname },
    { type: "input", label: "Address", inputType: "text", id: "addr", value: setting.addr },
    { type: "input", label: "City", inputType: "text", id: "city", value: setting.city },
    { type: "input", label: "Country", inputType: "text", id: "country", value: setting.country },
    { type: "input", label: "Telephone", inputType: "number", id: "phone", value: setting.phone },
    { type: "input", label: "Currency", inputType: "text", id: "curr", value: setting.curr },
    { type: "submit", label: !edit ? "Edit" : "Save", inputType: "submit" },
  ];
  const navItems = ["Home", "Bills", "Contact"];


  const getSetting = () => {
    const token = localStorage.getItem("x-auth-token");
    if (!token) {
      history.push("/user/login");
    }
    // fetch("https://petty-cash-manager-server.herokuapp.com/settings", {
    fetch("http://localhost:5000/settings", {
      headers: {
        "x-auth-token": token
      }
    })
      .then((data) => data.json())
      .then((sett) => {
        console.log(sett);
        setSetting(sett[0]);
      });
  };
  useEffect(getSetting, []);



  const postSetting = () => {

    const postSetting = {
      email: setting.email,
      opBal: setting.opBal,
      cname: setting.cname,
      address: setting.addr,
      city: setting.city,
      country: setting.country,
      telephone: setting.phone,
      currency: setting.curr,
    };

    console.log(postSetting);

    const token = localStorage.getItem("x-auth-token");
    if (!token) {
      history.push("/user/login");
    }

    // fetch("https://petty-cash-manager-server.herokuapp.com/settings/0", {
    fetch("http://localhost:5000/settings", {
      method: "PUT",
      body: JSON.stringify(postSetting),
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": token
      },
    }).then((res) => {
      console.log(res);
      history.push("/settings")
    });
  }

  const handleEditSubmit = (event) => {
    event.preventDefault();
    if (edit === false) setEdit(true);
    else {
      setEdit(false);
      postSetting();
    }
  }

  return (
    <div>
      <Nav items={navItems} />
      <div className="settings-container">
        <h3 className="settings-header">Account Settings</h3>
        <div className="form-container">
          <Form
            list={settingsData}
            data={setting}
            setData={setSetting}
            edit={edit}
            setEdit={setEdit}
            handleSubmit={handleEditSubmit} />
        </div>
      </div>
    </div>
  );
}


