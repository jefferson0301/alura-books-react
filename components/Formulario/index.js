import { useState } from "react"
import CampoFormulario from "../CampoFormulario"
import ListaSuspensa from "../ListaSuspensa"
import ResumoCompra from "../ResumoCompra"
import styles from "./Formulario.module.css"

const Formulario = () => {
    const listaEstados = [   
        'Acre',
        'Alagoas',
        'Amapá',
        'Amazonas',
        'Bahia',
        'Ceará',
        'Distrito Federal',
        'Espírito Santo',
        'Goías',
        'Maranhão',
        'Mato Grosso',
        'Mato Grosso do Sul',
        'Minas Gerais',
        'Pará',
        'Paraíba',
        'Paraná',
        'Pernambuco',
        'Piauí',
        'Rio de Janeiro',
        'Rio Grande do Norte',
        'Rio Grande do Sul',
        'Rondônia',
        'Roraíma',
        'Santa Catarina',
        'São Paulo',
        'Sergipe',
        'Tocantins'
   ]

   const listaPaises = [
        "Afeganistão",
        "África do Sul",
        "Albânia",
        "Alemanha",
        "Andorra",
        "Angola",
        "Anguilla",
        "Antártida",
        "Antígua e Barbuda",
        "Antilhas Holandesas",
        "Arábia Saudita",
        "Argélia",
        "Argentina",
        "Armênia",
        "Aruba",
        "Austrália",
        "Áustria",
        "Azerbaijão",
        "Bahamas",
        "Bahrein",
        "Bangladesh",
        "Barbados",
        "Belarus",
        "Bélgica",
        "Belize",
        "Benin",
        "Bermudas",
        "Bolívia",
        "Bósnia-Herzegóvina",
        "Botsuana",
        "Brasil",
        "Brunei",
        "Bulgária",
        "Burkina Fasso",
        "Burundi",
        "Butão",
        "Cabo Verde",
        "Camarões",
        "Camboja",
        "Canadá",
        "Cazaquistão",
        "Chade",
        "Chile",
        "China",
        "Chipre",
        "Cingapura",
        "Colômbia",
        "Congo",
        "Coréia do Norte",
        "Coréia do Sul",
        "Costa do Marfim",
        "Costa Rica",
        "Croácia (Hrvatska)",
        "Cuba",
        "Dinamarca",
        "Djibuti",
        "Dominica",
        "Egito",
        "El Salvador",
        "Emirados Árabes Unidos",
        "Equador",
        "Eritréia",
        "Eslováquia",
        "Eslovênia",
        "Espanha",
        "Estados Unidos",
        "Estônia",
        "Etiópia",
        "Fiji",
        "Filipinas",
        "Finlândia",
        "França",
        "Gabão",
        "Gâmbia",
        "Gana",
        "Geórgia",
        "Gibraltar",
        "Grã-Bretanha (Reino Unido, UK)",
        "Granada",
        "Grécia",
        "Groelândia",
        "Guadalupe",
        "Guam (Território dos Estados Unidos)",
        "Guatemala",
        "Guernsey",
        "Guiana",
        "Guiana Francesa",
        "Guiné",
        "Guiné Equatorial",
        "Guiné-Bissau",
        "Haiti",
        "Holanda",
        "Honduras",
        "Hong Kong",
        "Hungria",
        "Iêmen",
        "Ilha Bouvet (Território da Noruega)",
        "Ilha do Homem",
        "Ilha Natal",
        "Ilha Pitcairn",
        "Ilha Reunião",
        "Ilhas Aland",
        "Ilhas Cayman",
        "Ilhas Cocos",
        "Ilhas Comores",
        "Ilhas Cook",
        "Ilhas Faroes",
        "Ilhas Falkland (Malvinas)",
        "Ilhas Geórgia do Sul e Sandwich do Sul",
        "Ilhas Heard e McDonald (Território da Austrália)",
        "Ilhas Marianas do Norte",
        "Ilhas Marshall",
        "Ilhas Menores dos Estados Unidos",
        "Ilhas Norfolk",
        "Ilhas Seychelles",
        "Ilhas Solomão",
        "Ilhas Svalbard e Jan Mayen",
        "Ilhas Tokelau",
        "Ilhas Turks e Caicos",
        "Ilhas Virgens (Estados Unidos)",
        "Ilhas Virgens (Inglaterra)",
        "Ilhas Wallis e Futuna",
        "índia",
        "Indonésia",
        "Irã",
        "Iraque",
        "Irlanda",
        "Islândia",
        "Israel",
        "Itália",
        "Jamaica",
        "Japão",
        "Jersey",
        "Jordânia",
        "Kênia",
        "Kiribati",
        "Kuait",
        "Laos",
        "Látvia",
        "Lesoto",
        "Líbano",
        "Libéria",
        "Líbia",
        "Liechtenstein",
        "Lituânia",
        "Luxemburgo",
        "Macau",
        "Macedônia (República Yugoslava)",
        "Madagascar",
        "Malásia",
        "Malaui",
        "Maldivas",
        "Mali",
        "Malta",
        "Marrocos",
        "Martinica",
        "Maurício",
        "Mauritânia",
        "Mayotte",
        "México",
        "Micronésia",
        "Moçambique",
        "Moldova",
        "Mônaco",
        "Mongólia",
        "Montenegro",
        "Montserrat",
        "Myanma",
        "Namíbia",
        "Nauru",
        "Nepal",
        "Nicarágua",
        "Níger",
        "Nigéria",
        "Niue",
        "Noruega",
        "Nova Caledônia",
        "Nova Zelândia",
        "Omã",
        "Palau",
        "Panamá",
        "Papua-Nova Guiné",
        "Paquistão",
        "Paraguai",
        "Peru",
        "Polinésia Francesa",
        "Polônia",
        "Porto Rico",
        "Portugal",
        "Qatar",
        "Quirguistão",
        "República Centro-Africana",
        "República Democrática do Congo",
        "República Dominicana",
        "República Tcheca",
        "Romênia",
        "Ruanda",
        "Rússia (antiga URSS) - Federação Russa",
        "Saara Ocidental",
        "Saint Vincente e Granadinas",
        "Samoa Americana",
        "Samoa Ocidental",
        "San Marino",
        "Santa Helena",
        "Santa Lúcia",
        "São Bartolomeu",
        "São Cristóvão e Névis",
        "São Martim",
        "São Tomé e Príncipe",
        "Senegal",
        "Serra Leoa",
        "Sérvia",
        "Síria",
        "Somália",
        "Sri Lanka",
        "St. Pierre and Miquelon",
        "Suazilândia",
        "Sudão",
        "Suécia",
        "Suíça",
        "Suriname",
        "Tadjiquistão",
        "Tailândia",
        "Taiwan",
        "Tanzânia",
        "Território Britânico do Oceano índico",
        "Territórios do Sul da França",
        "Territórios Palestinos Ocupados",
        "Timor Leste",
        "Togo",
        "Tonga",
        "Trinidad and Tobago",
        "Tunísia",
        "Turcomenistão",
        "Turquia",
        "Tuvalu",
        "Ucrânia",
        "Uganda",
        "Uruguai",
        "Uzbequistão",
        "Vanuatu",
        "Vaticano",
        "Venezuela",
        "Vietnã",
        "Zâmbia",
        "Zimbábue"
    ]

   const listaGenero = [
    "Feminino",
    "Masculino"
   ]

   const [genero, setGenero] = useState("")
   const [pais,setPais] = useState("")
   const [estado, setEstado] = useState("")

  return (
    <form className={styles.cardFormulario} >
        <div>
        <h2 className={styles.titulo} >Dados do cadastro</h2>

            <div>
                <h3 className={styles.subTitulo} >Dados pessoais</h3>
                <CampoFormulario label="Nome completo" type="text" placehoder="Maria Pereira da Silva" />
                <div className={styles.cardDoisCampos} >
                    <CampoFormulario label="Nascimento" type="date" placehoder="15/05/1991" />
                    <ListaSuspensa 
                        nome="Gênero"
                        opcoes={listaGenero} 
                        valor={genero}
                        alterarValor={setGenero}
                    />
                </div>
                <CampoFormulario label="E-mail" type="email" placehoder="emaildemaria@gmail.com" />
                <div className={styles.cardDoisCampos} >
                    <CampoFormulario label="CPF" type="text" placehoder="123.456.789-10" />
                    <CampoFormulario label="Contato" type="text" placehoder="(11) 98765-4321" />
                </div>
            </div>

            <div>
                    <h3 className={styles.subTitulo} >Endereço</h3>
                    <ListaSuspensa 
                            nome="País"
                            opcoes={listaPaises} 
                            valor={pais}
                            alterarValor={setPais}
                        />
                    <CampoFormulario label="Endereço" type="text" placehoder="Avenida da Alameda Silva Souza"/>
                    <div className={styles.cardDoisCampos} >
                        <CampoFormulario label="Número" type="text" placehoder="958" />
                        <CampoFormulario label="Complemento" type="text" placehoder="Apto 45" />
                    </div>
                    <div className={styles.cardDoisCampos} >
                        <CampoFormulario label="CEP" type="text" placehoder="12345-6780" />
                        <CampoFormulario label="Bairro" type="text" placehoder="Vila do Jardim" />
                    </div>
                    <div className={styles.cardDoisCampos} >
                        <CampoFormulario label="Cidade" type="text" placehoder="São Paulo" />
                        <ListaSuspensa 
                            nome="Estado"
                            opcoes={listaEstados} 
                            valor={estado}
                            alterarValor={setEstado}
                        />
                    </div>
                </div>
            </div>

        <ResumoCompra url={"/detalhes-do-livro/minha-sacola/finalizar-compra/pagamento"} />
    </form>
  )
}

export default Formulario