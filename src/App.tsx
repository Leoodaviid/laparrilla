import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes'
import { Theme } from './styles/Theme'
import { GlobalStyle } from './styles/global'
import { Normalize } from 'styled-normalize'
import { SnackStorage } from './contexts/SnackContext'

export default function App() {
  return (
    <BrowserRouter>
      <Theme>
        <SnackStorage>
          <AppRoutes />
          <GlobalStyle />
          <Normalize />
        </SnackStorage>
      </Theme>
    </BrowserRouter>
  )
}
