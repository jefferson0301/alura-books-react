import BotaoModal from "../BotaoModal"
import styles from "./ModalLogar.module.css"
import imagemLogin from "../../imagens/imagemLogin.svg"


const ModalLogar = ({isOpen, setAbrirModal}) => {

    const abrirModalCriarContaFecharModalLogar = () => {
        setAbrirModal()
    }

    if(isOpen){
        return (
            <div className={styles.background} >
                <div className={styles.modal} >
                    <div>
                        <img src={imagemLogin} alt="imagem Login" />

                    </div>

                    <div className={styles.cardLogin} >
                        
                        <div className={styles.itemCardLogin} >
                            <h2 className={styles.titulo} >LOGIN</h2>
                            <button className={styles.btnFechar} onClick={setAbrirModal} > X </button>
                        </div>

                        <label htmlFor="email">E-mail</label>
                        <input className={styles.input} type="email" />

                        <label htmlFor="senha">Senha</label>
                        <input className={styles.input} type="password" />
                        <div className={styles.itemCardLogin} >
                            <a className={styles.esqueciSenha} href="/">Esqueci minha senha</a>
                            <BotaoModal url={"/logado"} >Fazer login</BotaoModal>
                        </div>
                        <hr className={styles.barraDivisora} />
                        <div className={styles.itemCardLogin} >
                            <h2 className={styles.naoConta} >Ainda não tem uma conta?</h2>
                            <button 
                                className={styles.botaoCriarConta} 
                                onClick={abrirModalCriarContaFecharModalLogar} 
                            >Criar conta</button>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
            
          )
    }
  
    return null
}

export default ModalLogar