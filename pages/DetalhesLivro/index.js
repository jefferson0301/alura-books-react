
import styles from "./DetalhesLivro.module.css"
import livroAngular from "../../imagens/livros/livroangular.svg"
import BotaoFormato from "../../components/BotaoFormato"
import BotaoAdicionarRemover from "../../components/BotaoAdicionarRemover"
import logoSacola from "../../imagens/icones/logo-sacola.svg"
import favoritos from "../../imagens/icones/favoritos.svg"
import {useState} from "react"
import LeveTambem from "../../components/LeveTambem"
import Informacoes from "../../components/Informacoes"
import CardVenda from "../../components/CardVenda"
import { Link } from "react-router-dom"
//import MinhaSacola from "../MinhaSacola"


const DetalhesLivro = () => {
    const [quantidade, setQuantidade] = useState(1)

  return (
    <div className={styles.container__principal} >
        
        <div className={styles.cardTitulo} >
            <h2 className={styles.titulo} >Detalhes do livro</h2>
        </div>

        <div className={styles.cardLivro} >
            <div>
                <img src={livroAngular} alt="livro angular" />
            </div>
            
            <div>
                <div className={styles.informacoesLivro} >
                    <h2 className={styles.informacoesLivroTitulo} >Angular 11 e Firebase</h2>
                    <p className={styles.descricaoLivro} >Construindo uma aplicação integrada com a plataforma do Google</p>
                    <p className={styles.autorLivro} >Por: Kheronn Khennedy Machado</p>
                </div>

                <div>
                    <h2 className={styles.informacoesFormatoLivroTitulo} >Selecione o formato de seu livro:</h2>
                    <div className={styles.cardFormatoLivro} >
                        <BotaoFormato/>
                        <BotaoFormato/>
                        <BotaoFormato/>
                    </div>
                    <p className={styles.observacao} >*Você terá acesso às futuras atualizações do livro.</p>
                </div>
                
                <div className={styles.cardInformacoesCompra} >
                    <div className={styles.cardInformacoesCompraItem} >
                        <div>
                            <span>Quantidade</span>
                        </div>
                        <div>
                            <BotaoAdicionarRemover alterarValor={() => setQuantidade(quantidade-1)} >-</BotaoAdicionarRemover>
                            <span>{quantidade}</span>
                            <BotaoAdicionarRemover alterarValor={() => setQuantidade(quantidade+1)} >+</BotaoAdicionarRemover>
                        </div>
                        
                    </div>

                    <div className={styles.cardInformacoesCompraItem} >
                        <div>
                            <a href="/"><img src={logoSacola} alt="imagem sacola" /></a>
                            <a href="/"><img src={favoritos} alt="imagem favoritos" /></a>
                        </div>
                        <div>
                                <Link className={styles.btnComprar} to="/detalhes-do-livro/minha-sacola" >Comprar</Link>
                        </div>
                     
                    </div>

                </div>
            </div>
            
        </div>

        
            
            <LeveTambem/>
        
            <Informacoes/>
            <CardVenda titulo="VISTOS RECENTEMENTE" cor="linear-gradient(97.54deg, #002F52 35.49%, #326589 165.37%)"/>
        
    </div>
  )
}

export default DetalhesLivro