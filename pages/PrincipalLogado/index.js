

import { useEffect } from "react"
import Banner from "../../components/Banner"
import CadastrarEmail from "../../components/CadastrarEmail"
import CardVenda from "../../components/CardVenda"
// import MenuLogado from "../../components/MenuLogado"
// import Rodape from "../../components/Rodape"
import TopicosVisitadosRecentemente from "../../components/TopicosVisitadosRecentemente"

import styles from "./PrincipalLogado.module.css"

const PrincipalDeslogado = ({setAuthentic}) => {

  useEffect(() => {
    setAuthentic(true)
  },[]);

  return (
    <div className={styles.container__principal} >
        {/* <MenuLogado/> */}
        <Banner 
          titulo="Já sabe por onde começar?"
          possuiDescricao={true}
          possuiPesquisa={true}
          altura="300px"  />
        <CardVenda titulo="ÚLTIMOS LANÇAMENTOS" />
        <CardVenda titulo="MAIS VENDIDOS" />
        <TopicosVisitadosRecentemente/>
        <CadastrarEmail/>
        {/* <Rodape/> */}
    </div>
  )
}

export default PrincipalDeslogado