import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./CompraRealizadaSucesso.module.css"
import compraSucesso from "../../imagens/icones/compra-sucesso.png"

const CompraRealizadaSucesso = () => {
  return (
    <div className={styles.cardCompraRealizadaSucesso} >
        <img className={styles.imagemCompraSucesso} src={compraSucesso} alt="compra realizada com sucesso" />
        <h2 className={styles.titulo} >Compra Realizada com Sucesso</h2>
        <p className={styles.texto} >Para acompanhar seus pedidos acesse a area do 
         usuário abaixo    
        </p>
        <Link className={styles.btnAreaUsuario} to="/logado">Area do usuario</Link>
    </div>
  )
}

export default CompraRealizadaSucesso