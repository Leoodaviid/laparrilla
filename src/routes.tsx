import { Routes, Route } from 'react-router-dom'
import Main from './pages/Main'
import Burgers from './pages/Burgers/Burgers'
import Pizzas from './pages/Pizzas/Pizzas'
import Bebidas from './pages/Bebidas/Bebidas'
import Sorvetes from './pages/Sorvetes/Sorvetes'
import Cart from './pages/Cart/Cart'

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Main />}>
        <Route path='/' element={<Burgers />} />
        <Route path='pizzas' element={<Pizzas />} />
        <Route path='bebidas' element={<Bebidas />} />
        <Route path='sorvetes' element={<Sorvetes />} />
      </Route>
      <Route path='cart' element={<Cart />} />
    </Routes>
  )
}
