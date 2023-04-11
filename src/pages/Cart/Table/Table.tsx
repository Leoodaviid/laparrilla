import { useCart } from '../../../hooks/useCart'
import { TableDesktop } from './TableDesktop/TableDesktop'

export const Table = () => {
  const { cart } = useCart()
  if (cart.length === 0) return <h1>Ops! Parece que você nao tem pedidos, peça já!</h1>
  return <TableDesktop />
}
