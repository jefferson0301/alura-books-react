import styles from "./FinalizarCompraResumo.module.css"
import CupomDesconto from "../CupomDesconto"
import { Link } from "react-router-dom"

const FinalizarCompraResumo = ({totalCompra, url}) => {
  return (
    <div className={styles.cardFinalizarCompra} >
        <CupomDesconto/>
        <div className={styles.cardDividirDois} >
            <span className={styles.txtTotalCompra} >Total da compra</span>
            <span className={styles.valor} > R$ {totalCompra}</span>
        </div>
        <Link to={url} className={styles.botaoContinuar} >Continuar</Link>
       
    </div>
  )
}

export default FinalizarCompraResumo