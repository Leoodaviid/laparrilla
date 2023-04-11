import { Head } from '../../components/Head/Head'
import OrderHeader from '../../components/OrderHeader/OrderHeader'
import { Container } from './styles'

const Cart = () => {
  return (
    <Container>
      <Head title='Carrinho' />
      <OrderHeader />
    </Container>
  )
}
export default Cart
