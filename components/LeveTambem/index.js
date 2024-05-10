import styles from "./LeveTambem.module.css"
import mean from "../../imagens/icones/mean.svg"
import BotaoModal from "../BotaoModal"

const LeveTambem = () => {
  return (
    <div className={styles.container__principal} >

    <h2>Some conhecimentos, leve também:</h2>
        <div className={styles.cardLeveTambem} >
           
            <img src={mean} alt="mean" />
            <div>
                <h3 className={styles.titulo} >Mean</h3>
                <p className={styles.descricao} >Full stack JavaScript para aplicações web com MongoDB, Express, Angular e Node.</p>
                <p className={styles.autor} >Por: Flávio Almeida</p>

                <div className={styles.cardPreco} >
                    <span className={styles.preco} >Por mais R$ 00,00 </span>
                    <span className={styles.precoFinal} >Total do pedido: R$ 00,00 </span>
                </div>
                <BotaoModal>Adicionar à sacola</BotaoModal>
            </div>

        </div>
    </div>
  )
}

export default LeveTambem