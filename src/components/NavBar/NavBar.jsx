import { color } from "three/tsl";
import styles from "./NavBar.module.scss";
import { RxHamburgerMenu } from "react-icons/rx";

export default function NavBar(){
    return(
        <div className={styles.navbarWrapper}>
            <nav className={`${styles.navbar} navbar navbar-expand-lg`}>
                <a className={`${styles.navbarBrand} navbar-brand`} href="/">
                    <img src="3dicons-cube-dynamic-color.png" width="30" height="30" alt="blue cube icon" /> 3D Showcase
                </a>
                <button className={`${styles.navbarToggler} navbar-toggler`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <RxHamburgerMenu className={styles.hamburger}/>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className={`${styles.navItem} nav-item nav-link active`} href="/">Home</a>
                        <a className={`${styles.navItem} nav-item nav-link`} href="/playground">Playground</a>
                    </div>
                </div>
            </nav>
        </div>
    );
}