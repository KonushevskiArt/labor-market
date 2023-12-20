import './styles/index.scss'
import { ThemeProvider } from 'app/providers/ThemeProvider'
import AppLayout from './Layout/Layout'
import { StoreProvider } from './providers/StoreProvider'
import { type FC } from 'react'

const App: FC = () => {
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
