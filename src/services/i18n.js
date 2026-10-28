import { addMessages, init, locale, json, _ } from 'svelte-i18n';

const en = {
  nav: { about: 'About', projects: 'Projects', contact: 'Contact', menu: 'Menu', close: 'Close menu' },
  hero: {
    eyebrow: 'Consulting & sustainable investments',
    title: 'We invest in sustainable ideas that help people in and around Norrköping.',
    ctaPrimary: 'Our projects',
    ctaSecondary: 'Get in touch'
  },
  about: {
    heading: 'About Ekmon',
    p1: 'Ekmon AB is a consultancy working in music, IT and accounting. The company also acts as a small venture capital firm, investing in green and sustainable businesses.',
    p2: 'Ekmon was founded in 2012 by the brothers Johan and Anders Eksmo. The name comes from a family farm between Svärtinge and Simonstorp, just outside Norrköping.',
    expertiseHeading: 'Areas of expertise',
    expertise: ['Project management', 'Accounting', 'Teaching', 'Entrepreneurship', 'Singing', 'Software engineering', 'Web design', 'Supply chain', 'Logistics'],
    founded: 'Founded',
    based: 'Based in',
    focus: 'Focus',
    focusValue: 'Green investments'
  },
  projects: {
    heading: 'Projects',
    intro: 'Companies we have founded, run or invested in.',
    visit: 'Visit website',
    items: {
      idehusen: { category: 'Real estate', text: 'Idéhusen Skandinavien AB is a construction and property development company focused on sustainable development.' },
      eksmobuss: { category: 'Transportation', text: 'Eksmo Buss is a small company with a personal touch, offering trips in a modern coach for companies, associations, schools, churches, sports teams and other groups.' },
      epishine: { category: 'Organic solar cells', text: 'Epishine builds on more than 30 years of research in organic electronics. Its printed organic solar cells are highly scalable to manufacture and lead the industry in low-light efficiency.' },
      ligna: { category: 'Energy storage', text: 'Ligna Energy was founded in 2017 as the next step of a research project at Linköping University, developing innovative energy-storage solutions based on materials from nature.' }
    }
  },
  contact: {
    heading: 'Get in touch',
    text: 'Interested in working with us or have an idea worth investing in? We would love to hear from you.',
    email: 'Email',
    rights: 'All rights reserved.',
    language: 'Language'
  }
};

const sv = {
  nav: { about: 'Om oss', projects: 'Projekt', contact: 'Kontakt', menu: 'Meny', close: 'Stäng menyn' },
  hero: {
    eyebrow: 'Konsultverksamhet & hållbara investeringar',
    title: 'Vi investerar i hållbara idéer som hjälper människor i och runt Norrköping.',
    ctaPrimary: 'Våra projekt',
    ctaSecondary: 'Kontakta oss'
  },
  about: {
    heading: 'Om Ekmon',
    p1: 'Ekmon AB bedriver konsultverksamhet inom sång och musik, IT och ekonomi. Bolaget investerar också riskkapital i utvalda bolag med fokus på gröna och hållbara idéer.',
    p2: 'Verksamheten startades 2012 av bröderna Johan och Anders Eksmo. Namnet Ekmon kommer från en släktgård mellan Svärtinge och Simonstorp utanför Norrköping.',
    expertiseHeading: 'Kompetensområden',
    expertise: ['Projektledning', 'Redovisning', 'Undervisning', 'Entreprenörskap', 'Sång', 'Systemutveckling', 'Webbdesign', 'Försörjningskedjor', 'Logistik'],
    founded: 'Grundat',
    based: 'Säte',
    focus: 'Fokus',
    focusValue: 'Gröna investeringar'
  },
  projects: {
    heading: 'Projekt',
    intro: 'Bolag vi har grundat, driver eller investerat i.',
    visit: 'Besök webbplatsen',
    items: {
      idehusen: { category: 'Fastigheter', text: 'Idéhusen Skandinavien AB är ett företag inom byggnation och fastighetsutveckling som Idéfabriken är med och startar, med fokus på hållbar förvaltning.' },
      eksmobuss: { category: 'Transport', text: 'Eksmo Buss är det lilla företaget med den personliga kontakten. Bolaget erbjuder resor med modern turistbuss och vänder sig främst till företag, föreningar, skolor, kyrkor och andra grupper.' },
      epishine: { category: 'Organiska solceller', text: 'Prisvärd solenergi överallt! Epishine utvecklar och producerar tryckta solceller av enbart organiska material – prisvärda, klimatvänliga och lätta att transportera.' },
      ligna: { category: 'Energilagring', text: 'Ligna Energy startades 2017 som nästa steg i ett forskningsprojekt vid Linköpings universitet och utvecklar innovativa lösningar för energilagring.' }
    }
  },
  contact: {
    heading: 'Kontakta oss',
    text: 'Vill du samarbeta med oss eller har du en idé som är värd att investera i? Hör gärna av dig.',
    email: 'E-post',
    rights: 'Alla rättigheter förbehållna.',
    language: 'Språk'
  }
};

addMessages('en', en);
addMessages('sv', sv);

const STORAGE_KEY = 'ekmon-locale';

function initialLocale() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'en' || saved === 'sv') return saved;
  } catch (e) {}
  const nav = (navigator.language || 'en').toLowerCase();
  return nav.startsWith('sv') ? 'sv' : 'en';
}

export function setupI18n() {
  init({ fallbackLocale: 'en', initialLocale: initialLocale() });
  locale.subscribe((value) => {
    if (!value) return;
    document.documentElement.lang = value;
    try { localStorage.setItem(STORAGE_KEY, value); } catch (e) {}
  });
}

export { _, json, locale };
