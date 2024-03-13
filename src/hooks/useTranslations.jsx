import { useContext } from "react"
import { TranslationsContext } from "../TranslationProvider"
import translations from "./translations";

const useTranslations = () => {
    const {language, setLanguage} = useContext(TranslationsContext);

    return {t: translations[language] , changeLanguage: setLanguage}
}

export default useTranslations