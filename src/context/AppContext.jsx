import { createContext, useContext, useMemo, useState } from 'react';
import { translations } from '../i18n/translations';
const AppContext = createContext(null);
export function AppProvider({ children }) {
  const [language, setLanguage] = useState('en');
  const [highContrast, setHighContrast] = useState(false);
  const [largeText, setLargeText] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [role, setRole] = useState('farmer');
  const t = (key) => translations[language]?.[key] ?? translations.en[key] ?? key;
  const value = useMemo(() => ({ language, setLanguage, highContrast, setHighContrast, largeText, setLargeText, reduceMotion, setReduceMotion, role, setRole, t }), [language, highContrast, largeText, reduceMotion, role]);
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
export const useApp = () => useContext(AppContext);
