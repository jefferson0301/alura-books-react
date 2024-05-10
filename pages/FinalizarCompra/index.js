import styles from "./FinalizarCompra.module.css"
import Banner from "../../components/Banner"
import CardVenda from "../../components/CardVenda"
import Formulario from "../../components/Formulario"


const FinalizarCompra = () => {
  return (
    <div className={styles.container__principal} >
        
        <Banner titulo="Finalizar compra" possuiPesquisa={false} altura="100px" />
        
          <Formulario/>
          
        
        <CardVenda titulo="VISTOS RECENTEMENTE" cor="linear-gradient(97.54deg, #002F52 35.49%, #326589 165.37%)"/>
        
    </div>
  )
}

export default FinalizarCompra