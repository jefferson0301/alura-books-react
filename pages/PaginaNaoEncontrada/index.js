import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from "./PaginaNaoEncontrada.module.css"

const PaginaNaoEncontrada = () => {

    const navegar = useNavigate()

  return (
    <div className={styles.cardPrincipal} >
        <h2 className={styles.titulo} >Erro 404</h2>
        <p className={styles.mensagem} >Pagina Nao Encontrada</p>
        <p className={styles.mensagem} >Tem certeza de que era isso que você estava procurando?</p>
        <button className={styles.btnVoltar} onClick={() => navegar(-1) } >Voltar</button> 
    </div>
  )
}
export default PaginaNaoEncontrada