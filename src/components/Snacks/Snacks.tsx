import { Container } from './styles'
import { FiPlus } from 'react-icons/fi'
import { currencyFormat } from '../Helper/currencyFormat'
import { useCart } from '../../hooks/useCart'
import { SkeletonSnack } from './SkeletonSnacks/SkeletonSnack'
import { SnackData } from '../../models/SnacksData'

interface SnacksProps {
  snacks: SnackData[]
}

export const Snacks = ({ snacks }: SnacksProps) => {
  const { cart, addSnackIntoCard } = useCart()
  return (
    <Container>
      {!snacks.length
        ? [1, 2, 3, 4].map((n) => <SkeletonSnack key={n} />)
        : snacks.map((snack) => {
            const snackExistent = cart.find(
              (item) => item.snack === snack.snack && item.id === snack.id,
            )
            return (
              <div key={snack.id} className='snack'>
                {snackExistent && <span>{snackExistent.quantity}</span>}
                <h2>{snack.name}</h2>
                <img src={snack.image} alt={snack.name} />
                <p>{snack.description}</p>
                <div>
                  <strong>{currencyFormat(snack.price)}</strong>
                  <button type='button' onClick={() => addSnackIntoCard(snack)}>
                    <FiPlus />
                  </button>
                </div>
              </div>
            )
          })}
    </Container>
  )
}
