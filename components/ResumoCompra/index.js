import ItemResumoCompra from "../ItemResumoCompra"
import styles from "./ResumoCompra.module.css"
import meanResumo from "../../imagens/livros/mean-resumo.svg"
import FinalizarCompraResumo from "../FinalizarCompraResumo"
import jsResumo from "../../imagens/livros/js-resumo.svg"

const ResumoCompra = ({url}) => {
  return (
    <div className={styles.cardResumoCompra} >
        <h2 className={styles.titulo} >Resumo Compra</h2>
        <ItemResumoCompra
          url={meanResumo} 
          titulo="MEAN" 
          quantidade="1" 
          preco="29,90" 
          resumo="Full stack JavaScript para aplicações web com MongoDB, Express,Angular e..."
        />
        <ItemResumoCompra
          url={jsResumo} 
          titulo="JavaScript Assertivo " 
          quantidade="1" 
          preco="35,90" 
          resumo="Testes e qualidade de código em todas as camdas da aplicação."
        />
        <FinalizarCompraResumo 
          url={url}
          // "/detalhes-do-livro/minha-sacola/finalizar-compra/pagamento" 
          totalCompra="65,80"
        />
    </div>
  )
}

export default ResumoCompra