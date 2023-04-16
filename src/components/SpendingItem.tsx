import { ExpenseContext } from '@/context/expenseContext'
import styles from '@/styles/SpendingItem.module.css'
import { useContext, useState } from 'react'
import { FaTrash } from 'react-icons/fa'
import DeleteModal from './DeleteModal'

interface Props {
  _id: number
  description: string
  amount: number
}

const SpendingItem = ({ _id, description, amount }: Props) => {
  const { deleteExpense } = useContext(ExpenseContext)
  const [showDeleteModal, setShowDeleteModal] = useState(false)

  const onDelete = () => {
    deleteExpense(_id)
    setShowDeleteModal(false)
  }

  return (
    <li className={styles.SpendingItem}>
      <span>
        {description} - ${amount.toFixed(2)}
      </span>
      <button className={styles.DeleteButton} onClick={() => setShowDeleteModal(true)}>
        <FaTrash />
      </button>
      {showDeleteModal && (
        <DeleteModal
          setShowDeleteModal={setShowDeleteModal}
          onDelete={onDelete}
          description={description}
          amount={amount}
        />
      )}
    </li>
  )
}

export default SpendingItem
