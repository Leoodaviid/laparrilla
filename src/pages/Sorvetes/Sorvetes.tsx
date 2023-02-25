import { SnackContext } from '../../contexts/SnackContext'
import { useContext } from 'react'
import { Head } from '../../components/Head/Head'
import { Snacks } from '../../components/Snacks/Snacks'
import { SnackTitle } from '../../components/SnackTitle/SnackTitle'

const Sorvetes = () => {
  const { iceCreams } = useContext(SnackContext)

  return (
    <>
      <Head title='Sorvetes' />
      <SnackTitle>Sorvetes</SnackTitle>
      <Snacks snacks={iceCreams} />
    </>
  )
}

export default Sorvetes
