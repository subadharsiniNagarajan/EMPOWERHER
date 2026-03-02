# 🚀 Quick Reference Card - Multilingual EmpowerHer

## 📁 Files You Need

```
Your Project/
├── languages/
│   ├── en.json ✅
│   ├── ta.json ✅
│   └── hi.json ✅
├── i18n.js ✅
├── business-content-en.js ✅
├── business-content-ta.js ✅
├── business-content-hi.js ✅
├── ai-responses.js ✅
├── index.html (update)
├── dashboard.html (update)
└── script.js (update)
```

## 🔧 3-Step Integration

### Step 1: Add Script Tags
```html
<!-- Add before closing </body> tag -->
<script src="i18n.js"></script>
<script src="business-content-en.js"></script>
<script src="business-content-ta.js"></script>
<script src="business-content-hi.js"></script>
<script src="ai-responses.js"></script>
<script src="script.js"></script>
```

### Step 2: Mark Elements for Translation
```html
<!-- Add data-i18n attribute -->
<h1 data-i18n="landing.title">EmpowerHer</h1>
<input data-i18n-placeholder="landing.enterName" placeholder="Enter name">
<button data-i18n="landing.startJourney">Start</button>
```

### Step 3: Initialize i18n
```javascript
// At start of script.js
document.addEventListener('DOMContentLoaded', async () => {
    await i18n.loadLanguage(i18n.currentLanguage);
    i18n.updatePageTranslations();
});
```

## 💻 Essential Code Snippets

### Language Selection Handler
```javascript
langButtons.forEach(btn => {
    btn.addEventListener('click', async () => {
        await i18n.setLanguage(btn.dataset.lang);
    });
});
```

### Get Translated Text
```javascript
const text = i18n.translate('landing.title');
const greeting = i18n.translate('aiChat.greeting', { name: 'Priya' });
```

### Get Business Content
```javascript
const content = getBusinessContent(i18n.currentLanguage);
const title = content.businessGuide.title;
```

### Generate AI Response
```javascript
const aiGen = new AIResponseGenerator(i18n.currentLanguage);
const response = aiGen.generateResponse('cooking');
```

### Voice Input
```javascript
const langCodes = {
    'english': 'en-US',
    'tamil': 'ta-IN',
    'hindi': 'hi-IN'
};
recognition.lang = langCodes[i18n.currentLanguage];
```

## 🌍 Supported Languages

| Language | Code | Script | Voice |
|----------|------|--------|-------|
| English | en | Latin | ✅ |
| Tamil | ta | Tamil | ✅ |
| Hindi | hi | Devanagari | ✅ |
| Telugu | te | Telugu | ✅ |
| Kannada | kn | Kannada | ✅ |
| Malayalam | ml | Malayalam | ✅ |

## 📝 Translation Key Structure

```
landing.title
landing.tagline
landing.chooseLanguage
dashboard.welcome
dashboard.features.askAI
businessGuide.title
businessGuide.form.skillLabel
aiChat.greeting
```

## 🎯 Common Tasks

### Add New Translation
1. Open `languages/en.json`
2. Add key-value pair
3. Repeat for other languages
4. Use in HTML: `data-i18n="your.new.key"`

### Add New Language
1. Create `languages/xx.json`
2. Copy structure from `en.json`
3. Translate all values
4. Add to language selector
5. Add voice code if needed

### Update Business Content
1. Open `business-content-en.js`
2. Update content
3. Repeat for other languages
4. No code changes needed

### Test Translation
```javascript
// In browser console
await i18n.setLanguage('tamil');
console.log(i18n.translate('landing.title'));
```

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| Translations not loading | Check JSON file path and syntax |
| Some text not translating | Add data-i18n attribute |
| Language not persisting | Check localStorage is enabled |
| Voice not working | Check browser compatibility |

## ✅ Testing Checklist

- [ ] All 6 languages load
- [ ] Language switches instantly
- [ ] Language persists on reload
- [ ] All UI elements translate
- [ ] Forms translate correctly
- [ ] AI responds in correct language
- [ ] Voice input works
- [ ] Mobile responsive

## 📚 Documentation

- **Full Guide**: MULTILINGUAL_IMPLEMENTATION.md
- **Code Examples**: INTEGRATION_CODE_SNIPPETS.md
- **Summary**: MULTILINGUAL_UPGRADE_SUMMARY.md
- **This Card**: QUICK_REFERENCE.md

## 🎨 UI Elements to Translate

### Landing Page
- Title, tagline
- Language selection label
- Name input placeholder
- Start button
- Alert messages

### Dashboard
- Welcome message
- 6 feature card labels
- Language dropdown
- Change language button

### Business Guide
- Title, subtitle
- All form labels
- 50+ skill options
- Location options
- Generate button
- Business plan output

### AI Chat
- Title
- Greeting
- Input placeholder
- Send button
- All responses

## 🚀 Performance Tips

1. **Lazy Load**: Load languages only when needed
2. **Cache**: Store loaded translations in memory
3. **Fallback**: Use English if translation missing
4. **Optimize**: Minimize JSON file size

## 🔗 Quick Links

- JSON Structure: See `languages/en.json`
- Business Content: See `business-content-en.js`
- AI Responses: See `ai-responses.js`
- Integration: See `INTEGRATION_CODE_SNIPPETS.md`

## 💡 Pro Tips

1. Always test in all languages before deploying
2. Keep translation keys consistent
3. Use placeholders for dynamic content
4. Provide fallbacks for missing translations
5. Test voice input in each language
6. Check mobile responsiveness in all languages
7. Use culturally appropriate examples

## 📞 Support

1. Check documentation files
2. Review code snippets
3. Test in browser console
4. Check browser compatibility
5. Verify file paths

---

**Ready to go!** 🎉

Start with **INTEGRATION_CODE_SNIPPETS.md** for detailed implementation.
