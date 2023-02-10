import api from './config'

export const getBurgers = () => api.get('/burgers')
export const getPizzas = () => api.get('/pizzas')
export const getDrinks = () => api.get('/drinks')
export const getSorvetes = () => api.get('/ice-creams')
