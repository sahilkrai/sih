import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Detect saved language or fallback to English
const savedLang = localStorage.getItem('app.language') || 'en';

const resources = {
  en: { translation: {
    brand: 'KrishiSahaay',
    nav: {
      home: 'Home',
      about: 'About',
      profile: 'Profile',
      history: 'History',
      login: 'Login',
      signup: 'Sign Up'
    },
    hero: {
      welcome: 'Welcome to',
      subtitle: 'Your trusted companion for agricultural advisory services. Get expert guidance for better farming practices and crop management.',
      getStarted: 'Get Started',
      learnMore: 'Learn More'
    },
    auth: {
      loginTitle: 'Login',
      signupTitle: 'Sign Up',
      fullName: 'Full Name',
      phoneOrEmail: 'Phone or Email',
      password: 'Password',
      loginButton: 'Login',
      signupButton: 'Create Account',
      noAccount: "Don’t have an account?",
      signupLink: 'Sign up',
      haveAccount: 'Already have an account?',
      loginLink: 'Login'
    },
    about: {
      title: 'About {{brand}}',
      intro: '{{brand}} is a revolutionary platform designed to assist farmers with cutting-edge AI technology.',
      mission: 'Our Mission',
      missionBody: 'We provide farmers with the tools and information they need to make informed decisions, increase productivity, and ensure sustainable farming practices.',
      offer: 'What We Offer',
      offerBody: 'From real-time crop disease detection to personalized advisory services, {{brand}} is your trusted partner in modern agriculture. We leverage the power of artificial intelligence to bring you accurate, timely, and actionable insights.',
      statAccuracy: 'Accuracy in Disease Detection',
      statStates: 'States Covered',
      statYield: 'Average Yield Increase'
    },
    footer: {
      quickLinks: 'Quick Links',
      features: 'Features',
      aiAdvisory: 'AI Advisory',
      queryHistory: 'Query History',
      aboutUs: 'About Us',
      contactUs: 'Contact Us',
      allRights: 'All rights reserved'
    },
    history: {
      title: 'History',
      whatIsAIQ: 'What is AI?',
      whatIsAIA: 'AI is artificial intelligence that simulates human intelligence.',
      whatIsBrandQ: 'What is {{brand}}?',
      whatIsBrandA: '{{brand}} helps farmers with smart agricultural solutions.',
      howUseQ: 'How can I use it?',
      howUseA: 'Simply type your query and get instant insights.'
    },
    modal: {
      chooseLanguage: 'Choose your language',
      english: 'English',
      hindi: 'Hindi',
      malayalam: 'Malayalam',
      continue: 'Continue'
    }
  }},
  hi: { translation: {
    brand: 'कृषि सहायक',
    nav: {
      home: 'होम',
      about: 'हमारे बारे में',
      profile: 'प्रोफ़ाइल',
      history: 'इतिहास',
      login: 'लॉगिन',
      signup: 'साइन अप'
    },
    hero: {
      welcome: 'स्वागत है',
      subtitle: 'कृषि परामर्श सेवाओं के लिए आपका विश्वसनीय साथी। बेहतर खेती और फसल प्रबंधन के लिए विशेषज्ञ मार्गदर्शन प्राप्त करें।',
      getStarted: 'शुरू करें',
      learnMore: 'और जानें'
    },
    auth: {
      loginTitle: 'लॉगिन',
      signupTitle: 'साइन अप',
      fullName: 'पूरा नाम',
      phoneOrEmail: 'फोन या ईमेल',
      password: 'पासवर्ड',
      loginButton: 'लॉगिन',
      signupButton: 'खाता बनाएं',
      noAccount: 'खाता नहीं है?',
      signupLink: 'साइन अप',
      haveAccount: 'क्या आपका पहले से खाता है?',
      loginLink: 'लॉगिन'
    },
    about: {
      title: '{{brand}} के बारे में',
      intro: '{{brand}} एक क्रांतिकारी प्लेटफ़ॉर्म है जो किसानों की मदद के लिए अत्याधुनिक एआई तकनीक का उपयोग करता है।',
      mission: 'हमारा उद्देश्य',
      missionBody: 'हम किसानों को सही निर्णय लेने, उत्पादकता बढ़ाने और सतत खेती सुनिश्चित करने के लिए आवश्यक उपकरण और जानकारी प्रदान करते हैं।',
      offer: 'हम क्या प्रदान करते हैं',
      offerBody: 'रीयल-टाइम फसल रोग पहचान से लेकर व्यक्तिगत परामर्श तक, {{brand}} आधुनिक कृषि में आपका विश्वसनीय साथी है। हम आपको सटीक, समय पर और उपयोगी जानकारी देने के लिए एआई की शक्ति का उपयोग करते हैं।',
      statAccuracy: 'रोग पहचान में सटीकता',
      statStates: 'कवर किए गए राज्य',
      statYield: 'औसत उपज वृद्धि'
    },
    footer: {
      quickLinks: 'त्वरित लिंक',
      features: 'विशेषताएँ',
      aiAdvisory: 'एआई सलाह',
      queryHistory: 'प्रश्न इतिहास',
      aboutUs: 'हमारे बारे में',
      contactUs: 'संपर्क करें',
      allRights: 'सर्वाधिकार सुरक्षित'
    },
    history: {
      title: 'इतिहास',
      whatIsAIQ: 'एआई क्या है?',
      whatIsAIA: 'एआई मानव बुद्धिमत्ता का अनुकरण करने वाली कृत्रिम बुद्धिमत्ता है।',
      whatIsBrandQ: '{{brand}} क्या है?',
      whatIsBrandA: '{{brand}} किसानों को स्मार्ट कृषि समाधान प्रदान करता है।',
      howUseQ: 'मैं इसका उपयोग कैसे कर सकता/सकती हूँ?',
      howUseA: 'बस अपना प्रश्न टाइप करें और तुरंत उत्तर प्राप्त करें।'
    },
    modal: {
      chooseLanguage: 'अपनी भाषा चुनें',
      english: 'अंग्रेज़ी',
      hindi: 'हिन्दी',
      malayalam: 'मलयालम',
      continue: 'जारी रखें'
    }
  }},
  ml: { translation: {
    brand: 'കൃഷി സഹായ്',
    nav: {
      home: 'ഹോം',
      about: 'കുറിച്ച്',
      profile: 'പ്രൊഫൈൽ',
      history: 'ഹിസ്റ്ററി',
      login: 'ലോഗിൻ',
      signup: 'സൈൻ അപ്പ്'
    },
    hero: {
      welcome: 'സ്വാഗതം',
      subtitle: 'വളർത്തൽ ഉപദേശങ്ങൾക്ക് നിങ്ങളുടെ വിശ്വസ്ത കൂട്ടുകാരൻ. മികച്ച കൃഷിക്കായി വിദഗ്ദ്ധ മാർഗ്ഗനിർദ്ദേശം നേടുക.',
      getStarted: 'ആരംഭിക്കുക',
      learnMore: 'കൂടുതൽ അറിയുക'
    },
    auth: {
      loginTitle: 'ലോഗിൻ',
      signupTitle: 'സൈൻ അപ്പ്',
      fullName: 'പൂർണ്ണ പേര്',
      phoneOrEmail: 'ഫോൺ അല്ലെങ്കിൽ ഇമെയിൽ',
      password: 'പാസ്വേഡ്',
      loginButton: 'ലോഗിൻ',
      signupButton: 'അക്കൗണ്ട് സൃഷ്ടിക്കുക',
      noAccount: 'അക്കൗണ്ട് ഇല്ലേ?',
      signupLink: 'സൈൻ അപ്പ്',
      haveAccount: 'ഇതിനകം അക്കൗണ്ട് ഉണ്ടോ?',
      loginLink: 'ലോഗിൻ'
    },
    about: {
      title: '{{brand}}യെ കുറിച്ച്',
      intro: '{{brand}} കർഷകർക്ക് സഹായത്തിനായി ആധുനിക എഐ സാങ്കേതികവിദ്യ ഉപയോഗിക്കുന്ന വിപ്ലവകരമായ പ്ലാറ്റ്ഫോമാണ്.',
      mission: 'ഞങ്ങളുടെ ലക്ഷ്യം',
      missionBody: 'ശരിയായ തീരുമാനങ്ങൾ എടുക്കാനും ഉത്പാദനക്ഷമത വർദ്ധിപ്പിക്കാനും സ്ഥിരതയുള്ള കൃഷി ഉറപ്പാക്കാനും ആവശ്യമായ ഉപകരണങ്ങളും വിവരങ്ങളും ഞങ്ങൾ കർഷകർക്ക് നൽകുന്നു.',
      offer: 'ഞങ്ങൾ എന്ത് വാഗ്ദാനം ചെയ്യുന്നു',
      offerBody: 'റിയൽ-ടൈം വിള രോഗ നിർണയത്തിൽ നിന്ന് വ്യക്തിഗത ഉപദേശം വരെ, {{brand}} ആധുനിക കൃഷിയിൽ നിങ്ങളുടെ വിശ്വസ്ത പങ്കാളിയാണ്. കൃത്യവും സമയബന്ധിതവും പ്രായോഗികവുമായ നിർദ്ദേശങ്ങൾ നൽകാൻ ഞങ്ങൾ എ.ഐ.യുടെ ശക്തി ഉപയോഗിക്കുന്നു.',
      statAccuracy: 'രോഗം കണ്ടെത്തലിലെ കൃത്യത',
      statStates: 'ആവരണം ചെയ്യുന്ന സംസ്ഥാനങ്ങൾ',
      statYield: 'ശരാശരി വിളവിന്റെ വർദ്ധന'
    },
    footer: {
      quickLinks: 'ക്വിക്ക് ലിങ്കുകൾ',
      features: 'സവിശേഷതകൾ',
      aiAdvisory: 'എ.ഐ. ഉപദേശം',
      queryHistory: 'ചോദ്യ ചരിത്രം',
      aboutUs: 'ഞങ്ങളെ കുറിച്ച്',
      contactUs: 'ബന്ധപ്പെടുക',
      allRights: 'എല്ലാ അവകാശങ്ങളും സംരക്ഷിതമാണ്'
    },
    history: {
      title: 'ഹിസ്റ്ററി',
      whatIsAIQ: 'എ.ഐ. എന്താണ്?',
      whatIsAIA: 'മനുഷ്യ ബുദ്ധിയെ അനുകരിക്കുന്ന കൃത്രിമ ബുദ്ധിയാണ് എ.ഐ.',
      whatIsBrandQ: '{{brand}} എന്താണ്?',
      whatIsBrandA: '{{brand}} കർഷകർക്ക് സ്മാർട്ട് കാർഷിക പരിഹാരങ്ങൾ നൽകുന്നു.',
      howUseQ: 'എങ്ങനെ ഉപയോഗിക്കാം?',
      howUseA: 'നിങ്ങളുടെ ചോദ്യം ടൈപ്പ് ചെയ്യുക, ഉടൻ വിവരങ്ങൾ ലഭിക്കും.'
    },
    modal: {
      chooseLanguage: 'നിങ്ങളുടെ ഭാഷ തിരഞ്ഞെടുക്കുക',
      english: 'ഇംഗ്ലീഷ്',
      hindi: 'ഹിന്ദി',
      malayalam: 'മലയാളം',
      continue: 'തുടരുക'
    }
  }}
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: savedLang,
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  });

export default i18n;
