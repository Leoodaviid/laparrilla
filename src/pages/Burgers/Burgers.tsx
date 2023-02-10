import { useEffect, useState } from 'react'
import { Head } from '../../components/Head/Head'
import { Snacks } from '../../components/Snacks/Snacks'
import { SnackTitle } from '../../components/SnackTitle/SnackTitle'
import { getBurgers } from '../../services/mainApi/servicos'

const Burgers = () => {
  const [burgers, setBurgers] = useState([])

  useEffect(() => {
    ;(async () => {
      const burgerRequest = await getBurgers()
      setBurgers(burgerRequest.data)
    })()
  }, [])

  return (
    <>
      <Head title='Hambúrgueres' />
      <SnackTitle>Hambúrgueres</SnackTitle>
      <Snacks snacks={burgers} />
    </>
  )
}
export default Burgers
