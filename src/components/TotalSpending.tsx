import { ExpenseContext } from '@/context/expenseContext'
import styles from '@/styles/TotalSpending.module.css'
import { useContext } from 'react'

interface Props {
  total: number
}

const TotalSpending = () => {
  const { expenses } = useContext(ExpenseContext)
  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0)

  return (
    <div className={styles.TotalSpending}>
      Total spending:<span>${total.toFixed(2)}</span>
    </div>
  )
}

export default TotalSpending
