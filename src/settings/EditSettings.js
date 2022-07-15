import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { UpdateSettings } from "./UpdateSettings";

export function EditSettings() {
  const { id } = useParams();
  const [edit, setEdit] = useState(null);
  const history = useHistory();

  const editSettings = () => {

    const token = localStorage.getItem("x-auth-token");

    if (!token) {
      history.push("/user/login")
    }

    fetch("https://petty-cash-manager-server.herokuapp.com/settings/" + id, {
      method: "GET",
      headers: {
        "x-auth-token": token
      }
    })
      .then((data) => data.json())
      .then((ed) => setEdit(ed));
  };

  useEffect(editSettings, [id]);

  return edit ? <UpdateSettings edit={edit} /> : "";
}


