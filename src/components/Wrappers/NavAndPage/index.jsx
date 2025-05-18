import styles from "./index.module.scss";
import {Outlet} from "react-router-dom";
import HeaderNav from "../../HeaderNav/index.jsx";
import Footer from "../../Footer/index.jsx";

const NavAndPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.nav}>
                <HeaderNav/>
            </div>
            <div className={styles.content}>
                <Outlet/>
            </div>
            <div className={styles.footer}>
                <Footer/>
            </div>
        </div>
    )
}

export default NavAndPage;