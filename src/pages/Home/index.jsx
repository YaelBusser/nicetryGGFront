import styles from "./index.module.scss";

const Home = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.banner}>
                    <img src={"/images/hero-banner.png"} alt={"hero banner"} className={styles.hero}/>
                    <div className={styles.contentBanner}>
                        <p className={styles.mainText}>Mets ton <span>skill</span> à l'épreuve <br/>
                            et <span>remporte la mise</span></p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home;