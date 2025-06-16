import { useNavigate, useParams } from 'react-router'
import { useGetQuestionByIdQuery } from '../../../entities/questions/api/questionsApi'
import styles from './styles.module.css'

const QuestionPage = () => {
  const { id } = useParams()
  const { data } = useGetQuestionByIdQuery({ id })
  const navigate = useNavigate()

  console.log(data)

  return (
    <div className={styles.page}>
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
          <p>Уровень:</p>
          <div className={styles.list}>
            <div>
              Рейтинг: <span>{data?.rate}</span>
            </div>
            <div>
              Сложность: <span>{data?.complexity}</span>
            </div>
          </div>

          <div>
            <p>Навыки</p>
            <ul className={styles.list}>
              {data?.questionSkills.map((skill) => (
                <li key={skill.id} className={styles.list_item}>
                  {skill.title}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p>Ключевые слова:</p>
            <ul>
              {data?.keywords.map((word) => (
                <li key={word}>
                  <p>#{word}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuestionPage
