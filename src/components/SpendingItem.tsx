import styles from "@/styles/SpendingItem.module.css"

interface Props {
  description: string
  amount: number
}

const SpendingItem = ({ description, amount }: Props) => {
  return (
    <li>
      {description} - ${amount.toFixed(2)}
    </li>
  )
}

export default SpendingItem
