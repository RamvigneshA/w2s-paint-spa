import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translations from './translations';
import { useLanguageStore } from './languageStore';


i18n
  .use(initReactI18next)
  .init({
    resources: translations,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, 
    },
  });


const syncLanguage = () => {

  const { language, setLanguage } = useLanguageStore.getState();
  

  i18n.changeLanguage(language);

  useLanguageStore.subscribe(
    (state) => state.language,
    (language) => {
      if (i18n.language !== language) {
        i18n.changeLanguage(language);
      }
    }
  );
  

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


syncLanguage();

export default i18n; 