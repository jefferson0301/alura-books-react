import {useState} from "react"
import styles from "./BotaoCriarConta.module.css"
import ModalCriarConta from "../ModalCriarConta"
 

const BotaoCriarConta = () => {

  const [openModal, setOpenModal] = useState(false)
  
  return (
    <div>
      <button onClick={() => setOpenModal(true)}  className={styles.botaoCriarConta} >Criar Conta</button>
       <ModalCriarConta setOpenModal={ () => setOpenModal(!openModal)} isOpen={openModal} />
    </div>
    
  )
}

export default BotaoCriarConta