import { useSnack } from '../../hooks/useSnack'
import { Head } from '../../components/Head/Head'
import { Snacks } from '../../components/Snacks/Snacks'
import { SnackTitle } from '../../components/SnackTitle/SnackTitle'

const Drinks = () => {
  const { drinks } = useSnack()

  return (
    <>
      <Head title='Drinks' />
      <SnackTitle>Drinks</SnackTitle>
      <Snacks snacks={drinks} />
    </>
  )
}

export default Drinks
