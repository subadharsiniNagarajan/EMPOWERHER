// Internationalization (i18n) Manager for EmpowerHer
class I18nManager {
    constructor() {
        this.currentLanguage = localStorage.getItem('empowerher_language') || 'english';
        this.translations = {};
        this.loadedLanguages = new Set();
    }

    // Language code mapping
    getLanguageCode(lang) {
        const mapping = {
            'english': 'en',
            'tamil': 'ta',
            'hindi': 'hi',
            'telugu': 'te',
            'kannada': 'kn',
            'malayalam': 'ml'
        };
        return mapping[lang] || 'en';
    }

    // Load language file
    async loadLanguage(language) {
        const code = this.getLanguageCode(language);
        
        if (this.loadedLanguages.has(code)) {
            return this.translations[code];
        }

        try {
            const response = await fetch(`languages/${code}.json`);
            if (!response.ok) {
                console.warn(`Language file not found: ${code}.json, falling back to English`);
                return this.loadFallbackTranslations(language);
            }
            
            const data = await response.json();
            this.translations[code] = data;
            this.loadedLanguages.add(code);
            return data;
        } catch (error) {
            console.error(`Error loading language ${code}:`, error);
            return this.loadFallbackTranslations(language);
        }
    }

    // Fallback to embedded translations
    loadFallbackTranslations(language) {
        return EMBEDDED_TRANSLATIONS[language] || EMBEDDED_TRANSLATIONS['english'];
    }

    // Get translated text with placeholder support
    translate(key, params = {}) {
        const code = this.getLanguageCode(this.currentLanguage);
        const translation = this.getNestedValue(this.translations[code], key);
        
        if (!translation) {
            console.warn(`Translation missing for key: ${key}`);
            return key;
        }

        // Replace placeholders like {name}
        return this.replacePlaceholders(translation, params);
    }

    // Get nested object value by dot notation
    getNestedValue(obj, path) {
        return path.split('.').reduce((current, key) => current?.[key], obj);
    }

    // Replace placeholders in translation
    replacePlaceholders(text, params) {
        return text.replace(/\{(\w+)\}/g, (match, key) => params[key] || match);
    }

    // Set current language
    async setLanguage(language) {
        this.currentLanguage = language;
        localStorage.setItem('empowerher_language', language);
        await this.loadLanguage(language);
        this.updatePageTranslations();
    }

    // Update all elements with data-i18n attribute
    updatePageTranslations() {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            const params = this.getElementParams(element);
            element.textContent = this.translate(key, params);
        });

        // Update placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            element.placeholder = this.translate(key);
        });

        // Update titles
        document.querySelectorAll('[data-i18n-title]').forEach(element => {
            const key = element.getAttribute('data-i18n-title');
            element.title = this.translate(key);
        });
    }

    // Get parameters from element data attributes
    getElementParams(element) {
        const params = {};
        Array.from(element.attributes).forEach(attr => {
            if (attr.name.startsWith('data-i18n-param-')) {
                const paramName = attr.name.replace('data-i18n-param-', '');
                params[paramName] = attr.value;
            }
        });
        return params;
    }
}

// Initialize i18n manager
const i18n = new I18nManager();
