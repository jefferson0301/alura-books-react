import styles from "./CadastrarEmail.module.css"

const CadastrarEmail = () => {
  return (
    <div className={styles.cardCadastrarEmail} >
        <div>
            <h2 className={styles.titulo} >Fique por dentro das novidades!</h2>
            <p className={styles.texto} >Atualizações de e-books, novos livros, promoções e outros.</p>
        </div>

        <div>
            <input  className={styles.inputCadastrarEmail} type="email" placeholder='Cadastre seu e-mail' />
        </div>


    </div>
  )
}

export default CadastrarEmail