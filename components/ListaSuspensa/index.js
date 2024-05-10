import React from 'react'
import styles from "./ListaSuspensa.module.css"

const ListaSuspensa = ({nome,alterarValor,opcoes}) => {
  return (
    <div className={styles.containerListaSuspensa} >
        <label className={styles.label} >{nome}</label>
        <select className={styles.input} onChange={ (event) => alterarValor(event.target.value)} >
          <option className={styles.opcaoSelecione} value="">Selecione</option>
        {opcoes.map(opcao => <option key={opcao}>{opcao}</option> )}
            
        </select>
    </div>
    
  )
}

export default ListaSuspensa
