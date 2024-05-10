import styles from "./FinalizarCompraItensSelecionados.module.css"
import FinalizarCompraItemSelecionado from "../FinalizarCompraItemSelecionado"
import meanSacola from "../../imagens/livros/meanSacola.svg"
import jsSacola from "../../imagens/livros/jsSacola.svg"
import FinalizarCompra from "../FinalizarCompra/indes"
import CupomDesconto from "../CupomDesconto"

const FinalizarCompraItensSelecionados = () => {
  return (
    <div className={styles.cardItensSelecionados} >
        <h3>Resumo da compra</h3>
        <FinalizarCompraItemSelecionado 
            titulo="MEAN"
            descricao="Full stack JavaScript para aplicações web com MongoDB, Express, Angular e..."
            autor="Flávio Almeida"
            preco="29,90"
            url={meanSacola} 
        />
        
        <FinalizarCompraItemSelecionado 
            titulo="JavaScript Assertivo "
            descricao="Testes e qualidade de código em todas as camdas da aplicação."
            autor="Gabriel Ramos"
            preco="35,90"
            url={jsSacola} 
        />
        <hr/>

        <div className={styles.cardCupomDescontoETotalCompra} >
          <CupomDesconto/>
          <FinalizarCompra totalCompra="0" mostrarBtnFinalizarCompra={false} />
        </div>
       
    </div>
    
  )
}

export default FinalizarCompraItensSelecionados