import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import styles from './App.module.css'
import CalculadoraImc from './components/CalculaImc'
import ResultadoImc from './components/ResultadoImc'

function App() {
  const [imc, setImc] = useState(null);

  return (
    <>
      <div className={`container ${styles.container}`}>
        <header>
          <h1 className={`text-center fw-bold mt-5 ${styles.title}`}>Calculadora de IMC</h1>
        </header>
        <div className={`mt-3 shadow-lg ${styles.calcCorpo}`}>
          <CalculadoraImc setImc={setImc}/>
          {
            imc !== null && <ResultadoImc imc={imc} />
            
          }
        </div >
      </div>
    </>
  )
}

export default App
