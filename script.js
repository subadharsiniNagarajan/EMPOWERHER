// Multilingual Translations
const translations = {
    english: {
        tagline: "From Home to Business – Step by Step",
        chooseLanguage: "Choose Your Language",
        whatsYourName: "What's Your Name?",
        enterName: "Enter your name",
        startJourney: "Start My Journey 🚀",
        welcome: "Welcome",
        changeLanguage: "Change Language",
        askAI: "Ask AI",
        businessGuide: "Business Guide",
        profitCalculator: "Profit Calculator",
        marketingHelp: "Marketing Help",
        motivation: "Motivation",
        exploreSkills: "Explore Skills",
        selectLanguageAlert: "Please select a language",
        enterNameAlert: "Please enter your name",
        // Business Skills translations
        exploreBusiness: "Explore Business Skills",
        cookingCatering: "Cooking & Catering",
        cookingDesc: "Home-cooked meals and catering services",
        tiffinService: "Tiffin Service",
        catering: "Catering",
        homemadePickles: "Homemade Pickles",
        masalaBusiness: "Masala Business",
        snacksMaking: "Snacks Making"
    },
    tamil: {
        tagline: "வீட்டிலிருந்து வியாபாரம் – படிப்படியாக",
        chooseLanguage: "உங்கள் மொழியைத் தேர்ந்தெடுக்கவும்",
        whatsYourName: "உங்கள் பெயர் என்ன?",
        enterName: "உங்கள் பெயரை உள்ளிடவும்",
        startJourney: "என் பயணத்தைத் தொடங்கு 🚀",
        welcome: "வரவேற்கிறோம்",
        changeLanguage: "மொழியை மாற்று",
        askAI: "AI யிடம் கேளுங்கள்",
        businessGuide: "வியாபார வழிகாட்டி",
        profitCalculator: "லாப கணக்கீடு",
        marketingHelp: "சந்தைப்படுத்தல் உதவி",
        motivation: "ஊக்கம்",
        exploreSkills: "திறன்களை ஆராயுங்கள்",
        selectLanguageAlert: "தயவுசெய்து ஒரு மொழியைத் தேர்ந்தெடுக்கவும்",
        enterNameAlert: "தயவுசெய்து உங்கள் பெயரை உள்ளிடவும்",
        // Business Skills translations
        exploreBusiness: "வியாபார திறன்களை ஆராயுங்கள்",
        cookingCatering: "சமையல் மற்றும் கேட்டரிங்",
        cookingDesc: "வீட்டில் சமைத்த உணவு மற்றும் கேட்டரிங் சேவைகள்",
        tiffinService: "டிஃபின் சேவை",
        catering: "கேட்டரிங்",
        homemadePickles: "வீட்டில் தயாரிக்கப்பட்ட ஊறுகாய்",
        masalaBusiness: "மசாலா வியாபாரம்",
        snacksMaking: "சிற்றுண்டி தயாரிப்பு"
    },
    hindi: {
        tagline: "घर से व्यवसाय तक – कदम दर कदम",
        chooseLanguage: "अपनी भाषा चुनें",
        whatsYourName: "आपका नाम क्या है?",
        enterName: "अपना नाम दर्ज करें",
        startJourney: "मेरी यात्रा शुरू करें 🚀",
        welcome: "स्वागत है",
        changeLanguage: "भाषा बदलें",
        askAI: "AI से पूछें",
        businessGuide: "व्यवसाय गाइड",
        profitCalculator: "लाभ कैलकुलेटर",
        marketingHelp: "मार्केटिंग सहायता",
        motivation: "प्रेरणा",
        exploreSkills: "कौशल खोजें",
        selectLanguageAlert: "कृपया एक भाषा चुनें",
        enterNameAlert: "कृपया अपना नाम दर्ज करें",
        // Business Skills translations
        exploreBusiness: "व्यवसाय कौशल खोजें",
        cookingCatering: "कुकिंग और कैटरिंग",
        cookingDesc: "घर का बना खाना और कैटरिंग सेवाएं",
        tiffinService: "टिफिन सेवा",
        catering: "कैटरिंग",
        homemadePickles: "घर का अचार",
        masalaBusiness: "मसाला व्यवसाय",
        snacksMaking: "नाश्ता बनाना"
    },
    telugu: {
        tagline: "ఇంటి నుండి వ్యాపారం వరకు – అడుగు అడుగు",
        chooseLanguage: "మీ భాషను ఎంచుకోండి",
        whatsYourName: "మీ పేరు ఏమిటి?",
        enterName: "మీ పేరు నమోదు చేయండి",
        startJourney: "నా ప్రయాణం ప్రారంభించండి 🚀",
        welcome: "స్వాగతం",
        changeLanguage: "భాష మార్చండి",
        askAI: "AI ని అడగండి",
        businessGuide: "వ్యాపార మార్గదర్శి",
        profitCalculator: "లాభం కాలిక్యులేటర్",
        marketingHelp: "మార్కెటింగ్ సహాయం",
        motivation: "ప్రేరణ",
        exploreSkills: "నైపుణ్యాలను అన్వేషించండి",
        selectLanguageAlert: "దయచేసి ఒక భాషను ఎంచుకోండి",
        enterNameAlert: "దయచేసి మీ పేరు నమోదు చేయండి"
    },
    kannada: {
        tagline: "ಮನೆಯಿಂದ ವ್ಯಾಪಾರಕ್ಕೆ – ಹಂತ ಹಂತವಾಗಿ",
        chooseLanguage: "ನಿಮ್ಮ ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ",
        whatsYourName: "ನಿಮ್ಮ ಹೆಸರೇನು?",
        enterName: "ನಿಮ್ಮ ಹೆಸರನ್ನು ನಮೂದಿಸಿ",
        startJourney: "ನನ್ನ ಪ್ರಯಾಣ ಪ್ರಾರಂಭಿಸಿ 🚀",
        welcome: "ಸ್ವಾಗತ",
        changeLanguage: "ಭಾಷೆ ಬದಲಾಯಿಸಿ",
        askAI: "AI ಗೆ ಕೇಳಿ",
        businessGuide: "ವ್ಯಾಪಾರ ಮಾರ್ಗದರ್ಶಿ",
        profitCalculator: "ಲಾಭ ಕ್ಯಾಲ್ಕುಲೇಟರ್",
        marketingHelp: "ಮಾರ್ಕೆಟಿಂಗ್ ಸಹಾಯ",
        motivation: "ಪ್ರೇರಣೆ",
        exploreSkills: "ಕೌಶಲ್ಯಗಳನ್ನು ಅನ್ವೇಷಿಸಿ",
        selectLanguageAlert: "ದಯವಿಟ್ಟು ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ",
        enterNameAlert: "ದಯವಿಟ್ಟು ನಿಮ್ಮ ಹೆಸರನ್ನು ನಮೂದಿಸಿ"
    },
    malayalam: {
        tagline: "വീട്ടിൽ നിന്ന് ബിസിനസ്സിലേക്ക് – ഘട്ടം ഘട്ടമായി",
        chooseLanguage: "നിങ്ങളുടെ ഭാഷ തിരഞ്ഞെടുക്കുക",
        whatsYourName: "നിങ്ങളുടെ പേര് എന്താണ്?",
        enterName: "നിങ്ങളുടെ പേര് നൽകുക",
        startJourney: "എന്റെ യാത്ര ആരംഭിക്കുക 🚀",
        welcome: "സ്വാഗതം",
        changeLanguage: "ഭാഷ മാറ്റുക",
        askAI: "AI യോട് ചോദിക്കുക",
        businessGuide: "ബിസിനസ് ഗൈഡ്",
        profitCalculator: "ലാഭം കാൽക്കുലേറ്റർ",
        marketingHelp: "മാർക്കറ്റിംഗ് സഹായം",
        motivation: "പ്രചോദനം",
        exploreSkills: "കഴിവുകൾ പര്യവേക്ഷണം ചെയ്യുക",
        selectLanguageAlert: "ദയവായി ഒരു ഭാഷ തിരഞ്ഞെടുക്കുക",
        enterNameAlert: "ദയവായി നിങ്ങളുടെ പേര് നൽകുക"
    }
};

let currentLanguage = localStorage.getItem('empowerher_language') || 'english','tamil','telugu','kannada,'hindi','malayalam';

function translatePage() {
    const lang = translations[currentLanguage];
    
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (lang[key]) {
            element.textContent = lang[key];
        }
    });
    
    document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
        const key = element.getAttribute('data-translate-placeholder');
        if (lang[key]) {
            element.placeholder = lang[key];
        }
    });
}


// Expanded Business Skills Database
const businessSkills = {
    cooking: {
        icon: "🍳",
        title: "Cooking & Catering",
        description: "Home-cooked meals and catering services",
        subcategories: [
            { icon: "🍱", name: "Tiffin Service", investment: "₹5,000-15,000", income: "₹15,000-40,000" },
            { icon: "🍛", name: "Catering", investment: "₹20,000-50,000", income: "₹30,000-80,000" },
            { icon: "🥘", name: "Homemade Pickles", investment: "₹3,000-10,000", income: "₹10,000-25,000" },
            { icon: "🌶️", name: "Masala Business", investment: "₹5,000-15,000", income: "₹12,000-30,000" },
            { icon: "🍪", name: "Snacks Making", investment: "₹4,000-12,000", income: "₹10,000-28,000" }
        ]
    },
    baking: {
        icon: "🎂",
        title: "Baking & Desserts",
        description: "Custom cakes and baked goods",
        subcategories: [
            { icon: "🧁", name: "Cupcakes", investment: "₹8,000-20,000", income: "₹15,000-40,000" },
            { icon: "🍰", name: "Custom Cakes", investment: "₹10,000-25,000", income: "₹20,000-60,000" },
            { icon: "🍪", name: "Cookies", investment: "₹5,000-15,000", income: "₹12,000-35,000" },
            { icon: "🥐", name: "Pastries", investment: "₹12,000-30,000", income: "₹18,000-50,000" },
            { icon: "🍩", name: "Donuts", investment: "₹8,000-20,000", income: "₹15,000-40,000" }
        ]
    },
    tailoring: {
        icon: "✂️",
        title: "Tailoring & Boutique",
        description: "Stitching and alteration services",
        subcategories: [
            { icon: "👗", name: "Dress Stitching", investment: "₹10,000-25,000", income: "₹15,000-45,000" },
            { icon: "👚", name: "Blouse Making", investment: "₹8,000-20,000", income: "₹12,000-35,000" },
            { icon: "✨", name: "Alterations", investment: "₹5,000-15,000", income: "₹10,000-30,000" },
            { icon: "🎀", name: "Kids Wear", investment: "₹8,000-20,000", income: "₹12,000-35,000" },
            { icon: "👔", name: "Custom Boutique", investment: "₹25,000-60,000", income: "₹30,000-80,000" }
        ]
    },
    embroidery: {
        icon: "🧵",
        title: "Embroidery & Aari Work",
        description: "Hand embroidery and decorative work",
        subcategories: [
            { icon: "✨", name: "Aari Work", investment: "₹8,000-20,000", income: "₹15,000-45,000" },
            { icon: "🌸", name: "Hand Embroidery", investment: "₹5,000-15,000", income: "₹12,000-35,000" },
            { icon: "👗", name: "Saree Designing", investment: "₹10,000-25,000", income: "₹18,000-50,000" },
            { icon: "🎨", name: "Zardosi Work", investment: "₹12,000-30,000", income: "₹20,000-55,000" },
            { icon: "💎", name: "Stone Work", investment: "₹8,000-20,000", income: "₹15,000-40,000" }
        ]
    },
    beauty: {
        icon: "💄",
        title: "Beauty & Makeup",
        description: "Beauty services and makeup artistry",
        subcategories: [
            { icon: "💅", name: "Mehendi Artist", investment: "₹3,000-10,000", income: "₹15,000-50,000" },
            { icon: "💄", name: "Makeup Artist", investment: "₹15,000-40,000", income: "₹25,000-80,000" },
            { icon: "💆", name: "Facial Services", investment: "₹10,000-25,000", income: "₹18,000-50,000" },
            { icon: "💇", name: "Hair Styling", investment: "₹12,000-30,000", income: "₹20,000-60,000" },
            { icon: "👰", name: "Bridal Makeup", investment: "₹25,000-60,000", income: "₹40,000-1,20,000" }
        ]
    },
    handicrafts: {
        icon: "🎨",
        title: "Handicrafts & DIY",
        description: "Handmade crafts and decorative items",
        subcategories: [
            { icon: "🕯️", name: "Candle Making", investment: "₹5,000-15,000", income: "₹10,000-30,000" },
            { icon: "🧼", name: "Soap Making", investment: "₹6,000-18,000", income: "₹12,000-35,000" },
            { icon: "🎁", name: "Gift Items", investment: "₹8,000-20,000", income: "₹15,000-40,000" },
            { icon: "🏺", name: "Pottery", investment: "₹15,000-35,000", income: "₹18,000-50,000" },
            { icon: "🖼️", name: "Wall Decor", investment: "₹7,000-18,000", income: "₹12,000-35,000" }
        ]
    },
    jewelry: {
        icon: "💍",
        title: "Jewelry Making",
        description: "Handmade jewelry and accessories",
        subcategories: [
            { icon: "📿", name: "Beaded Jewelry", investment: "₹5,000-15,000", income: "₹12,000-35,000" },
            { icon: "💎", name: "Artificial Jewelry", investment: "₹8,000-25,000", income: "₹15,000-45,000" },
            { icon: "🌸", name: "Flower Jewelry", investment: "₹3,000-10,000", income: "₹10,000-30,000" },
            { icon: "✨", name: "Terracotta Jewelry", investment: "₹6,000-18,000", income: "₹12,000-35,000" },
            { icon: "🎀", name: "Hair Accessories", investment: "₹4,000-12,000", income: "₹10,000-28,000" }
        ]
    },
    teaching: {
        icon: "📚",
        title: "Teaching & Tuition",
        description: "Home tuition and online classes",
        subcategories: [
            { icon: "✏️", name: "School Tuition", investment: "₹3,000-10,000", income: "₹15,000-45,000" },
            { icon: "💻", name: "Online Teaching", investment: "₹5,000-15,000", income: "₹20,000-60,000" },
            { icon: "🎵", name: "Music Classes", investment: "₹10,000-30,000", income: "₹18,000-50,000" },
            { icon: "💃", name: "Dance Classes", investment: "₹8,000-20,000", income: "₹15,000-45,000" },
            { icon: "🎨", name: "Art Classes", investment: "₹6,000-18,000", income: "₹12,000-35,000" }
        ]
    },
    fitness: {
        icon: "🧘",
        title: "Yoga & Fitness",
        description: "Fitness training and wellness",
        subcategories: [
            { icon: "🧘‍♀️", name: "Yoga Classes", investment: "₹5,000-15,000", income: "₹15,000-45,000" },
            { icon: "💪", name: "Fitness Training", investment: "₹10,000-30,000", income: "₹20,000-60,000" },
            { icon: "🤸", name: "Zumba Classes", investment: "₹8,000-20,000", income: "₹15,000-45,000" },
            { icon: "🧘", name: "Meditation", investment: "₹3,000-10,000", income: "₹10,000-30,000" },
            { icon: "🏃", name: "Aerobics", investment: "₹8,000-20,000", income: "₹15,000-40,000" }
        ]
    },
    digital: {
        icon: "💻",
        title: "Digital Services",
        description: "Online work and digital services",
        subcategories: [
            { icon: "✍️", name: "Content Writing", investment: "₹2,000-8,000", income: "₹15,000-50,000" },
            { icon: "⌨️", name: "Data Entry", investment: "₹3,000-10,000", income: "₹10,000-30,000" },
            { icon: "📱", name: "Social Media Management", investment: "₹5,000-15,000", income: "₹18,000-55,000" },
            { icon: "🎨", name: "Graphic Design", investment: "₹8,000-25,000", income: "₹20,000-70,000" },
            { icon: "📸", name: "Photo Editing", investment: "₹6,000-18,000", income: "₹15,000-45,000" }
        ]
    },
    decoration: {
        icon: "🌺",
        title: "Decoration Services",
        description: "Event and home decoration",
        subcategories: [
            { icon: "🌸", name: "Flower Decoration", investment: "₹8,000-25,000", income: "₹15,000-50,000" },
            { icon: "🎈", name: "Balloon Decoration", investment: "₹6,000-18,000", income: "₹12,000-40,000" },
            { icon: "🎉", name: "Event Decoration", investment: "₹15,000-40,000", income: "₹25,000-80,000" },
            { icon: "🏠", name: "Home Decoration", investment: "₹10,000-30,000", income: "₹18,000-55,000" },
            { icon: "💐", name: "Rangoli Art", investment: "₹3,000-10,000", income: "₹8,000-25,000" }
        ]
    }
};


// Landing Page Logic
if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
    let selectedLanguage = '';
    
    const langButtons = document.querySelectorAll('.lang-btn');
    const startBtn = document.getElementById('startBtn');
    const userNameInput = document.getElementById('userName');
    
    // Translate page on load
    translatePage();
    
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            langButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            selectedLanguage = btn.dataset.lang;
            currentLanguage = selectedLanguage;
            translatePage();
        });
    });
    
    startBtn.addEventListener('click', () => {
        const userName = userNameInput.value.trim();
        const lang = translations[currentLanguage];
        
        if (!selectedLanguage) {
            alert(lang.selectLanguageAlert);
            return;
        }
        
        if (!userName) {
            alert(lang.enterNameAlert);
            return;
        }
        
        localStorage.setItem('empowerher_language', selectedLanguage);
        localStorage.setItem('empowerher_username', userName);
        window.location.href = 'dashboard.html';
    });
}

// Dashboard Page Logic
if (window.location.pathname.includes('dashboard.html')) {
    const userName = localStorage.getItem('empowerher_username') || 'Friend';
    currentLanguage = localStorage.getItem('empowerher_language') || 'english';
    const welcomeMsg = document.getElementById('welcomeMsg');
    const lang = translations[currentLanguage];
    
    welcomeMsg.textContent = `${lang.welcome}, ${userName}! 🌸`;
    
    // Set language selector
    const languageSelector = document.getElementById('languageSelector');
    languageSelector.value = currentLanguage;
    
    // Translate page on load
    translatePage();
    
    // Language change handler
    languageSelector.addEventListener('change', (e) => {
        currentLanguage = e.target.value;
        localStorage.setItem('empowerher_language', currentLanguage);
        translatePage();
        welcomeMsg.textContent = `${translations[currentLanguage].welcome}, ${userName}! 🌸`;
        
        // Reload current feature if any is active
        const activeFeature = document.querySelector('.feature-card.active');
        if (activeFeature) {
            loadFeature(activeFeature.dataset.feature);
        }
    });
    
    const logoutBtn = document.getElementById('logoutBtn');
    logoutBtn.addEventListener('click', () => {
        window.location.href = 'index.html';
    });
    
    const featureCards = document.querySelectorAll('.feature-card');
    const contentArea = document.getElementById('contentArea');
    
    featureCards.forEach(card => {
        card.addEventListener('click', () => {
            featureCards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');
            const feature = card.dataset.feature;
            loadFeature(feature);
        });
    });
    
    function loadFeature(feature) {
        contentArea.classList.add('active');
        
        switch(feature) {
            case 'ai':
                loadAIChat();
                break;
            case 'guide':
                loadBusinessGuide();
                break;
            case 'calculator':
                loadCalculator();
                break;
            case 'marketing':
                loadMarketing();
                break;
            case 'motivation':
                loadMotivation();
                break;
            case 'skills':
                loadSkillsExplorer();
                break;
        }
        
        contentArea.scrollIntoView({ behavior: 'smooth' });
    }

    
    // Skills Explorer Feature with Multilingual Support
    function loadSkillsExplorer() {
        // Get translations for current language
        const skillsTranslations = getSkillsTranslations(currentLanguage);
        
        let skillsHTML = `<h2 style="color: #d946ef; margin-bottom: 20px;" id="exploreSkillsTitle">🎯 ${skillsTranslations.title}</h2>`;
        skillsHTML += '<div class="skills-explorer">';
        
        Object.keys(businessSkills).forEach(key => {
            const skill = businessSkills[key];
            const translatedSkill = skillsTranslations.categories[key] || skill;
            
            skillsHTML += `
                <div class="skill-category" data-category="${key}">
                    <div class="category-header">
                        <span class="category-icon">${skill.icon}</span>
                        <div class="category-info">
                            <div class="category-title" data-skill-key="${key}-title">${translatedSkill.title}</div>
                            <div class="category-desc" data-skill-key="${key}-desc">${translatedSkill.description}</div>
                        </div>
                        <span class="category-expand">▼</span>
                    </div>
                    <div class="subcategories">
                        ${skill.subcategories.map((sub, index) => {
                            const translatedSub = translatedSkill.subcategories ? translatedSkill.subcategories[index] : sub;
                            return `
                            <div class="subcategory-item" data-skill='${JSON.stringify(sub)}' data-category="${translatedSkill.title}">
                                <div class="icon">${sub.icon}</div>
                                <div class="name" data-skill-key="${key}-sub-${index}">${translatedSub.name || sub.name}</div>
                            </div>
                        `;
                        }).join('')}
                    </div>
                </div>
            `;
        });
        
        skillsHTML += '</div>';
        skillsHTML += '<div class="skill-detail-modal" id="skillModal"></div>';
        
        contentArea.innerHTML = skillsHTML;
        
        // Add category expand/collapse functionality
        document.querySelectorAll('.skill-category').forEach(category => {
            category.addEventListener('click', (e) => {
                if (!e.target.closest('.subcategory-item')) {
                    category.classList.toggle('expanded');
                }
            });
        });
        
        // Add subcategory click handlers
        document.querySelectorAll('.subcategory-item').forEach(item => {
            item.addEventListener('click', (e) => {
                e.stopPropagation();
                const skillData = JSON.parse(item.dataset.skill);
                const category = item.dataset.category;
                showSkillDetail(skillData, category);
            });
        });
    }
    
    // Get Skills Translations based on language
    function getSkillsTranslations(language) {
        const skillsLang = {
            english: {
                title: "Explore Business Skills",
                categories: {
                    cooking: {
                        title: "Cooking & Catering",
                        description: "Home-cooked meals and catering services",
                        subcategories: [
                            { name: "Tiffin Service" },
                            { name: "Catering" },
                            { name: "Homemade Pickles" },
                            { name: "Masala Business" },
                            { name: "Snacks Making" }
                        ]
                    },
                    baking: {
                        title: "Baking & Desserts",
                        description: "Custom cakes and baked goods",
                        subcategories: [
                            { name: "Cupcakes" },
                            { name: "Custom Cakes" },
                            { name: "Cookies" },
                            { name: "Pastries" },
                            { name: "Donuts" }
                        ]
                    },
                    tailoring: {
                        title: "Tailoring & Boutique",
                        description: "Stitching and alteration services",
                        subcategories: [
                            { name: "Dress Stitching" },
                            { name: "Blouse Making" },
                            { name: "Alterations" },
                            { name: "Kids Wear" },
                            { name: "Custom Boutique" }
                        ]
                    },
                    embroidery: {
                        title: "Embroidery & Aari Work",
                        description: "Hand embroidery and decorative work",
                        subcategories: [
                            { name: "Aari Work" },
                            { name: "Hand Embroidery" },
                            { name: "Saree Designing" },
                            { name: "Zardosi Work" },
                            { name: "Stone Work" }
                        ]
                    },
                    beauty: {
                        title: "Beauty & Makeup",
                        description: "Beauty services and makeup artistry",
                        subcategories: [
                            { name: "Mehendi Artist" },
                            { name: "Makeup Artist" },
                            { name: "Facial Services" },
                            { name: "Hair Styling" },
                            { name: "Bridal Makeup" }
                        ]
                    },
                    handicrafts: {
                        title: "Handicrafts & DIY",
                        description: "Handmade crafts and decorative items",
                        subcategories: [
                            { name: "Candle Making" },
                            { name: "Soap Making" },
                            { name: "Gift Items" },
                            { name: "Pottery" },
                            { name: "Wall Decor" }
                        ]
                    },
                    jewelry: {
                        title: "Jewelry Making",
                        description: "Handmade jewelry and accessories",
                        subcategories: [
                            { name: "Beaded Jewelry" },
                            { name: "Artificial Jewelry" },
                            { name: "Flower Jewelry" },
                            { name: "Terracotta Jewelry" },
                            { name: "Hair Accessories" }
                        ]
                    },
                    teaching: {
                        title: "Teaching & Tuition",
                        description: "Home tuition and online classes",
                        subcategories: [
                            { name: "School Tuition" },
                            { name: "Online Teaching" },
                            { name: "Music Classes" },
                            { name: "Dance Classes" },
                            { name: "Art Classes" }
                        ]
                    },
                    fitness: {
                        title: "Yoga & Fitness",
                        description: "Fitness training and wellness",
                        subcategories: [
                            { name: "Yoga Classes" },
                            { name: "Fitness Training" },
                            { name: "Zumba Classes" },
                            { name: "Meditation" },
                            { name: "Aerobics" }
                        ]
                    },
                    digital: {
                        title: "Digital Services",
                        description: "Online work and digital services",
                        subcategories: [
                            { name: "Content Writing" },
                            { name: "Data Entry" },
                            { name: "Social Media Management" },
                            { name: "Graphic Design" },
                            { name: "Photo Editing" }
                        ]
                    },
                    decoration: {
                        title: "Decoration Services",
                        description: "Event and home decoration",
                        subcategories: [
                            { name: "Flower Decoration" },
                            { name: "Balloon Decoration" },
                            { name: "Event Decoration" },
                            { name: "Home Decoration" },
                            { name: "Rangoli Art" }
                        ]
                    }
                }
            },
            tamil: {
                title: "வியாபார திறன்களை ஆராயுங்கள்",
                categories: {
                    cooking: {
                        title: "சமையல் மற்றும் கேட்டரிங்",
                        description: "வீட்டில் சமைத்த உணவு மற்றும் கேட்டரிங் சேவைகள்",
                        subcategories: [
                            { name: "டிஃபின் சேவை" },
                            { name: "கேட்டரிங்" },
                            { name: "வீட்டில் தயாரிக்கப்பட்ட ஊறுகாய்" },
                            { name: "மசாலா வியாபாரம்" },
                            { name: "சிற்றுண்டி தயாரிப்பு" }
                        ]
                    },
                    baking: {
                        title: "பேக்கிங் மற்றும் இனிப்புகள்",
                        description: "தனிப்பயன் கேக்குகள் மற்றும் சுடப்பட்ட பொருட்கள்",
                        subcategories: [
                            { name: "கப்கேக்குகள்" },
                            { name: "தனிப்பயன் கேக்குகள்" },
                            { name: "குக்கீகள்" },
                            { name: "பேஸ்ட்ரிகள்" },
                            { name: "டோனட்ஸ்" }
                        ]
                    },
                    tailoring: {
                        title: "தையல் மற்றும் பூட்டிக்",
                        description: "தையல் மற்றும் மாற்றம் சேவைகள்",
                        subcategories: [
                            { name: "ஆடை தையல்" },
                            { name: "ரவிக்கை தயாரிப்பு" },
                            { name: "மாற்றங்கள்" },
                            { name: "குழந்தைகள் உடைகள்" },
                            { name: "தனிப்பயன் பூட்டிக்" }
                        ]
                    },
                    embroidery: {
                        title: "எம்ப்ராய்டரி மற்றும் ஆரி வேலை",
                        description: "கை எம்ப்ராய்டரி மற்றும் அலங்கார வேலை",
                        subcategories: [
                            { name: "ஆரி வேலை" },
                            { name: "கை எம்ப்ராய்டரி" },
                            { name: "புடவை வடிவமைப்பு" },
                            { name: "ஜர்தோசி வேலை" },
                            { name: "கல் வேலை" }
                        ]
                    },
                    beauty: {
                        title: "அழகு மற்றும் மேக்கப்",
                        description: "மேக்கப் மற்றும் அழகு சேவைகள்",
                        subcategories: [
                            { name: "மெஹந்தி கலைஞர்" },
                            { name: "மேக்கப் கலைஞர்" },
                            { name: "முக சிகிச்சை சேவைகள்" },
                            { name: "முடி அலங்காரம்" },
                            { name: "மணமகள் மேக்கப்" }
                        ]
                    },
                    handicrafts: {
                        title: "கைவினைப் பொருட்கள் மற்றும் DIY",
                        description: "கையால் செய்யப்பட்ட கைவினைப் பொருட்கள் மற்றும் அலங்கார பொருட்கள்",
                        subcategories: [
                            { name: "மெழுகுவர்த்தி தயாரிப்பு" },
                            { name: "சோப்பு தயாரிப்பு" },
                            { name: "பரிசு பொருட்கள்" },
                            { name: "மண்பாண்டங்கள்" },
                            { name: "சுவர் அலங்காரம்" }
                        ]
                    },
                    jewelry: {
                        title: "நகை தயாரிப்பு",
                        description: "கையால் செய்யப்பட்ட நகைகள் மற்றும் அணிகலன்கள்",
                        subcategories: [
                            { name: "மணி நகைகள்" },
                            { name: "செயற்கை நகைகள்" },
                            { name: "பூ நகைகள்" },
                            { name: "மண் நகைகள்" },
                            { name: "முடி அணிகலன்கள்" }
                        ]
                    },
                    teaching: {
                        title: "கற்பித்தல் மற்றும் டியூஷன்",
                        description: "வீட்டு டியூஷன் மற்றும் ஆன்லைன் வகுப்புகள்",
                        subcategories: [
                            { name: "பள்ளி டியூஷன்" },
                            { name: "ஆன்லைன் கற்பித்தல்" },
                            { name: "இசை வகுப்புகள்" },
                            { name: "நடன வகுப்புகள்" },
                            { name: "கலை வகுப்புகள்" }
                        ]
                    },
                    fitness: {
                        title: "யோகா மற்றும் உடற்பயிற்சி",
                        description: "உடற்பயிற்சி பயிற்சி மற்றும் ஆரோக்கியம்",
                        subcategories: [
                            { name: "யோகா வகுப்புகள்" },
                            { name: "உடற்பயிற்சி பயிற்சி" },
                            { name: "ஜும்பா வகுப்புகள்" },
                            { name: "தியானம்" },
                            { name: "ஏரோபிக்ஸ்" }
                        ]
                    },
                    digital: {
                        title: "டிஜிட்டல் சேவைகள்",
                        description: "ஆன்லைன் வேலை மற்றும் டிஜிட்டல் சேவைகள்",
                        subcategories: [
                            { name: "உள்ளடக்க எழுத்து" },
                            { name: "தரவு உள்ளீடு" },
                            { name: "சமூக ஊடக மேலாண்மை" },
                            { name: "கிராஃபிக் வடிவமைப்பு" },
                            { name: "புகைப்பட எடிட்டிங்" }
                        ]
                    },
                    decoration: {
                        title: "அலங்கார சேவைகள்",
                        description: "நிகழ்வு மற்றும் வீட்டு அலங்காரம்",
                        subcategories: [
                            { name: "பூ அலங்காரம்" },
                            { name: "பலூன் அலங்காரம்" },
                            { name: "நிகழ்வு அலங்காரம்" },
                            { name: "வீட்டு அலங்காரம்" },
                            { name: "ரங்கோலி கலை" }
                        ]
                    }
                }
            },
            hindi: {
                title: "व्यवसाय कौशल खोजें",
                categories: {
                    cooking: {
                        title: "खाना पकाना और कैटरिंग",
                        description: "घर का बना खाना और कैटरिंग सेवाएं",
                        subcategories: [
                            { name: "टिफिन सेवा" },
                            { name: "कैटरिंग" },
                            { name: "घर का बना अचार" },
                            { name: "मसाला व्यवसाय" },
                            { name: "नाश्ता बनाना" }
                        ]
                    },
                    baking: {
                        title: "बेकिंग और मिठाई",
                        description: "कस्टम केक और बेक किए गए सामान",
                        subcategories: [
                            { name: "कपकेक" },
                            { name: "कस्टम केक" },
                            { name: "कुकीज़" },
                            { name: "पेस्ट्री" },
                            { name: "डोनट्स" }
                        ]
                    },
                    tailoring: {
                        title: "सिलाई और बुटीक",
                        description: "सिलाई और परिवर्तन सेवाएं",
                        subcategories: [
                            { name: "कपड़े की सिलाई" },
                            { name: "ब्लाउज बनाना" },
                            { name: "परिवर्तन" },
                            { name: "बच्चों के कपड़े" },
                            { name: "कस्टम बुटीक" }
                        ]
                    },
                    embroidery: {
                        title: "कढ़ाई और आरी काम",
                        description: "हाथ की कढ़ाई और सजावटी काम",
                        subcategories: [
                            { name: "आरी काम" },
                            { name: "हाथ की कढ़ाई" },
                            { name: "साड़ी डिजाइनिंग" },
                            { name: "जरदोसी काम" },
                            { name: "पत्थर का काम" }
                        ]
                    },
                    beauty: {
                        title: "सौंदर्य और मेकअप",
                        description: "मेकअप और सौंदर्य सेवाएं",
                        subcategories: [
                            { name: "मेहंदी कलाकार" },
                            { name: "मेकअप कलाकार" },
                            { name: "फेशियल सेवाएं" },
                            { name: "हेयर स्टाइलिंग" },
                            { name: "दुल्हन मेकअप" }
                        ]
                    },
                    handicrafts: {
                        title: "हस्तशिल्प और DIY",
                        description: "हस्तनिर्मित शिल्प और सजावटी वस्तुएं",
                        subcategories: [
                            { name: "मोमबत्ती बनाना" },
                            { name: "साबुन बनाना" },
                            { name: "उपहार वस्तुएं" },
                            { name: "मिट्टी के बर्तन" },
                            { name: "दीवार सजावट" }
                        ]
                    },
                    jewelry: {
                        title: "आभूषण बनाना",
                        description: "हस्तनिर्मित आभूषण और सहायक उपकरण",
                        subcategories: [
                            { name: "मोती के आभूषण" },
                            { name: "कृत्रिम आभूषण" },
                            { name: "फूलों के आभूषण" },
                            { name: "टेराकोटा आभूषण" },
                            { name: "बालों के सहायक उपकरण" }
                        ]
                    },
                    teaching: {
                        title: "शिक्षण और ट्यूशन",
                        description: "घर पर ट्यूशन और ऑनलाइन कक्षाएं",
                        subcategories: [
                            { name: "स्कूल ट्यूशन" },
                            { name: "ऑनलाइन शिक्षण" },
                            { name: "संगीत कक्षाएं" },
                            { name: "नृत्य कक्षाएं" },
                            { name: "कला कक्षाएं" }
                        ]
                    },
                    fitness: {
                        title: "योग और फिटनेस",
                        description: "फिटनेस प्रशिक्षण और कल्याण",
                        subcategories: [
                            { name: "योग कक्षाएं" },
                            { name: "फिटनेस प्रशिक्षण" },
                            { name: "जुम्बा कक्षाएं" },
                            { name: "ध्यान" },
                            { name: "एरोबिक्स" }
                        ]
                    },
                    digital: {
                        title: "डिजिटल सेवाएं",
                        description: "ऑनलाइन काम और डिजिटल सेवाएं",
                        subcategories: [
                            { name: "सामग्री लेखन" },
                            { name: "डेटा एंट्री" },
                            { name: "सोशल मीडिया प्रबंधन" },
                            { name: "ग्राफिक डिजाइन" },
                            { name: "फोटो एडिटिंग" }
                        ]
                    },
                    decoration: {
                        title: "सजावट सेवाएं",
                        description: "कार्यक्रम और घर की सजावट",
                        subcategories: [
                            { name: "फूलों की सजावट" },
                            { name: "गुब्बारे की सजावट" },
                            { name: "कार्यक्रम सजावट" },
                            { name: "घर की सजावट" },
                            { name: "रंगोली कला" }
                        ]
                    }
                }
            },
            telugu: {
                title: "వ్యాపార నైపుణ్యాలను అన్వేషించండి",
                categories: businessSkills // Fallback to English structure for Telugu
            },
            kannada: {
                title: "ವ್ಯಾಪಾರ ಕೌಶಲ್ಯಗಳನ್ನು ಅನ್ವೇಷಿಸಿ",
                categories: businessSkills // Fallback to English structure for Kannada
            },
            malayalam: {
                title: "ബിസിനസ് കഴിവുകൾ പര്യവേക്ഷണം ചെയ്യുക",
                categories: businessSkills // Fallback to English structure for Malayalam
            }
        };
        
        return skillsLang[language] || skillsLang.english;
    }
    
    function loadSkillsExplorer() {
        let skillsHTML = '<h2 style="color: #d946ef; margin-bottom: 20px;">🎯 Explore Business Skills</h2>';
        skillsHTML += '<div class="skills-explorer">';
        
        Object.keys(businessSkills).forEach(key => {
            const skill = businessSkills[key];
            skillsHTML += `
                <div class="skill-category" data-category="${key}">
                    <div class="category-header">
                        <span class="category-icon">${skill.icon}</span>
                        <div class="category-info">
                            <div class="category-title">${skill.title}</div>
                            <div class="category-desc">${skill.description}</div>
                        </div>
                        <span class="category-expand">▼</span>
                    </div>
                    <div class="subcategories">
                        ${skill.subcategories.map(sub => `
                            <div class="subcategory-item" data-skill='${JSON.stringify(sub)}' data-category="${skill.title}">
                                <div class="icon">${sub.icon}</div>
                                <div class="name">${sub.name}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        });
        
        skillsHTML += '</div>';
        skillsHTML += '<div class="skill-detail-modal" id="skillModal"></div>';
        
        contentArea.innerHTML = skillsHTML;
        
        // Add category expand/collapse functionality
        document.querySelectorAll('.skill-category').forEach(category => {
            category.addEventListener('click', (e) => {
                if (!e.target.closest('.subcategory-item')) {
                    category.classList.toggle('expanded');
                }
            });
        });
        
        // Add subcategory click handlers
        document.querySelectorAll('.subcategory-item').forEach(item => {
            item.addEventListener('click', (e) => {
                e.stopPropagation();
                const skillData = JSON.parse(item.dataset.skill);
                const category = item.dataset.category;
                showSkillDetail(skillData, category);
            });
        });
    }
    
    function showSkillDetail(skill, category) {
        const modal = document.getElementById('skillModal');
        
        const modalHTML = `
            <div class="modal-content">
                <button class="modal-close" onclick="document.getElementById('skillModal').classList.remove('active')">×</button>
                <div class="modal-header">
                    <span class="modal-icon">${skill.icon}</span>
                    <h2 class="modal-title">${skill.name}</h2>
                </div>
                
                <div class="modal-section">
                    <h4>📊 Business Overview</h4>
                    <p><strong>Category:</strong> ${category}</p>
                    <p><strong>Investment Required:</strong> ${skill.investment}</p>
                    <p><strong>Expected Monthly Income:</strong> ${skill.income}</p>
                </div>
                
                <div class="modal-section">
                    <h4>🎯 What You'll Do</h4>
                    <p>Start your own ${skill.name.toLowerCase()} business from home. This is a great opportunity for homemakers to earn while managing household responsibilities.</p>
                </div>
                
                <div class="modal-section">
                    <h4>✨ Key Benefits</h4>
                    <ul>
                        <li>Work from home at your own pace</li>
                        <li>Low initial investment required</li>
                        <li>Flexible working hours</li>
                        <li>Good income potential</li>
                        <li>Can start small and scale up</li>
                    </ul>
                </div>
                
                <div class="modal-section">
                    <h4>📋 Getting Started</h4>
                    <ul>
                        <li>Learn the required skills (online tutorials available)</li>
                        <li>Arrange basic materials and tools</li>
                        <li>Start with friends and family</li>
                        <li>Build your portfolio</li>
                        <li>Market through social media</li>
                        <li>Grow your customer base</li>
                    </ul>
                </div>
                
                <button class="start-business-btn" onclick="document.getElementById('skillModal').classList.remove('active'); document.querySelector('[data-feature=\\'guide\\']').click();">
                    Create My Business Plan 🚀
                </button>
            </div>
        `;
        
        modal.innerHTML = modalHTML;
        modal.classList.add('active');
    }

    
    // AI Chat Feature with Expanded Categories
    function loadAIChat() {
        contentArea.innerHTML = `
            <h2 style="color: #d946ef; margin-bottom: 20px;">🎤 Ask AI Assistant</h2>
            <div class="chat-container">
                <div class="chat-messages" id="chatMessages">
                    <div class="message ai">
                        Hello ${userName}! I'm here to help you start your home business. 
                        I can guide you about: Cooking, Baking, Tailoring, Embroidery, Beauty Services, 
                        Handicrafts, Jewelry Making, Teaching, Yoga/Fitness, Digital Services, and Decoration. 
                        What would you like to know?
                    </div>
                </div>
                <div class="chat-input-area">
                    <input type="text" class="chat-input" id="chatInput" placeholder="Type your question...">
                    <button class="send-btn" id="sendBtn">Send</button>
                    <button class="mic-btn" id="micBtn">🎤</button>
                </div>
            </div>
        `;
        
        const chatInput = document.getElementById('chatInput');
        const sendBtn = document.getElementById('sendBtn');
        const micBtn = document.getElementById('micBtn');
        const chatMessages = document.getElementById('chatMessages');
        
        sendBtn.addEventListener('click', sendMessage);
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') sendMessage();
        });
        
        micBtn.addEventListener('click', startVoiceInput);
        
        function sendMessage() {
            const message = chatInput.value.trim();
            if (!message) return;
            
            const userMsg = document.createElement('div');
            userMsg.className = 'message user';
            userMsg.textContent = message;
            chatMessages.appendChild(userMsg);
            
            chatInput.value = '';
            
            setTimeout(() => {
                const aiResponse = getAIResponse(message.toLowerCase());
                const aiMsg = document.createElement('div');
                aiMsg.className = 'message ai';
                aiMsg.innerHTML = aiResponse;
                chatMessages.appendChild(aiMsg);
                chatMessages.scrollTop = chatMessages.scrollHeight;
            }, 500);
        }
        
        function getAIResponse(message) {
            // Cooking & Catering
            if (message.includes('cooking') || message.includes('food') || message.includes('tiffin') || message.includes('catering')) {
                return `
                    <strong>🍳 Cooking & Catering Business</strong><br><br>
                    <strong>Options:</strong><br>
                    • Tiffin Service (₹5K-15K investment, ₹15K-40K/month)<br>
                    • Catering (₹20K-50K investment, ₹30K-80K/month)<br>
                    • Pickles (₹3K-10K investment, ₹10K-25K/month)<br>
                    • Masala Business (₹5K-15K investment, ₹12K-30K/month)<br><br>
                    <strong>Quick Start:</strong><br>
                    1. Choose your specialty<br>
                    2. Get containers and packaging<br>
                    3. Start with 5 customers<br>
                    4. Maintain hygiene<br>
                    5. Ask for referrals<br><br>
                    💪 Many women earn ₹30,000+ monthly from home cooking!
                `;
            }
            
            // Baking
            if (message.includes('baking') || message.includes('cake') || message.includes('bakery') || message.includes('cupcake')) {
                return `
                    <strong>🎂 Baking Business</strong><br><br>
                    <strong>Options:</strong><br>
                    • Custom Cakes (₹10K-25K investment, ₹20K-60K/month)<br>
                    • Cupcakes (₹8K-20K investment, ₹15K-40K/month)<br>
                    • Cookies (₹5K-15K investment, ₹12K-35K/month)<br>
                    • Pastries (₹12K-30K investment, ₹18K-50K/month)<br><br>
                    <strong>Success Tips:</strong><br>
                    • Learn from YouTube tutorials<br>
                    • Start with simple items<br>
                    • Take beautiful photos<br>
                    • Use Instagram for marketing<br>
                    • Offer custom designs<br><br>
                    💪 Home bakers earn ₹25,000-60,000 monthly!
                `;
            }
            
            // Tailoring
            if (message.includes('tailoring') || message.includes('stitching') || message.includes('sewing') || message.includes('boutique')) {
                return `
                    <strong>✂️ Tailoring & Boutique</strong><br><br>
                    <strong>Services:</strong><br>
                    • Dress Stitching (₹10K-25K investment, ₹15K-45K/month)<br>
                    • Blouse Making (₹8K-20K investment, ₹12K-35K/month)<br>
                    • Alterations (₹5K-15K investment, ₹10K-30K/month)<br>
                    • Custom Boutique (₹25K-60K investment, ₹30K-80K/month)<br><br>
                    <strong>Growth Path:</strong><br>
                    1. Start with alterations<br>
                    2. Learn blouse stitching<br>
                    3. Expand to dresses<br>
                    4. Build boutique reputation<br><br>
                    💪 Skilled tailors earn ₹30,000-50,000 monthly!
                `;
            }
            
            // Embroidery & Aari Work
            if (message.includes('embroidery') || message.includes('aari') || message.includes('zardosi')) {
                return `
                    <strong>🧵 Embroidery & Aari Work</strong><br><br>
                    <strong>Specializations:</strong><br>
                    • Aari Work (₹8K-20K investment, ₹15K-45K/month)<br>
                    • Hand Embroidery (₹5K-15K investment, ₹12K-35K/month)<br>
                    • Saree Designing (₹10K-25K investment, ₹18K-50K/month)<br>
                    • Zardosi Work (₹12K-30K investment, ₹20K-55K/month)<br><br>
                    <strong>Why It's Great:</strong><br>
                    • High demand for weddings<br>
                    • Premium pricing possible<br>
                    • Work at your own pace<br>
                    • Can teach others too<br><br>
                    💪 Expert embroiderers earn ₹40,000+ monthly!
                `;
            }
            
            // Beauty Services
            if (message.includes('beauty') || message.includes('makeup') || message.includes('mehendi') || message.includes('bridal')) {
                return `
                    <strong>💄 Beauty & Makeup Services</strong><br><br>
                    <strong>Services:</strong><br>
                    • Mehendi (₹3K-10K investment, ₹15K-50K/month)<br>
                    • Makeup (₹15K-40K investment, ₹25K-80K/month)<br>
                    • Bridal Makeup (₹25K-60K investment, ₹40K-1.2L/month)<br>
                    • Facial Services (₹10K-25K investment, ₹18K-50K/month)<br><br>
                    <strong>Success Strategy:</strong><br>
                    • Get certified online<br>
                    • Build Instagram portfolio<br>
                    • Network with photographers<br>
                    • Offer bridal packages<br><br>
                    💪 Bridal makeup artists earn ₹50,000-1,20,000 monthly!
                `;
            }
            
            // Handicrafts
            if (message.includes('handicraft') || message.includes('craft') || message.includes('handmade') || message.includes('candle') || message.includes('soap')) {
                return `
                    <strong>🎨 Handicrafts & DIY Products</strong><br><br>
                    <strong>Popular Items:</strong><br>
                    • Candle Making (₹5K-15K investment, ₹10K-30K/month)<br>
                    • Soap Making (₹6K-18K investment, ₹12K-35K/month)<br>
                    • Gift Items (₹8K-20K investment, ₹15K-40K/month)<br>
                    • Wall Decor (₹7K-18K investment, ₹12K-35K/month)<br><br>
                    <strong>Marketing:</strong><br>
                    • Sell on Instagram/Facebook<br>
                    • Join craft exhibitions<br>
                    • Create video tutorials<br>
                    • Use Etsy or local platforms<br><br>
                    💪 Your creativity is your income!
                `;
            }
            
            // Jewelry Making
            if (message.includes('jewelry') || message.includes('jewellery') || message.includes('beads') || message.includes('accessories')) {
                return `
                    <strong>💍 Jewelry Making</strong><br><br>
                    <strong>Types:</strong><br>
                    • Beaded Jewelry (₹5K-15K investment, ₹12K-35K/month)<br>
                    • Artificial Jewelry (₹8K-25K investment, ₹15K-45K/month)<br>
                    • Flower Jewelry (₹3K-10K investment, ₹10K-30K/month)<br>
                    • Terracotta Jewelry (₹6K-18K investment, ₹12K-35K/month)<br><br>
                    <strong>Advantages:</strong><br>
                    • Low investment<br>
                    • High profit margins<br>
                    • Easy to learn<br>
                    • Good online demand<br><br>
                    💪 Jewelry makers earn ₹15,000-45,000 monthly!
                `;
            }
            
            // Teaching & Tuition
            if (message.includes('tuition') || message.includes('teaching') || message.includes('classes') || message.includes('online teaching')) {
                return `
                    <strong>📚 Teaching & Tuition</strong><br><br>
                    <strong>Options:</strong><br>
                    • School Tuition (₹3K-10K investment, ₹15K-45K/month)<br>
                    • Online Teaching (₹5K-15K investment, ₹20K-60K/month)<br>
                    • Music Classes (₹10K-30K investment, ₹18K-50K/month)<br>
                    • Dance Classes (₹8K-20K investment, ₹15K-45K/month)<br><br>
                    <strong>Getting Started:</strong><br>
                    • Choose your subject/skill<br>
                    • Start with 5-10 students<br>
                    • Join parent WhatsApp groups<br>
                    • Offer free demo class<br><br>
                    💪 Teachers earn ₹20,000-60,000 monthly!
                `;
            }
            
            // Yoga & Fitness
            if (message.includes('yoga') || message.includes('fitness') || message.includes('zumba') || message.includes('exercise')) {
                return `
                    <strong>🧘 Yoga & Fitness Training</strong><br><br>
                    <strong>Services:</strong><br>
                    • Yoga Classes (₹5K-15K investment, ₹15K-45K/month)<br>
                    • Fitness Training (₹10K-30K investment, ₹20K-60K/month)<br>
                    • Zumba Classes (₹8K-20K investment, ₹15K-45K/month)<br>
                    • Meditation (₹3K-10K investment, ₹10K-30K/month)<br><br>
                    <strong>Requirements:</strong><br>
                    • Get certified (online courses available)<br>
                    • Small space at home<br>
                    • Basic equipment<br>
                    • 5-10 students to start<br><br>
                    💪 Fitness trainers earn ₹20,000-60,000 monthly!
                `;
            }
            
            // Digital Services
            if (message.includes('digital') || message.includes('content writing') || message.includes('data entry') || message.includes('social media') || message.includes('online work')) {
                return `
                    <strong>💻 Digital Services</strong><br><br>
                    <strong>Opportunities:</strong><br>
                    • Content Writing (₹2K-8K investment, ₹15K-50K/month)<br>
                    • Data Entry (₹3K-10K investment, ₹10K-30K/month)<br>
                    • Social Media Management (₹5K-15K investment, ₹18K-55K/month)<br>
                    • Graphic Design (₹8K-25K investment, ₹20K-70K/month)<br><br>
                    <strong>Benefits:</strong><br>
                    • Work from anywhere<br>
                    • Flexible hours<br>
                    • No physical inventory<br>
                    • Global clients possible<br><br>
                    💪 Digital workers earn ₹20,000-70,000 monthly!
                `;
            }
            
            // Decoration Services
            if (message.includes('decoration') || message.includes('flower') || message.includes('balloon') || message.includes('event') || message.includes('rangoli')) {
                return `
                    <strong>🌺 Decoration Services</strong><br><br>
                    <strong>Services:</strong><br>
                    • Flower Decoration (₹8K-25K investment, ₹15K-50K/month)<br>
                    • Balloon Decoration (₹6K-18K investment, ₹12K-40K/month)<br>
                    • Event Decoration (₹15K-40K investment, ₹25K-80K/month)<br>
                    • Rangoli Art (₹3K-10K investment, ₹8K-25K/month)<br><br>
                    <strong>Peak Seasons:</strong><br>
                    • Weddings and festivals<br>
                    • Birthday parties<br>
                    • Corporate events<br>
                    • House warming ceremonies<br><br>
                    💪 Decorators earn ₹25,000-80,000 monthly!
                `;
            }
            
            // General response
            return `
                I can help you with these businesses:<br><br>
                🍳 Cooking & Catering<br>
                🎂 Baking & Desserts<br>
                ✂️ Tailoring & Boutique<br>
                🧵 Embroidery & Aari Work<br>
                💄 Beauty & Makeup<br>
                🎨 Handicrafts & DIY<br>
                💍 Jewelry Making<br>
                📚 Teaching & Tuition<br>
                🧘 Yoga & Fitness<br>
                💻 Digital Services<br>
                🌺 Decoration Services<br><br>
                Just type the business you're interested in! 😊
            `;
        }
        
        function startVoiceInput() {
            if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
                const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
                const recognition = new SpeechRecognition();
                
                recognition.lang = currentLanguage === 'tamil' ? 'ta-IN' : 
                                  currentLanguage === 'hindi' ? 'hi-IN' : 
                                  currentLanguage === 'telugu' ? 'te-IN' :
                                  currentLanguage === 'kannada' ? 'kn-IN' :
                                  currentLanguage === 'malayalam' ? 'ml-IN' : 'en-US';
                
                recognition.onresult = (event) => {
                    const transcript = event.results[0][0].transcript;
                    chatInput.value = transcript;
                };
                
                recognition.start();
                micBtn.textContent = '🔴';
                
                recognition.onend = () => {
                    micBtn.textContent = '🎤';
                };
            } else {
                alert('Voice input is not supported in your browser');
            }
        }
    }

    
    // Business Guide Feature with Expanded Categories
    function loadBusinessGuide() {
        contentArea.innerHTML = `
            <h2 style="color: #d946ef; margin-bottom: 20px;">💡 Business Guide</h2>
            <form class="guide-form" id="guideForm">
                <div class="form-group">
                    <label>What skill do you have?</label>
                    <select id="skillSelect">
                        <option value="">Select your skill</option>
                        <optgroup label="Food & Beverages">
                            <option value="cooking">Cooking & Tiffin Service</option>
                            <option value="catering">Catering</option>
                            <option value="baking">Baking & Cakes</option>
                            <option value="pickles">Pickles & Preserves</option>
                            <option value="snacks">Snacks Making</option>
                        </optgroup>
                        <optgroup label="Fashion & Textiles">
                            <option value="tailoring">Tailoring</option>
                            <option value="boutique">Boutique</option>
                            <option value="embroidery">Embroidery</option>
                            <option value="aari">Aari Work</option>
                        </optgroup>
                        <optgroup label="Beauty & Wellness">
                            <option value="beauty">Beauty Services</option>
                            <option value="mehendi">Mehendi Artist</option>
                            <option value="makeup">Makeup Artist</option>
                            <option value="yoga">Yoga Classes</option>
                            <option value="fitness">Fitness Training</option>
                        </optgroup>
                        <optgroup label="Crafts & Art">
                            <option value="handicrafts">Handicrafts</option>
                            <option value="jewelry">Jewelry Making</option>
                            <option value="candles">Candle Making</option>
                            <option value="soap">Soap Making</option>
                            <option value="pottery">Pottery</option>
                        </optgroup>
                        <optgroup label="Education">
                            <option value="tuition">School Tuition</option>
                            <option value="online_teaching">Online Teaching</option>
                            <option value="music">Music Classes</option>
                            <option value="dance">Dance Classes</option>
                            <option value="art">Art Classes</option>
                        </optgroup>
                        <optgroup label="Digital Services">
                            <option value="content_writing">Content Writing</option>
                            <option value="data_entry">Data Entry</option>
                            <option value="social_media">Social Media Management</option>
                            <option value="graphic_design">Graphic Design</option>
                        </optgroup>
                        <optgroup label="Decoration">
                            <option value="flower_decoration">Flower Decoration</option>
                            <option value="event_decoration">Event Decoration</option>
                            <option value="balloon_decoration">Balloon Decoration</option>
                        </optgroup>
                    </select>
                </div>
                
                <div class="form-group">
                    <label>How much can you invest?</label>
                    <input type="number" id="budgetInput" placeholder="Enter amount in ₹" min="0">
                </div>
                
                <div class="form-group">
                    <label>How many hours can you work daily?</label>
                    <input type="number" id="timeInput" placeholder="Enter hours" min="1" max="12">
                </div>
                
                <div class="form-group">
                    <label>Where will you operate?</label>
                    <select id="locationSelect">
                        <option value="home">From Home</option>
                        <option value="customer">At Customer's Place</option>
                        <option value="online">Online</option>
                        <option value="both">Both Home & Customer Place</option>
                    </select>
                </div>
                
                <button type="submit" class="generate-btn">Generate My Business Plan 🚀</button>
            </form>
            
            <div id="businessPlanResult"></div>
        `;
        
        const guideForm = document.getElementById('guideForm');
        guideForm.addEventListener('submit', (e) => {
            e.preventDefault();
            generateBusinessPlan();
        });
    }

    
    function generateBusinessPlan() {
        const skill = document.getElementById('skillSelect').value;
        const budget = parseInt(document.getElementById('budgetInput').value);
        const time = parseInt(document.getElementById('timeInput').value);
        const location = document.getElementById('locationSelect').value;
        
        if (!skill || !budget || !time) {
            alert('Please fill all fields');
            return;
        }
        
        const businessPlans = {
            cooking: { name: 'Cooking/Tiffin Service', minInvestment: 5000, pricePerUnit: 100, unitsPerDay: time * 2, steps: ['Get utensils and containers', 'Plan menu (3-5 items)', 'Calculate cost per meal', 'Start with 5 customers', 'Take advance orders', 'Maintain hygiene', 'Ask for referrals'] },
            catering: { name: 'Catering Service', minInvestment: 20000, pricePerUnit: 500, unitsPerDay: time * 0.5, steps: ['Get catering equipment', 'Build menu portfolio', 'Network with event planners', 'Start with small events', 'Hire helpers as needed', 'Focus on quality', 'Build reputation'] },
            baking: { name: 'Baking Business', minInvestment: 8000, pricePerUnit: 500, unitsPerDay: time * 1, steps: ['Get oven and tools', 'Practice signature items', 'Source quality ingredients', 'Take advance orders', 'Focus on presentation', 'Take photos', 'Offer custom designs'] },
            pickles: { name: 'Pickles & Preserves', minInvestment: 3000, pricePerUnit: 150, unitsPerDay: time * 3, steps: ['Learn traditional recipes', 'Get jars and packaging', 'Source fresh ingredients', 'Maintain hygiene', 'Get FSSAI license', 'Create brand label', 'Sell through WhatsApp'] },
            snacks: { name: 'Snacks Making', minInvestment: 4000, pricePerUnit: 80, unitsPerDay: time * 4, steps: ['Choose snack varieties', 'Get packaging materials', 'Calculate costs', 'Start with 3-4 items', 'Maintain freshness', 'Offer samples', 'Build regular customers'] },
            tailoring: { name: 'Tailoring Services', minInvestment: 10000, pricePerUnit: 300, unitsPerDay: time * 1.5, steps: ['Set up sewing space', 'Buy sewing machine', 'Stock basic supplies', 'Start with alterations', 'Take accurate measurements', 'Deliver on time', 'Expand to custom stitching'] },
            boutique: { name: 'Boutique Business', minInvestment: 25000, pricePerUnit: 800, unitsPerDay: time * 0.8, steps: ['Create unique designs', 'Source quality fabrics', 'Build sample collection', 'Take custom orders', 'Focus on finishing', 'Build Instagram presence', 'Offer personalization'] },
            embroidery: { name: 'Embroidery Services', minInvestment: 8000, pricePerUnit: 400, unitsPerDay: time * 1, steps: ['Master embroidery techniques', 'Get quality threads', 'Create sample work', 'Start with simple designs', 'Build portfolio', 'Network with boutiques', 'Offer custom work'] },
            aari: { name: 'Aari Work', minInvestment: 8000, pricePerUnit: 500, unitsPerDay: time * 0.8, steps: ['Learn aari techniques', 'Get aari frame and tools', 'Practice on samples', 'Start with blouses', 'Build design portfolio', 'Network with designers', 'Charge premium rates'] },
            beauty: { name: 'Beauty Services', minInvestment: 15000, pricePerUnit: 800, unitsPerDay: time * 0.8, steps: ['Get certified', 'Buy quality products', 'Practice on friends', 'Create portfolio', 'Start with basic services', 'Maintain hygiene', 'Expand to bridal'] },
            mehendi: { name: 'Mehendi Artist', minInvestment: 3000, pricePerUnit: 300, unitsPerDay: time * 2, steps: ['Practice designs', 'Get quality henna', 'Create design book', 'Start with simple events', 'Take photos of work', 'Network with event planners', 'Offer bridal packages'] },
            makeup: { name: 'Makeup Artist', minInvestment: 15000, pricePerUnit: 1000, unitsPerDay: time * 0.6, steps: ['Get certified', 'Buy makeup kit', 'Practice different looks', 'Build portfolio', 'Network with photographers', 'Offer trial sessions', 'Specialize in bridal'] },
            yoga: { name: 'Yoga Classes', minInvestment: 5000, pricePerUnit: 1500, unitsPerDay: time * 2, steps: ['Get yoga certification', 'Set up practice space', 'Buy yoga mats', 'Start with 5-10 students', 'Create schedule', 'Focus on safety', 'Build community'] },
            fitness: { name: 'Fitness Training', minInvestment: 10000, pricePerUnit: 2000, unitsPerDay: time * 1.5, steps: ['Get fitness certification', 'Buy basic equipment', 'Create workout plans', 'Start with small groups', 'Track progress', 'Offer nutrition advice', 'Build testimonials'] },
            handicrafts: { name: 'Handicrafts', minInvestment: 5000, pricePerUnit: 300, unitsPerDay: time * 1.5, steps: ['Choose craft specialty', 'Buy raw materials', 'Create samples', 'Take quality photos', 'Set up online presence', 'Price correctly', 'Join exhibitions'] },
            jewelry: { name: 'Jewelry Making', minInvestment: 5000, pricePerUnit: 250, unitsPerDay: time * 2, steps: ['Learn jewelry making', 'Buy beads and tools', 'Create sample pieces', 'Take beautiful photos', 'Sell on Instagram', 'Offer custom designs', 'Build collection'] },
            candles: { name: 'Candle Making', minInvestment: 5000, pricePerUnit: 150, unitsPerDay: time * 3, steps: ['Learn candle making', 'Buy wax and molds', 'Experiment with scents', 'Create unique designs', 'Package attractively', 'Sell online', 'Offer gift sets'] },
            soap: { name: 'Soap Making', minInvestment: 6000, pricePerUnit: 100, unitsPerDay: time * 4, steps: ['Learn soap making', 'Buy ingredients safely', 'Create natural soaps', 'Get FSSAI license', 'Package professionally', 'Highlight benefits', 'Sell online'] },
            pottery: { name: 'Pottery', minInvestment: 15000, pricePerUnit: 400, unitsPerDay: time * 1, steps: ['Learn pottery', 'Get wheel and kiln', 'Practice basic shapes', 'Create functional items', 'Glaze beautifully', 'Sell at exhibitions', 'Offer workshops'] },
            tuition: { name: 'School Tuition', minInvestment: 3000, pricePerUnit: 1500, unitsPerDay: time * 2, steps: ['Choose subjects', 'Set up teaching space', 'Prepare materials', 'Start with 5-10 students', 'Create schedule', 'Track progress', 'Communicate with parents'] },
            online_teaching: { name: 'Online Teaching', minInvestment: 5000, pricePerUnit: 2000, unitsPerDay: time * 2, steps: ['Choose platform', 'Set up equipment', 'Create course content', 'Market online', 'Start with small batches', 'Record sessions', 'Build reputation'] },
            music: { name: 'Music Classes', minInvestment: 10000, pricePerUnit: 1800, unitsPerDay: time * 1.5, steps: ['Choose instrument', 'Set up practice room', 'Create curriculum', 'Start with beginners', 'Conduct regular practice', 'Organize performances', 'Build student base'] },
            dance: { name: 'Dance Classes', minInvestment: 8000, pricePerUnit: 1500, unitsPerDay: time * 2, steps: ['Choose dance form', 'Set up practice space', 'Create choreography', 'Start with small groups', 'Conduct regular classes', 'Organize shows', 'Build community'] },
            art: { name: 'Art Classes', minInvestment: 6000, pricePerUnit: 1200, unitsPerDay: time * 2, steps: ['Choose art medium', 'Buy art supplies', 'Create curriculum', 'Start with kids', 'Teach techniques', 'Display student work', 'Organize exhibitions'] },
            content_writing: { name: 'Content Writing', minInvestment: 2000, pricePerUnit: 500, unitsPerDay: time * 2, steps: ['Build writing portfolio', 'Join freelance platforms', 'Choose niche', 'Set competitive rates', 'Meet deadlines', 'Build client base', 'Expand services'] },
            data_entry: { name: 'Data Entry', minInvestment: 3000, pricePerUnit: 300, unitsPerDay: time * 3, steps: ['Get computer setup', 'Learn typing', 'Join platforms', 'Start with simple tasks', 'Maintain accuracy', 'Build reputation', 'Get regular clients'] },
            social_media: { name: 'Social Media Management', minInvestment: 5000, pricePerUnit: 800, unitsPerDay: time * 1.5, steps: ['Learn social media', 'Create portfolio', 'Offer packages', 'Start with small businesses', 'Create content', 'Track analytics', 'Build client base'] },
            graphic_design: { name: 'Graphic Design', minInvestment: 8000, pricePerUnit: 1000, unitsPerDay: time * 1.2, steps: ['Learn design software', 'Build portfolio', 'Join platforms', 'Start with logos', 'Expand services', 'Meet deadlines', 'Build reputation'] },
            flower_decoration: { name: 'Flower Decoration', minInvestment: 8000, pricePerUnit: 600, unitsPerDay: time * 1, steps: ['Learn arrangements', 'Source fresh flowers', 'Create portfolio', 'Network with event planners', 'Start with small events', 'Take photos', 'Build reputation'] },
            event_decoration: { name: 'Event Decoration', minInvestment: 15000, pricePerUnit: 1500, unitsPerDay: time * 0.5, steps: ['Learn decoration', 'Buy basic materials', 'Create themes', 'Network with venues', 'Start with birthdays', 'Take photos', 'Expand to weddings'] },
            balloon_decoration: { name: 'Balloon Decoration', minInvestment: 6000, pricePerUnit: 500, unitsPerDay: time * 1.2, steps: ['Learn balloon art', 'Buy pump and balloons', 'Practice designs', 'Create packages', 'Market on social media', 'Take photos', 'Build client base'] }
        };
        
        const plan = businessPlans[skill];
        const monthlyUnits = plan.unitsPerDay * 25;
        const monthlyRevenue = monthlyUnits * plan.pricePerUnit;
        const monthlyExpense = budget * 0.3;
        const monthlyProfit = monthlyRevenue - monthlyExpense;
        
        const resultHTML = `
            <div class="business-plan">
                <h3>Your ${plan.name} Business Plan</h3>
                
                <h4>📋 Step-by-Step Guide:</h4>
                <ul>
                    ${plan.steps.map(step => `<li>${step}</li>`).join('')}
                </ul>
                
                <h4>💰 Investment Breakdown:</h4>
                <p><strong>Your Budget:</strong> ₹${budget.toLocaleString()}</p>
                <p><strong>Recommended Minimum:</strong> ₹${plan.minInvestment.toLocaleString()}</p>
                ${budget < plan.minInvestment ? 
                    `<p style="color: #d946ef;"><strong>Tip:</strong> You can start small and gradually invest more as you earn!</p>` : 
                    `<p style="color: green;"><strong>Great!</strong> You have sufficient budget to start.</p>`
                }
                
                <h4>💵 Pricing Strategy:</h4>
                <p><strong>Suggested Price per Service/Product:</strong> ₹${plan.pricePerUnit}</p>
                <p><strong>Working ${time} hours daily</strong></p>
                <p><strong>Operating Location:</strong> ${location === 'home' ? 'From Home' : location === 'customer' ? 'At Customer Place' : location === 'online' ? 'Online' : 'Flexible'}</p>
                
                <h4>📊 Monthly Projections:</h4>
                <p><strong>Expected Services/Products per Month:</strong> ${Math.floor(monthlyUnits)}</p>
                <p><strong>Estimated Monthly Revenue:</strong> ₹${monthlyRevenue.toLocaleString()}</p>
                <p><strong>Estimated Monthly Expenses:</strong> ₹${monthlyExpense.toLocaleString()}</p>
                <p><strong>Estimated Monthly Profit:</strong> <span style="color: #d946ef; font-size: 24px;">₹${monthlyProfit.toLocaleString()}</span></p>
                
                <h4>📢 Marketing Plan:</h4>
                <ul>
                    <li>Create WhatsApp Business account</li>
                    <li>Join local community groups</li>
                    <li>Share your work on Instagram</li>
                    <li>Ask satisfied customers for referrals</li>
                    <li>Offer first-time customer discount</li>
                    <li>Print simple visiting cards</li>
                    <li>Network with related businesses</li>
                </ul>
                
                <h4>💪 Success Tips:</h4>
                <ul>
                    <li>Start small and grow gradually</li>
                    <li>Focus on quality over quantity</li>
                    <li>Be consistent and reliable</li>
                    <li>Keep learning and improving</li>
                    <li>Save some profit for reinvestment</li>
                    <li>Build good relationships with customers</li>
                    <li>Track your expenses and income</li>
                    <li>Stay motivated and patient</li>
                </ul>
                
                <p style="background: #f3e8ff; padding: 15px; border-radius: 10px; margin-top: 20px;">
                    <strong>Remember ${userName}:</strong> Every successful business started small. 
                    Your dedication and hard work will make this successful! 🌟
                </p>
            </div>
        `;
        
        document.getElementById('businessPlanResult').innerHTML = resultHTML;
        document.getElementById('businessPlanResult').scrollIntoView({ behavior: 'smooth' });
    }

    
    // Profit Calculator Feature (same as before)
    function loadCalculator() {
        contentArea.innerHTML = `
            <h2 style="color: #d946ef; margin-bottom: 20px;">💰 Profit Calculator</h2>
            <form class="calculator-form" id="calculatorForm">
                <div class="form-group">
                    <label>Cost per Product/Service (₹)</label>
                    <input type="number" id="costInput" placeholder="How much does it cost you?" min="0" step="0.01">
                </div>
                
                <div class="form-group">
                    <label>Selling Price (₹)</label>
                    <input type="number" id="priceInput" placeholder="How much will you charge?" min="0" step="0.01">
                </div>
                
                <div class="form-group">
                    <label>Monthly Sales Quantity</label>
                    <input type="number" id="quantityInput" placeholder="How many will you sell per month?" min="0">
                </div>
                
                <button type="submit" class="generate-btn">Calculate My Profit 📊</button>
            </form>
            
            <div id="calculatorResult"></div>
        `;
        
        const calculatorForm = document.getElementById('calculatorForm');
        calculatorForm.addEventListener('submit', (e) => {
            e.preventDefault();
            calculateProfit();
        });
    }
    
    function calculateProfit() {
        const cost = parseFloat(document.getElementById('costInput').value);
        const price = parseFloat(document.getElementById('priceInput').value);
        const quantity = parseInt(document.getElementById('quantityInput').value);
        
        if (!cost || !price || !quantity) {
            alert('Please fill all fields');
            return;
        }
        
        if (price <= cost) {
            alert('Selling price should be higher than cost!');
            return;
        }
        
        const totalRevenue = price * quantity;
        const totalExpense = cost * quantity;
        const monthlyProfit = totalRevenue - totalExpense;
        const profitPerUnit = price - cost;
        const profitMargin = ((profitPerUnit / price) * 100).toFixed(1);
        
        const resultHTML = `
            <div class="result-box">
                <h3>Your Profit Analysis</h3>
                
                <div class="result-item">
                    <span class="result-label">Total Monthly Revenue:</span>
                    <span class="result-value">₹${totalRevenue.toLocaleString()}</span>
                </div>
                
                <div class="result-item">
                    <span class="result-label">Total Monthly Expense:</span>
                    <span class="result-value">₹${totalExpense.toLocaleString()}</span>
                </div>
                
                <div class="result-item" style="background: linear-gradient(135deg, #f3e8ff, #ffeef8);">
                    <span class="result-label">Monthly Profit:</span>
                    <span class="result-value" style="font-size: 28px;">₹${monthlyProfit.toLocaleString()}</span>
                </div>
                
                <div class="result-item">
                    <span class="result-label">Profit per Unit:</span>
                    <span class="result-value">₹${profitPerUnit.toFixed(2)}</span>
                </div>
                
                <div class="result-item">
                    <span class="result-label">Profit Margin:</span>
                    <span class="result-value">${profitMargin}%</span>
                </div>
                
                <div style="margin-top: 20px; padding: 20px; background: white; border-radius: 10px; text-align: left;">
                    <h4 style="color: #d946ef; margin-bottom: 10px;">💡 What This Means:</h4>
                    <p style="line-height: 1.8;">
                        For every item you sell at ₹${price}, you make a profit of ₹${profitPerUnit.toFixed(2)}. 
                        By selling ${quantity} items per month, you can earn ₹${monthlyProfit.toLocaleString()} as profit!
                    </p>
                    
                    <h4 style="color: #d946ef; margin-top: 15px; margin-bottom: 10px;">📈 Tips to Increase Profit:</h4>
                    <ul style="line-height: 1.8;">
                        <li>Buy materials in bulk to reduce cost</li>
                        <li>Improve quality to justify higher prices</li>
                        <li>Increase sales through better marketing</li>
                        <li>Reduce waste and optimize processes</li>
                        <li>Offer combo deals to sell more</li>
                    </ul>
                    
                    <p style="margin-top: 15px; padding: 15px; background: #f3e8ff; border-radius: 10px;">
                        <strong>Remember:</strong> Consistent quality and good customer service will help you grow your business! 🌟
                    </p>
                </div>
            </div>
        `;
        
        document.getElementById('calculatorResult').innerHTML = resultHTML;
    }

    
    // Marketing Help Feature
    function loadMarketing() {
        contentArea.innerHTML = `
            <h2 style="color: #d946ef; margin-bottom: 20px;">📢 Marketing Help</h2>
            <div class="marketing-tips">
                <div class="tip-card">
                    <h3>📱 WhatsApp Business</h3>
                    <ul>
                        <li>Download WhatsApp Business app (free)</li>
                        <li>Create business profile with your services</li>
                        <li>Add catalog with photos and prices</li>
                        <li>Use status to showcase your work</li>
                        <li>Create broadcast lists for announcements</li>
                        <li>Respond quickly to customer messages</li>
                        <li>Use labels to organize customers</li>
                    </ul>
                </div>
                
                <div class="tip-card">
                    <h3>📸 Instagram for Business</h3>
                    <ul>
                        <li>Create business account (free)</li>
                        <li>Post high-quality photos of your work</li>
                        <li>Use relevant hashtags (#homebusiness #handmade)</li>
                        <li>Post regularly (3-4 times per week)</li>
                        <li>Share customer testimonials</li>
                        <li>Use Instagram Stories for behind-the-scenes</li>
                        <li>Engage with followers' comments</li>
                        <li>Use Reels for wider reach</li>
                    </ul>
                </div>
                
                <div class="tip-card">
                    <h3>🏘️ Local Marketing</h3>
                    <ul>
                        <li>Tell friends, family, and neighbors</li>
                        <li>Distribute pamphlets in your area</li>
                        <li>Put up notice in local shops</li>
                        <li>Join local women's groups</li>
                        <li>Participate in community events</li>
                        <li>Offer referral discounts</li>
                        <li>Print simple visiting cards</li>
                        <li>Network at local markets</li>
                    </ul>
                </div>
                
                <div class="tip-card">
                    <h3>📷 Taking Good Photos</h3>
                    <ul>
                        <li>Use natural daylight (near window)</li>
                        <li>Keep background clean and simple</li>
                        <li>Take photos from multiple angles</li>
                        <li>Show product details clearly</li>
                        <li>Use your phone camera (good enough!)</li>
                        <li>Edit brightness if needed (free apps available)</li>
                        <li>Show scale (use common objects for reference)</li>
                        <li>Create consistent style for your brand</li>
                    </ul>
                </div>
                
                <div class="tip-card">
                    <h3>🤝 Building Customer Trust</h3>
                    <ul>
                        <li>Always deliver on time</li>
                        <li>Maintain consistent quality</li>
                        <li>Be honest about what you can do</li>
                        <li>Communicate clearly about prices</li>
                        <li>Ask for feedback and improve</li>
                        <li>Handle complaints professionally</li>
                        <li>Offer guarantee or return policy</li>
                        <li>Keep your promises</li>
                        <li>Be responsive to messages</li>
                    </ul>
                </div>
                
                <div class="tip-card">
                    <h3>💬 Getting Testimonials</h3>
                    <ul>
                        <li>Ask satisfied customers for reviews</li>
                        <li>Request permission to share their feedback</li>
                        <li>Take photos with happy customers (with permission)</li>
                        <li>Share success stories on social media</li>
                        <li>Offer small discount for video testimonials</li>
                        <li>Display testimonials on your profiles</li>
                    </ul>
                </div>
                
                <div class="tip-card">
                    <h3>💻 Online Presence</h3>
                    <ul>
                        <li>Create Google My Business listing</li>
                        <li>Join Facebook groups in your area</li>
                        <li>List on local business directories</li>
                        <li>Create a simple website (free options available)</li>
                        <li>Use YouTube for tutorials and demos</li>
                        <li>Respond to all online reviews</li>
                        <li>Keep all profiles updated</li>
                    </ul>
                </div>
            </div>
        `;
    }

    
    // Motivation Feature
    function loadMotivation() {
        const quotes = [
            "You are capable of amazing things. Start today, start small, but start! 💪",
            "Every expert was once a beginner. Your journey starts with one step. 🌟",
            "Your home is not just a place to live, it's a place to build your dreams! 🏠",
            "Success is not about being the best, it's about being better than yesterday. 📈",
            "You don't need permission to chase your dreams. You already have everything you need! ✨",
            "Small progress is still progress. Keep going! 🚀",
            "Your skills are valuable. Your time is precious. Your dreams are valid! 💝",
            "The best time to start was yesterday. The next best time is now! ⏰",
            "You are stronger than you think. Braver than you believe. More talented than you know! 💪",
            "Don't wait for opportunity. Create it! 🌈",
            "Your family responsibilities don't limit you – they inspire you! 🌸",
            "Every successful woman started exactly where you are now. 💫",
            "Believe in yourself and magic will happen! ✨",
            "You have the power to change your life. Use it! 💪",
            "Your dreams are worth fighting for! 🌟"
        ];
        
        const stories = [
            {
                name: "Priya's Tiffin Service Success",
                story: "Priya started with just 3 customers in her neighborhood. She cooked simple, homely meals with love. Today, after 2 years, she serves 40 customers daily and earns ₹45,000 per month. She hired two helpers and is planning to expand to nearby areas. Her secret? Consistency and quality!"
            },
            {
                name: "Meena's Tailoring Journey",
                story: "Meena bought a second-hand sewing machine for ₹5,000. She started with simple alterations from her small room. Within 6 months, she was stitching blouses and dresses. Now she earns ₹30,000 monthly and has trained 3 other women in her community. She recently opened a small boutique!"
            },
            {
                name: "Lakshmi's Baking Empire",
                story: "Lakshmi learned baking from YouTube videos during lockdown. She started by making cakes for family functions. Her cakes became so popular that she now gets 15-20 orders every month, earning ₹35,000. She recently bought a professional oven and is teaching baking classes too!"
            },
            {
                name: "Anjali's Mehendi Business",
                story: "Anjali practiced mehendi designs on her friends for free. After 3 months, she started charging ₹200 per hand. Today, she's a sought-after bridal mehendi artist earning ₹50,000 monthly during wedding season. She has a team of 5 artists working with her!"
            },
            {
                name: "Radha's Online Teaching",
                story: "Radha was a homemaker with a B.Ed degree. She started teaching 5 students online during the pandemic. Word spread about her teaching methods. Now she teaches 30 students online, earning ₹45,000 monthly while managing her home. She works just 4 hours daily!"
            },
            {
                name: "Kavita's Handicraft Success",
                story: "Kavita loved making decorative items. She started selling them on Instagram with just 50 followers. Her unique designs caught attention. Today, she has 10,000 followers and earns ₹40,000 monthly. She recently got orders from corporate clients for bulk gifting!"
            }
        ];
        
        let currentQuoteIndex = Math.floor(Math.random() * quotes.length);
        
        contentArea.innerHTML = `
            <h2 style="color: #d946ef; margin-bottom: 20px;">💪 Motivation Corner</h2>
            <div class="motivation-container">
                <div class="quote-box">
                    <p class="quote-text" id="quoteText">"${quotes[currentQuoteIndex]}"</p>
                </div>
                
                <button class="new-quote-btn" id="newQuoteBtn">Get New Motivation ✨</button>
                
                <div class="story-section">
                    <h3 style="color: #d946ef; margin-bottom: 20px;">🌟 Real Success Stories</h3>
                    ${stories.map(story => `
                        <div class="story-card">
                            <h4>${story.name}</h4>
                            <p>${story.story}</p>
                        </div>
                    `).join('')}
                </div>
                
                <div style="margin-top: 30px; padding: 25px; background: linear-gradient(135deg, #f3e8ff, #ffeef8); border-radius: 15px; text-align: center;">
                    <h3 style="color: #d946ef; margin-bottom: 15px;">Remember ${userName}!</h3>
                    <p style="font-size: 18px; line-height: 1.8;">
                        You have unique talents and skills. Your family responsibilities don't limit you – 
                        they inspire you to create something meaningful. Every successful woman entrepreneur 
                        started exactly where you are now. Take the first step today! 🌸
                    </p>
                    <p style="font-size: 16px; line-height: 1.8; margin-top: 15px; color: #666;">
                        Remember: It's okay to start small. It's okay to make mistakes. It's okay to ask for help. 
                        What matters is that you START. Your journey to financial independence begins with believing 
                        in yourself. You've got this! 💪
                    </p>
                </div>
            </div>
        `;
        
        const newQuoteBtn = document.getElementById('newQuoteBtn');
        const quoteText = document.getElementById('quoteText');
        
        newQuoteBtn.addEventListener('click', () => {
            currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
            quoteText.textContent = `"${quotes[currentQuoteIndex]}"`;
            quoteText.style.animation = 'none';
            setTimeout(() => {
                quoteText.style.animation = 'fadeIn 0.5s';
            }, 10);
        });
    }
}
