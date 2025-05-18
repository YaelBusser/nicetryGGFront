import { useEffect, useRef } from "react";
import styles from "./index.module.scss";
import Valorant from "../../assets/icons/games/valorant.svg";
import Lol from "../../assets/icons/games/lol.svg";

const icons = [<Valorant />, <Lol />];

const BandeauDefileGames = () => {
    const trackRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const updateDuration = () => {
            if (!contentRef.current || !trackRef.current) return;
            const contentWidth = contentRef.current.offsetWidth;
            const baseSpeed = 500;
            const duration = Math.min(Math.max(contentWidth / baseSpeed, 5000), 35);
            const adjustmentFactor = window.innerWidth > 1400 ? 0.998 : 0.999;
            trackRef.current.style.animationDuration = duration * adjustmentFactor + "s";
        };

        updateDuration();
        window.addEventListener("resize", updateDuration);
        return () => window.removeEventListener("resize", updateDuration);
    }, []);

    const renderContent = () =>
        Array.from({ length: 20 }).map((_, i) => (
            <div className={styles.content} key={i}>
                {icons
                    .slice()
                    .reverse()
                    .map((icon, j) => (
                        <div className={styles.icon} key={`icon-${i}-${j}`}>
                            {icon}
                        </div>
                    ))}

            </div>
        ));

    return (
        <div className={styles.marquee}>
            <div className={styles.track} ref={trackRef}>
                <div ref={contentRef} className={styles.inner}>
                    {renderContent()}
                </div>
            </div>
        </div>
    );
};

export default BandeauDefileGames;
