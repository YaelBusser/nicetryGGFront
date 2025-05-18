import styles from "./index.module.scss"
import TitleLogo from "../../assets/images/logo-small.svg";

const HeaderNav = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.logo}>
                    <TitleLogo/>
                    <p className={styles.title}>nicetry.gg</p>
                </div>
                <nav>
                    <p>tournois</p>
                    <p>boutique</p>
                    <p>connexion / inscription</p>
                </nav>
            </div>
        </div>
    )
}

export default HeaderNav;