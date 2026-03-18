import styles from "./Modal.module.scss";

export default function Modal({ show, onClose, src = '', name = 'BMW E24', description = 'car'}) {
    if (!show) {
        return null;
    }
    return(
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
                <button className={styles.modalCloseButton} onClick={onClose}>
                    &times;
                </button>
                <iframe src={src} style={{width:'100%', maxWidth:'560px', aspectRatio:'7/5', border:'none'}}></iframe>
                <h4 className={styles.carName}>{name}</h4>
                <p className={styles.carDescription}>{description}</p>
            </div>
        </div>
    )
}