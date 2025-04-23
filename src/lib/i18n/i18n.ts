import { writable } from 'svelte/store';
import de from './de.json';
import en from './en.json';
import ae from './ae.json';
import ru from './ru.json';
import tr from './tr.json';

// Verfügbare Sprachen mit ihren Display-Namen
export const languages = {
  'de': { name: 'Deutsch', flag: 'De' },
  'en': { name: 'English', flag: 'En' },
  'ae': {name: 'عربي', flag: 'Ae'},
  'ru': { name: 'Русский', flag: 'Ru' },
  'tr': { name: 'Türkçe', flag: 'Tr' }
};

// Überprüfe den Browser oder localStorage für gespeicherte Sprachpräferenz
function getBrowserLanguage(): string {
  // Standard-Sprachcode
  const defaultLang = 'de';
  
  // Wenn wir auf dem Server sind oder window nicht verfügbar ist
  if (typeof window === 'undefined') return defaultLang;

  try {
    // Versuche die Sprache aus localStorage zu holen
    const storedLang = localStorage.getItem('lang');
    if (storedLang && languages[storedLang]) {
      return storedLang;
    }

    // Versuche die Browser-Sprache zu ermitteln
    const browserLang = navigator.language.split('-')[0];
    return languages[browserLang] ? browserLang : defaultLang;
  } catch (e) {
    // Fallback bei Fehlern (z.B. wenn localStorage blockiert ist)
    return defaultLang;
  }
}

// Erstelle den Sprach-Store mit einer sicheren Initialisierung
export const currentLang = writable<string>('de');

// Sicheres Update der Sprache im Browser-Kontext
if (typeof window !== 'undefined') {
  // Setze die Sprache erst nach der Initialisierung im Browser
  setTimeout(() => {
    const browserLang = getBrowserLanguage();
    currentLang.set(browserLang);
  }, 0);
}

// Erstelle ein Dictionary der verfügbaren Übersetzungen
export const translations = {
  de,
  en,
  ae,
  ru,
  tr
};

// Store für den aktuellen Übersetzungs-Text
export const t = writable(translations.de);

// Aktualisiere die Übersetzungen bei Sprachwechsel
currentLang.subscribe((newLang) => {
  // Setze lokale Speicherung nur im Browser-Kontext
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem('lang', newLang);
    } catch (e) {
      console.warn('Could not save language preference to localStorage');
    }
  }
  
  // Aktualisiere Übersetzungen
  if (translations[newLang]) {
    t.set(translations[newLang]);
  } else {
    console.warn(`Translation for language '${newLang}' not found, using default`);
    t.set(translations.de);
  }
});

// Funktion zum Ändern der aktuellen Sprache
export function setLanguage(lang: string) {
  if (languages[lang]) {
    currentLang.set(lang);
  }
}