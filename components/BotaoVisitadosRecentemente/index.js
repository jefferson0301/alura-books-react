import styles from "./BotaoVisitadosRecentemente.module.css"

const BotaoVisitadosRecentemente = ({children}) => {
  return (
    <button className={styles.botao} >{children}</button>
  )
}

export default BotaoVisitadosRecentemente