import React from 'react'
import styles from "./informacoesLivro.module.css"

const informacoesLivro = () => {
  return (
    <div className={styles.cardInformacaoLivro} >
        <p className={styles.resumo} >
        A construção de jogos é uma estratégia poderosa tanto no ensino como
        na aprendizagem dos princípios envolvidos na programação de computadores.
        Scratch foi idealizada com o objetivo de aguçar a criatividade de quem quer 
        programar de forma divertida, desenvolvendo o raciocínio lógico e sequencial 
        através do encaixe de blocos de código. O ambiente é lúdico e intuitivo,
         com personagens, cenas, efeitos sonoros, músicas e gráficos, sendo ideal 
         para aprender por meio da elaboração de narrativas, animações ou jogos.
        </p>
        <div className={styles.informacoesLivro} >
          <div>
            <span className={styles.informacao} >Número de páginas: </span>
            <span className={styles.quantidade} >314</span>
          </div>

          <div>
            <span className={styles.informacao} >ISBN: </span>
            <span className={styles.quantidade} >978-65-86110-59-3</span>
          </div>

          <div>
            <span className={styles.informacao} >Data publicação: </span>
            <span className={styles.quantidade} >02/2021</span>
          </div>
        </div>
    </div>
  )
}

export default informacoesLivro