import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const AppContext = createContext()

function AppProvider(props) {

    

  return (
    <AppContext.Provider value={{}}>
        {props.children}
    </AppContext.Provider>
  )
}

export default AppProvider