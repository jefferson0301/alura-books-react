import styles from "./Banner.module.css"

const Banner = ({titulo, possuiDescricao, possuiPesquisa, altura}) => {
  const alturaContainer = {
    height: altura,
  }

  return (
    <div style={alturaContainer} className={styles.container__banner} >
        {/* <div>
            <img src="./assets/banner-img-direita.svg" alt="Imagem pessoas" />
        </div> */}    

        <div  className={styles.container__busca} >
            <h2 className={styles.container__busca__titulo} >{titulo}</h2>
            {possuiDescricao && <h3 className={styles.container__busca__titulo__secundario} >Encontre em nossa estante o que precisa para seu desenvolvimento!</h3>}
            {possuiPesquisa &&<input className={styles.container__busca__campo__pequisa} type="search" placeholder="Qual será sua próxima leitura?"></input>}
        </div>

        

        {/* <div>
            <img src="./assets/banner-img-esquerda.svg" alt="Imagem pessoas" />
        </div> */}
    </div>
  )
}

export default Banner