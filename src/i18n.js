import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import translation files
import translationEnglish from "./locales/english/translation.json";
import translationGerman from "./locales/german/translation.json";
import translationItalian from "./locales/italian/translation.json";

const resources = {
  english: { translation: translationEnglish },
  german: { translation: translationGerman  },
  italian: { translation: translationItalian  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "italian", // default language
    fallbackLng: "italian",
    interpolation: { escapeValue: false },
  });

export default i18n;