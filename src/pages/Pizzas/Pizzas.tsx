import { SnackContext } from '../../contexts/SnackContext'
import { useContext } from 'react'
import { Head } from '../../components/Head/Head'
import { Snacks } from '../../components/Snacks/Snacks'
import { SnackTitle } from '../../components/SnackTitle/SnackTitle'

const Pizzas = () => {
  const { pizzas } = useContext(SnackContext)

  return (
    <>
      <Head title='Pizzas' />
      <SnackTitle>Pizzas</SnackTitle>
      <Snacks snacks={pizzas} />
    </>
  )
}

export default Pizzas
