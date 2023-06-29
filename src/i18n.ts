import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { Constants } from "@utils/Constants";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: Constants.RESOURCES,
    lng: Constants.DEFAULT_LANGUAGE,
    keySeparator: Constants.KEY_SEPARATOR,

    interpolation: {
      escapeValue: Constants.ESCAPE_VALUE,
    },
  });

export default i18n;
