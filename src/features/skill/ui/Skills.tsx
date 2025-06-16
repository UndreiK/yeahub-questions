import { useState } from 'react'
import { SkillType } from '../../../entities/skills/api/types'
import styles from './styles.module.css'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { selectSkills, setSkill } from '../../filter/filterSlice'

type Props = {
  items: SkillType[]
  total: number
  onShowMore: (total: number) => void
}

const Skill = ({ items, total, onShowMore }: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const skills = useAppSelector(selectSkills)

  const dispatch = useAppDispatch()

  const handleClick = () => {
    setIsOpen((prev) => !prev)
    onShowMore(isOpen ? 5 : total)
  }

  const handleGetSkill = (id: number, title: string) => {
    dispatch(setSkill({ id, title }))
  }

  console.log(skills)

  return (
    <div className={styles.list_block}>
      <h3 className={styles.header}>Навыки</h3>
      <ul className={styles.list}>
        {items?.map((skill) => (
          <li
            key={skill.id}
            className={
              skills.some((item) => item.id === skill.id)
                ? styles.selected
                : styles.list_item
            }
            onClick={() => handleGetSkill(skill.id, skill.title)}
          >
            {skill.title}
          </li>
        ))}
      </ul>
      <a onClick={handleClick}>{isOpen ? 'Свернуть' : 'Посмотреть все'}</a>
    </div>
  )
}

export default Skill
