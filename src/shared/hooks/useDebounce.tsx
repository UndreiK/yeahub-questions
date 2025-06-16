import { useEffect, useState } from 'react'

type Props = {
  value: string
  delay: number
}

export const useDebounce = ({ value, delay }: Props) => {
  const [debounced, setDebounced] = useState(value)
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounced(value)
    }, delay)
    return () => clearTimeout(timer)
  }, [value, delay])
  return debounced
}
