import styles from "./ItensSelecionados.module.css"
import ItemSelecionado from "../ItemSelecionado"
import meanSacola from "../../imagens/livros/meanSacola.svg"
import jsSacola from "../../imagens/livros/jsSacola.svg"
import FinalizarCompra from "../FinalizarCompra/indes"

const ItensSelecionados = () => {
  return (
    <div className={styles.cardItensSelecionados} >
        <h3>Itens selecionados</h3>
        <ItemSelecionado 
            titulo="MEAN"
            descricao="Full stack JavaScript para aplicações web com MongoDB, Express, Angular e..."
            autor="Flávio Almeida"
            preco="29,90"
            url={meanSacola} 
        />
        
        <ItemSelecionado 
            titulo="JavaScript Assertivo "
            descricao="Testes e qualidade de código em todas as camdas da aplicação."
            autor="Gabriel Ramos"
            preco="35,90"
            url={jsSacola} 
        />
        <hr/>
        <FinalizarCompra totalCompra="0" mostrarBtnFinalizarCompra={true} />
    </div>
    
  )
}

export default ItensSelecionados