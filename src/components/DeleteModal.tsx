import { ExpenseContext } from '@/context/expenseContext'
import styles from '@/styles/DeleteModal.module.css'
import { useEffect, useState } from 'react'

interface Props {
  setShowDeleteModal: (showDeleteModal: boolean) => void
  onDelete: () => void
  description: string
  amount: number
}

const SpendingItem = ({ setShowDeleteModal, onDelete, description, amount }: Props) => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    setShow(true)
  }, [])

  const handleDelete = () => {
    onDelete()
    setShow(false)
  }

  return (
    <div className={`${styles.DeleteModal} ${show ? styles.Show : ''}`}>
      <h2>Delete Expense?</h2>
      <p>Are you sure you want to delete this expense:</p>
      <p>
        <strong>{description}</strong> - ${amount.toFixed(2)}
      </p>
      <div className={styles.DeleteModalButtons}>
        <button onClick={() => setShowDeleteModal(false)}>Cancel</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  )
}

export default SpendingItem
