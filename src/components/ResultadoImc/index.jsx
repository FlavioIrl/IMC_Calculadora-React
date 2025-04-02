import styles from './ResultadoImc.module.css'
import React from 'react';

function classificarImc(imc) {
    let categoria;
    let mensagem;
  
    if (imc < 18.5) {
      categoria = "Abaixo do peso";
      mensagem = "Seu IMC está abaixo do recomendado, o que pode indicar um peso abaixo do ideal para a sua saúde. É importante considerar ajustes na alimentação e no estilo de vida.";
    } else if (imc >= 18.5 && imc <= 24.9) {
      categoria = "Peso normal";
      mensagem = "Parabéns! Seu IMC está dentro da faixa saudável, indicando que seu peso está ideal para a sua saúde.";
    } else if (imc >= 25.0 && imc <= 29.9) {
      categoria = "Sobrepeso";
      mensagem = "Seu IMC está acima do recomendado, o que pode indicar que você tem sobrepeso. Recomendamos avaliar sua alimentação e estilo de vida.";
    } else {
      categoria = "Obesidade";
      mensagem = "Seu IMC está na faixa de obesidade. Isso pode aumentar o risco de várias doenças. Consulte um profissional de saúde para orientações personalizadas.";
    }
  
    return { categoria, mensagem };
  }

  function ResultadoImc({ imc }) {
    const { categoria, mensagem } = imc !== null ? classificarImc(imc) : { categoria: '', mensagem: '' };


    return (
        <div className={` shadow-lg mt-5 ${styles.calcCorpo}`}>
            <header>
                <h1 className={`text-center fw-bold  fs-1 ${styles.title}`}>Resultado do seu IMC</h1>
            </header>
            <div className='mt-5'>
                <div className={`d-flex  ${styles.mostraImc}`}>
                    <h2 className={`${styles.text}`}>Seu IMC :</h2>
                    <h2 className={`ps-3 ${styles.text} ${styles.resImc}`}> {imc.toFixed(2)}</h2>
                </div>
                <div className={` ${styles.mostraClasse}`}>
                    <h2 className='text-center mt-4'>Classificação</h2>
                    <hr />
                    <h3 className='fs-5 mt-3 text-center mb-4'>{categoria}</h3>
                    <p>{mensagem}</p>
                
                </div>
            </div>
        </div>
    )
}

export default ResultadoImc