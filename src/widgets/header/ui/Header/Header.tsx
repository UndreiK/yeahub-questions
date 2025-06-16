import styles from './styles.module.css'
import logo from '../../../../shared/icons/Logo.svg'
import yeahub from '../../../../shared/icons/Yeahub.svg'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
          <img src={yeahub} alt="yeahub" />
          <div className={styles.nav}>
            <p>База вопросов</p>
            <p>Тренажер</p>
          </div>
        </div>
        <div className={styles.buttons}>
          <button className={styles.buttons_item}>Вход</button>
          <button className={styles.buttons_item}>Регистрация</button>
        </div>
      </div>
    </header>
  )
}

export default Header
