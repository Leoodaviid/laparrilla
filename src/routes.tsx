import { Routes, Route } from 'react-router-dom'
import Main from './pages/Main'
import Burgers from './pages/Burgers/Burgers'
import Pizzas from './pages/Pizzas/Pizzas'
import Drinks from './pages/Drinks/Drinks'
import IceCream from './pages/IceCream/IceCream'
import Cart from './pages/Cart/Cart'
import Payment from './pages/Payment/Payment'

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Main />}>
        <Route path='/' element={<Burgers />} />
        <Route path='pizzas' element={<Pizzas />} />
        <Route path='drinks' element={<Drinks />} />
        <Route path='ice-cream' element={<IceCream />} />
      </Route>
      <Route path='cart' element={<Cart />} />
      <Route path='payment' element={<Payment />} />
    </Routes>
  )
}
