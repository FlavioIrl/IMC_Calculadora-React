import React, { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import styles from './App.module.css'
import CalculadoraImc from './components/CalculaImc'
import ResultadoImc from './components/ResultadoImc'

function mudarBorda(imc) {
  let border = '2px solid var(--cor-padrao)';

  if (imc < 18.5) {
    border = '2px solid var(--cor-magreza)';
  } else if (imc >= 18.5 && imc <= 24.9) {
    border = '2px solid var(--cor-normal)';
  } else if (imc >= 25.0 && imc <= 29.9) {
    border = '2px solid var(--cor-sobrepeso)';
  } else {
    border = '2px solid var(--cor-obesidade)';
  }

  return { border };
}

function App() {
  const [imc, setImc] = useState(null);
  const { border } = imc !== null ? mudarBorda(imc) : { border: '2px solid var(--cor-padrao)' };

  return (
    <>
      <div className={`container ${styles.container}`}>
        <header>
          <h1 className={`text-center fw-bold mt-5 ${styles.title}`}>Calculadora de IMC</h1>
        </header>
        <div className={`mt-3 shadow-lg ${styles.calcCorpo} `} style={{ border }}>
          <CalculadoraImc setImc={setImc} />
          {
            imc !== null && <ResultadoImc imc={imc} />
          }
        </div >
      </div>
    </>
  )
}

export default App
