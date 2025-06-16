import { useState } from 'react'
import { useGetQuestionsQuery } from '../../api/questionsApi'
import QuestionCard from '../question/QuestionCard'
import styles from './styles.module.css'
import { Pagination } from '../../../../widgets/pagination'
import { useAppSelector } from '../../../../app/hooks'
import {
  selectComplexity,
  selectRate,
  selectSkills,
  selectSpecialization,
  selectTitle,
} from '../../../../features/filter/filterSlice'

const QuestionsList = () => {
  const [page, setPage] = useState<number>(1)
  const skills = useAppSelector(selectSkills)
  const specialization = useAppSelector(selectSpecialization)
  const complexity = useAppSelector(selectComplexity)
  const rate = useAppSelector(selectRate)
  const title = useAppSelector(selectTitle)
  const { data } = useGetQuestionsQuery({
    page,
    skills: skills.map((e) => e.id),
    specialization,
    limit: 10,
    complexity,
    rate,
    title,
  })

  const handlePageChange = (page: number) => {
    setPage(page)
  }
  console.log(skills)

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        Список вопросов {skills.map((e) => e.title).join(', ')}
      </h2>
      <ul className={styles.list}>
        {data &&
          data.data.map((question) => (
            <li key={question.id}>
              <QuestionCard question={question} />
            </li>
          ))}
      </ul>
      <Pagination
        handlePageChange={handlePageChange}
        totalPages={data ? Math.ceil(data.total / data.limit) : 0}
      />
    </div>
  )
}

export default QuestionsList
