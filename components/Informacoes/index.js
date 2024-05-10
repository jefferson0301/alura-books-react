import { useState } from "react"
import styles from "./Informacoes.module.css"
import InformacoesAutor from "../InformacoesAutor"
import InformacoesLivro from "../InformacoesLivro"

const Informacoes = () => {
    const [selecionado, setSelecionado] = useState(true)
    const [colorAutor, setColorAutor] = useState("1px solid #EB9B00")
    const [colorLivro, setColorLivro] = useState("3px solid #EB9B00")
    const [corFonteAutor, setcorFonteAutor] = useState("gray")
    const [corFonteLivro, setcorFonteLivro] = useState("#002F52")

    const alterarEstadoLivro = () => {
        setSelecionado(true)
        setColorLivro("3px solid #EB9B00")
        setColorAutor("1px solid #EB9B00")
        setcorFonteAutor("gray")
        setcorFonteLivro("#002F52")
    }

    const alterarEstadoAutor = () => {
      setSelecionado(false)
      setColorAutor("3px solid #EB9B00")
      setColorLivro("1px solid #EB9B00")
      setcorFonteAutor("#002F52")
      setcorFonteLivro("gray  ")
  }

    const estiloBordaAutor = {
      borderBottom: colorAutor ,
      color: corFonteAutor
    }

    const estiloBordaLivro = {
      borderBottom: colorLivro ,
      color: corFonteLivro
    }

    
  return (
    <div className={styles.cardInformacoes} >
        <div>
            <button style={estiloBordaLivro} onClick={() => alterarEstadoLivro() }   className={styles.botao} >Sobre o livro</button>
            <button style={estiloBordaAutor} onClick={() => alterarEstadoAutor() } className={styles.botao} >Sobre o autor</button>            
           
        </div>

       {!selecionado && <InformacoesAutor/>}
       {selecionado && <InformacoesLivro/>}

    </div>
  )
}

export default Informacoes