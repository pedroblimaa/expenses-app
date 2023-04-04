import styles from "@/styles/Home.module.css"
import Header from "@/components/Header"
import SpendingForm from "@/components/SpendingForm"
import SpendingList from "@/components/SpendingList"
import TotalSpending from "@/components/TotalSpending"
import { useState } from "react"

interface Spending {
  description: string
  amount: number
}

export default function Home() {
  const [spendings, setSpendings] = useState<Spending[]>([])

  const handleAddSpending = (description: string, amount: number) => {
    const newSpending = { description, amount }
    setSpendings([...spendings, newSpending])
  }

  const total = spendings.reduce((acc, cur) => acc + cur.amount, 0)

  return (
    <div className={styles.App}>
      <Header />
      <main className="AppMain">
        <SpendingForm onAddSpending={handleAddSpending} />
        <SpendingList spendings={spendings} />
        <TotalSpending total={total} />
      </main>
    </div>
  )
}
