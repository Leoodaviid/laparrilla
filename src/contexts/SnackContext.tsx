import { createContext, ReactNode, useState, useEffect } from 'react'
import { SnackData } from '../models/SnacksData'
import { getBurgers } from '../services/mainApi/servicos'

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
      const burgerRequest = await getBurgers()
      setBurgers(burgerRequest.data)
    })()
  }, [])

  return (
    <SnackContext.Provider value={{ burgers, pizzas, drinks, iceCreams }}>
      {children}
    </SnackContext.Provider>
  )
}
