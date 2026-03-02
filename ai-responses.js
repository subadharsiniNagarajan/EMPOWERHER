// Multilingual AI Response Generator
class AIResponseGenerator {
    constructor(language) {
        this.language = language;
        this.responses = this.getResponses();
    }

    setLanguage(language) {
        this.language = language;
        this.responses = this.getResponses();
    }

    getResponses() {
        const responses = {
            english: {
                cooking: {
                    title: "Cooking & Catering Business",
                    options: [
                        "Tiffin Service (₹5K-15K investment, ₹15K-40K/month)",
                        "Catering (₹20K-50K investment, ₹30K-80K/month)",
                        "Pickles (₹3K-10K investment, ₹10K-25K/month)",
                        "Masala Business (₹5K-15K investment, ₹12K-30K/month)"
                    ],
                    quickStart: [
                        "Choose your specialty",
                        "Get containers and packaging",
                        "Start with 5 customers",
                        "Maintain hygiene",
                        "Ask for referrals"
                    ],
                    motivation: "Many women earn ₹30,000+ monthly from home cooking!"
                },
                baking: {
                    title: "Baking Business",
                    options: [
                        "Custom Cakes (₹10K-25K investment, ₹20K-60K/month)",
                        "Cupcakes (₹8K-20K investment, ₹15K-40K/month)",
                        "Cookies (₹5K-15K investment, ₹12K-35K/month)",
                        "Pastries (₹12K-30K investment, ₹18K-50K/month)"
                    ],
                    successTips: [
                        "Learn from YouTube tutorials",
                        "Start with simple items",
                        "Take beautiful photos",
                        "Use Instagram for marketing",
                        "Offer custom designs"
                    ],
                    motivation: "Home bakers earn ₹25,000-60,000 monthly!"
                }
            },
            tamil: {
                cooking: {
                    title: "சமையல் மற்றும் கேட்டரிங் வியாபாரம்",
                    options: [
                        "டிஃபின் சேவை (₹5K-15K முதலீடு, ₹15K-40K/மாதம்)",
                        "கேட்டரிங் (₹20K-50K முதலீடு, ₹30K-80K/மாதம்)",
                        "ஊறுகாய் (₹3K-10K முதலீடு, ₹10K-25K/மாதம்)",
                        "மசாலா வியாபாரம் (₹5K-15K முதலீடு, ₹12K-30K/மாதம்)"
                    ],
                    quickStart: [
                        "உங்கள் சிறப்பை தேர்வு செய்யுங்கள்",
                        "கொள்கலன்கள் மற்றும் பேக்கேஜிங் பெறுங்கள்",
                        "5 வாடிக்கையாளர்களுடன் தொடங்குங்கள்",
                        "சுகாதாரத்தை பராமரியுங்கள்",
                        "பரிந்துரைகளைக் கேளுங்கள்"
                    ],
                    motivation: "பல பெண்கள் வீட்டு சமையலில் இருந்து மாதம் ₹30,000+ சம்பாதிக்கிறார்கள்!"
                },
                baking: {
                    title: "பேக்கிங் வியாபாரம்",
                    options: [
                        "தனிப்பயன் கேக்குகள் (₹10K-25K முதலீடு, ₹20K-60K/மாதம்)",
                        "கப்கேக்குகள் (₹8K-20K முதலீடு, ₹15K-40K/மாதம்)",
                        "குக்கீகள் (₹5K-15K முதலீடு, ₹12K-35K/மாதம்)",
                        "பேஸ்ட்ரிகள் (₹12K-30K முதலீடு, ₹18K-50K/மாதம்)"
                    ],
                    successTips: [
                        "YouTube பயிற்சிகளில் இருந்து கற்றுக்கொள்ளுங்கள்",
                        "எளிய பொருட்களுடன் தொடங்குங்கள்",
                        "அழகான புகைப்படங்களை எடுங்கள்",
                        "சந்தைப்படுத்தலுக்கு Instagram பயன்படுத்துங்கள்",
                        "தனிப்பயன் வடிவமைப்புகளை வழங்குங்கள்"
                    ],
                    motivation: "வீட்டு பேக்கர்கள் மாதம் ₹25,000-60,000 சம்பாதிக்கிறார்கள்!"
                }
            },
            hindi: {
                cooking: {
                    title: "खाना पकाने और कैटरिंग व्यवसाय",
                    options: [
                        "टिफिन सेवा (₹5K-15K निवेश, ₹15K-40K/माह)",
                        "कैटरिंग (₹20K-50K निवेश, ₹30K-80K/माह)",
                        "अचार (₹3K-10K निवेश, ₹10K-25K/माह)",
                        "मसाला व्यवसाय (₹5K-15K निवेश, ₹12K-30K/माह)"
                    ],
                    quickStart: [
                        "अपनी विशेषता चुनें",
                        "कंटेनर और पैकेजिंग प्राप्त करें",
                        "5 ग्राहकों के साथ शुरू करें",
                        "स्वच्छता बनाए रखें",
                        "रेफरल के लिए पूछें"
                    ],
                    motivation: "कई महिलाएं घर के खाने से मासिक ₹30,000+ कमाती हैं!"
                },
                baking: {
                    title: "बेकिंग व्यवसाय",
                    options: [
                        "कस्टम केक (₹10K-25K निवेश, ₹20K-60K/माह)",
                        "कपकेक (₹8K-20K निवेश, ₹15K-40K/माह)",
                        "कुकीज़ (₹5K-15K निवेश, ₹12K-35K/माह)",
                        "पेस्ट्री (₹12K-30K निवेश, ₹18K-50K/माह)"
                    ],
                    successTips: [
                        "YouTube ट्यूटोरियल से सीखें",
                        "सरल वस्तुओं से शुरू करें",
                        "सुंदर तस्वीरें लें",
                        "मार्केटिंग के लिए Instagram का उपयोग करें",
                        "कस्टम डिज़ाइन प्रदान करें"
                    ],
                    motivation: "घरेलू बेकर्स मासिक ₹25,000-60,000 कमाते हैं!"
                }
            }
        };

        return responses[this.language] || responses.english;
    }

    generateResponse(businessType) {
        const response = this.responses[businessType];
        if (!response) return this.getDefaultResponse();

        let html = `<strong>${response.title}</strong><br><br>`;
        
        if (response.options) {
            html += `<strong>${this.getLabel('options')}:</strong><br>`;
            response.options.forEach(option => {
                html += `• ${option}<br>`;
            });
            html += '<br>';
        }

        if (response.quickStart) {
            html += `<strong>${this.getLabel('quickStart')}:</strong><br>`;
            response.quickStart.forEach((step, index) => {
                html += `${index + 1}. ${step}<br>`;
            });
            html += '<br>';
        }

        if (response.successTips) {
            html += `<strong>${this.getLabel('successTips')}:</strong><br>`;
            response.successTips.forEach(tip => {
                html += `• ${tip}<br>`;
            });
            html += '<br>';
        }

        if (response.motivation) {
            html += `<strong>💪 ${response.motivation}</strong>`;
        }

        return html;
    }

    getLabel(key) {
        const labels = {
            english: {
                options: 'Options',
                quickStart: 'Quick Start',
                successTips: 'Success Tips'
            },
            tamil: {
                options: 'விருப்பங்கள்',
                quickStart: 'விரைவு தொடக்கம்',
                successTips: 'வெற்றி குறிப்புகள்'
            },
            hindi: {
                options: 'विकल्प',
                quickStart: 'त्वरित शुरुआत',
                successTips: 'सफलता के सुझाव'
            }
        };

        return labels[this.language]?.[key] || labels.english[key];
    }

    getDefaultResponse() {
        const defaults = {
            english: "I can help you with various businesses. Please ask about cooking, baking, tailoring, beauty services, or other skills!",
            tamil: "நான் பல்வேறு வியாபாரங்களில் உங்களுக்கு உதவ முடியும். சமையல், பேக்கிங், தையல், அழகு சேவைகள் அல்லது பிற திறன்கள் பற்றி கேளுங்கள்!",
            hindi: "मैं विभिन्न व्यवसायों में आपकी मदद कर सकता हूं। कृपया खाना पकाने, बेकिंग, सिलाई, सौंदर्य सेवाओं या अन्य कौशल के बारे में पूछें!"
        };

        return defaults[this.language] || defaults.english;
    }
}
