# 💻 Integration Code Snippets

## Complete Implementation Examples

### 1. Updated index.html (Complete)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EmpowerHer - From Home to Business</title>
    <link rel="stylesheet" href="style.css">
</head>
<body class="landing-page">
    <div class="container">
        <div class="landing-content">
            <div class="logo">🌸</div>
            <h1 class="app-title">EmpowerHer</h1>
            <p class="tagline" data-i18n="landing.tagline">From Home to Business – Step by Step</p>
            
            <div class="language-section">
                <h2 data-i18n="landing.chooseLanguage">Choose Your Language</h2>
                <div class="language-buttons">
                    <button class="lang-btn" data-lang="english">English</button>
                    <button class="lang-btn" data-lang="tamil">தமிழ்</button>
                    <button class="lang-btn" data-lang="hindi">हिंदी</button>
                    <button class="lang-btn" data-lang="telugu">తెలుగు</button>
                    <button class="lang-btn" data-lang="kannada">ಕನ್ನಡ</button>
                    <button class="lang-btn" data-lang="malayalam">മലയാളം</button>
                </div>
            </div>
            
            <div class="name-section">
                <h2 data-i18n="landing.whatsYourName">What's Your Name?</h2>
                <input type="text" id="userName" class="name-input" 
                       data-i18n-placeholder="landing.enterName" 
                       placeholder="Enter your name">
            </div>
            
            <button class="start-btn" id="startBtn" 
                    data-i18n="landing.startJourney">Start My Journey 🚀</button>
        </div>
    </div>
    
    <!-- Load all scripts in correct order -->
    <script src="i18n.js"></script>
    <script src="business-content-en.js"></script>
    <script src="business-content-ta.js"></script>
    <script src="business-content-hi.js"></script>
    <script src="ai-responses.js"></script>
    <script src="script.js"></script>
</body>
</html>
```

### 2. Updated dashboard.html (Complete)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EmpowerHer - Dashboard</title>
    <link rel="stylesheet" href="style.css">
</head>
<body class="dashboard-page">
    <div class="header">
        <h1 id="welcomeMsg">Welcome!</h1>
        <div class="header-actions">
            <select id="languageSelector" class="language-dropdown">
                <option value="english">English</option>
                <option value="tamil">தமிழ்</option>
                <option value="hindi">हिंदी</option>
                <option value="telugu">తెలుగు</option>
                <option value="kannada">ಕನ್ನಡ</option>
                <option value="malayalam">മലയാളം</option>
            </select>
            <button class="logout-btn" id="logoutBtn" 
                    data-i18n="dashboard.changeLanguage">Change Language</button>
        </div>
    </div>
    
    <div class="container">
        <div class="dashboard-grid">
            <button class="feature-card" data-feature="ai">
                <span class="icon">🎤</span>
                <span class="label" data-i18n="dashboard.features.askAI">Ask AI</span>
            </button>
            
            <button class="feature-card" data-feature="guide">
                <span class="icon">💡</span>
                <span class="label" data-i18n="dashboard.features.businessGuide">Business Guide</span>
            </button>
            
            <button class="feature-card" data-feature="calculator">
                <span class="icon">💰</span>
                <span class="label" data-i18n="dashboard.features.profitCalculator">Profit Calculator</span>
            </button>
            
            <button class="feature-card" data-feature="marketing">
                <span class="icon">📢</span>
                <span class="label" data-i18n="dashboard.features.marketingHelp">Marketing Help</span>
            </button>
            
            <button class="feature-card" data-feature="motivation">
                <span class="icon">💪</span>
                <span class="label" data-i18n="dashboard.features.motivation">Motivation</span>
            </button>
            
            <button class="feature-card" data-feature="skills">
                <span class="icon">🎯</span>
                <span class="label" data-i18n="dashboard.features.exploreSkills">Explore Skills</span>
            </button>
        </div>
        
        <div id="contentArea" class="content-area"></div>
    </div>
    
    <!-- Load all scripts -->
    <script src="i18n.js"></script>
    <script src="business-content-en.js"></script>
    <script src="business-content-ta.js"></script>
    <script src="business-content-hi.js"></script>
    <script src="ai-responses.js"></script>
    <script src="script.js"></script>
</body>
</html>
```

### 3. Helper Function: Get Business Content

```javascript
// Add this to script.js
function getBusinessContent(language) {
    const contentMap = {
        'english': BUSINESS_CONTENT_EN,
        'tamil': BUSINESS_CONTENT_TA,
        'hindi': BUSINESS_CONTENT_HI,
        'telugu': BUSINESS_CONTENT_EN, // Fallback to English
        'kannada': BUSINESS_CONTENT_EN, // Fallback to English
        'malayalam': BUSINESS_CONTENT_EN // Fallback to English
    };
    
    return contentMap[language] || BUSINESS_CONTENT_EN;
}
```

### 4. Updated Language Selection (Landing Page)

```javascript
// In script.js - Landing Page Logic
if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
    let selectedLanguage = '';
    
    const langButtons = document.querySelectorAll('.lang-btn');
    const startBtn = document.getElementById('startBtn');
    const userNameInput = document.getElementById('userName');
    
    // Initialize i18n
    document.addEventListener('DOMContentLoaded', async () => {
        await i18n.loadLanguage(i18n.currentLanguage);
        i18n.updatePageTranslations();
    });
    
    langButtons.forEach(btn => {
        btn.addEventListener('click', async () => {
            langButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            selectedLanguage = btn.dataset.lang;
            
            // Update translations immediately
            await i18n.setLanguage(selectedLanguage);
        });
    });
    
    startBtn.addEventListener('click', () => {
        const userName = userNameInput.value.trim();
        
        if (!selectedLanguage) {
            alert(i18n.translate('landing.selectLanguageAlert'));
            return;
        }
        
        if (!userName) {
            alert(i18n.translate('landing.enterNameAlert'));
            return;
        }
        
        localStorage.setItem('empowerher_language', selectedLanguage);
        localStorage.setItem('empowerher_username', userName);
        window.location.href = 'dashboard.html';
    });
}
```

### 5. Updated Dashboard Initialization

```javascript
// In script.js - Dashboard Logic
if (window.location.pathname.includes('dashboard.html')) {
    const userName = localStorage.getItem('empowerher_username') || 'Friend';
    let currentLanguage = localStorage.getItem('empowerher_language') || 'english';
    
    // Initialize i18n
    document.addEventListener('DOMContentLoaded', async () => {
        await i18n.loadLanguage(currentLanguage);
        i18n.updatePageTranslations();
        
        // Update welcome message
        const welcomeMsg = document.getElementById('welcomeMsg');
        welcomeMsg.textContent = `${i18n.translate('dashboard.welcome')}, ${userName}! 🌸`;
        
        // Set language selector
        const languageSelector = document.getElementById('languageSelector');
        languageSelector.value = currentLanguage;
    });
    
    // Language change handler
    const languageSelector = document.getElementById('languageSelector');
    languageSelector.addEventListener('change', async (e) => {
        currentLanguage = e.target.value;
        await i18n.setLanguage(currentLanguage);
        localStorage.setItem('empowerher_language', currentLanguage);
        
        // Update welcome message
        const welcomeMsg = document.getElementById('welcomeMsg');
        welcomeMsg.textContent = `${i18n.translate('dashboard.welcome')}, ${userName}! 🌸`;
        
        // Reload current feature if active
        const activeFeature = document.querySelector('.feature-card.active');
        if (activeFeature) {
            loadFeature(activeFeature.dataset.feature);
        }
    });
}
```

### 6. Multilingual Business Guide

```javascript
function loadBusinessGuide() {
    const content = getBusinessContent(i18n.currentLanguage);
    const guide = content.businessGuide;
    
    contentArea.innerHTML = `
        <h2 style="color: #d946ef; margin-bottom: 20px;">${guide.title}</h2>
        <p style="color: #666; margin-bottom: 20px;">${guide.subtitle}</p>
        <form class="guide-form" id="guideForm">
            <div class="form-group">
                <label>${guide.form.skillLabel}</label>
                <select id="skillSelect">
                    <option value="">${guide.form.skillPlaceholder}</option>
                    <optgroup label="${guide.categories.food}">
                        <option value="cooking">${guide.skills.cooking}</option>
                        <option value="catering">${guide.skills.catering}</option>
                        <option value="baking">${guide.skills.baking}</option>
                        <option value="pickles">${guide.skills.pickles}</option>
                        <option value="snacks">${guide.skills.snacks}</option>
                    </optgroup>
                    <optgroup label="${guide.categories.fashion}">
                        <option value="tailoring">${guide.skills.tailoring}</option>
                        <option value="boutique">${guide.skills.boutique}</option>
                        <option value="embroidery">${guide.skills.embroidery}</option>
                        <option value="aari">${guide.skills.aari}</option>
                    </optgroup>
                    <!-- Add more categories -->
                </select>
            </div>
            
            <div class="form-group">
                <label>${guide.form.budgetLabel}</label>
                <input type="number" id="budgetInput" 
                       placeholder="${guide.form.budgetPlaceholder}" min="0">
            </div>
            
            <div class="form-group">
                <label>${guide.form.timeLabel}</label>
                <input type="number" id="timeInput" 
                       placeholder="${guide.form.timePlaceholder}" min="1" max="12">
            </div>
            
            <div class="form-group">
                <label>${guide.form.locationLabel}</label>
                <select id="locationSelect">
                    <option value="home">${guide.form.locations.home}</option>
                    <option value="customer">${guide.form.locations.customer}</option>
                    <option value="online">${guide.form.locations.online}</option>
                    <option value="both">${guide.form.locations.both}</option>
                </select>
            </div>
            
            <button type="submit" class="generate-btn">${guide.form.generateButton}</button>
        </form>
        
        <div id="businessPlanResult"></div>
    `;
    
    const guideForm = document.getElementById('guideForm');
    guideForm.addEventListener('submit', (e) => {
        e.preventDefault();
        generateBusinessPlan();
    });
}
```

### 7. Multilingual AI Chat

```javascript
function loadAIChat() {
    const userName = localStorage.getItem('empowerher_username') || 'Friend';
    const aiGenerator = new AIResponseGenerator(i18n.currentLanguage);
    
    contentArea.innerHTML = `
        <h2 style="color: #d946ef; margin-bottom: 20px;" 
            data-i18n="aiChat.title">Ask AI Assistant</h2>
        <div class="chat-container">
            <div class="chat-messages" id="chatMessages">
                <div class="message ai">
                    ${i18n.translate('aiChat.greeting', { name: userName })}
                </div>
            </div>
            <div class="chat-input-area">
                <input type="text" class="chat-input" id="chatInput" 
                       data-i18n-placeholder="aiChat.placeholder"
                       placeholder="Type your question...">
                <button class="send-btn" id="sendBtn" 
                        data-i18n="aiChat.send">Send</button>
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
        // Detect business type from message
        if (message.includes('cooking') || message.includes('சமையல்') || message.includes('खाना')) {
            return aiGenerator.generateResponse('cooking');
        }
        if (message.includes('baking') || message.includes('பேக்கிங்') || message.includes('बेकिंग')) {
            return aiGenerator.generateResponse('baking');
        }
        // Add more business types
        
        return aiGenerator.getDefaultResponse();
    }
}
```

### 8. Voice Input with Language Detection

```javascript
function startVoiceInput() {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
        alert('Voice input is not supported in your browser');
        return;
    }
    
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    
    // Set language based on current selection
    const langCodes = {
        'english': 'en-US',
        'tamil': 'ta-IN',
        'hindi': 'hi-IN',
        'telugu': 'te-IN',
        'kannada': 'kn-IN',
        'malayalam': 'ml-IN'
    };
    
    recognition.lang = langCodes[i18n.currentLanguage] || 'en-US';
    recognition.continuous = false;
    recognition.interimResults = false;
    
    recognition.onstart = () => {
        micBtn.textContent = '🔴';
        micBtn.style.background = '#ff4444';
    };
    
    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        chatInput.value = transcript;
        sendMessage();
    };
    
    recognition.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        micBtn.textContent = '🎤';
        micBtn.style.background = '';
    };
    
    recognition.onend = () => {
        micBtn.textContent = '🎤';
        micBtn.style.background = '';
    };
    
    recognition.start();
}
```

## Quick Integration Checklist

1. ✅ Create `languages/` folder
2. ✅ Add JSON translation files (en.json, ta.json, hi.json)
3. ✅ Add i18n.js file
4. ✅ Add business-content-*.js files
5. ✅ Add ai-responses.js file
6. ✅ Update index.html with data-i18n attributes
7. ✅ Update dashboard.html with data-i18n attributes
8. ✅ Update script.js with i18n integration
9. ✅ Test all 6 languages
10. ✅ Test voice input in different languages

## Testing Commands

```javascript
// Test translation loading
await i18n.loadLanguage('tamil');
console.log(i18n.translate('landing.title'));

// Test language switching
await i18n.setLanguage('hindi');

// Test business content
const content = getBusinessContent('tamil');
console.log(content.businessGuide.title);

// Test AI responses
const aiGen = new AIResponseGenerator('hindi');
console.log(aiGen.generateResponse('cooking'));
```

---

**Ready to integrate!** Follow these snippets to make your EmpowerHer platform fully multilingual. 🌍✨
