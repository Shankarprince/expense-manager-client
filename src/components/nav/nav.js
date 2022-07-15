import { Link, useHistory } from "react-router-dom";
import styles from "./nav.module.css";

export default function Nav(props) {

    const { items } = props;
    const history = useHistory();
    const logout = () => {
        localStorage.setItem("x-auth-token", "");
        history.push("/user/login")
    }

    return (
        <header className={styles.header}>
            <p>Petty Cash Manager</p>
            <div className={styles.headerItems}>
                {items.map((i, index) => <Link key={index} className={styles.headerLinks} to={`/{i}`}><p>{i}</p></Link>)}
                <Link className={styles.headerLinks} onClick={() => logout()} to="/"><p>Logout</p></Link>
            </div>
        </header>
    )
}