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
    },
    query: {
      heading: 'Ask me anything',
      placeholder: 'Type or speak your question...',
      mostAskedTitle: 'Most Asked Questions',
      youAsked: 'You asked',
      qa: [
        {
          question: 'What crops are suitable for my region?',
          answer: 'Suitable crops depend on your climate zone, soil type, and water availability. As a general guide: warm, semi-arid regions favor millets, sorghum, and pulses; humid tropical regions favor rice, sugarcane, banana; temperate regions favor wheat, barley, and potato. For precise advice, check local agri-extension recommendations and recent rainfall data.'
        },
        {
          question: 'How to identify tomato leaf disease?',
          answer: 'Look for patterns: yellow/brown spots with concentric rings suggest early blight; small dark spots with yellow halos suggest Septoria leaf spot; white powdery coating suggests powdery mildew; irregular brown lesions with wilt may indicate bacterial canker. Remove infected leaves, improve spacing/airflow, and use recommended fungicides if needed.'
        },
        {
          question: 'Best practices for organic farming',
          answer: 'Build soil health with compost and green manures, rotate crops to break pest cycles, use trap crops and biological controls, maintain mulches for moisture and weed suppression, and select disease-resistant varieties. Regular soil testing helps tailor nutrient plans organically.'
        },
        {
          question: 'How to increase crop yield naturally?',
          answer: 'Improve soil organic matter, use balanced nutrient management based on soil test, ensure timely irrigation, adopt IPM for pests, use quality seeds and proper spacing, and practice crop rotation/intercropping to enhance resource use efficiency.'
        },
        {
          question: 'Government schemes for farmers',
          answer: 'Common schemes include PM-KISAN income support, PM Fasal Bima Yojana (crop insurance), Soil Health Card, Kisan Credit Card (KCC), PM Krishi Sinchai Yojana (irrigation). Visit your state agriculture department portal for localized schemes and eligibility.'
        },
        {
          question: 'Weather forecast for next week',
          answer: 'Check the IMD/MET department or an agri-weather app for your district-level forecast. Plan irrigations before expected heat/wind events and avoid spraying just before rainfall to prevent wash-off.'
        },
        {
          question: 'How to control pests without chemicals?',
          answer: 'Adopt IPM: use neem oil or Bt for caterpillars, yellow sticky traps for whiteflies/aphids, pheromone traps for moth monitoring, release beneficial insects, remove infested plant parts, and maintain field hygiene and crop diversity.'
        },
        {
          question: 'Best irrigation methods for water conservation',
          answer: 'Drip irrigation saves 30–50% water and improves yields; mulching reduces evaporation; irrigate early morning/late evening to reduce losses; schedule based on soil moisture rather than calendar days for best efficiency.'
        }
      ]
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
    },
    query: {
      heading: 'कुछ भी पूछें',
      placeholder: 'अपना प्रश्न टाइप करें या बोलें...',
      mostAskedTitle: 'सबसे ज़्यादा पूछे गए प्रश्न',
      youAsked: 'आपने पूछा',
      qa: [
        {
          question: 'मेरे क्षेत्र के लिए कौन सी फसलें उपयुक्त हैं?',
          answer: 'उपयुक्त फसलें आपके जलवायु क्षेत्र, मिट्टी के प्रकार और पानी की उपलब्धता पर निर्भर करती हैं। सामान्य मार्गदर्शन: गर्म, अर्ध-शुष्क क्षेत्रों में ज्वार, बाजरा और दालें; आर्द्र उष्णकटिबंधीय क्षेत्रों में धान, गन्ना, केला; समशीतोष्ण क्षेत्रों में गेहूं, जौ और आलू। सटीक सलाह के लिए स्थानीय कृषि विस्तार सिफारिशें और हालिया वर्षा डेटा देखें।'
        },
        {
          question: 'टमाटर की पत्ती की बीमारी कैसे पहचानें?',
          answer: 'पैटर्न देखें: पीले/भूरे धब्बे और केंद्रित छल्ले — अर्ली ब्लाइट; छोटे काले धब्बे पीले किनारों के साथ — सेप्टोरिया; सफेद पाउडर जैसा आवरण — पाउडरी मिल्ड्यू; अनियमित भूरे घाव और मुरझाना — बैक्टीरियल कैंकर हो सकता है। संक्रमित पत्तियाँ हटाएँ, अंतराल/हवादारी सुधारें, और आवश्यकता पर अनुशंसित फफूंदनाशक प्रयोग करें।'
        },
        {
          question: 'जैविक खेती के सर्वोत्तम तरीके',
          answer: 'कम्पोस्ट और ग्रीन मैन्योर से मिट्टी का स्वास्थ्य सुधारें, कीट चक्र तोड़ने के लिए फसल चक्र अपनाएं, ट्रैप/बायोलॉजिकल नियंत्रण उपयोग करें, नमी और खरपतवार दमन हेतु मल्च रखें, और रोग-प्रतिरोधी किस्में चुनें। नियमित मृदा परीक्षण से पोषण योजना बेहतर बनती है।'
        },
        {
          question: 'प्राकृतिक रूप से फसल उपज कैसे बढ़ाएँ?',
          answer: 'मृदा कार्बनिक पदार्थ बढ़ाएँ, मृदा परीक्षण आधारित संतुलित पोषण दें, समय पर सिंचाई करें, कीटों के लिए IPM अपनाएँ, गुणवत्तापूर्ण बीज और उचित दूरी रखें, और फसल चक्र/मिश्रित फसलें अपनाएँ।'
        },
        {
          question: 'किसानों के लिए सरकारी योजनाएँ',
          answer: 'सामान्य योजनाएँ: पीएम-किसान आय सहायता, पीएम फसल बीमा योजना, मृदा स्वास्थ्य कार्ड, किसान क्रेडिट कार्ड (KCC), पीएम कृषि सिंचाई योजना। अपने राज्य कृषि विभाग पोर्टल पर स्थानीय योजनाएँ और पात्रता देखें।'
        },
        {
          question: 'अगले सप्ताह का मौसम पूर्वानुमान',
          answer: 'IMD/MET विभाग या एक कृषि-मौसम ऐप पर अपने जिले का पूर्वानुमान देखें। गर्मी/हवा से पहले सिंचाई करें और बारिश से ठीक पहले छिड़काव से बचें।'
        },
        {
          question: 'बिना रसायन के कीट नियंत्रण कैसे करें?',
          answer: 'IPM अपनाएँ: कैटरपिलर के लिए नीम तेल या Bt, व्हाइटफ्लाई/एफिड्स के लिए पीले स्टिकी ट्रैप, मॉथ मॉनिटरिंग के लिए फेरोमोन ट्रैप, लाभकारी कीट छोड़ें, संक्रमित भाग हटाएँ, खेत की स्वच्छता और विविधता बनाए रखें।'
        },
        {
          question: 'जल संरक्षण के लिए सर्वोत्तम सिंचाई तरीके',
          answer: 'ड्रिप सिंचाई 30–50% पानी बचाती है और उपज बढ़ाती है; मल्चिंग वाष्पीकरण घटाती है; सुबह/शाम सिंचाई करें; कैलेंडर दिनों की बजाय मिट्टी की नमी के आधार पर सिंचाई शेड्यूल करें।'
        }
      ]
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
      subtitle: 'വളർത്തൽ ഉപദേശങ്ങൾക്ക് നിങ്ങളുടെ വിശ്വസ്ത കൂട്ടുകാരൻ. മികച്ച കൃഷിക്കായി വിദഗ്ദ്ഗ മാർഗ്ഗനിർദ്ദേശം നേടുക.',
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
      missionBody: 'ശരിയായ തീരുമാനം എടുക്കാനും ഉത്പാദനക്ഷമത വർദ്ധിപ്പിക്കാനും സ്ഥിരതയുള്ള കൃഷി ഉറപ്പാക്കാനും ആവശ്യമായ ഉപകരണങ്ങളും വിവരങ്ങളും ഞങ്ങൾ കർഷകർക്ക് നൽകുന്നു.',
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
    },
    query: {
      heading: 'എന്നോടു എന്തും ചോദിക്കൂ',
      placeholder: 'നിങ്ങളുടെ ചോദ്യം ടൈപ്പ് ചെയ്യുക അല്ലെങ്കിൽ സംസാരിക്കുക...',
      mostAskedTitle: 'ഏറ്റവും അധികം ചോദിച്ച ചോദ്യങ്ങൾ',
      youAsked: 'നിങ്ങൾ ചോദിച്ചു',
      qa: [
        {
          question: 'എന്റെ പ്രദേശത്തിനൊത്ത വിളകൾ എന്തൊക്കെയാണ്?',
          answer: 'ഉചിതമായ വിളകൾ നിങ്ങളുടെ കാലാവസ്ഥ, മണ്ണിന്റെ തരം, വെള്ളത്തിന്റെ ലഭ്യത എന്നിവയിൽ ആശ്രയിക്കുന്നു. പൊതുവെ: ചൂട്/അർദ്ധ ഉഷ്ണ പ്രദേശങ്ങൾ — ചോരം, കാമ്പ്, പയർ വർഗങ്ങൾ; ഈർപ്പം കൂടിയ ഉഷ്ണമേഖല — നെല്ല്, കരിമ്പ്, വാഴ; സമശീതോഷ്ണ — ഗോതമ്പ്, ബാർലി, ഉരുളക്കിഴങ്ങ്. കൃത്യമായ നിർദ്ദേശങ്ങൾക്ക് പ്രാദേശിക കാർഷിക വകുപ്പ് ശുപാർശകളും മഴ ഡാറ്റയും പരിശോധിക്കുക.'
        },
        {
          question: 'തക്കാളി ഇലരോഗം എങ്ങനെ തിരിച്ചറിയാം?',
          answer: 'മഞ്ഞ/തവിട്ടു പാടുകളും കേന്ദ്രീകൃത വളയങ്ങളും — എർലി ബ്ലൈറ്റ്; മഞ്ഞ ഹാലോയുള്ള ചെറു കറുത്ത പാടുകൾ — സെപ്റ്റോറിയ; വെളുത്ത പൊടി പാളി — പൗഡറി മിൽഡ്യൂ; അനിയമിത തവിട്ടു പാടുകളും വാടലും — ബാക്ടീരിയൽ കാൻക്കർ ആയിരിക്കും. രോഗബാധിത ഇലകൾ നീക്കംചെയ്യുക, ഇടവേള/വാതിലേറ്റം മെച്ചപ്പെടുത്തുക, ആവശ്യപ്പെട്ടാൽ ശുപാർശ ചെയ്ത ഫംഗിസൈഡ് ഉപയോഗിക്കുക.'
        },
        {
          question: 'ഓർഗാനിക് കൃഷിയുടെ മികച്ച രീതികൾ',
          answer: 'കമ്പോസ്റ്റ്, ഗ്രീൻ മാൻയറുകൾ ഉപയോഗിച്ച് മണ്ണിന്റെ ആരോഗ്യം മെച്ചപ്പെടുത്തുക, കീടചക്രം തകർക്കാൻ വിളപ്പൊരുക്ക്, ട്രാപ്/ബയോളജിക്കൽ നിയന്ത്രണം, ഈർപ്പം നിലനിർത്താൻ മൾച്ചിംഗ്, രോഗപ്രതിരോധ ശേഷിയുള്ള ഇനങ്ങൾ തിരഞ്ഞെടുക്കുക. സ്ഥിരമായ മണ്ണ് പരിശോധന പോഷക പദ്ധതികൾക്ക് സഹായിക്കുന്നു.'
        },
        {
          question: 'സ്വാഭാവികമായി വിളവെടുപ്പ് എങ്ങനെ വർധിപ്പിക്കാം?',
          answer: 'മണ്ണിലെ കാർബണിക് അംശം വർദ്ധിപ്പിക്കുക, മണ്ണ് പരിശോധനയെ അടിസ്ഥാനമാക്കി സമതുലിത പോഷണം നൽകുക, സമയബന്ധിതമായി ജലസേചനം ചെയ്യുക, കീടങ്ങൾക്ക് IPM സ്വീകരിക്കുക, ഗുണമേന്മയുള്ള വിത്തും ശരിയായ ഇടവേളയും ഉറപ്പാക്കുക, വിളപ്പൊരുക്ക്/ഇന്റർ-ക്രോപ്പിംഗ് ചെയ്യുക.'
        },
        {
          question: 'കർഷകർക്കുള്ള സർക്കാർ പദ്ധതികൾ',
          answer: 'PM-KISAN, PM Fasal Bima Yojana, Soil Health Card, Kisan Credit Card (KCC), PM Krishi Sinchai Yojana പോലുള്ള പദ്ധതികൾ ലഭ്യമാണ്. നിങ്ങളുടെ സംസ്ഥാന കാർഷിക വകുപ്പിന്റെ പോർട്ടൽ സന്ദർശിക്കുക.'
        },
        {
          question: 'അടുത്ത ആഴ്ചയിലെ കാലാവസ്ഥ പ്രവചനം',
          answer: 'IMD/MET വകുപ്പ് അല്ലെങ്കിൽ ഒരു അഗ്രി-വെതർ ആപ്പിൽ ജില്ലയിലെ പ്രവചനം പരിശോധിക്കുക. ചൂട്/കാറ്റിന് മുമ്പ് ജലസേചനം ചെയ്യുക, മഴയ്ക്കു തൊട്ടുമുമ്പ് സ്പ്രേ ഒഴിവാക്കുക.'
        },
        {
          question: 'രാസവസ്തുക്കൾ ഇല്ലാതെ കീടനിയന്ത്രണം എങ്ങനെ?',
          answer: 'IPM സ്വീകരിക്കുക: ചെറുപുഴുക്കൾക്ക് നീം ഓയിൽ അല്ലെങ്കിൽ Bt, വൈറ്റ്‌ഫ്ലൈ/ആഫിഡ് — മഞ്ഞ സ്റ്റിക്കി ട്രാപ്, ശലഭ നിരീക്ഷണത്തിന് ഫെറോമോൺ ട്രാപ്, ഗുണകര കീടങ്ങൾ വിടുക, ബാധിത ഭാഗങ്ങൾ നീക്കംചെയ്യുക, വയൽ ശുചിത്വം/വൈവിധ്യം പാലിക്കുക.'
        },
        {
          question: 'ജല സംരക്ഷണത്തിനുള്ള മികച്ച ജലസേചന മാർഗങ്ങൾ',
          answer: 'ഡ്രിപ്പ് ജലസേചനം 30–50% വരെ വെള്ളം ലാഭിക്കുകയും വിളവ് വർധിപ്പിക്കുകയും ചെയ്യും; മൾച്ചിംഗ് ആവി കുറയ്ക്കും; രാവിലെ/വൈകുന്നേരം ജലസേചനം ചെയ്യുക; കലണ്ടർ ദിവസങ്ങൾക്കു പകരം മണ്ണിലെ ഈർപ്പത്തെ അടിസ്ഥാനമാക്കി ഷെഡ്യൂൾ ചെയ്യുക.'
        }
      ]
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
