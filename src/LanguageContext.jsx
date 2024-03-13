// LanguageContext.js

import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const defaultLanguage = 'en';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [translations, setTranslations] = useState(null);
  const [language, setLanguage] = useState(defaultLanguage);

  useEffect(() => {
    const fetchTranslations = async () => {
      try {
        const response = await axios.get("./translations/en.json");
        setTranslations(response.data);
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching translations:', error);
      }
    };

    fetchTranslations();
  }, [language]);

  return (
    <LanguageContext.Provider value={{ translations, language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
