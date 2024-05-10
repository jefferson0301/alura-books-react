import styles from "./MenuLogado.module.css"
import logoAlura from "../../imagens/icones/logo-alura.svg"
import logoUsuario from "../../imagens/icones/logo-usuario.svg"
import {Link} from "react-router-dom"

const MenuLogado = () => {
  return (
    <div className={styles.menu} >
        <div className={styles.menu__esquerda} >
            
                <Link to="/" className={styles.menu__esquerda} >
                    <span> <img src={logoAlura} alt="Logo Alura" /> </span>
                    <span>AluraBooks</span>
                </Link>

                <Link to="/" className={styles.menu__esquerda} >
                    CATEGORIAS
                </Link>

                <Link to="/" className={styles.menu__esquerda} >
                    FAVORITOS
                </Link>

                <Link to="/minha-estante" className={styles.menu__esquerda} >
                    MINHA ESTANTE
                </Link>

            
        </div>

        <div className={styles.menu__direita} >
            <Link to="/" className={styles.menu__direita} >
                <span><img src={logoUsuario} alt="Logo Usuario" /></span>
                <span>Login</span>
            </Link>
        </div>
    </div>
  )
}

export default MenuLogado