import styles from "./index.module.scss";
import TitleLogo from "../../assets/images/logo-small.svg";

const LogoTitle = () => {
    return (
        <div className={styles.logo}>
            <TitleLogo/>
            <p className={styles.title}>nicetry.gg</p>
        </div>
    )
}

export default LogoTitle;