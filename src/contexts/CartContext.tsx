import { createContext, ReactNode, useState, useEffect } from 'react'
import { SnackData } from '../models/SnacksData'
import { snackEmoji } from '../components/Helper/snackEmoji'
import { toast } from 'react-toastify'

interface Snack extends SnackData {
  quantity: number
  subTotal: number
}

interface CartContextProps {
  cart: Snack[]
  addSnackIntoCard: (snack: SnackData) => void
  removeSnackFromCart: (snack: Snack) => void
  snackCartIcrement: (snack: Snack) => void
  snackCartDecrement: (snack: Snack) => void
  // confirmOrder: () => void
}

export const CartContext = createContext({} as CartContextProps)

export const CartStorage = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Snack[]>([])

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
      setCart(newCart)
      return
    }
    //adicionar
    const newSnack = { ...snack, quantity: 1, subTotal: snack.price }
    const newCart = [...cart, newSnack]
    toast.success(`${snackEmoji(snack.snack)} ${snack.name} adicionado nos pedidos!`)
    setCart(newCart)
  }

  function removeSnackFromCart(snack: Snack) {
    const newCart = cart.filter((item) => !(item.id === snack.id && item.snack === snack.snack))
    setCart(newCart)
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
    setCart(newCart)
  }

  function snackCartIcrement(snack: Snack) {
    updateSnackQuantity(snack, snack.quantity + 1)
  }

  function snackCartDecrement(snack: Snack) {
    updateSnackQuantity(snack, snack.quantity - 1)
  }

  return (
    <CartContext.Provider
      value={{ cart, addSnackIntoCard, removeSnackFromCart, snackCartIcrement, snackCartDecrement }}
    >
      {children}
    </CartContext.Provider>
  )
}
