import styles from "./InformacoesAutor.module.css"

const InformacoesAutor = () => {
  return (
    <div className={styles.cardAutor} >
        <p  className={styles.descricao} >
          Richard McClintock, um professor de latim do Hampden-Sydney 
          College na Virginia, pesquisou uma das mais obscuras palavras em latim, 
          consectetur, oriunda de uma passagem de Lorem Ipsum, e, procurando por
           entre citações da palavra na literatura clássica, descobriu a sua 
           indubitável origem. 
           Lorem Ipsum vem das seções 1.10.32 e 1.10.33 do "de Finibus Bonorum et 
           Malorum" (Os Extremos do Bem e do Mal), de Cícero, escrito em 45 AC. 
           Este livro é um tratado de teoria da ética muito popular na época da 
           Renascença. A primeira linha de Lorem Ipsum, 
           "Lorem Ipsum dolor sit amet..." vem de uma linha na seção 1.10.32.
        </p>
    </div>
  )
}

export default InformacoesAutor