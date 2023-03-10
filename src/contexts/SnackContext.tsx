import { createContext, ReactNode, useState, useEffect } from 'react'
import { SnackData } from '../models/SnacksData'
import { getBurgers, getDrinks, getIceCreams, getPizzas } from '../services/mainApi/servicos'

interface SnackContextProps {
  burgers: SnackData[]
  pizzas: SnackData[]
  drinks: SnackData[]
  iceCreams: SnackData[]
}

export const SnackContext = createContext<SnackContextProps>({} as SnackContextProps)

export const SnackStorage = ({ children }: { children: ReactNode }) => {
  const [burgers, setBurgers] = useState<SnackData[]>([])
  const [pizzas, setPizzas] = useState<SnackData[]>([])
  const [drinks, setDrinks] = useState<SnackData[]>([])
  const [iceCreams, setIceCreams] = useState<SnackData[]>([])

  useEffect(() => {
    ;(async () => {
      try {
        const burgerRequest = await getBurgers()
        const pizzaRequest = await getPizzas()
        const drinksRequest = await getDrinks()
        const iceCreamsRequest = await getIceCreams()

        const requests = [burgerRequest, pizzaRequest, drinksRequest, iceCreamsRequest]

        const [
          { data: burgerResponse },
          { data: pizzaResponse },
          { data: drinksResponse },
          { data: iceCreamsResponse },
        ] = await Promise.all(requests)

        setBurgers(burgerResponse)
        setPizzas(pizzaResponse)
        setDrinks(drinksResponse)
        setIceCreams(iceCreamsResponse)
      } catch (err) {
        //..
      } finally {
        //..
      }
    })()
  }, [])

  return (
    <SnackContext.Provider value={{ burgers, pizzas, drinks, iceCreams }}>
      {children}
    </SnackContext.Provider>
  )
}
