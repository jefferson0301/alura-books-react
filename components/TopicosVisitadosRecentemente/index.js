import styles from "./TopicosVisitadosRecentemente.module.css"
import BotaoVisitadosRecentemente from "../BotaoVisitadosRecentemente"

const TopicosVisitadosRecentemente = () => {
  return (
    <div className={styles.background} >
        <h2 className={styles.titulo} >TÓPICOS VISITADOS RECENTEMENTE</h2>
        <div className={styles.cardBotoes} >
            <BotaoVisitadosRecentemente>Android</BotaoVisitadosRecentemente>
            <BotaoVisitadosRecentemente>OO</BotaoVisitadosRecentemente>
            <BotaoVisitadosRecentemente>Marketing Digital</BotaoVisitadosRecentemente>
            <BotaoVisitadosRecentemente>Agile</BotaoVisitadosRecentemente>
            <BotaoVisitadosRecentemente>Startups</BotaoVisitadosRecentemente>
            <BotaoVisitadosRecentemente>HTML & CSS</BotaoVisitadosRecentemente>
            <BotaoVisitadosRecentemente>Java</BotaoVisitadosRecentemente>
            <BotaoVisitadosRecentemente>Python</BotaoVisitadosRecentemente>
        </div>
    </div>
  )
}

export default TopicosVisitadosRecentemente