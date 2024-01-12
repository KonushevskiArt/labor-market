import './styles/index.scss'
import { ThemeProvider } from 'app/providers/ThemeProvider'
import AppLayout from './Layout/Layout'
import { StoreProvider } from './providers/StoreProvider'
import { type FC } from 'react'
import './firebase.ts'

const App: FC = () => {
  console.log('test for vercel ')
  return (
    <>
      <ThemeProvider>
        <StoreProvider>
          <AppLayout />
        </StoreProvider>
      </ThemeProvider>
    </>

  )
}

export default App
