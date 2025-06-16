import { NavLink, useNavigate, useParams } from 'react-router'
import { useGetQuestionByIdQuery } from '../../../entities/questions/api/questionsApi'
import styles from './styles.module.css'
import Label from '../../../shared/ui/label/Label'

const QuestionPage = () => {
  const { id } = useParams()
  const { data } = useGetQuestionByIdQuery({ id })
  const navigate = useNavigate()

  return (
    <div className={styles.page}>
      <div className={styles.wrapper}>
        <button onClick={() => navigate(-1)}>назад</button>

        <div className={styles.container}>
          <div className={styles.question}>
            <div className={styles.block}>
              <h3> {data?.title}</h3>
              <p> {data?.description}</p>
            </div>
            <div className={styles.block}>
              <h4>Краткий ответ</h4>
              <p>{data?.shortAnswer}</p>
            </div>
            <div className={styles.block}>
              <h4>Развернутый ответ</h4>
              <p>{data?.longAnswer}</p>
            </div>
          </div>

          <div className={styles.sidebar}>
            <div className={styles.filter}>
              <p>Уровень:</p>
              <div className={styles.list}>
                <Label name="Рейтинг" value={`${data?.rate}`} />
                <Label name="Сложность" value={`${data?.complexity}`} />
              </div>
            </div>

            <div className={styles.filter}>
              <p>Навыки</p>
              <ul className={styles.list}>
                {data?.questionSkills.map((skill) => (
                  <li key={skill.id} className={styles.list_item}>
                    {skill.title}
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.filter}>
              <p>Ключевые слова:</p>
              <ul className={styles.list}>
                {data?.keywords.map((word) => (
                  <li key={word}>
                    <p className={styles.keyword}>#{word}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuestionPage
