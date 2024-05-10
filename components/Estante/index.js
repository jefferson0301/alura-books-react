import styles from "./Estante.module.css"
import acessabilidadeWeb from "../../imagens/livros/acessabilidade-na-web.svg"
import guiafrontEnd from "../../imagens/livros/guia-front-end.svg"
import gestaoProdutos from "../../imagens/livros/gestao-produtos.svg"
import portugol from "../../imagens/livros/portugol.svg"
import nodeJs from "../../imagens/livros/nodeJs.svg"
import sql from "../../imagens/livros/sql.svg"
import js from "../../imagens/livros/js.svg"
import arquiteturaSoftwaresDistribuidos from "../../imagens/livros/arquiteturaSoftwaresDistribuidos.svg"
import reactNative from "../../imagens/livros/reactNative.svg"
import apache from "../../imagens/livros/apache.svg"

import LivroEstante from "../LivroEstante"

const Estante = ({titulo, segundoTitulo}) => {
  return (
    <div>
        <h2 className={styles.titulo} >{titulo}</h2>
        <div className={styles.cardLivrosUltimasLeituras} >
            <LivroEstante url={acessabilidadeWeb} totalLido={100}/>
            <LivroEstante url={guiafrontEnd} totalLido={89} />
            <LivroEstante url={gestaoProdutos} totalLido={41} />
            <LivroEstante url={portugol} totalLido={0} />
        </div>
        <h2 className={styles.titulo} >{segundoTitulo}</h2>
        <div className={styles.todosEbooks} >
            <LivroEstante url={acessabilidadeWeb} totalLido={100}/>
            <LivroEstante url={guiafrontEnd} totalLido={89} />
            <LivroEstante url={gestaoProdutos} totalLido={41} />
            <LivroEstante url={nodeJs} totalLido={0}/>
            <LivroEstante url={portugol} totalLido={0} />
            <LivroEstante url={sql} totalLido={0}/>
            <LivroEstante url={js} totalLido={100}/>
            <LivroEstante url={arquiteturaSoftwaresDistribuidos} totalLido={37}/>
            <LivroEstante url={reactNative} totalLido={0}/>
            <LivroEstante url={apache} totalLido={100}/>
        </div>
    </div>
  )
}

export default Estante