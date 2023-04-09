import { createContext, ReactNode, useState, useEffect } from 'react'
import { SnackData } from '../models/SnacksData'

interface Snack extends SnackData {
  quantity: number
  subTotal: number
}

interface RemoveSnackFromCart {
  id: number
  snack: string
}

interface UpdateCartProps {
  id: number
  snack: string
  newQuantity: number
}

interface CartContextProps {
  cart: Snack[]
  addSnackIntoCard: (snack: SnackData) => void
  // removeSnackFromCart: ({ id, snack }: RemoveSnackFromCart) => void
  // updateCard: ({ id, snack, newQuantity }: UpdateCartProps) => void
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
      setCart(newCart)
      return
    }
    //adicionar
    const newSnack = { ...snack, quantity: 1, subTotal: snack.price }
    const newCart = [...cart, newSnack]
    console.log(`newCart`, newCart)
    setCart(newCart)
  }

  return <CartContext.Provider value={{ cart, addSnackIntoCard }}>{children}</CartContext.Provider>
}
