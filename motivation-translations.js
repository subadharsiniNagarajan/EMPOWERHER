// Motivation Quotes and Stories - All 6 Languages
const motivationContent = {
    english: {
        title: "Motivation Corner",
        newQuoteBtn: "Get New Motivation ✨",
        storiesTitle: "Real Success Stories",
        rememberTitle: "Remember",
        quotes: [
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
        ],
        stories: [
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
            }
        ],
        encouragement: {
            para1: "You have unique talents and skills. Your family responsibilities don't limit you – they inspire you to create something meaningful. Every successful woman entrepreneur started exactly where you are now. Take the first step today! 🌸",
            para2: "Remember: It's okay to start small. It's okay to make mistakes. It's okay to ask for help. What matters is that you START. Your journey to financial independence begins with believing in yourself. You've got this! 💪"
        }
    },
    tamil: {
        title: "ஊக்க மூலை",
        newQuoteBtn: "புதிய ஊக்கம் பெறுங்கள் ✨",
        storiesTitle: "உண்மையான வெற்றிக் கதைகள்",
        rememberTitle: "நினைவில் கொள்ளுங்கள்",
        quotes: [
            "நீங்கள் அற்புதமான விஷயங்களைச் செய்ய வல்லவர். இன்றே தொடங்குங்கள், சிறியதாக தொடங்குங்கள், ஆனால் தொடங்குங்கள்! 💪",
            "ஒவ்வொரு நிபுணரும் ஒரு காலத்தில் ஆரம்பநிலையாளராக இருந்தார். உங்கள் பயணம் ஒரு படியுடன் தொடங்குகிறது. 🌟",
            "உங்கள் வீடு வாழ்வதற்கான இடம் மட்டுமல்ல, உங்கள் கனவுகளை உருவாக்கும் இடம்! 🏠",
            "வெற்றி என்பது சிறந்தவராக இருப்பது அல்ல, நேற்றைய விட இன்று சிறந்தவராக இருப்பது. 📈",
            "உங்கள் கனவுகளைத் துரத்த உங்களுக்கு அனுமதி தேவையில்லை. உங்களுக்குத் தேவையான அனைத்தும் ஏற்கனவே உள்ளது! ✨"
        ],
        stories: [
            {
                name: "பிரியாவின் டிஃபின் சேவை வெற்றி",
                story: "பிரியா தனது அக்கம்பக்கத்தில் வெறும் 3 வாடிக்கையாளர்களுடன் தொடங்கினார். அவர் அன்புடன் எளிய, வீட்டு உணவுகளை சமைத்தார். இன்று, 2 ஆண்டுகளுக்குப் பிறகு, அவர் தினமும் 40 வாடிக்கையாளர்களுக்கு சேவை செய்து மாதம் ₹45,000 சம்பாதிக்கிறார். அவர் இரண்டு உதவியாளர்களை நியமித்து அருகிலுள்ள பகுதிகளுக்கு விரிவாக்க திட்டமிட்டுள்ளார். அவரது ரகசியம்? நிலைத்தன்மை மற்றும் தரம்!"
            }
        ],
        encouragement: {
            para1: "உங்களிடம் தனித்துவமான திறமைகள் மற்றும் திறன்கள் உள்ளன. உங்கள் குடும்பப் பொறுப்புகள் உங்களை கட்டுப்படுத்துவதில்லை - அவை உங்களை ஏதாவது அர்த்தமுள்ளதை உருவாக்க ஊக்குவிக்கின்றன. ஒவ்வொரு வெற்றிகரமான பெண் தொழில்முனைவோரும் நீங்கள் இப்போது இருக்கும் இடத்தில் தொடங்கினார்கள். இன்றே முதல் படி எடுங்கள்! 🌸",
            para2: "நினைவில் கொள்ளுங்கள்: சிறியதாக தொடங்குவது பரவாயில்லை. தவறுகள் செய்வது பரவாயில்லை. உதவி கேட்பது பரவாயில்லை. முக்கியமானது நீங்கள் தொடங்குவது. உங்கள் நிதி சுதந்திரத்திற்கான பயணம் உங்களை நம்புவதில் தொடங்குகிறது. உங்களால் முடியும்! 💪"
        }
    },
    hindi: {
        title: "प्रेरणा कोना",
        newQuoteBtn: "नई प्रेरणा प्राप्त करें ✨",
        storiesTitle: "वास्तविक सफलता की कहानियां",
        rememberTitle: "याद रखें",
        quotes: [
            "आप अद्भुत चीजें करने में सक्षम हैं। आज शुरू करें, छोटा शुरू करें, लेकिन शुरू करें! 💪",
            "हर विशेषज्ञ कभी शुरुआती था। आपकी यात्रा एक कदम से शुरू होती है। 🌟",
            "आपका घर सिर्फ रहने की जगह नहीं है, यह आपके सपनों को बनाने की जगह है! 🏠",
            "सफलता सर्वश्रेष्ठ होने के बारे में नहीं है, यह कल से बेहतर होने के बारे में है। 📈",
            "आपको अपने सपनों का पीछा करने के लिए अनुमति की आवश्यकता नहीं है। आपके पास पहले से ही वह सब कुछ है जो आपको चाहिए! ✨"
        ],
        stories: [
            {
                name: "प्रिया की टिफिन सेवा सफलता",
                story: "प्रिया ने अपने पड़ोस में सिर्फ 3 ग्राहकों के साथ शुरुआत की। उसने प्यार से सरल, घरेलू भोजन पकाया। आज, 2 साल बाद, वह रोजाना 40 ग्राहकों की सेवा करती है और प्रति माह ₹45,000 कमाती है। उसने दो सहायकों को काम पर रखा है और आस-पास के क्षेत्रों में विस्तार करने की योजना बना रही है। उसका रहस्य? निरंतरता और गुणवत्ता!"
            }
        ],
        encouragement: {
            para1: "आपके पास अनूठी प्रतिभाएं और कौशल हैं। आपकी पारिवारिक जिम्मेदारियां आपको सीमित नहीं करतीं - वे आपको कुछ सार्थक बनाने के लिए प्रेरित करती हैं। हर सफल महिला उद्यमी ने ठीक वहीं से शुरुआत की जहां आप अभी हैं। आज पहला कदम उठाएं! 🌸",
            para2: "याद रखें: छोटा शुरू करना ठीक है। गलतियां करना ठीक है। मदद मांगना ठीक है। जो मायने रखता है वह यह है कि आप शुरू करें। वित्तीय स्वतंत्रता की आपकी यात्रा खुद पर विश्वास करने से शुरू होती है। आप कर सकते हैं! 💪"
        }
    }
};
