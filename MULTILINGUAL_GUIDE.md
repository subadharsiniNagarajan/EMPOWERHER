# 🌍 Multilingual Feature Guide

## Overview
EmpowerHer now supports 6 Indian languages with real-time switching and persistent preferences.

## Supported Languages

1. **English** - Default language
2. **Tamil** (தமிழ்) - Tamil Nadu
3. **Hindi** (हिंदी) - National language
4. **Telugu** (తెలుగు) - Andhra Pradesh, Telangana
5. **Kannada** (ಕನ್ನಡ) - Karnataka
6. **Malayalam** (മലയാളം) - Kerala

## How It Works

### Landing Page
- Users select their preferred language
- Language selection is saved to localStorage
- All text updates immediately when language is selected
- Selected language persists throughout the session

### Dashboard
- Language dropdown in header for easy switching
- Real-time translation of all UI elements
- Language preference saved automatically
- Voice input adapts to selected language

## Translation System

### Architecture
```javascript
translations = {
    english: { key: "value" },
    tamil: { key: "தமிழ் மதிப்பு" },
    hindi: { key: "हिंदी मान" },
    // ... other languages
}
```

### How to Add New Translations

1. **Add to translations object** in script.js:
```javascript
const translations = {
    english: {
        newKey: "English text"
    },
    tamil: {
        newKey: "தமிழ் உரை"
    }
    // ... add for all languages
};
```

2. **Add data attribute** to HTML element:
```html
<button data-translate="newKey">Default Text</button>
```

3. **For placeholders**:
```html
<input data-translate-placeholder="newKey" placeholder="Default">
```

## Current Translated Elements

### Landing Page
- Tagline
- "Choose Your Language"
- "What's Your Name?"
- Input placeholder
- "Start My Journey" button
- Alert messages

### Dashboard
- Welcome message
- "Change Language" button
- All feature card labels:
  - Ask AI
  - Business Guide
  - Profit Calculator
  - Marketing Help
  - Motivation
  - Explore Skills

## Voice Input Language Support

The voice recognition automatically adapts to selected language:

- English → en-US
- Tamil → ta-IN
- Hindi → hi-IN
- Telugu → te-IN
- Kannada → kn-IN
- Malayalam → ml-IN

## Adding More Languages

To add a new language (e.g., Bengali):

1. **Add language button** in index.html:
```html
<button class="lang-btn" data-lang="bengali">বাংলা</button>
```

2. **Add translations** in script.js:
```javascript
bengali: {
    tagline: "বাড়ি থেকে ব্যবসা - ধাপে ধাপে",
    chooseLanguage: "আপনার ভাষা চয়ন করুন",
    // ... all other keys
}
```

3. **Add voice recognition** language code:
```javascript
recognition.lang = currentLanguage === 'bengali' ? 'bn-IN' : ...
```

4. **Add to language selector** in dashboard.html:
```html
<option value="bengali">বাংলা</option>
```

## Best Practices

1. **Always provide fallback**: If translation is missing, English is used
2. **Keep keys consistent**: Use same keys across all languages
3. **Test thoroughly**: Check all pages after adding translations
4. **Use native scripts**: Write translations in native language scripts
5. **Consider context**: Some words may need different translations in different contexts

## Storage

Language preference is stored in:
```javascript
localStorage.setItem('empowerher_language', selectedLanguage);
```

Retrieved on page load:
```javascript
currentLanguage = localStorage.getItem('empowerher_language') || 'english';
```

## Limitations

- Business content (AI responses, business plans) are currently in English
- Success stories are in English
- Marketing tips are in English

## Future Enhancements

- Translate all business content
- Add more regional languages
- Auto-detect browser language
- Translation API integration for dynamic content
- Community-contributed translations

## Testing Checklist

When adding new language:
- [ ] Landing page displays correctly
- [ ] Dashboard translates properly
- [ ] Language selector shows new option
- [ ] Voice input works (if supported)
- [ ] Language persists after refresh
- [ ] All buttons and labels translate
- [ ] Alerts show in correct language
- [ ] No missing translations (check console)

---

**Note**: This is a client-side translation system. For production apps with extensive content, consider using i18n libraries or backend translation services.
