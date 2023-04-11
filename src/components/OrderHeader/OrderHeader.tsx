import { Container } from './styles'
import logoImg from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'
import { ReactComponent as CartIcon } from '../../assets/shopping-cart.svg'

const OrderHeader = () => {
  const { cart } = useCart()

  return (
    <Container>
      <Link to='/'>
        <img src={logoImg} alt='logo laparrilla' />
      </Link>
      <div>
        <div>
          <h3>Meus pedidos</h3>
          <span>
            <strong>{`${cart.length}`.padStart(2, '0')}</strong> lanche(s)
          </span>
        </div>
        <CartIcon />
      </div>
    </Container>
  )
}

export default OrderHeader
