import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translations from './translations';
import { useLanguageStore } from './languageStore';

// Initialize i18next
i18n
  .use(initReactI18next)
  .init({
    resources: translations,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

// Create a language change handler that syncs Zustand store with i18n
const syncLanguage = () => {
  // Get the current language from Zustand store
  const { language, setLanguage } = useLanguageStore.getState();
  
  // Set initial i18n language from store
  i18n.changeLanguage(language);
  
  // Subscribe to language changes
  useLanguageStore.subscribe(
    (state) => state.language,
    (language) => {
      if (i18n.language !== language) {
        i18n.changeLanguage(language);
      }
    }
  );
  
  // Override setLanguage to also update i18n
  const originalSetLanguage = setLanguage;
  useLanguageStore.setState({
    setLanguage: (newLanguage) => {
      originalSetLanguage(newLanguage);
      if (i18n.language !== newLanguage) {
        i18n.changeLanguage(newLanguage);
      }
    }
  });
};

// Call this once when your app starts
syncLanguage();

export default i18n; 