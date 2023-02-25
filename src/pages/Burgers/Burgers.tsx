import { useSnack } from '../../hooks/useSnack'
import { Head } from '../../components/Head/Head'
import { Snacks } from '../../components/Snacks/Snacks'
import { SnackTitle } from '../../components/SnackTitle/SnackTitle'

const Burgers = () => {
  const { burgers } = useSnack()

  return (
    <>
      <Head title='Hambúrgueres' />
      <SnackTitle>Hambúrgueres</SnackTitle>
      <Snacks snacks={burgers} />
    </>
  )
}
export default Burgers
