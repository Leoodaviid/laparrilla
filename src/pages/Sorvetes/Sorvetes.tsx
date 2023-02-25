import { useSnack } from '../../hooks/useSnack'
import { Head } from '../../components/Head/Head'
import { Snacks } from '../../components/Snacks/Snacks'
import { SnackTitle } from '../../components/SnackTitle/SnackTitle'

const Sorvetes = () => {
  const { iceCreams } = useSnack()

  return (
    <>
      <Head title='Sorvetes' />
      <SnackTitle>Sorvetes</SnackTitle>
      <Snacks snacks={iceCreams} />
    </>
  )
}

export default Sorvetes
