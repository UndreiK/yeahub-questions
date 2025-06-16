import styles from './styles.module.css'
import { useAppDispatch } from '../../../app/hooks'
import { setTitle } from '../../filter/filterSlice'
import { useEffect, useState } from 'react'
import { useDebounce } from '../../../shared/hooks/useDebounce'

const Search = () => {
  const [searchValue, setSearchValue] = useState('')
  const dispatch = useAppDispatch()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value.toLowerCase())
  }

  const debounce = useDebounce({ value: searchValue, delay: 500 })

  useEffect(() => {
    dispatch(setTitle(debounce))
  }, [debounce])

  return (
    <div className={styles.search}>
      <form action="">
        <input
          type="text"
          onChange={handleChange}
          value={searchValue}
          placeholder="Введите запрос..."
        />
      </form>
    </div>
  )
}

export default Search
