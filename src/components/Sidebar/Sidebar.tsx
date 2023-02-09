import { useState } from 'react'
import { Container } from './styles'
import { Link } from 'react-router-dom'
import { ReactComponent as BurguerIcon } from '../../assets/burger.svg'
import { ReactComponent as PizzaIcon } from '../../assets/pizza.svg'
import { ReactComponent as SodaIcon } from '../../assets/soda.svg'
import { ReactComponent as IceCreamIcon } from '../../assets/ice-cream.svg'
import menuImg from '../../assets/menu.svg'

const Sidebar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <Container isMenuOpen={menuOpen}>
      <button type='button' onClick={handleToggleMenu}>
        <img src={menuImg} alt='Abrir e fechar o menu' />
      </button>
      <nav>
        <ul>
          <li>
            <Link to='/' className='active'>
              <BurguerIcon />
              <span>Hambúrgueres</span>
            </Link>
          </li>
          <li>
            <Link to='pizzas'>
              <PizzaIcon />
              <span>Pizzas</span>
            </Link>
          </li>
          <li>
            <Link to='bebidas'>
              <SodaIcon />
              <span>Bebidas</span>
            </Link>
          </li>
          <li>
            <Link to='sorvetes'>
              <IceCreamIcon />
              <span>Sorvetes</span>
            </Link>
          </li>
        </ul>
      </nav>
    </Container>
  )
}

export default Sidebar
