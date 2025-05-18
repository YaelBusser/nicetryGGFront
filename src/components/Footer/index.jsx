import LogoTitle from "../LogoTitle/index.jsx";
import styles from "./index.module.scss";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.logoTitle}>
                <LogoTitle/>
            </div>
            <div className={styles.content}>
                <p className={"link"}>participer à un tournoi</p>
                <p className={"link"}>mentions légales</p>
                <p className={"link"}>créer un tournoi</p>
                <p className={"link"}>politique de confidentialité</p>
                <p className={"link"}>acheter des trytickets</p>
            </div>
        </footer>
    )
}

export default Footer;