import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import styles from './App.module.css'
import CalculaImc from './components/CalculaImc'
import ResultadoImc from './components/ResultadoImc'

function App() {
  return (
    <>
      <div className={`container`}>
        <header>
          <h1 className={`text-center fw-bold mt-5 ${styles.title}`}>Calculadora de IMC</h1>
        </header>
        <div className={`mt-3 border-primary shadow-lg ${styles.calcCorpo}`}>
          <CalculaImc />
          <ResultadoImc />
        </div >
      </div>
    </>
  )
}

export default App
