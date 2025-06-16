import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { selectComplexity, setComplexity } from '../../filter/filterSlice'
import styles from './styles.module.css'

type Item = {
  id: number
  title: string
  value?: string
}

type Props = {
  title: string
  items: Item[]
}

const Complexity = ({ items, title }: Props) => {
  const complexity = useAppSelector(selectComplexity)
  const dispatch = useAppDispatch()

  const handleGetComplexity = (id: number) => {
    dispatch(setComplexity(id))
  }
  console.log('items', items)

  return (
    <div className={styles.list_block}>
      <h3 className={styles.header}>{title}</h3>
      <ul className={styles.list}>
        {items?.map((level) => (
          <li
            key={level.id}
            className={
              complexity.includes(level.id) ? styles.selected : styles.list_item
            }
            onClick={() => handleGetComplexity(level.id)}
          >
            {level.title}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Complexity
