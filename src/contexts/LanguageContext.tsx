
import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'bg';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const translations = {
  en: {
    // Navigation
    home: 'Home',
    about: 'About Us',
    ourDogs: 'Our Dogs',
    contact: 'Contact',
    
    // Hero Section
    heroTitle: 'SHOLO',
    heroSubtitle: 'Brave Dogs',
    heroDescription: 'Discover meticulously bred companions, raised with passion and expertise for discerning families who deserve nothing but the finest.',
    meetOurBreeds: 'Meet Our Breeds',
    ourStory: 'Our Story',
    
    // About Section
    aboutTitle: 'A Legacy of Love & Dedication',
    aboutDescription: 'Founded in 2025, SHOLO represents our deep connection to exceptional breeding practices, focusing on health, temperament, and adherence to breed standards.',
    ourPhilosophy: 'Our Philosophy',
    aboutText1: 'Based in Bulgaria and founded on a deep love for canine companionship and a commitment to ethical breeding, we believe in providing a nurturing environment where our dogs and puppies thrive.',
    aboutText2: 'At the heart of our philosophy is a profound respect for each animal. This includes spacious, clean living areas, premium nutrition, regular veterinary care, and abundant opportunities for socialization and play.',
    
    // Contact Section
    contactTitle: 'Get in Touch',
    contactDescription: 'Ready to welcome a new family member? Connect with us through Facebook for all inquiries and dog selection.',
    facebookTitle: 'Facebook',
    facebookDescription: 'Connect with us on Facebook for all questions, inquiries, and dog selection',
    followJourney: 'Follow Our Journey',
    
    // Footer
    footerDescription: 'Excellence in breeding, devoted to connecting loving families with exceptional canine companions.',
    quickLinks: 'Quick Links',
    allRightsReserved: 'All rights reserved.',
    designCredit: 'Designed with inspiration from Apple\'s philosophy of elegance and quality.',
    
    // Breeds
    americanAkita: 'American Akita',
    southAfricanBoerboel: 'South African Boerboel',
    miniatureSchnauzer: 'Miniature Schnauzer',
    kerryBlueTerrier: 'Kerry Blue Terrier',
    
    // Dark Mode
    darkMode: 'Dark Mode',
    lightMode: 'Light Mode'
  },
  bg: {
    // Navigation
    home: 'Начало',
    about: 'За нас',
    ourDogs: 'Нашите кучета',
    contact: 'Контакт',
    
    // Hero Section
    heroTitle: 'SHOLO',
    heroSubtitle: 'Смели кучета',
    heroDescription: 'Открийте внимателно отгледани спътници, отгледани с passion и експертиза за взискателни семейства, които заслужават само най-доброто.',
    meetOurBreeds: 'Запознайте се с породите',
    ourStory: 'Нашата история',
    
    // About Section
    aboutTitle: 'Наследство от любов и отдаденост',
    aboutDescription: 'Основана през 2025 г., SHOLO представлява нашата дълбока връзка с изключителните практики за отглеждане, фокусирайки се върху здравето, темперамента и спазването на стандартите за породата.',
    ourPhilosophy: 'Нашата философия',
    aboutText1: 'Базирани в България и основани на дълбока любов към кучешкото компанионство и ангажимент към етичното отглеждане, ние вярваме в осигуряването на подхранваща среда, където нашите кучета и кученца процъфтяват.',
    aboutText2: 'В сърцето на нашата философия е дълбокото уважение към всяко животно. Това включва просторни, чисти жилищни зони, премиум храна, редовни ветеринарни грижи и изобилни възможности за социализация и игра.',
    
    // Contact Section
    contactTitle: 'Свържете се с нас',
    contactDescription: 'Готови да посрещнете нов член на семейството? Свържете се с нас чрез Facebook за всички запитвания и избор на куче.',
    facebookTitle: 'Facebook',
    facebookDescription: 'Свържете се с нас във Facebook за всички въпроси, запитвания и избор на куче',
    followJourney: 'Следвайте нашето пътуване',
    
    // Footer
    footerDescription: 'Превъзходство в отглеждането, посветено на свързването на любещи семейства с изключителни кучешки спътници.',
    quickLinks: 'Бързи връзки',
    allRightsReserved: 'Всички права запазени.',
    designCredit: 'Дизайнът е вдъхновен от философията на Apple за елегантност и качество.',
    
    // Breeds
    americanAkita: 'Американска Акита',
    southAfricanBoerboel: 'Южноафриканско Боербъл',
    miniatureSchnauzer: 'Миниатюрен Шнауцер',
    kerryBlueTerrier: 'Кери блу териер',
    
    // Dark Mode
    darkMode: 'Тъмен режим',
    lightMode: 'Светъл режим'
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
