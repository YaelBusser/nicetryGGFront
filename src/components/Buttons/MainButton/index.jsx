import styles from "./index.module.scss";

const MainButton = ({children}) => {
    return (
        <button className={styles.container}>
            {children}
        </button>
    )
}

export default MainButton;