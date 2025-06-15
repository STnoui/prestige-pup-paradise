
import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'bg' | 'es';

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
    footerDescription: 'Превъзходство в отглеждането, посветено на свързването на любящи семейства с изключителни кучешки спътници.',
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
  },
  es: {
    // Navigation
    home: 'Inicio',
    about: 'Sobre nosotros',
    ourDogs: 'Nuestros perros',
    contact: 'Contacto',
    
    // Hero Section
    heroTitle: 'SHOLO',
    heroSubtitle: 'Perros valientes',
    heroDescription: 'Descubre compañeros meticulosamente criados, criados con pasión y experiencia para familias exigentes que merecen solo lo mejor.',
    meetOurBreeds: 'Conoce nuestras razas',
    ourStory: 'Nuestra historia',
    
    // About Section
    aboutTitle: 'Un legado de amor y dedicación',
    aboutDescription: 'Fundada en 2025, SHOLO representa nuestra profunda conexión con prácticas de cría excepcionales, enfocándose en la salud, temperamento y adherencia a los estándares de raza.',
    ourPhilosophy: 'Nuestra filosofía',
    aboutText1: 'Con sede en Bulgaria y fundada en un profundo amor por la compañía canina y un compromiso con la cría ética, creemos en proporcionar un ambiente nutritivo donde nuestros perros y cachorros prosperen.',
    aboutText2: 'En el corazón de nuestra filosofía está un profundo respeto por cada animal. Esto incluye áreas de vida espaciosas y limpias, nutrición premium, atención veterinaria regular y abundantes oportunidades para socialización y juego.',
    
    // Contact Section
    contactTitle: 'Ponte en contacto',
    contactDescription: '¿Listo para dar la bienvenida a un nuevo miembro de la familia? Conéctate con nosotros a través de Facebook para todas las consultas y selección de perros.',
    facebookTitle: 'Facebook',
    facebookDescription: 'Conéctate con nosotros en Facebook para todas las preguntas, consultas y selección de perros',
    followJourney: 'Sigue nuestro viaje',
    
    // Footer
    footerDescription: 'Excelencia en la cría, dedicada a conectar familias amorosas con compañeros caninos excepcionales.',
    quickLinks: 'Enlaces rápidos',
    allRightsReserved: 'Todos los derechos reservados.',
    designCredit: 'Diseñado con inspiración en la filosofía de Apple de elegancia y calidad.',
    
    // Breeds
    americanAkita: 'Akita Americano',
    southAfricanBoerboel: 'Boerboel Sudafricano',
    miniatureSchnauzer: 'Schnauzer Miniatura',
    kerryBlueTerrier: 'Kerry Blue Terrier',
    
    // Dark Mode
    darkMode: 'Modo oscuro',
    lightMode: 'Modo claro'
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
