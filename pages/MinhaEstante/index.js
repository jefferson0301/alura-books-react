//import styles from "./MinhaEstante.module.css"
import Banner from "../../components/Banner"
import Estante from "../../components/Estante"

const MinhaEstante = () => {
  return (
    <div>
        
        <Banner titulo="Minha estante" possuiDescricao={false} />
        <Estante titulo="ÚLTIMAS LEITURAS" segundoTitulo="TODOS OS E-BOOKS" />
        
       
    </div>
  )
}

export default MinhaEstante