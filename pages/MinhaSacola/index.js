import styles from "./MinhaSacola.module.css"
import Banner from "../../components/Banner"
import ItensSelecionados from "../../components/ItensSelecionados"
import CardVenda from "../../components/CardVenda"


const MinhaSacola = () => {
  return (
    <div className={styles.container__principal} >
        <Banner titulo="Minha sacola" possuiPesquisa={false} altura="100px" />
        <ItensSelecionados/>
        <CardVenda titulo="VISTOS RECENTEMENTE" cor="linear-gradient(97.54deg, #002F52 35.49%, #326589 165.37%)"/>
        
    </div>
  )
}

export default MinhaSacola