import { Container } from './styles'
import menuImg from '../../assets/menu.svg'
import { ReactComponent as BurguerIcon } from '../../assets/burger.svg'

const Sidebar = () => {
  return (
    <Container>
      <button type='button'>
        <img src={menuImg} alt='Abrir e fechar o menu' />
      </button>
      <nav>
        <ul>
          <li>
            <a href='#'>
              <BurguerIcon />
              <span>Hambúrguer</span>
            </a>
          </li>
        </ul>
      </nav>
    </Container>
  )
}

export default Sidebar
