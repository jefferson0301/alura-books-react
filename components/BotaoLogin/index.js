import styles from "./BotaoLogin.module.css"
import ModalLogar from "../ModalLogar"
import {useState} from "react"

const BotaoLogin = () => {
  const [abrirModal, setAbrirModal] = useState(false)
  return (
    <div>
      <button className={styles.botaoLogin} onClick={() => setAbrirModal(true)} >Fazer Login</button>
    <ModalLogar isOpen={abrirModal} setAbrirModal={() => setAbrirModal(!abrirModal)} />
    </div>
  )
}

export default BotaoLogin