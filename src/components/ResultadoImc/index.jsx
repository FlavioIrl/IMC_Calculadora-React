import styles from './ResultadoImc.module.css'

function ResultadoImc() {
    return (
        <div className={`border-primary shadow-lg mt-5 ${styles.resultadoIMC} ${styles.calcCorpo}`}>
            <header>
                <h1 className={`text-center fw-bold  fs-1 ${styles.title}`}>Resultado do seu IMC</h1>
            </header>
            <div className='mt-5'>
                <div className={`d-flex ${styles.mostraImc}`}>
                    <h2 className='me-5'>Seu IMC :</h2>
                    <h2 className='fw-bold'>17.28</h2>
                </div>
                <div className={` ${styles.mostraClasse}`}>
                    <h2 className='text-center mt-4'>Classificação</h2>
                    <hr />
                    <h3 className='fs-5 mt-3 text-center mb-4'>Abaixo do peso</h3>
                </div>
                
                <p>Seu IMC está abaixo do recomendado, o que pode indicar um peso abaixo do ideal para a sua saúde. É importante considerar ajustes na alimentação e no estilo de vida. Recomendamos consultar um profissional de saúde para orientações personalizadas e seguras</p>
            </div>
        </div>
    )
}

export default ResultadoImc