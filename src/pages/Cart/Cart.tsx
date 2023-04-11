import { Head } from '../../components/Head/Head'
import OrderHeader from '../../components/OrderHeader/OrderHeader'
import { Table } from './Table/Table'
import { Container } from './styles'

const Cart = () => {
  return (
    <Container>
      <Head title='Carrinho' />
      <OrderHeader />
      <Table />
    </Container>
  )
}
export default Cart
