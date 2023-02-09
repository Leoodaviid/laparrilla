import { Outlet } from 'react-router-dom'
import Sidebar from '../../components/Sidebar/Sidebar'
import { Container } from './styles'
import logoImg from '../../assets/logo.svg'

const Main = () => {
  return (
    <Container>
      <Sidebar />
      <section>
        <img src={logoImg} alt='logo' />
        <Outlet />
      </section>
    </Container>
  )
}
export default Main
