import { useTranslation, initReactI18next } from "react-i18next";
import i18n from "i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        welcome_message: "Welcome to our application!",
        // Notice there's no translation for "missing_key"
      },
    },
  },
  lng: "en",
  fallbackLng: "en",
  debug: true,

  keySeparator: false,

  interpolation: {
    escapeValue: false,
  },
});

function App() {
  const { t } = useTranslation();

  return (
    <div>
      {/* This key exists */}
      <p>{t("welcome_message")}</p>

      {/* This key does not exist */}
      <p>{t("missing_key")}</p>

      {/* missing_key with fallback */}
      <p>{t("missing_key", "Fallback Default Message")}</p>
    </div>
  );
}

export default App;
