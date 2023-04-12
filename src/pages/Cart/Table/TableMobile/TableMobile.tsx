import { currencyFormat } from '../../../../components/Helper/currencyFormat'
import { FaTrashAlt } from 'react-icons/fa'
import { useCart } from '../../../../hooks/useCart'
import { Container } from './styles'
import plusImg from '../../../../assets/circle-plus.svg'
import MinusImg from '../../../../assets/circle-minus.svg'
import ConfirmOrder from '../../../../components/ConfirmOrder/ConfirmOrder'

const TableMobile = () => {
  const { cart, removeSnackFromCart, snackCartIcrement, snackCartDecrement } = useCart()

  return (
    <Container>
      {cart.map((item) => (
        <div key={`${item.snack}- ${item.id}`} className='order-item'>
          <div>
            <img src={item.image} alt={item.name} />
          </div>
          <div>
            <h4>{item.name}</h4>
            <span>{currencyFormat(item.price)}</span>
            <div>
              <div>
                <button type='button' onClick={() => snackCartDecrement(item)}>
                  <img src={MinusImg} alt='Remover quantidade' />
                </button>
                <span>{`${item.quantity}`.padStart(2, '0')}</span>
                <button type='button' onClick={() => snackCartIcrement(item)}>
                  <img src={plusImg} alt='Acrescentar quantidade' />
                </button>
              </div>
              <button type='button' onClick={() => removeSnackFromCart(item)}>
                <FaTrashAlt />
              </button>
            </div>
            <h5>
              <span>{currencyFormat(item.subTotal)}</span>
            </h5>
          </div>
        </div>
      ))}
      <ConfirmOrder />
    </Container>
  )
}

export default TableMobile
