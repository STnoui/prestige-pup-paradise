
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'en' | 'bg';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    home: 'Home',
    about: 'About',
    ourDogs: 'Our Dogs',
    contact: 'Contact',
    
    // Settings
    settings: 'Settings',
    language: 'Language',
    theme: 'Theme',
    lightMode: 'Light Mode',
    darkMode: 'Dark Mode',
    
    // Hero Section
    meetOurBreeds: 'Meet Our Breeds',
    
    // About Section
    aboutTitle: 'About SHOLO',
    aboutUs: 'About Us',
    aboutDescription: 'Dedicated to breeding exceptional dogs with love, care, and the highest standards of quality.',
    ourPhilosophy: 'Our Philosophy',
    aboutText1: 'At SHOLO, we believe that every dog deserves to be loved, cared for, and treated with the utmost respect. Our breeding program is built on the foundation of health, temperament, and quality.',
    aboutText2: 'We are committed to producing dogs that not only meet breed standards but also make wonderful family companions. Each puppy is raised with love and socialized from an early age.',
    
    // Dogs Section
    ourDogsTitle: 'Our Breeds',
    ourDogsDescription: 'Discover our carefully selected dog breeds, each chosen for their exceptional qualities and temperament.',
    
    // Contact Section
    contactTitle: 'Get in Touch',
    contactDescription: 'Ready to welcome a new family member? Contact us to learn more about our available puppies.',
    facebookTitle: 'Connect with Us',
    facebookDescription: 'Follow our journey and see our latest updates on Facebook.',
    connectOnFacebook: 'Connect on Facebook',
    contactUs: 'Contact Us',
    
    // Breed Pages
    americanAkita: 'American Akita',
    americanAkitaDesc: 'The American Akita is a large, powerful dog with a noble and intimidating presence. They are known for their loyalty, courage, and dignity.',
    southAfricanBoerboel: 'South African Boerboel',
    southAfricanBoerboelDesc: 'The South African Boerboel is a large, mastiff-type dog breed from South Africa, bred for the purpose of guarding the homestead.',
    miniatureSchnauzer: 'Miniature Schnauzer',
    miniatureSchnauzermDesc: 'The Miniature Schnauzer is a breed of small dog of the Schnauzer type that originated in Germany in the mid-to-late 19th century.',
    kerryBlueTerrier: 'Kerry Blue Terrier',
    kerryBlueTerrierDesc: 'The Kerry Blue Terrier is a breed of dog originally bred for controlling vermin including rats, rabbits, badgers, foxes, otters and hares.',
    
    // Breed Program
    contactForAvailability: 'Contact for Availability',
    breedProgramText1: 'We are proud to announce our upcoming breeding program for',
    breedProgramText2: 'puppies. Our carefully selected breeding pairs ensure the highest quality',
    breedProgramText3: 'offspring with excellent temperament and health. Contact us to learn more about our',
    breedProgramText4: 'breeding program and future litter availability.',
    
    // Footer
    allRightsReserved: 'All rights reserved.',
    
    // 404 Page
    pageNotFound: 'Page Not Found',
    pageNotFoundDesc: 'The page you are looking for does not exist.',
    backToHome: 'Back to Home',
    
    // Additional
    learnMore: 'Learn More',
    breedsSectionDesc: 'Discover our carefully selected dog breeds, each chosen for their exceptional qualities and temperament.'
  },
  bg: {
    // Navigation
    home: 'Начало',
    about: 'За нас',
    ourDogs: 'Нашите кучета',
    contact: 'Контакт',
    
    // Settings
    settings: 'Настройки',
    language: 'Език',
    theme: 'Тема',
    lightMode: 'Светъл режим',
    darkMode: 'Тъмен режим',
    
    // Hero Section
    meetOurBreeds: 'Запознайте се с породите',
    
    // About Section
    aboutTitle: 'За SHOLO',
    aboutUs: 'За нас',
    aboutDescription: 'Посветени на отглеждането на изключителни кучета с любов, грижи и най-високи стандарти за качество.',
    ourPhilosophy: 'Нашата философия',
    aboutText1: 'В SHOLO вярваме, че всяко куче заслужава да бъде обичано, обгрижвано и третирано с най-голямо уважение. Нашата програма за развъждане е изградена върху основата на здраве, темперамент и качество.',
    aboutText2: 'Ние сме ангажирани с производството на кучета, които не само отговарят на стандартите за породата, но също така правят прекрасни семейни спътници. Всяко кученце е отгледано с любов и социализирано от ранна възраст.',
    
    // Dogs Section
    ourDogsTitle: 'Нашите породи',
    ourDogsDescription: 'Открийте нашите внимателно подбрани породи кучета, всяка избрана заради изключителните си качества и темперамент.',
    
    // Contact Section
    contactTitle: 'Свържете се с нас',
    contactDescription: 'Готови ли сте да посрещнете нов член на семейството? Свържете се с нас, за да научите повече за наличните кученца.',
    facebookTitle: 'Свържете се с нас',
    facebookDescription: 'Следете нашето пътуване и вижте най-новите ни новини във Facebook.',
    connectOnFacebook: 'Свържи се във Facebook',
    contactUs: 'Свържи се с нас',
    
    // Breed Pages
    americanAkita: 'Американска Акита',
    americanAkitaDesc: 'Американската Акита е голямо, мощно куче с благородно и внушително присъствие. Те са известни със своята лоялност, смелост и достойнство.',
    southAfricanBoerboel: 'Южноафрикански Бурбул',
    southAfricanBoerboelDesc: 'Южноафриканският Бурбул е голяма порода куче от мастиф тип от Южна Африка, отгледана с цел пазене на имота.',
    miniatureSchnauzer: 'Миниатюрен Шнауцер',
    miniatureSchnauzermDesc: 'Миниатюрният Шнауцер е порода малки кучета от типа Шнауцер, която произхожда от Германия в средата до края на 19-ти век.',
    kerryBlueTerrier: 'Кери Блу Териер',
    kerryBlueTerrierDesc: 'Кери Блу Териерът е порода куче, първоначално отгледана за контролиране на вредители, включително плъхове, зайци, язовци, лисици, видри и зайци.',
    
    // Breed Program
    contactForAvailability: 'Свържете се за наличност',
    breedProgramText1: 'Гордеем се да обявим предстоящата ни програма за развъждане на',
    breedProgramText2: 'кученца. Нашите внимателно подбрани двойки за развъждане осигуряват най-високо качество',
    breedProgramText3: 'потомство с отличен темперамент и здраве. Свържете се с нас, за да научите повече за нашата',
    breedProgramText4: 'програма за развъждане и наличността на бъдещи легла.',
    
    // Footer
    allRightsReserved: 'Всички права запазени.',
    
    // 404 Page
    pageNotFound: 'Страницата не е намерена',
    pageNotFoundDesc: 'Страницата, която търсите не съществува.',
    backToHome: 'Обратно към началото',
    
    // Additional
    learnMore: 'Научи повече',
    breedsSectionDesc: 'Открийте нашите внимателно подбрани породи кучета, всяка избрана заради изключителните си качества и темперамент.'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && ['en', 'bg'].includes(savedLanguage)) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
