import styles from "./index.module.scss";
import {Outlet} from "react-router-dom";
import HeaderNav from "../../HeaderNav/index.jsx";

const NavAndPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.nav}>
                <HeaderNav/>
            </div>
            <Outlet/>
        </div>
    )
}

export default NavAndPage;