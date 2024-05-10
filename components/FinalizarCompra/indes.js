import { Link } from "react-router-dom"
import BotaoModal from "../BotaoModal"
import styles from "./FinalizarCompra.module.css"

const FinalizarCompra = ({totalCompra, mostrarBtnFinalizarCompra}) => {
  return (
    <div className={styles.cardFinalizarCompra} >
        <span className={styles.txtTotalCompra} >Total da compra</span>
        <span className={styles.valor} > R$ {totalCompra}</span>
        {mostrarBtnFinalizarCompra && <Link className={styles.btnFinalizarCompra} to="/detalhes-do-livro/minha-sacola/finalizar-compra" >Finalizar Compra</Link>}
        
    </div>
  )
}

export default FinalizarCompra