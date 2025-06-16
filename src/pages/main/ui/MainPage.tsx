import QuestionsList from '../../../entities/questions/ui/questionsList/QuestionsList'
import { SideBar } from '../../../widgets/sideBar'
import styles from './styles.module.css'

const MainPage = () => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <QuestionsList />
        <SideBar />
      </div>
    </main>
  )
}

export default MainPage
