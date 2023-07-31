import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import EN from "../../assets/i18n/en/translation.json";
import ES from "../../assets/i18n/es/translation.json";
import PT from "../../assets/i18n/pt/translation.json";
import FR from "../../assets/i18n/fr/translation.json";
import Environment from "../../shared/Environment";

export const languages = ["es", "pt", "fr", "en"];

// the translations
const resources = {
  en: { translation: EN },
  fr: { translation: FR },
  es: { translation: ES },
  pt: { translation: PT },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    compatibilityJSON: "v3",
    lng: Environment.defaultLanguage,
    resources,
    fallbackLng: "en",
    nsSeparator: ";",
    debug: false,

    keySeparator: ";", // we do use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
