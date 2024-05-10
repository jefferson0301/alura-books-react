import {useState, useEffect, useRef} from "react"

import styles from "./CardVenda.module.css"
import { motion } from "framer-motion"
import image1 from "../../../src/imagens/1.png"
import image2 from "../../../src/imagens/2.png"
import image3 from "../../../src/imagens/3.png"
import iconeSacola from "../../../src/imagens/icones/Sacola.png"
import iconeFavoritos from "../../../src/imagens/icones/Favoritos.png"
import { Link } from "react-router-dom"

const imagens = [image1, image2, image3]

const CardVenda = ({titulo, cor}) => {

    const carousel = useRef() 
    const[ width, setWidth] = useState(0)

    useEffect(  () => {
        console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth)
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
    }, [])

    const backgroundCardVenda = {
        background: cor,
    }

  return (
    <div>
    <h2 className={styles.titulo} >{titulo}</h2>
    <div style={backgroundCardVenda} className={styles.cardVenda} >
         
       <motion.div ref={carousel} className={styles.carrousel} whileTap={ {cursor: "grabbing"} } >{/*Efeito de slide*/}        
            <motion.div 
            className={styles.inner}  
            drag="x"  
            dragConstraints={{right: 0, left: -width}}
            initial={{ x: 100}} 
            animate={{ x: 0 }}
            transition={{duration: 0.8}}>
            {/* drag="x"  Efeito de slide na direção horizontal*/} 

                {imagens.map(image => (
                    <motion.div className={styles.item} key={image} >
                        <img src={image} alt="Foto Livro" />
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>

        <div className={styles.sobreLivro} >
            <div className={styles.cabecalho} >
                    <h4 className={styles.titulo} >Sobre o livro:</h4>
                    <div>
                        <a href="/" ><img src={iconeSacola} alt="Icone compra" /></a>
                        <a href="/"> <img src={iconeFavoritos} alt="Icone Favoritar" /> </a>
                    </div>
            </div>
            <p className={styles.tituloLivro} >Liderança em Design</p>
            <p className={styles.descricaoLivro} >Habilidades de gestão para alavancar sua carreira</p>
            <p className={styles.autorLivro} >Por: Vitor Zanini</p>

            <div className={styles.cardCompras} >
                <div>
                    <p className={styles.descricaoPreco} >A partir de:</p>
                    <p className={styles.preco} >R$ 29,90</p>
                </div>
                <Link className={styles.btnComprar} to="/detalhes-do-livro" >Comprar</Link>
                
            </div>
            

            
        </div>

    </div>
    </div>
  )
}

export default CardVenda