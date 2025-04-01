import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './App.module.css'
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (
    <>
      <div className={`container`}>
        <header>
          <h1 className={`text-center fw-bold mt-5 ${styles.title}`}>Calculadora de IMC</h1>
        </header>
        <div className={`mt-3 border-primary shadow-lg ${styles.calculadora}`}>
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
          <div className={`border-primary shadow-lg mt-5 ${styles.resultadoIMC} ${styles.calculadora}`}>
            <header>
              <h1 className={`text-center fw-bold  fs-1 ${styles.title}`}>Resultado do seu IMC</h1>
            </header>
            <div className=' mt-5'>
              <div >
                <h2>Seu IMC é</h2>
                <h2>Classificação</h2>
              </div>
              <div>
                <h3 className='mt-3 fs-5'>17.28</h3>
                <h3 className='mt-3 fs-5 mb-4'>Abaixo do peso</h3>
              </div>
              <hr />
              <p >Seu IMC está abaixo do recomendado, o que pode indicar um peso abaixo do ideal para a sua saúde. É importante considerar ajustes na alimentação e no estilo de vida. Recomendamos consultar um profissional de saúde para orientações personalizadas e seguras</p>
            </div>
          </div>

        </div >
      </div>
    </>
  )
}

export default App
