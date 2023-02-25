import { useContext } from 'react'
import { Head } from '../../components/Head/Head'
import { Snacks } from '../../components/Snacks/Snacks'
import { SnackTitle } from '../../components/SnackTitle/SnackTitle'
import { SnackContext } from '../../contexts/SnackContext'

const Burgers = () => {
  const { burgers } = useContext(SnackContext)

  return (
    <>
      <Head title='Hambúrgueres' />
      <SnackTitle>Hambúrgueres</SnackTitle>
      <Snacks snacks={burgers} />
    </>
  )
}
export default Burgers
