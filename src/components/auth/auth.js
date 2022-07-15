import { useHistory } from "react-router-dom";


function RequireAuth(props) {
    const history = useHistory();
    const token = localStorage.getItem("x-auth-token");

    if (!token) {
        history.push("/login");
    }
    return (<>{props.children}</>);
}

export { RequireAuth }

