// Native Web SpeechSynthesis Voice AI Assistant
import { playAmbientStartupChime } from './audioFx';

const langVoiceMap: Record<string, string> = {
  en: 'en-US',
  kn: 'kn-IN',
  hi: 'hi-IN',
  ta: 'ta-IN',
  ml: 'ml-IN',
  zh: 'zh-CN',
  es: 'es-ES',
  de: 'de-DE',
  fr: 'fr-FR',
  ja: 'ja-JP',
};

const langWelcomeMap: Record<string, string> = {
  en: 'Welcome. Please select your preferred language.',
  kn: 'ಸ್ವಾಗತ. ನಿಮ್ಮ ಆದ್ಯತೆಯ ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ.',
  hi: 'स्वागत है। कृपया अपनी पसंदीदा भाषा चुनें।',
  ta: 'வணக்கம். உங்கள் விருப்பமான மொழியைத் தேர்ந்தெடுக்கவும்.',
  ml: 'സ്വാഗതം. നിങ്ങളുടെ പ്രിയപ്പെട്ട ഭാഷ തിരഞ്ഞെടുക്കുക.',
  zh: '欢迎。请选择您的首选语言。',
  es: 'Bienvenido. Por favor seleccione su idioma preferido.',
  de: 'Willkommen. Bitte wählen Sie Ihre bevorzugte Sprache.',
  fr: 'Bienvenue. Veuillez sélectionner votre langue préférée.',
  ja: 'ようこそ。ご希望の言語を選択してください。',
};

const langSelectedAnnounce: Record<string, string> = {
  en: 'Language set to English.',
  kn: 'ಭಾಷೆ ಕನ್ನಡಕ್ಕೆ ಬದಲಾಗಿದೆ.',
  hi: 'भाषा हिन्दी सेट की गई है।',
  ta: 'மொழி தமிழுக்கு மாற்றப்பட்டது.',
  ml: 'ഭാഷ മലയാളത്തിലേക്ക് മാറ്റി.',
  zh: '语言已设置为中文。',
  es: 'Idioma configurado en Español.',
  de: 'Sprache auf Deutsch eingestellt.',
  fr: 'Langue configurée en Français.',
  ja: '言語が日本語に設定されました。',
};

let cachedVoices: SpeechSynthesisVoice[] = [];

if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  cachedVoices = window.speechSynthesis.getVoices();
  window.speechSynthesis.onvoiceschanged = () => {
    cachedVoices = window.speechSynthesis.getVoices();
  };
}

export const speakText = (text: string, lang = 'en') => {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    playAmbientStartupChime();
    return;
  }

  try {
    if (window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
    }
    window.speechSynthesis.cancel(); // Stop any previous speech

    const utterance = new SpeechSynthesisUtterance(text);
    const locale = langVoiceMap[lang] || 'en-US';
    utterance.lang = locale;
    utterance.rate = 1.1; // Perfect natural cadence balance (1.1x)
    utterance.pitch = 1.02; // Warm natural pitch tuning

    // Pick natural/neural matching voice if available in cached voices for maximum smoothness
    const voices = cachedVoices.length ? cachedVoices : window.speechSynthesis.getVoices();
    const naturalVoice = voices.find(v => 
      (v.lang.startsWith(locale.substring(0, 2)) || v.lang.includes(locale)) &&
      (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Neural') || v.name.includes('Enhanced') || v.name.includes('Online'))
    ) || voices.find(v => v.lang.startsWith(locale.substring(0, 2)) || v.lang.includes(locale));
    
    if (naturalVoice) {
      utterance.voice = naturalVoice;
    }

    utterance.onerror = () => {
      playAmbientStartupChime();
    };

    window.speechSynthesis.speak(utterance);
  } catch (e) {
    console.warn('SpeechSynthesis error, falling back to chime:', e);
    playAmbientStartupChime();
  }
};

export const announceWelcomeVoice = (lang = 'en') => {
  const text = langWelcomeMap[lang] || langWelcomeMap.en;
  speakText(text, lang);
};

export const announceLangChangeVoice = (lang = 'en') => {
  const text = langSelectedAnnounce[lang] || langSelectedAnnounce.en;
  speakText(text, lang);
};

const langInitializeAnnounce: Record<string, string> = {
  en: 'Neural Link Initialized. Welcome to Koushik T. S. Portfolio.',
  kn: 'ನ್ಯೂರಲ್ ಲಿಂಕ್ ಪ್ರಾರಂಭಿಸಲಾಗಿದೆ. ಕೌಶಿಕ್ ಟಿ. ಎಸ್. ಪೋರ್ಟ್‌ಫೋಲಿಯೋಗೆ ಸ್ವಾಗತ.',
  hi: 'न्यूरल लिंक प्रारंभ हो गया है। कौशिक टी. एस. पोर्टफोलियो में आपका स्वागत है।',
  ta: 'நியூரல் லிங்க் தொடக்கப்பட்டது. கெளசிக் டி. எஸ். போர்ட்ஃபோலியோவிற்கு வரவேற்கிறோம்.',
  ml: 'ന്യൂറൽ ലിങ്ക് സജ്ജമായി. കൗശിക് ടി. എസ്. പോർട്ട്ഫോളിയോയിലേക്ക് സ്വാഗതം.',
  zh: '神经链接已初始化。欢迎来到 Koushik T. S. 的作品集。',
  es: 'Enlace Neural Inicializado. Bienvenido al Portafolio de Koushik T. S.',
  de: 'Neurallink initialisiert. Willkommen beim Portfolio von Koushik T. S.',
  fr: 'Lien Neural Initialisé. Bienvenue sur le Portfolio de Koushik T. S.',
  ja: 'ニューラルリンクが初期化されました。Koushik T. S. のポートフォリオへようこそ。',
};

export const announceInitializeVoice = (lang = 'en') => {
  const text = langInitializeAnnounce[lang] || langInitializeAnnounce.en;
  speakText(text, lang);
};
