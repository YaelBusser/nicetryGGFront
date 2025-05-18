import {useEffect, useState} from "react";
import styles from "./index.module.scss";
import Trophy from "../../assets/icons/trophy.svg";
import Boutique from "../../assets/icons/boutique.svg";
import Profile from "../../assets/icons/profile.svg";
import LogoTitle from "../LogoTitle";

const HeaderNav = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    /* shrink au scroll ---------------------------------------------------- */
    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 0);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    /* bloquer le scroll quand le menu est ouvert -------------------------- */
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);

    const shrink = isScrolled && !menuOpen;   /* <— pas de shrink si menuOpen */

    return (
        <header className={`${styles.container} ${shrink ? styles.shrink : ""}`}>
            <div className={styles.content}>
                <LogoTitle/>

                {/* Burger */}
                <button
                    aria-label="Menu"
                    className={`${styles.burger} ${menuOpen ? styles.open : ""}`}
                    onClick={() => setMenuOpen(prev => !prev)}
                >
                    <span/><span/><span/>
                </button>

                {/* Overlay nav */}
                <nav className={`${styles.nav} ${menuOpen ? styles.show : ""}`}>
                    <div className={`link ${styles.link}`}>
                        <div className={styles.iconNav}>
                            <Trophy/>
                        </div>
                        <p>tournois</p>
                    </div>
                    <div className={`link ${styles.link}`}>
                        <div className={styles.iconNav}>
                            <Boutique/>
                        </div>
                        <p>boutique</p>
                    </div>
                    <div className={`link ${styles.link} ${styles.iconProfile}`}>
                        <div className={styles.iconNav}>
                            <Profile/>
                        </div>
                        <p>s'inscrire</p>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default HeaderNav;
