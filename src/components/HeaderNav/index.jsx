import { useEffect, useState } from "react";
import styles from "./index.module.scss";
import Trophy from "../../assets/icons/trophy.svg";
import Boutique from "../../assets/icons/boutique.svg";
import Profile from "../../assets/icons/profile.svg";
import LogoTitle from "../LogoTitle/index.jsx";

const HeaderNav = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 0);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={`${styles.container} ${isScrolled ? styles.shrink : ""}`}>
            <div className={styles.content}>
                <LogoTitle />
                <nav>
                    <p className={"link"}><Trophy /> tournois</p>
                    <p className={"link"}><Boutique /> boutique</p>
                    <p className={`link ${styles.iconProfile}`}><Profile /> s'inscrire</p>
                </nav>
            </div>
        </div>
    );
};

export default HeaderNav;
