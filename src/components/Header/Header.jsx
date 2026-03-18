import styles from "./Header.module.scss";

export default function Header(){
    return(
        <div className={styles.header}>
            <img src="/e24icon.png" width="120" height="100" alt="e24 3d icon" /> 
            <div className={styles.cursor}>
                choose your vehicle<span>|</span>
            </div>
        </div>
    );
}