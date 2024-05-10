

import Banner from "../../components/Banner"
import CadastrarEmail from "../../components/CadastrarEmail"
import CardVenda from "../../components/CardVenda"
import CriarConta from "../../components/CriarConta"
//import MenuDeslogado from "../../components/MenuDeslogado"
import styles from "./PrincipalDeslogado.module.css"

const PrincipalDeslogado = ({authentic}) => {
  return (
    <div className={styles.container__principal} >
        {/* <MenuDeslogado/> */}
        <Banner titulo="Já sabe por onde começar?" />
        <CardVenda titulo="ÚLTIMOS LANÇAMENTOS" />
        <CardVenda titulo="MAIS VENDIDOS" />
        <CriarConta/>
        <CadastrarEmail/>
    </div>
  )
}

export default PrincipalDeslogado