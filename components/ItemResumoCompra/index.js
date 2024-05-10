import styles from "./ItemResumoCompra.module.css"

const ItemResumoCompra = ({url,titulo,resumo,quantidade,preco,}) => {
  return (
    <div className={styles.cardItemResumoCompra} >
        <img src={url} alt={url} />
        <div>
            <h3 className={styles.titulo} >{titulo}</h3>
            <p className={styles.resumo} >{resumo}</p>
            <p className={styles.quantidade} > {quantidade} unidadae</p>
            <p className={styles.preco} >R$ {preco}</p>
        </div>
    </div>
  )
}

export default ItemResumoCompra