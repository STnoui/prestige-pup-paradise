
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
    newAboutText1: 'We are a new breeding family based in beautiful Bulgaria, where our passion for dogs has grown into a commitment to excellence. We believe in the profound connection between humans and dogs - a bond built on trust, loyalty, and unconditional love.',
    newAboutText2: 'Our breeding program focuses on quality over quantity. Each dog in our care receives individual attention, proper nutrition, and comprehensive health monitoring. We are dedicated to producing healthy, well-socialized puppies that will become beloved family members.',
    
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
    breedsSectionDesc: 'Discover our carefully selected dog breeds, each chosen for their exceptional qualities and temperament.',
    connect: 'Connect',
    info: 'Info',
    availabilityDescription: 'Contact us for current availability and breeding program information.',
    pageNotFoundTitle: 'Oops! This pup ran away',
    pageNotFoundDescription: 'The page you\'re looking for doesn\'t exist, but our amazing dogs are waiting for you at home!',
    returnHome: 'Return Home',
    english: 'English',
    bulgarian: 'Bulgarian',
    meetOurDogsButton: 'Meet Our Dogs',
    themeLabel: 'Theme',
    languageLabel: 'Language',
    
    // Breed Descriptions
    americanAkitaDescription: 'The American Akita is a large, powerful, and dignified breed with a noble bearing. Originally developed in Japan, these loyal companions are known for their courage, independence, and deep devotion to their families. Their thick double coat and sturdy build make them well-suited for various climates. With proper training and socialization, American Akitas make excellent guardians and loving family pets.',
    kerryBlueTerrierDescription: 'The Kerry Blue Terrier is a medium-sized Irish breed known for their distinctive blue-gray coat that develops as they mature. These versatile dogs were originally bred for farming, hunting, and guarding, making them adaptable and intelligent companions. With their spirited personality and strong-willed nature, Kerry Blues require consistent training and socialization. Their hypoallergenic coat and loyal temperament make them excellent family dogs for active households.',
    miniatureSchnauzersDescription: 'The Miniature Schnauzer is a small, spirited terrier breed known for their distinctive beard and eyebrows. These intelligent and alert dogs are excellent companions, combining the courage of a terrier with a friendly, outgoing personality. Their hypoallergenic double coat and compact size make them ideal for various living situations. Miniature Schnauzers are highly trainable, loyal, and make wonderful family pets with proper socialization.',
    southAfricanBoerboelDescription: 'The South African Boerboel is a large, powerful mastiff breed originally developed to protect homesteads in South Africa. These confident and calm dogs are known for their exceptional loyalty, intelligence, and natural protective instincts. With their muscular build and fearless nature, Boerboels are excellent guardians while remaining gentle and affectionate with their families. They require experienced handling and proper socialization to reach their full potential as devoted companions.'
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
    newAboutText1: 'Ние сме ново семейство за развъждане, базирано в красивата България, където страстта ни към кучетата се превърна в ангажимент към съвършенството. Вярваме в дълбоката връзка между хората и кучетата - връзка, изградена на доверие, лоялност и безусловна любов.',
    newAboutText2: 'Нашата програма за развъждане се фокусира върху качеството, а не количеството. Всяко куче под нашата грижа получава индивидуално внимание, правилно хранене и цялостно наблюдение на здравето. Ние сме посветени на производството на здрави, добре социализирани кученца, които ще станат обичани членове на семейството.',
    
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
    breedsSectionDesc: 'Открийте нашите внимателно подбрани породи кучета, всяка избрана заради изключителните си качества и темперамент.',
    connect: 'Свързване',
    info: 'Информация',
    availabilityDescription: 'Свържете се с нас за информация относно наличността и програмата ни за развъждане.',
    pageNotFoundTitle: 'Ох! Това кученце избяга',
    pageNotFoundDescription: 'Страницата, която търсите не съществува, но нашите невероятни кучета ви чакат у дома!',
    returnHome: 'Връщане към началото',
    english: 'Английски',
    bulgarian: 'Български',
    meetOurDogsButton: 'Запознайте се с кучетата',
    themeLabel: 'Тема',
    languageLabel: 'Език',
    
    // Breed Descriptions
    americanAkitaDescription: 'Американската Акита е голяма, мощна и достойна порода с благородно държание. Първоначално развита в Япония, тези лоялни спътници са известни със своята смелост, независимост и дълбока преданост към семействата си. Тяхната гъста двойна козина и здрава конституция ги правят подходящи за различни климати. С правилна тренировка и социализация, американските акити са отлични пазители и обичащи домашни любимци.',
    kerryBlueTerrierDescription: 'Кери Блу Териерът е средноголяма ирландска порода, известна със своята характерна синьо-сива козина, която се развива с възрастта. Тези универсални кучета първоначално са отгледани за земеделие, лов и охрана, което ги прави адаптивни и интелигентни спътници. С техния енергичен характер и силна воля, Кери Блуовете изискват последователна тренировка и социализация. Тяхната хипоалергенна козина и лоялен темперамент ги правят отлични семейни кучета за активни домакинства.',
    miniatureSchnauzersDescription: 'Миниатюрният Шнауцер е малка, енергична териерска порода, известна със своята характерна брада и вежди. Тези интелигентни и будни кучета са отлични спътници, съчетавайки смелостта на териер с приятелски, общителен характер. Тяхната хипоалергенна двойна козина и компактен размер ги правят идеални за различни жилищни ситуации. Миниатюрните Шнауцери са много обучими, лоялни и правят прекрасни семейни любимци с правилна социализация.',
    southAfricanBoerboelDescription: 'Южноафриканският Бурбул е голяма, мощна мастиф порода, първоначално развита за защита на имения в Южна Африка. Тези уверени и спокойни кучета са известни със своята изключителна лоялност, интелигентност и естествени защитни инстинкти. Със своята мускулеста конституция и безстрашна природа, Бурбулите са отлични пазители, оставайки същевременно нежни и обичащи със семействата си. Те изискват опитно боравене и правилна социализация, за да достигнат пълния си потенциал като преданни спътници.'
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
