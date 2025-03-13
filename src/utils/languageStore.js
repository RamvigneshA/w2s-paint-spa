import { create } from 'zustand';
import { LANGUAGES } from '../constants';

const getInitialLanguage = () => {
  const savedLanguage = localStorage.getItem('preferredLanguage');
  if (savedLanguage) return savedLanguage;
  return 'en';
};

export const useLanguageStore = create((set) => ({
  language: getInitialLanguage(),
  fallbackLanguage: 'en',
  setLanguage: (newLanguage) => {
    localStorage.setItem('preferredLanguage', newLanguage);
    set({ language: newLanguage });
  },
  languages: LANGUAGES,
}));
