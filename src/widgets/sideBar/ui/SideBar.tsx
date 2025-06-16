import { useState } from 'react'
import { useGetSpecializationsQuery } from '../../../entities/specializations/api/specializationsApi'
import { Skills } from '../../../features/skill'
import { Specializations } from '../../../features/specialization'
import styles from './styles.module.css'
import { useGetSkillsQuery } from '../../../entities/skills/api/skillsApi'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import {
  selectSpecialization,
  setSkill,
  setSpecialization,
} from '../../../features/filter/filterSlice'
import Complexity from '../../../features/complexity'
import { COMPLEXITY, RATE } from '../../../shared/constants'
import Rate from '../../../features/rate'
import Search from '../../../features/search'

const SideBar = () => {
  const [limitSpecItems, setLimitSpecItems] = useState(5)
  const [limitSkillItems, setLimitSkillItems] = useState(5)
  // const [specializationsId, setSpecializationsId] = useState<number | null>(
  //   null
  // )

  const specialization = useAppSelector(selectSpecialization)
  const dispath = useAppDispatch()

  const { data: specializations } = useGetSpecializationsQuery({
    page: 1,
    limit: limitSpecItems,
  })

  const { data: skills } = useGetSkillsQuery({
    page: 1,
    limit: limitSkillItems,
    specialization,
  })

  const handleGetSpecId = (id: number) => {
    dispath(setSpecialization(id))
    dispath(setSkill(null))
  }

  // const handleGetSkillId = (id: number) => {
  //   setSkillsId(id)
  //   setSpecializationsId(null)
  // }

  const onShowMoreSpecializations = (total: number) => {
    setLimitSpecItems(total)
  }

  const onShowMoreSkills = (total: number) => {
    setLimitSkillItems(total)
  }

  if (!specializations || !skills) return null

  return (
    <aside className={styles.sideBar}>
      <Search />

      <Specializations
        items={specializations.data}
        total={specializations.total}
        onShowMore={onShowMoreSpecializations}
        handleGetSpecId={handleGetSpecId}
      />

      <Skills
        items={skills?.data}
        total={skills?.total}
        onShowMore={onShowMoreSkills}
      />

      <Complexity items={COMPLEXITY} title="Уровень сложности" />

      <Rate items={RATE} title="Оценка" />
    </aside>
  )
}

export default SideBar
