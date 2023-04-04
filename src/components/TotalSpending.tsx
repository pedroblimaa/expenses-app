import styles from "@/styles/TotalSpending.module.css"

interface Props {
  total: number
}

const TotalSpending = ({ total }: Props) => {
  return (
    <div className={styles.TotalSpending}>
      Total spending:<span>${total.toFixed(2)}</span>
    </div>
  )
}

export default TotalSpending
