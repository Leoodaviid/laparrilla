import { useSnack } from '../../hooks/useSnack'
import { Head } from '../../components/Head/Head'
import { Snacks } from '../../components/Snacks/Snacks'
import { SnackTitle } from '../../components/SnackTitle/SnackTitle'

const Pizzas = () => {
  const { pizzas } = useSnack()

  return (
    <>
      <Head title='Pizzas' />
      <SnackTitle>Pizzas</SnackTitle>
      <Snacks snacks={pizzas} />
    </>
  )
}

export default Pizzas
