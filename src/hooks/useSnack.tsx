import { useContext } from 'react'
import { SnackContext } from '../contexts/SnackContext'

export const useSnack = () => useContext(SnackContext)
