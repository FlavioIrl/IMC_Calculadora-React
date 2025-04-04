import styles from './ResultadoImc.module.css'
import React from 'react';

function classificarImc(imc) {
    let categoria;
    let mensagem;
    let border;
    let color;

    if (imc < 18.5) {
      categoria = "Abaixo do peso";
      mensagem = "Seu IMC está abaixo do recomendado, o que pode indicar um peso abaixo do ideal para a sua saúde. É importante considerar ajustes na alimentação e no estilo de vida.";
      border = '2px solid var(--cor-magreza)';
      color = 'var(--cor-magreza)';
      
    } else if (imc >= 18.5 && imc <= 24.9) {
      categoria = "Peso normal";
      mensagem = "Parabéns! Seu IMC está dentro da faixa saudável, indicando que seu peso está ideal para a sua saúde.";
      border = '2px solid var(--cor-normal)';
      color = 'var(--cor-normal)';
      
    } else if (imc >= 25.0 && imc <= 29.9) {
      categoria = "Sobrepeso";
      mensagem = "Seu IMC está acima do recomendado, o que pode indicar que você tem sobrepeso. Recomendamos avaliar sua alimentação e estilo de vida.";
      border = '2px solid var(--cor-sobrepeso)';
      color = 'var(--cor-sobrepeso)';

    } else {
      categoria = "Obesidade";
      mensagem = "Seu IMC está na faixa de obesidade. Isso pode aumentar o risco de várias doenças. Consulte um profissional de saúde para orientações personalizadas.";
      border = '2px solid var(--cor-obesidade)';
      color = 'var(--cor-obesidade)';
      
    }
  
    return { categoria, mensagem, border, color };
  }

  function ResultadoImc({ imc }) {
    const { categoria, mensagem, border, color  } = imc !== null ? classificarImc(imc) : { categoria: '', mensagem: '', border: 'none', color: 'none'};

    return (
      <div className={` shadow-lg mt-5  ${styles.calcCorpo}` } style={{ border }} >
            <header>
                <h1 className={`text-center fw-bold  fs-1 ${styles.title}`}>Resultado do seu IMC</h1>
            </header>
            <div className='mt-5'>
                <div className={`d-flex  ${styles.mostraImc}`}>
                    <h2 className={`${styles.text}`}  style={{ color }}>Seu IMC :</h2>
                    <h2 className={`ps-3 ${styles.text} ${styles.resImc}`} style={{ color }}> {imc.toFixed(2)}</h2>
                </div>
                <div className={` ${styles.mostraClasse}`}>
                    <h2 className='text-center mt-4'>Classificação</h2>
                    <hr />
                    <h3 className='fs-5 mt-3 text-center mb-4'>{categoria}</h3>
                    <p className={styles.pMensagem}>{mensagem}</p>
                </div>
            </div>
        </div>
    )
}

export default ResultadoImc
