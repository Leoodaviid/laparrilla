import { useState, useEffect } from 'react'
import { useCart } from '../../../hooks/useCart'
import TableDesktop from './TableDesktop/TableDesktop'
import TableMobile from './TableMobile/TableMobile'

export const Table = () => {
  const { cart } = useCart()
  const [windownWidth, setWindowWidth] = useState(document.documentElement.clientWidth)

  useEffect(() => {
    function updateTableComponentInWidth() {
      const currentWidth = document.documentElement.clientWidth
      setWindowWidth(currentWidth)
    }

    window.addEventListener('resize', updateTableComponentInWidth)

    return () => {
      window.removeEventListener('resize', updateTableComponentInWidth)
    }
  }, [])

  if (cart.length === 0) return <h1>Ops! Parece que você nao tem pedidos, peça já!</h1>
  return windownWidth > 768 ? <TableDesktop /> : <TableMobile />
}
