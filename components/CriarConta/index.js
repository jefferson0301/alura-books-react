import styles from "./CriarConta.module.css"
import BotaoLogin from "../BotaoLogin/index.js"
import BotaoCriarConta from "../BotaoCriarConta/index.js"

const CriarConta = () => {
  return (
    <div className={styles.cardCriarConta} >
        <div>
            <h2 className={styles.titulo} >Já possui uma conta?</h2>
            <p className={styles.texto} >Com um conta você pode criar sua própria estante de livros e e-books.</p>
        </div>

        <div className={styles.cardBotoes} > 
            <BotaoCriarConta/>
            <BotaoLogin  />
        </div>
    </div>
  )
}

export default CriarConta