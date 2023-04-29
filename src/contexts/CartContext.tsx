import { createContext, ReactNode, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SnackData } from '../models/SnacksData'
import { snackEmoji } from '../components/Helper/snackEmoji'
import { toast } from 'react-toastify'
import { CustomerData } from '../models/CustomerData'

interface Snack extends SnackData {
  quantity: number
  subTotal: number
}

interface CartContextProps {
  cart: Snack[]
  addSnackIntoCard: (snack: SnackData) => void
  removeSnackFromCart: (snack: Snack) => void
  snackCartIncrement: (snack: Snack) => void
  snackCartDecrement: (snack: Snack) => void
  confirmOrder: () => void
  payOrder: (customer: CustomerData) => void
}

export const CartContext = createContext({} as CartContextProps)

const localStorageKey = '@LaParrilla:cart'

export const CartStorage = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate()
  const [cart, setCart] = useState<Snack[]>([])

  function saveCart(items: Snack[]) {
    setCart(items)
    localStorage.setItem(localStorageKey, JSON.stringify(items))
  }

  function addSnackIntoCard(snack: SnackData): void {
    //buscar
    const snackExistentInCart = cart.find(
      (item) => item.snack === snack.snack && item.id === snack.id,
    )
    //atualizar
    if (snackExistentInCart) {
      const newCart = cart.map((item) => {
        if (item.id === snack.id) {
          const quantity = item.quantity + 1
          const subTotal = item.price * quantity
          return { ...item, quantity, subTotal }
        }
        return item
      })
      toast.success(`Outro(a) ${snack.snack} ${snack.name} adicionado nos pedidos!`)
      saveCart(newCart)
      return
    }
    //adicionar
    const newSnack = { ...snack, quantity: 1, subTotal: snack.price }
    const newCart = [...cart, newSnack]
    toast.success(`${snackEmoji(snack.snack)} ${snack.name} adicionado nos pedidos!`)
    saveCart(newCart)
  }

  function removeSnackFromCart(snack: Snack) {
    const newCart = cart.filter((item) => !(item.id === snack.id && item.snack === snack.snack))
    saveCart(newCart)
  }

  function updateSnackQuantity(snack: Snack, newQuantity: number) {
    if (newQuantity <= 0) return

    const snackExistentInCart = cart.find(
      (item) => item.id === snack.id && item.snack === snack.snack,
    )
    if (!snackExistentInCart) return

    const newCart = cart.map((item) => {
      if (item.id === snackExistentInCart.id && item.snack === snackExistentInCart.snack) {
        return {
          ...item,
          quantity: newQuantity,
          subTotal: item.price * newQuantity,
        }
      }

      return item
    })
    saveCart(newCart)
  }

  function snackCartIncrement(snack: Snack) {
    updateSnackQuantity(snack, snack.quantity + 1)
  }

  function snackCartDecrement(snack: Snack) {
    updateSnackQuantity(snack, snack.quantity - 1)
  }

  function confirmOrder() {
    navigate('/payment')
  }

  function payOrder(customer: CustomerData) {
    console.log('PayOder', cart, customer)

    return
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addSnackIntoCard,
        removeSnackFromCart,
        snackCartIncrement,
        snackCartDecrement,
        confirmOrder,
        payOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
