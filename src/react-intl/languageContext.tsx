import type { Dispatch, ReactNode, SetStateAction } from "react";
import { createContext, useState, useMemo, useEffect } from "react";

import enGB from "../locales/en-GB.json";
import hiIN from "../locales/hi-IN.json";
import { getCookie, setCookie } from "../utils/cookie.util";

// Define the shape of the translation object
interface Translations {
  [key: string]: string | Translations;
}

// Define the shape of the context value
interface LanguageContextProps {
  language: string;
  setLanguage: Dispatch<SetStateAction<string>>;
  translations: Translations;
  loading: boolean;
}

// Create the context with a default value
export const LanguageContext = createContext<LanguageContextProps | undefined>(
  undefined
);

// Define the available languages and the default language
const AVAILABLE_LANGUAGES = ["en-GB", "hi-IN"];
const DEFAULT_LANGUAGE = "en-GB";

// Map translations
const TRANSLATIONS: { [key: string]: Translations } = {
  "en-GB": enGB,
  "hi-IN": hiIN,
};

// Create the provider component
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<string>(DEFAULT_LANGUAGE);
  const [translations, setTranslations] = useState<Translations>(
    TRANSLATIONS[DEFAULT_LANGUAGE]
  );
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const langFromCookie = getCookie("language");

    if (langFromCookie && AVAILABLE_LANGUAGES.includes(langFromCookie)) {
      setLanguage(langFromCookie);
    } else {
      setCookie("language", DEFAULT_LANGUAGE, { expires: 7 });
      setLanguage(DEFAULT_LANGUAGE);
    }
  }, []);

  useEffect(() => {
    const loadTranslations = () => {
      setLoading(true);
      const langToLoad = AVAILABLE_LANGUAGES.includes(language)
        ? language
        : DEFAULT_LANGUAGE;
      const data = TRANSLATIONS[langToLoad];
      setTranslations(data);
      setCookie("language", langToLoad, { expires: 7 });
      setLoading(false);
    };

    loadTranslations();
  }, [language]);

  const contextValue = useMemo(
    () => ({
      language,
      setLanguage,
      translations,
      loading,
    }),
    [language, setLanguage, translations, loading]
  );

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
}
