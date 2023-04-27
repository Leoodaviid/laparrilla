import { useCart } from '../../../hooks/useCart'
import { currencyFormat } from '../../Helper/currencyFormat'
import { Container } from '../styles'

const PayOrder = () => {
  const { cart } = useCart()
  const totalAmount = cart.reduce((acc, item) => (acc += item.subTotal), 0)

  return (
    <Container>
      <button type='button'>Pagar</button>
      <span>
        Total <strong>{currencyFormat(totalAmount)}</strong>
      </span>
    </Container>
  )
}

export default PayOrder
