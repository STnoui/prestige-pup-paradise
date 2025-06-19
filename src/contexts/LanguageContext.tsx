
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
    connectOnFacebook: 'Connect on Facebook',
    
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
    
    // Breed descriptions
    americanAkitaDesc: 'The American Akita is a dignified and courageous guardian with a calm and noble presence. Incredibly loyal, they form a profound, protective bond with their family and show a deeply affectionate nature.',
    southAfricanBoerboelDesc: 'Bred as a capable protector, the Boerboel is a confident and surprisingly gentle companion for its family. This powerful yet calm dog thrives on being a loving and integrated member of the household.',
    miniatureSchnauzermDesc: 'The Miniature Schnauzer packs a big, friendly personality into a small, distinctive package. Bright and fearless, these charming dogs are eager to please and form strong, joyful bonds with their people.',
    kerryBlueTerrierDesc: 'With its stunning, soft blue coat and playful Irish charm, the Kerry Blue is an intelligent and devoted family companion. They are spirited, affectionate, and bring a loyal, adventurous presence to any home.',
    
    // Breed page common text
    contactForAvailability: 'Contact Us for Availability',
    contactUs: 'Contact Us',
    breedProgramText1: 'We\'re carefully establishing our',
    breedProgramText2: 'breeding program with health-tested, champion-quality breeding stock.',
    breedProgramText3: 'Contact us on Facebook to discuss our current and upcoming',
    breedProgramText4: 'litters.',
    
    // Our Dogs Section
    meetDistinguishedBreeds: 'Meet Our Distinguished Breeds',
    breedsSectionDesc: 'Each breed we raise is chosen for its unique qualities and cherished for its distinct personality. We are dedicated to preserving the integrity and promoting the best characteristics of these wonderful companions.',
    learnMore: 'Learn More',
    
    // Settings
    settings: 'Settings',
    theme: 'Theme',
    language: 'Language',
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
    connectOnFacebook: 'Свържете се във Facebook',
    
    // Footer
    footerDescription: 'Превъзходство в отглеждането, посветено на свързването на любящи семейства с изключителни кучешки спътници.',
    quickLinks: 'Бързи връзки',
    allRightsReserved: 'Всички права запазени.',
    designCredit: 'Дизайнът е вдъхновен от философията на Apple за елегантност и качество.',
    
    // Breeds
    americanAkita: 'Американска Акита',
    southAfricanBoerboel: 'Южноафриканско Боербъл',
    miniatureSchnauzer: 'Миниатюрен Шнауцер',
    kerryBlueTerrier: 'Кери блу териер',
    
    // Breed descriptions
    americanAkitaDesc: 'Американската Акита е достойно и смело животно-пазител с спокойно и благородно присъствие. Невероятно лоялни, те създават дълбока, защитна връзка със семейството си и показват дълбоко обичаща природа.',
    southAfricanBoerboelDesc: 'Отгледан като способен защитник, Боербъл е уверен и изненадващо нежен спътник за семейството си. Това мощно, но спокойно куче процъфтява като любящ и интегриран член на домакинството.',
    miniatureSchnauzermDesc: 'Миниатюрният Шнауцер пакетира голяма, приятелска личност в малка, отличителна опаковка. Ярки и безстрашни, тези чаровни кучета са нетърпеливи да угодят и образуват силни, радостни връзки със своите хора.',
    kerryBlueTerrierDesc: 'Със своята страхотна, мека синя козина и игрив ирландски чар, Кери блу е интелигентен и отдаден семеен спътник. Те са духовити, обичащи и носят лоялно, приключенско присъствие в всеки дом.',
    
    // Breed page common text
    contactForAvailability: 'Свържете се с нас за наличност',
    contactUs: 'Свържете се с нас',
    breedProgramText1: 'Внимателно изграждаме нашата',
    breedProgramText2: 'програма за развъждане с тествани за здраве, качествени развъдни животни.',
    breedProgramText3: 'Свържете се с нас във Facebook, за да обсъдим нашите текущи и предстоящи',
    breedProgramText4: 'легла.',
    
    // Our Dogs Section
    meetDistinguishedBreeds: 'Запознайте се с нашите отличени породи',
    breedsSectionDesc: 'Всяка порода, която отглеждаме, е избрана заради уникалните си качества и е ценена за отличителната си личност. Ние сме посветени на запазването на интегритета и насърчаването на най-добрите характеристики на тези прекрасни спътници.',
    learnMore: 'Научете повече',
    
    // Settings
    settings: 'Настройки',
    theme: 'Тема',
    language: 'Език',
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
