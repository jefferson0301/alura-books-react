import styles from "./LivroEstante.module.css"

const LivroEstante = ({url, totalLido}) => {
    let estilo = {
        color: "blue",
    }

    if(totalLido === 100){
        estilo = {
            color: "green",
        }
    }

    if(totalLido === 0){
        estilo = {
            color: "orange",
            fontWeitgh: "700"
        }
    }
    
  return (
    <div>
        <img src={url} alt={url} />
        <p className={styles.jaLido} >Já lido: <span className={styles.percentual}  style={estilo} > {totalLido}%</span></p> 
    </div>
  )
}

export default LivroEstante