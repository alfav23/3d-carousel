import { color } from "three/tsl";
import styles from "./NavBar.module.scss";
import { RxHamburgerMenu } from "react-icons/rx";

export default function NavBar(){
    return(
        <div className={styles.navbarWrapper}>
            <nav className={`${styles.navbar} navbar navbar-expand-lg`}>
                <a className={`${styles.navbarBrand} navbar-brand`} href="/">
                    <img src="/e24icon.png" width="120" height="100" alt="e24 3d icon" /> 
                    <span className={styles.cursor}>
                        choose your vehicle<span>|</span>
                    </span>
                </a>
                {/* <button className={`${styles.navbarToggler} navbar-toggler`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <RxHamburgerMenu className={styles.hamburger}/>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className={`${styles.navItem} nav-item nav-link active`} href="/">Home</a>
                        <a className={`${styles.navItem} nav-item nav-link`} href="/playground">Playground</a>
                    </div>
                </div> */}
            </nav>
        </div>
    );
}