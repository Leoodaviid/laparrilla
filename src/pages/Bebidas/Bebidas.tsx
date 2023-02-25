import { SnackContext } from '../../contexts/SnackContext'
import { useContext } from 'react'
import { Head } from '../../components/Head/Head'
import { Snacks } from '../../components/Snacks/Snacks'
import { SnackTitle } from '../../components/SnackTitle/SnackTitle'

const Bebidas = () => {
  const { drinks } = useContext(SnackContext)

  return (
    <>
      <Head title='Bebidas' />
      <SnackTitle>Bebidas</SnackTitle>
      <Snacks snacks={drinks} />
    </>
  )
}

export default Bebidas
