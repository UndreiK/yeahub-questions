import styles from './styles.module.css'

type Props = {
  name: string
  value: number | string
}

const Label = ({ name, value }: Props) => {
  return (
    <div className={styles.label}>
      {name}: <span className={styles.value}>{value}</span>
    </div>
  )
}

export default Label
