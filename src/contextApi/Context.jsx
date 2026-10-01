import React, { createContext } from 'react'

export const ContextApi = createContext()
export default function Context({ children }) {
  return <ContextApi.Provider value={{}}>{children}</ContextApi.Provider>
}
