import React, { createContext, useCallback, useEffect, useMemo, useState } from 'react'
import axios from 'axios'
import { API_BASE_URL } from '@/utils/config'
import Expense from '@/types/Expense'
import CreatedExpense from '@/types/CreatedExpense'

type ExpenseContextType = {
  expenses: Expense[]
  addExpense: (newExpense: CreatedExpense) => void
}

const ExpenseContext = createContext<ExpenseContextType>({
  expenses: [] as Expense[],
  addExpense: (newExpense: CreatedExpense) => {},
})

const ExpenseProvider = ({ children }: any) => {
  const [expenses, setExpenses] = useState<Expense[]>([])

  useEffect(() => {
    const getExpenses = async () => {
      const response = await axios.get(API_BASE_URL + '/expenses')
      setExpenses(response.data.data.expenses)
    }

    getExpenses()
  }, [])

  const addExpense = useCallback(async (expense: CreatedExpense) => {
    try {
      const response = await axios.post(API_BASE_URL + '/expenses', expense)
      setExpenses(prevExpenses => [...prevExpenses, response.data.data.expense])
    } catch (error) {
      console.log(error)
    }
  }, [])

  const expenseContextValue = useMemo(() => ({ expenses, addExpense }), [expenses, addExpense])

  return <ExpenseContext.Provider value={expenseContextValue}>{children}</ExpenseContext.Provider>
}

export { ExpenseContext, ExpenseProvider }
