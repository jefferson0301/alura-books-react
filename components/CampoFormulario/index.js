import styles from "./CampoFormulario.module.css"

const CampoFormulario = ({label,placehoder,type}) => {
  return (
    <div className={styles.cardCampoFormulario} >
        <label className={styles.label} >{label}</label>
        <input className={styles.input} type={type} placeholder={placehoder} />
    </div>
  )
}

export default CampoFormulario