import { createContext, useContext, useEffect, useState} from 'react'
import useLocalStorage from './hooks/useLocalStorage';
import axios from "axios";

export const TranslationsContext = createContext();

export const useTranslate = () => {
    return useContext(TranslationsContext)
} 

const TranslationsProvider = ({children}) => {
    const [language, setLanguage] = useLocalStorage("language", "en");
    const [response, setResponse] = useLocalStorage("res", {})
    const [loading, setLoading] = useState(true)


    const updateResponse = (data) => {
        setResponse(data)
    }

    const apiData = async () => {
        try{
            const languageFile = await import(`./translation/${language}.json`)

            const apiResponse = await axios.post("https://reqres.in/api/workintecht",languageFile)
            console.log("apiRes:", apiResponse.data)
            updateResponse(apiResponse.data)
        } catch (error) { 
            console.log('Error fetching translations:', error);
        } finally{
            setLoading(false)
        }
    }

    useEffect(() => {
        apiData();
    },[language])

    const toggleLanguage = ( ) => {
        setLanguage(language === "en" ? "tr" : "en")
    }

    if(loading){
        return <>Loading..</>
    }
  return (
    <TranslationsContext.Provider value={{language, setLanguage, toggleLanguage, response, updateResponse}} >
        {children}
    </TranslationsContext.Provider>
  )
}
export default TranslationsProvider;