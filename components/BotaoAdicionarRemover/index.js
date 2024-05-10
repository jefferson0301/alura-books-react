import styles from "./BotaoAdicionarRemover.module.css"

const BotaoAdicionarRemover = ({alterarValor, children}) => {
  return (
    <button onClick={alterarValor} className={styles.botao} >{children}</button>
  )
}

export default BotaoAdicionarRemover