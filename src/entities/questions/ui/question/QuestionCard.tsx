import { useState } from 'react'
import { QuestionType } from '../../api/types'
import styles from './styles.module.css'
import { NavLink } from 'react-router'

type Props = {
  question: QuestionType
}

const QuestionCard = ({ question }: Props) => {
  const [open, setOpen] = useState(false)

  return (
    <article>
      <div className={styles.container} onClick={() => setOpen(!open)}>
        <p>{question.title}</p>
        {open ? <p>свернуть</p> : <p>раскрыть</p>}
      </div>
      {open && (
        <div className={styles.question}>
          <ul className={styles.list}>
            <li>
              Рейтинг: <span>{question.rate}</span>
            </li>
            <li>
              Сложность: <span>{question.complexity}</span>
            </li>
          </ul>
          <p>{question.description}</p>
          <NavLink className={styles.link} to={`/questions/${question.id}`}>
            Подробнее
          </NavLink>
        </div>
      )}
    </article>
  )
}

export default QuestionCard
