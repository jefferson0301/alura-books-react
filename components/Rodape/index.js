import styles from "./Rodape.module.css"
import caelum from "../../imagens/icones/caelum.svg"
import casaCodigo from "../../imagens/icones/casa-codigo.svg"
import alura from "../../imagens/icones/alura.svg"
import aluraEmpresas from "../../imagens/icones/alura-empresas.svg"
import aluraStart from "../../imagens/icones/aluraStart.svg"
import aluraLatam from "../../imagens/icones/aluraLatam.svg"
import musicDot from "../../imagens/icones/musicDot.svg"
import aluraLingua from "../../imagens/icones/aluraLingua.svg"
import pmb from "../../imagens/icones/pmb.svg"
import hipoters from "../../imagens/icones/hipoters.svg"
import scuba from "../../imagens/icones/scuba.svg"
import layers from "../../imagens/icones/layers.svg"
import likeBoss from "../../imagens/icones/likeBoss.svg"
import carreiraSemFronteiras from "../../imagens/icones/carreira-sem-fronteiras.svg"
import hypotechJob from "../../imagens/icones/hypotechJobs.svg"
import guj from "../../imagens/icones/guj.svg"


const Rodape = () => {
  return (
    <div className={styles.rodape} >
        <div>
            <h2>Grupo Alura</h2>
        </div>

        <div className={styles.subCardRodape} >
            <h3>EDUCAÇÃO</h3>
            <ul>
                <li className={styles.item} > <img src={caelum} alt="caelum" /> Caelum</li>
                <li className={styles.item} > <img src={casaCodigo} alt="casa codigo" /> Casa do Código</li>
            </ul>
        </div>

        <div className={styles.subCardRodape} >
            <h3>EDUCAÇÃO ONLINE</h3>
            <ul>
                <li className={styles.item} > <img src={alura} alt="caelum" /> Alura</li>
                <li className={styles.item} > <img src={aluraEmpresas} alt="casa codigo" />Alura Para Empresas</li>
                <li className={styles.item} > <img src={aluraLatam} alt="caelum" /> Alura LATAM</li>
                <li className={styles.item} > <img src={aluraStart} alt="casa codigo" /> Alura Start</li>
                <li className={styles.item} > <img src={musicDot} alt="caelum" /> MusicDot</li>
                <li className={styles.item} > <img src={aluraLingua} alt="casa codigo" /> Alura Língua</li>
                <li className={styles.item} > <img src={pmb} alt="caelum" /> PM3</li>
            </ul>
        </div>

        <div className={styles.subCardRodape} >
            <h3>COMUNIDADE</h3>
            <ul>
                <li className={styles.item} > <img src={hipoters} alt="caelum" /> Hipsters ponto Tech</li>
                <li className={styles.item} > <img src={scuba} alt="casa codigo" />Scuba Dev</li>
                <li className={styles.item} > <img src={layers} alt="caelum" /> Layers ponto Tech</li>
                <li className={styles.item} > <img src={likeBoss} alt="casa codigo" /> Like a Boss</li>
                <li className={styles.item} > <img src={carreiraSemFronteiras} alt="caelum" /> Carreira sem Fronteira</li>
                <li className={styles.item} > <img src={hypotechJob} alt="casa codigo" /> Hipsters ponto Jobs</li>
                <li className={styles.item} > <img src={guj} alt="caelum" /> GUJ</li>
            </ul>   
        </div>

        
    </div>
  )
}

export default Rodape