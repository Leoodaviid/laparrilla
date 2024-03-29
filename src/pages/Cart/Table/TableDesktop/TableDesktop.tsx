import { FaTrashAlt } from 'react-icons/fa'
import { currencyFormat } from '../../../../components/Helper/currencyFormat'
import { useCart } from '../../../../hooks/useCart'
import { Container } from './styles'
import plusImg from '../../../../assets/circle-plus.svg'
import MinusImg from '../../../../assets/circle-minus.svg'
import ConfirmOrder from '../../../../components/OrderCloseAction/ConfirmOrder/ConfirmOrder'

const TableDesktop = () => {
  const { cart, removeSnackFromCart, snackCartIncrement, snackCartDecrement } = useCart()
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Lanche</th>
            <th>Qtd</th>
            <th>Subtotal</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={`${item.snack}- ${item.id}`}>
              <td>
                <img src={item.image} alt={item.name} />
              </td>
              <td>
                <h4>{item.name}</h4>
                <span>{currencyFormat(item.price)}</span>
              </td>
              <td>
                <div>
                  <button type='button' onClick={() => snackCartDecrement(item)}>
                    <img src={MinusImg} alt='Remover quantidade' />
                  </button>
                  <span>{`${item.quantity}`.padStart(2, '0')}</span>
                  <button type='button' onClick={() => snackCartIncrement(item)}>
                    <img src={plusImg} alt='Acrescentar quantidade' />
                  </button>
                </div>
              </td>

              <td>
                <h5>{currencyFormat(item.subTotal)}</h5>
              </td>
              <td>
                <button type='button' onClick={() => removeSnackFromCart(item)}>
                  <FaTrashAlt />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ConfirmOrder />
    </Container>
  )
}

export default TableDesktop
