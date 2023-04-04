import { useState } from "react"

import styles from "@/styles/SpendingForm.module.css"

interface Spending {
  name: string
  amount: number
}

interface Props {
  onAddSpending: (description: string, amount: number) => void
}

const SpendingForm = ({ onAddSpending }: Props) => {
  const [description, setDescription] = useState("")
  const [amount, setAmount] = useState("")

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const numAmount = convertToNumber(amount)
    if (numAmount <= 0 || description.trim() === "") {
      return
    }
    onAddSpending(description, convertToNumber(amount))
    setDescription("")
    setAmount("")
  }

  const convertToNumber = (value: string) => {
    const standardNumber = value.replace(".", "").replace(",", ".")
    console.log(standardNumber)
    console.log(parseFloat(standardNumber))
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
          onChange={(event) => setDescription(event.target.value)}
        />
      </label>
      <label className={styles.InputLabel}>
        Amount:
        <input
          className={styles.FormInput}
          type="text"
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
          onBlur={(event) => setAmount(convertToNumber(amount).toFixed(2).replace(".", ","))}
        />
      </label>
      <button className={styles.SubmitBtn} type="submit">
        Add Spending
      </button>
    </form>
  )
}

export default SpendingForm
