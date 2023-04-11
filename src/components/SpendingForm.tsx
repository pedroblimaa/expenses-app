import { useContext, useState } from 'react'

import { ExpenseContext } from '@/context/expenseContext'
import styles from '@/styles/SpendingForm.module.css'
import CreatedExpense from '@/types/CreatedExpense'

const SpendingForm = () => {
  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState('')
  const { addExpense } = useContext(ExpenseContext)

  const createExpense = () => {
    const numAmount = convertToNumber(amount)
    if (numAmount <= 0 || description.trim() === '') {
      return
    }

    const expense: CreatedExpense = {
      description,
      amount: numAmount,
    }

    return expense
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const expense = createExpense()

    if (expense) {
      addExpense(expense)
      setDescription('')
      setAmount('')
    }
  }

  const convertToNumber = (value: string) => {
    const standardNumber = value.replace('.', '').replace(',', '.')
    return parseFloat(standardNumber) || 0
  }

  return (
    <form className={styles.SpendingForm} onSubmit={handleSubmit}>
      <label className={styles.InputLabel}>
        Description:
        <input
          className={styles.FormInput}
          type="text"
          value={description}
          onChange={event => setDescription(event.target.value)}
        />
      </label>
      <label className={styles.InputLabel}>
        Amount:
        <input
          className={styles.FormInput}
          type="text"
          value={amount}
          onChange={event => setAmount(event.target.value)}
          onBlur={event => setAmount(convertToNumber(amount).toFixed(2).replace('.', ','))}
        />
      </label>
      <button className={styles.SubmitBtn} type="submit">
        Add Spending
      </button>
    </form>
  )
}

export default SpendingForm
