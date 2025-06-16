import styles from './styles.module.css'
import { useAppDispatch } from '../../../app/hooks'
import { setTitle } from '../../filter/filterSlice'
import { useState } from 'react'

const Search = () => {
  const [searchValue, setSearchValue] = useState('')
  const dispatch = useAppDispatch()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setTitle(e.target.value.toLowerCase()))
    setSearchValue(e.target.value.toLowerCase())
  }

  console.log(searchValue)

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
