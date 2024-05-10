import React from 'react'
import styles from "./BotaoModal.module.css"
import { Link } from 'react-router-dom'

const BotaoModal = ({children,tamanho, url}) => {

  const alterarTamanho = {
    with: tamanho,
  } 


  return (
    <div style={alterarTamanho} >
      
      <Link  to={url} className={styles.botao} >{children}</Link>
    </div>
   
  )
}

export default BotaoModal