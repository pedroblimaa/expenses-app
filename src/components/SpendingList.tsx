import SpendingItem from "./SpendingItem"
import styles from "@/styles/SpendingList.module.css"

interface Spending {
  description: string
  amount: number
}

const SpendingList = ({ spendings }: { spendings: Spending[] }) => {
  return (
    <div className={styles.Expenses}>
      <h2 className={styles.ExpensesTitle}>Montly Expenses</h2>
      <ul className={styles.ItemList}>
        {spendings.map((spending, index) => (
          <SpendingItem key={index} {...spending} />
        ))}
      </ul>
    </div>
  )
}

export default SpendingList
