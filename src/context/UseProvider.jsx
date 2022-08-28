import React from 'react'
import { UseContext } from './useContext'

export const UseProvider = ({ children }) => {
  return (
    <UseContext.Provider value={{}}>
        {children}
    </UseContext.Provider>
  )
}
