import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { selectRate, setRate } from '../../filter/filterSlice'
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

const Rate = ({ items, title }: Props) => {
  const rate = useAppSelector(selectRate)
  const dispatch = useAppDispatch()

  const handleGetRate = (id: number) => {
    dispatch(setRate(id))
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
              rate.includes(level.id) ? styles.selected : styles.list_item
            }
            onClick={() => handleGetRate(level.id)}
          >
            {level.title}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Rate
