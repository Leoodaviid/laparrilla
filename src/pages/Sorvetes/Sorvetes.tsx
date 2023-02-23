import { useEffect, useState } from 'react'
import { Head } from '../../components/Head/Head'
import { Snacks } from '../../components/Snacks/Snacks'
import { SnackTitle } from '../../components/SnackTitle/SnackTitle'
import { SnackData } from '../../models/SnacksData'
import { getSorvetes } from '../../services/mainApi/servicos'

const Sorvetes = () => {
  const [sorvetes, setSorvetes] = useState<SnackData[]>([])

  useEffect(() => {
    ;(async () => {
      const sorveteRequest = await getSorvetes()
      setSorvetes(sorveteRequest.data)
    })()
  }, [])
  return (
    <>
      <Head title='Sorvetes' />
      <SnackTitle>Sorvetes</SnackTitle>
      <Snacks snacks={sorvetes} />
    </>
  )
}

export default Sorvetes
