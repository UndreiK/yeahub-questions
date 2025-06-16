import { useState } from 'react'
import { SpecializationType } from '../../../entities/specializations/api/types'
import styles from './styles.module.css'

type Props = {
  items: SpecializationType[] | undefined
  total: number
  onShowMore: (total: number) => void
  handleGetSpecId: (id: number) => void
}

const Specializations = ({
  items,
  total,
  onShowMore,
  handleGetSpecId,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState<number | null>(null)

  const handleClick = () => {
    setIsOpen((prev) => !prev)
    onShowMore(isOpen ? 5 : total)
  }

  const handleClickItem = (id: number) => {
    handleGetSpecId(id)
    setSelected(id)
  }

  return (
    <div className={styles.list_block}>
      <h3 className={styles.header}>Специализация</h3>
      <ul className={styles.list}>
        {items?.map((spec) => (
          <li
            key={spec.id}
            className={`${
              selected !== spec.id ? styles.list_item : styles.selected
            }`}
            onClick={() => handleClickItem(spec.id)}
          >
            {spec.title}
          </li>
        ))}
      </ul>
      <a onClick={handleClick}>{isOpen ? 'Свернуть' : 'Посмотреть все'}</a>
    </div>
  )
}

export default Specializations
