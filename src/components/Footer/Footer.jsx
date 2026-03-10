import styles from "./Footer.module.scss";

export default function Footer() {
    return (
        <div className={styles.footerOuter}>
            <div className={styles.footerInner}>
                <p>Favorito © 2026</p>
            </div>
        </div>
    )
}