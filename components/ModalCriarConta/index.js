import styles from "./ModalCriarConta.module.css"
import BotaoModal from "../BotaoModal"

const ModalCriarConta = ({isOpen, setOpenModal}) => {
  if(isOpen){
    return(
      <div className={styles.backgrondModal} >
        <div className={styles.cardCriarConta} >
          <div className={styles.cardSuperior} >
            <h2 className={styles.titulo} >Criar Conta</h2>
            <button className={styles.btnFechar} onClick={setOpenModal} >X</button>
          </div>
          
          <form>
            <div>
              <label htmlFor="email">Email</label>
              <input className={styles.input} name="email" type="email" />
            </div>

            <div>
              <label htmlFor="senha">Senha</label>
              <input className={styles.input} name="senha" type="password" />
            </div>

            <div className={styles.ultimoItem} >
              <label htmlFor="senha">Confirmar Senha</label>
              <input className={styles.input} name="senha" type="password" />
            </div>

            <BotaoModal>Criar Conta</BotaoModal>
          </form>
          
            
          </div>
        
        
      </div>
    )
  }

  return null
  
}

export default ModalCriarConta