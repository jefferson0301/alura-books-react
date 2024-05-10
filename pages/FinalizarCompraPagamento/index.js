import styles from "./FinalizarCompraPagamento.module.css"
import Banner from "../../components/Banner"
import CardVenda from "../../components/CardVenda"
import ResumoCompra from "../../components/ResumoCompra"
import Pagamento from "../../components/Pagamento"


const FinalizarCompraPagamento = () => {
  return (
    <div className={styles.container__principal} >
        
        <Banner titulo="Finalizar compra" possuiPesquisa={false} altura="100px" />
        
        <div className={styles.cardDividirDuasColunas} >
            <Pagamento/>
            <ResumoCompra url="/detalhes-do-livro/minha-sacola/finalizar-compra/pagamento/compra-realizada-com-sucesso" />
        </div>
          
          
        
        <CardVenda titulo="VISTOS RECENTEMENTE" cor="linear-gradient(97.54deg, #002F52 35.49%, #326589 165.37%)"/>
        
    </div>
  )
}

export default FinalizarCompraPagamento