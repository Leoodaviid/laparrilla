import { Outlet } from 'react-router-dom'
import { Container } from './styles'
import MyOrder from '../../components/MyOrder/MyOrder'
import Sidebar from '../../components/Sidebar/Sidebar'
import logoImg from '../../assets/logo.png'

const Main = () => {
  return (
    <Container>
      <Sidebar />
      <section>
        <img src={logoImg} alt='logo' />
        <Outlet />
      </section>
      <MyOrder />
    </Container>
  )
}
export default Main
