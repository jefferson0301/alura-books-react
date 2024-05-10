import styles from "./MenuDeslogado.module.css"

const MenuDeslogado = () => {
  return (
    <div className={styles.menu} >
        <div className={styles.menu__esquerda} >
            
                <a href="/" className={styles.menu__esquerda} >
                    <span> <img src="./assets/logo-alura.svg" alt="Logo Alura" /> </span>
                    <span>AluraBooks</span>
                </a>

                <a href="/" className={styles.menu__esquerda} >
                    CATEGORIAS
                </a>

            <div>

            </div>
        </div>

        <div className={styles.menu__direita} >
            <a href="/" className={styles.menu__direita} >
                <span><img src="./assets/logo-usuario.svg" alt="Logo Usuario" /></span>
                <span>Login</span>
            </a>
        </div>
    </div>
  )
}

export default MenuDeslogado