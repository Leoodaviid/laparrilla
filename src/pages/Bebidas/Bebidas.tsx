import { useState, useEffect } from 'react'
import { Head } from '../../components/Head/Head'
import { Snacks } from '../../components/Snacks/Snacks'
import { SnackTitle } from '../../components/SnackTitle/SnackTitle'
import { SnackData } from '../../models/SnacksData'
import { getDrinks } from '../../services/mainApi/servicos'

const Bebidas = () => {
  const [bebidas, setBebidas] = useState<SnackData[]>([])

  useEffect(() => {
    ;(async () => {
      const drinksRequest = await getDrinks()
      setBebidas(drinksRequest.data)
    })()
  }, [])
  return (
    <>
      <Head title='Bebidas' />
      <SnackTitle>Bebidas</SnackTitle>
      <Snacks snacks={bebidas} />
    </>
  )
}

export default Bebidas
