import styles from "./Pagamento.module.css"
import paypal from "../../imagens/icones/paypal.svg"
import pagSeguro from "../../imagens/icones/pag-seguro.svg"
import { useState } from "react"

const Pagamento = () => {
    const [displayPayPal, setdisplayPayPal] = useState("block")
    const [displayPagSeguro, setDisplayPagSeguro] = useState("none")

    const alterarPaypal = () => {
        console.log("rodou alterar pay pal")
        setdisplayPayPal("block")
        setDisplayPagSeguro("none")
    }

    const estiloPaypal = {
        display: displayPayPal,
    }

    const alterarPagSeguro = () => {
        console.log("rodou alterar pag seguro")
        setdisplayPayPal("none")
        setDisplayPagSeguro("block")
    }

    const estiloPagSeguro = {
        display: displayPagSeguro,
    }

  return (
    <div>
        <h2 className={styles.titulo} >Pagamento</h2>
        <div className={styles.cardFormaPagamento} >
        <h3 className={styles.subTitulo} >Modo de pagamento</h3>
        <div className={styles.paypalOuPagSeguro} >          
                <div className={styles.paypalOuPagSeguroItem} >
                    <input name="banco" checked={true} onClick={() => alterarPaypal()} type="radio" ></input>
                    <span>Paypal</span>
                </div>

                <div className={styles.paypalOuPagSeguroItem} >
                    <input name="banco" onClick={() => alterarPagSeguro()} type="radio" ></input>
                    <span>PagSeguro</span>
                </div>
            </div>
            <img style={estiloPaypal} src={paypal} alt="Depois de clicar em “Finalizar a compra”, você será redirecionado para a PayPal para finalizar sua compra com segurança." />
            <img style={estiloPagSeguro} src={pagSeguro} alt="Depois de clicar em “Finalizar a compra”, você será redirecionado para o PagSeguro para finalizar sua compra com segurança." />
        </div>
        
        <div className={styles.cardDadosEnvio} >
            <h3 className={styles.subTitulo} >Dados para envio</h3>

            <div className={styles.cardInformcoesComprador} >
                <div className={styles.informcoesComprador} >
                    <p>Maria Pereira da Silva</p>
                    <p>maria@gamil.com</p>
                    <p>(11) 98765-4321 </p>
                </div>
                <a className={styles.linkAlterar} href="/">Alterar</a>
            </div>

            <div className={styles.cardInformcoesEnvio} >
                <div className={styles.informcoesEnvio} >
                    <p>Avenida da Alameda Silva Souza, 958, Apto 45</p>
                    <p>Vila do Jardim</p>
                    <p>São Paulo - SP </p>
                    <p>12345-67</p>
                </div>
                <a className={styles.linkAlterar} href="/">Alterar</a>
            </div>

        </div>

    </div>
  )
}

export default Pagamento