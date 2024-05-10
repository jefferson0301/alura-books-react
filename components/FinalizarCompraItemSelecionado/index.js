import styles from "./FinalizarCompraItemSelecionado.module.css"
import iconeRemocao from "../../imagens/icones/iconeRemocao.svg"
import BotaoAdicionarRemover from "../BotaoAdicionarRemover"
import {useState} from "react"

const FinalizarCompraItemSelecionado = ({url, titulo, descricao, autor, preco}) => {
    const [quantidade, setQuantidade] = useState(0)
    const [mostrar, setMostrar] = useState("flex")

    const apagarContainer = {
        display: mostrar,
    }

  return (
    <div style={apagarContainer} className={styles.cardItemSelecionado}  >
        <div className={styles.cardLivro} >
            <img src={url} alt={url} />
            <div className={styles.cardInformacoesLivro} >
                <h4 className={styles.titulo} >{titulo}</h4>
                <p className={styles.descricao} >{descricao}</p>
                <p className={styles.autor} >Por: {autor}</p>
            </div>
        </div>
        
        <div className={styles.cardInfCompra} >

            <div className={styles.cardRemocao} >
                <div onClick={() => setMostrar("none")} className={styles.botaoRemover } >
                    <span className={styles.tooltiptext}>Remover</span> 
                    <img src={iconeRemocao} alt="iconeRemocao" />
                </div>    
            </div>
            <div className={styles.cardPrecoQuantidade} >
                    <div>
                        <h4 className={styles.tituloItem} >Preço</h4>
                        <p>R$: {preco}</p>
                    </div>
                    <div>
                        <h4 className={styles.tituloItem} >Quantidade</h4>
                        <div className={styles.cardQuantidade} >
                            <BotaoAdicionarRemover alterarValor={() => setQuantidade(quantidade-1)} children="-" />
                            <span>{quantidade}</span>
                            <BotaoAdicionarRemover alterarValor={() => setQuantidade(quantidade+1)} children="+" />
                        </div>
                    </div>
            </div>
        </div>
        
        
        
    </div>
  )
}

export default FinalizarCompraItemSelecionado