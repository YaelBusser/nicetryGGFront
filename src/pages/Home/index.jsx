import styles from "./index.module.scss";
import MainButton from "../../components/Buttons/MainButton/index.jsx";
import Checkbox from "../../assets/icons/checkbox.svg"
import BandeauDefileGames from "../../components/BandeauDefileGames/index.jsx";
import HowWorksInscris from "../../assets/icons/howWorksInscrisToiGratuitement.svg";
import HowWorksParticipe from "../../assets/icons/howWorksParticipeAuxTournois.svg";
import HowWorksNiceCoins from "../../assets/icons/howWorksGagneDesNiceCoins.svg";
import HowWorksConvertis from "../../assets/icons/howWorksConvertis.svg";

const Home = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.banner}>
                    <div className={styles.gradient}></div>
                    <img src={"/images/banner/hero-banner.png"} alt={"hero banner"} className={styles.hero}/>
                    <div className={styles.contentBanner}>
                        <div className={styles.leftBanner}>
                            <div className={styles.contentLeftBanner}>
                                <p className={styles.mainText}>Mets ton <span>skill</span> à l'épreuve <br/>
                                    et <span>remporte la mise</span></p>
                                <div className={styles.descriptionBanner}>
                                    <p><Checkbox/> Crée & Rejoins des tournois en quelques clics</p>
                                    <p><Checkbox/> Récompenses en cash pour les meilleurs joueurs</p>
                                    <p><Checkbox/> Système équitable et sécurisé</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.rightBanner}>
                            <div className={styles.contentRightBanner}>
                                <MainButton>Jouer mon premier <br/> tournois <span>maintenant !</span></MainButton>
                            </div>
                        </div>
                    </div>
                    <div className={styles.bottomElements}>
                        <img src={"/images/banner/hero-screens.png"} alt={"hero screens"}
                             className={styles.heroScreens}/>
                        <div className={styles.bandeauDefile}>
                            <div className={styles.gradientGames}></div>
                            <BandeauDefileGames/>
                        </div>
                    </div>
                </div>
                <div className={styles.howWorks}>
                    <div className={styles.howWorksContent}>
                        <div className={styles.howWorksText}>
                            <div className={styles.howWorksTextContainer}>
                                <div className={`${styles.howWorksTextContent} ${styles.howWorksTitleMain}`}>
                                    <p className={styles.title}>Comment fonctionne <span>NiceTry ? </span></p>
                                </div>
                            </div>
                            <div className={styles.howWorksTextContainer}>
                                <div className={styles.howWorksTextSvg}>
                                    <HowWorksInscris/>
                                </div>
                                <div className={styles.howWorksTextContent}>
                                    <p className={styles.howWorksTitle}>Inscris-toi gratuitement</p>
                                    <p className={styles.howWorksDescription}>Rejoins la communauté Nicetry en créant
                                        ton compte en quelques
                                        clics. L’inscription est gratuite et immédiate. Que tu sois joueur amateur,
                                        compétiteur
                                        régulier ou organisateur d'événements, notre plateforme est ouverte à tous.
                                    </p>
                                </div>
                            </div>
                            <div className={styles.howWorksTextContainer}>
                                <div className={styles.howWorksTextSvg}>
                                    <HowWorksParticipe/>
                                </div>
                                <div className={styles.howWorksTextContent}>
                                    <p className={styles.howWorksTitle}>Participe aux tournois</p>
                                    <p className={styles.howWorksDescription}>Grâce aux TryTickets (TT), tu peux
                                        participer à une grande variété de
                                        tournois sur tes jeux préférés. Les TryTickets s’achètent dans notre boutique et
                                        représentent ta mise pour entrer dans un tournoi. Selon les règles de chaque
                                        tournoi, tu
                                        peux gagner une partie ou la totalité de la cagnotte, avec des formats allant du
                                        1v1
                                        aux
                                        compétitions par équipe.
                                    </p>
                                </div>
                            </div>
                            <div className={styles.howWorksTextContainer}>
                                <div className={styles.howWorksTextSvg}>
                                    <HowWorksNiceCoins/>
                                </div>
                                <div className={styles.howWorksTextContent}>
                                    <p className={styles.howWorksTitle}>Gagne des NiceCoins</p>
                                    <p className={styles.howWorksDescription}>À la fin d’un tournoi, tes TryTokens sont
                                        transformés en NiceCoins (NC).
                                        Les NiceCoins sont ta véritable récompense : ils représentent tes gains en
                                        tournoi.
                                        Plus
                                        tu
                                        performes, plus tu gagnes. Certains tournois offrent également du matériel
                                        gaming en
                                        plus
                                        des récompenses en jetons !
                                    </p>
                                </div>
                            </div>
                            <div className={styles.howWorksTextContainer}>
                                <div className={styles.howWorksTextSvg}>
                                    <HowWorksConvertis/>
                                </div>
                                <div className={styles.howWorksTextContent}>
                                    <p className={styles.howWorksTitle}>Convertis-les en argent réel</p>
                                    <p className={styles.howWorksDescription}>Dès que tu as accumulé 100 NiceCoins, tu
                                        peux les convertir en
                                        euros et les retirer directement sur ton compte bancaire.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <img src={"/images/banner/hero-banner-bottom.png"} alt={"hero banner"}
                             className={styles.heroBottom}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;