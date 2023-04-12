import { useState, useEffect } from 'react'
import { useCart } from '../../../hooks/useCart'
import TableDesktop from './TableDesktop/TableDesktop'
import TableMobile from './TableMobile/TableMobile'
import EmptyCart from '../../../components/EmptyCart/EmptyCart'

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

  if (cart.length === 0) return <EmptyCart title='Ops! Parece que você nao tem pedidos, peça já!' />
  return windownWidth > 768 ? <TableDesktop /> : <TableMobile />
}
