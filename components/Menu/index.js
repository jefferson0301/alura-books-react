import styles from "./Menu.module.css"

const Menu = () => {
  return (
    <ul className={styles.menu} >
        <div className={styles.menu__esquerda} >
            <li className={styles.menu__item} > <a  className={styles.menu__item__link} href="/">
                <span><img src="./assets/logo-alura.svg" alt="Logo Alura" /></span> <span>AluraBooks</span> </a>  
            </li>
            <li className={styles.menu__item} > <a className={styles.menu__item__link} href="/">CATEGORIAS</a> </li>
            <li className={styles.menu__item} > <a className={styles.menu__item__link} href="/">FAVORITOS</a> </li>
            <li className={styles.menu__item} > <a className={styles.menu__item__link} href="/">MINHA ESTANTE</a> </li>
            
        </div>
        
        <div className={styles.menu__direita} >
            <li className={styles.menu__item} >
                <a className={styles.menu__item__link} href="/"> 
                <span><img src="./assets/logo-sacola.svg" alt="Logo Sacola" /></span> Minha sacola
                </a> </li>
            <li className={styles.menu__item} > 
                <a className={styles.menu__item__link} href="/">
                    <span><img src="./assets/logo-usuario.svg" alt="Logo Usuario" /></span>
                    <span>Meu perfil</span>
                </a>
            
            </li>
        </div>
        
    </ul>
  )
}

export default Menu