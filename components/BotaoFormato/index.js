import styles from "./BotaoFormato.module.css"

const BotaoFormato = () => {
  return (
    <div className={styles.cardBotao} >
        <p className={styles.titulo} >Formato</p>
        <p className={styles.valor} >R$ 00,00</p>
        <p className={styles.formatos} >.pdf, .epub, .mob</p>
    </div>
  )
}

export default BotaoFormato