import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <header>
        <h1 className='text-center mt-5'>Calculadora de IMC</h1>
      </header>
      <div className='container mt-5'>
        <div className="genero">
          <h2>Idade:</h2>
          <button className='btn btn-primary'>Crianças (5-10 anos)</button>
          <button className='btn btn-primary'>Adolescentes (11-17 anos)</button>
          <button className='btn btn-primary'>Adultos (18-64 anos)</button>
          <button className='btn btn-primary'>Idosos (65 anos ou mais)</button>
        </div>
        <div className="peso">
          <h2 className=''>Peso:</h2>
          <input className='form-control' type="number" placeholder='Ex: 65.3' />
        </div>
        <div className="altura">
          <h2>Altura:</h2>
          <input type="number" className='form-control' placeholder='Ex: 180' />
        </div>
      </div >
    </>
  )
}

export default App
