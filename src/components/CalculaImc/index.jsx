import styles from './CalculaImc.module.css';

function CalculaImc() {
    return (
        <div className="calculaImc">
            <div className="peso">
                <h2 className={styles.text}><i className={`bi bi-speedometer2 me-2 ${styles.iconText}`}></i>Peso<b className={styles.undMedida}>(kg)</b>:</h2>
                <input className={`form-control shadow-sm mb-5 ${styles.placePeso}`} type="number" placeholder='Ex: 65.3' />
            </div>
            <div className={styles.altura}>
                <h2 className={styles.text}><i className={`bi bi-clipboard-data me-2 ${styles.iconText}`}></i>Altura<b className={styles.undMedida}>(cm)</b>:  </h2>

                <input type="number" className='form-control shadow-sm' placeholder='Ex: 180' />
            </div>
            <div className={styles.calcular}>
                <button className={`btn btn-success ${styles.btnCalcular}`}> <i className="bi bi-calculator-fill me-2"></i>Calcular</button>
            </div>
        </div>
    )
}

export default CalculaImc;
