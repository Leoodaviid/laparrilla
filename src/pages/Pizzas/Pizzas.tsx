import { useEffect, useState } from 'react'
import { Head } from '../../components/Head/Head'
import { Snacks } from '../../components/Snacks/Snacks'
import { SnackTitle } from '../../components/SnackTitle/SnackTitle'
import { getPizzas } from '../../services/mainApi/servicos'

const Pizzas = () => {
  const [pizzas, setPizzas] = useState([])

  useEffect(() => {
    ;(async () => {
      const pizzasRequest = await getPizzas()
      setPizzas(pizzasRequest.data)
    })()
  }, [])
  return (
    <>
      <Head title='Pizzas' />
      <SnackTitle>Pizzas</SnackTitle>
      <Snacks snacks={pizzas} />
    </>
  )
}

export default Pizzas
