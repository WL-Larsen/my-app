import React, { createContext } from 'react'
import { useState } from 'react';

const TranslationsContext = createContext();

function TranslationsProvider({children}) {
    const [language, setLanguage] = useState("tr");

  return (
    <TranslationsProvider value={{language, setLanguage}} >
        {children}
    </TranslationsProvider>
  )
}
export default TranslationsProvider