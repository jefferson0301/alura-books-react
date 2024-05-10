import styles from "./CupomDesconto.module.css"

const CupomDesconto = () => {
  return (
    <div className={styles.cardCupom} >
        <label htmlFor="cupom" className={styles.labelCumpomDesconto}>Cupom de desconto</label>
        <input className={styles.campoCumpoDesconto} name="cupom" type="text" placeholder="Digite aqui seu cupom" />
    </div>
  )
}

export default CupomDesconto