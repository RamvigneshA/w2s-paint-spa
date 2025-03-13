import { create } from 'zustand';
import { LANGUAGES } from '../constants';

// Function to determine the initial language
const getInitialLanguage = () => {
  const savedLanguage = localStorage.getItem('preferredLanguage');
  if (savedLanguage) return savedLanguage;
  return 'en';
};

// Create language store
export const useLanguageStore = create((set) => ({
  language: getInitialLanguage(),
  fallbackLanguage: 'en',
  setLanguage: (newLanguage) => {
    localStorage.setItem('preferredLanguage', newLanguage);
    set({ language: newLanguage });
  },
  languages: LANGUAGES,
})); 