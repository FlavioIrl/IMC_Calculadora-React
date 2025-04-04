import { useState } from 'react';
import styles from './CalculadoraImc.module.css';

function CalculadoraImc({ setImc }) {
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');

    const calculaImc = () => {
        if (peso && altura) {
            const alturaEmMetros = altura / 100;
            const imcCalculado =  peso / (alturaEmMetros * alturaEmMetros)  

            setImc(imcCalculado); 
        } else {
            setImc(null);
        }
    }

    return (
        <div className="calculadoraImc">
            <div className="peso">
                <h2 className={styles.text}><i className={`bi bi-speedometer2 me-2 ${styles.iconText}`}></i>Peso<b className={styles.undMedida}>(kg)</b>:</h2>
                <input className={`form-control shadow-sm mb-5 ${styles.placePeso}`} type="number" value={peso} onChange={e => setPeso(e.target.value)} placeholder='Ex: 65.3' />
            </div>
            <div className={styles.altura}>
                <h2 className={styles.text}><i className={`bi bi-clipboard-data me-2 ${styles.iconText}`}></i>Altura<b className={styles.undMedida}>(cm)</b>:  </h2>

                <input type="number" className='form-control shadow-sm' value={altura} onChange={e => setAltura(e.target.value)} placeholder='Ex: 180' />
            </div>
            <div className={styles.calcular}>
                <button onClick={calculaImc} className={`btn btn-success mt-5 ${styles.btnCalcular}`}> <i className="bi bi-calculator-fill me-2"></i>Calcular</button>
            </div>
        </div>
    )
}

export default CalculadoraImc;
