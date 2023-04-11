import { ExpenseProvider } from '@/context/expenseContext'
import '@/styles/globals.css'

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ExpenseProvider>
      <Component {...pageProps} />
    </ExpenseProvider>
  )
}
