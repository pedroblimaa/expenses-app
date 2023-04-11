import { useContext } from 'react'

import ExpenseItem from '@/components/SpendingItem'
import styles from '@/styles/SpendingList.module.css'
import { ExpenseContext } from '@/context/expenseContext'

const SpendingList = () => {
  const { expenses} = useContext(ExpenseContext)

  return (
    <div className={styles.Expenses}>
      <h2 className={styles.ExpensesTitle}>Montly Expenses</h2>
      <ul className={styles.ItemList}>
        {expenses.map(expense => (
          <ExpenseItem key={expense._id} {...expense} />
        ))}
      </ul>
    </div>
  )
}

export default SpendingList
