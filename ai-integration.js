// AI Integration for EmpowerHer - Dynamic Multilingual Content Generation
class AIIntegration {
    constructor() {
        this.apiEndpoint = null; // Set your API endpoint here
        this.apiKey = null; // Set your API key here
        this.currentLanguage = localStorage.getItem('empowerher_language') || 'english';
        this.cache = new Map(); // Cache responses
    }

    // Language name mapping
    getLanguageName(code) {
        const mapping = {
            'english': 'English',
            'tamil': 'Tamil',
            'hindi': 'Hindi',
            'telugu': 'Telugu',
            'kannada': 'Kannada',
            'malayalam': 'Malayalam'
        };
        return mapping[code] || 'English';
    }

    // Generate AI prompt for business content
    generatePrompt(contentType, additionalContext = {}) {
        const languageName = this.getLanguageName(this.currentLanguage);
        
        const basePrompt = `You are a helpful business mentor assistant inside the EmpowerHer dashboard app.
Selected Language: ${languageName}

IMPORTANT:
- Respond ONLY in ${languageName}.
- Do NOT use English unless ${languageName} is English.
- Use simple words that homemakers can understand.
- Keep tone motivational, practical, and encouraging.
- Use examples relevant to Indian homemakers.
- Include currency in ₹ (Indian Rupees).
`;

        const prompts = {
            motivation: `${basePrompt}
Generate content for:
1) 3 Motivational Tips for homemakers starting a business
2) 1 Inspiring success story (brief, 2-3 sentences)
3) 1 Encouraging quote

Format as JSON:
{
  "tips": ["tip1", "tip2", "tip3"],
  "story": "success story text",
  "quote": "motivational quote"
}`,

            businessIdeas: `${basePrompt}
Generate 5 small business ideas suitable for homemakers with:
- Business name
- Brief description (1 sentence)
- Investment range (₹)
- Expected monthly income (₹)
- Difficulty level (Easy/Medium)

Skill category: ${additionalContext.category || 'General'}

Format as JSON array:
[
  {
    "name": "Business Name",
    "description": "Brief description",
    "investment": "₹5,000-15,000",
    "income": "₹15,000-40,000",
    "difficulty": "Easy"
  }
]`,

            profitCalculation: `${basePrompt}
Explain profit calculation in simple terms with a practical example for:
Business Type: ${additionalContext.businessType || 'Home Cooking'}

Include:
1) Simple explanation of profit formula
2) Real example with numbers
3) Tips to increase profit

Format as JSON:
{
  "explanation": "Simple explanation text",
  "example": {
    "businessType": "type",
    "costPerUnit": 50,
    "sellingPrice": 100,
    "monthlyQuantity": 200,
    "calculation": "step by step",
    "profit": 10000
  },
  "tips": ["tip1", "tip2", "tip3"]
}`,

            businessGuide: `${basePrompt}
Create a step-by-step business guide for:
Business Type: ${additionalContext.businessType || 'Home Business'}
Budget: ${additionalContext.budget || '₹10,000'}
Time Available: ${additionalContext.time || '4 hours/day'}

Include:
1) 7 step-by-step actions to start
2) Investment breakdown
3) Pricing strategy
4) Marketing tips (5 tips)
5) Success tips (5 tips)

Format as JSON:
{
  "steps": ["step1", "step2", ...],
  "investment": {
    "total": "₹10,000",
    "breakdown": ["item1: ₹2000", "item2: ₹3000", ...]
  },
  "pricing": "pricing strategy text",
  "marketing": ["tip1", "tip2", ...],
  "successTips": ["tip1", "tip2", ...]
}`,

            aiChat: `${basePrompt}
User asked: "${additionalContext.userMessage}"

Provide helpful business advice related to their question.
If they ask about a specific business (cooking, tailoring, etc.), provide:
1) Brief overview
2) Investment needed
3) Income potential
4) 3 quick tips to start

Keep response conversational and encouraging (max 150 words).`
        };

        return prompts[contentType] || prompts.aiChat;
    }

    // Call AI API (placeholder - integrate with your preferred AI service)
    async callAI(prompt) {
        // Check cache first
        const cacheKey = `${this.currentLanguage}_${prompt.substring(0, 50)}`;
        if (this.cache.has(cacheKey)) {
            return this.cache.get(cacheKey);
        }

        try {
            // Option 1: OpenAI API
            if (this.apiEndpoint && this.apiKey) {
                const response = await fetch(this.apiEndpoint, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${this.apiKey}`
                    },
                    body: JSON.stringify({
                        model: 'gpt-3.5-turbo',
                        messages: [
                            { role: 'system', content: 'You are a helpful business mentor for homemakers.' },
                            { role: 'user', content: prompt }
                        ],
                        temperature: 0.7,
                        max_tokens: 1000
                    })
                });

                if (!response.ok) {
                    throw new Error('AI API call failed');
                }

                const data = await response.json();
                const result = data.choices[0].message.content;
                
                // Cache the result
                this.cache.set(cacheKey, result);
                return result;
            }

            // Option 2: Fallback to local content
            return this.getFallbackContent(prompt);

        } catch (error) {
            console.error('AI API Error:', error);
            return this.getFallbackContent(prompt);
        }
    }

    // Fallback to pre-generated content if AI fails
    getFallbackContent(prompt) {
        const content = getBusinessContent(this.currentLanguage);
        
        if (prompt.includes('Motivation')) {
            return JSON.stringify({
                tips: [
                    "Start small and grow gradually",
                    "Focus on quality over quantity",
                    "Learn from every customer interaction"
                ],
                story: "Priya started with 3 customers and now serves 40 daily, earning ₹45,000/month.",
                quote: "Every successful business started with one small step."
            });
        }

        if (prompt.includes('Business Ideas')) {
            return JSON.stringify([
                {
                    name: content.businessGuide.skills.cooking,
                    description: "Home-cooked meals for working professionals",
                    investment: "₹5,000-15,000",
                    income: "₹15,000-40,000",
                    difficulty: "Easy"
                },
                {
                    name: content.businessGuide.skills.baking,
                    description: "Custom cakes and baked goods",
                    investment: "₹8,000-20,000",
                    income: "₹20,000-60,000",
                    difficulty: "Medium"
                }
            ]);
        }

        return "I'm here to help you start your home business!";
    }

    // Generate motivation content
    async generateMotivation() {
        const prompt = this.generatePrompt('motivation');
        const response = await this.callAI(prompt);
        
        try {
            return JSON.parse(response);
        } catch (e) {
            return {
                tips: [
                    "Start small and grow gradually",
                    "Focus on quality over quantity",
                    "Learn from every customer"
                ],
                story: "Many women have built successful businesses from home.",
                quote: "Your journey starts with one small step."
            };
        }
    }

    // Generate business ideas
    async generateBusinessIdeas(category = 'General') {
        const prompt = this.generatePrompt('businessIdeas', { category });
        const response = await this.callAI(prompt);
        
        try {
            return JSON.parse(response);
        } catch (e) {
            return this.getFallbackBusinessIdeas();
        }
    }

    // Generate profit calculation explanation
    async generateProfitCalculation(businessType) {
        const prompt = this.generatePrompt('profitCalculation', { businessType });
        const response = await this.callAI(prompt);
        
        try {
            return JSON.parse(response);
        } catch (e) {
            return this.getFallbackProfitCalculation();
        }
    }

    // Generate business guide
    async generateBusinessGuide(businessType, budget, time) {
        const prompt = this.generatePrompt('businessGuide', { 
            businessType, 
            budget, 
            time 
        });
        const response = await this.callAI(prompt);
        
        try {
            return JSON.parse(response);
        } catch (e) {
            return this.getFallbackBusinessGuide();
        }
    }

    // Generate AI chat response
    async generateChatResponse(userMessage) {
        const prompt = this.generatePrompt('aiChat', { userMessage });
        const response = await this.callAI(prompt);
        return response;
    }

    // Fallback business ideas
    getFallbackBusinessIdeas() {
        const content = getBusinessContent(this.currentLanguage);
        return [
            {
                name: content.businessGuide.skills.cooking,
                description: "Home-cooked tiffin service",
                investment: "₹5,000-15,000",
                income: "₹15,000-40,000",
                difficulty: "Easy"
            },
            {
                name: content.businessGuide.skills.tailoring,
                description: "Alteration and stitching services",
                investment: "₹10,000-25,000",
                income: "₹15,000-45,000",
                difficulty: "Medium"
            }
        ];
    }

    // Fallback profit calculation
    getFallbackProfitCalculation() {
        return {
            explanation: "Profit = Total Revenue - Total Expenses",
            example: {
                businessType: "Cooking",
                costPerUnit: 50,
                sellingPrice: 100,
                monthlyQuantity: 200,
                calculation: "Profit = (100 × 200) - (50 × 200) = ₹10,000",
                profit: 10000
            },
            tips: [
                "Buy materials in bulk to reduce costs",
                "Improve quality to justify higher prices",
                "Increase sales through better marketing"
            ]
        };
    }

    // Fallback business guide
    getFallbackBusinessGuide() {
        return {
            steps: [
                "Choose your business type",
                "Calculate initial investment",
                "Arrange necessary materials",
                "Start with 3-5 customers",
                "Focus on quality",
                "Ask for feedback",
                "Grow gradually"
            ],
            investment: {
                total: "₹10,000",
                breakdown: [
                    "Materials: ₹5,000",
                    "Equipment: ₹3,000",
                    "Marketing: ₹2,000"
                ]
            },
            pricing: "Price to cover costs plus 50-100% profit margin",
            marketing: [
                "Use WhatsApp Business",
                "Share on Instagram",
                "Tell friends and family",
                "Offer first-time discounts",
                "Ask for referrals"
            ],
            successTips: [
                "Start small",
                "Be consistent",
                "Focus on quality",
                "Learn continuously",
                "Build relationships"
            ]
        };
    }

    // Set language
    setLanguage(language) {
        this.currentLanguage = language;
    }

    // Configure API
    configureAPI(endpoint, apiKey) {
        this.apiEndpoint = endpoint;
        this.apiKey = apiKey;
    }
}

// Initialize AI Integration
const aiIntegration = new AIIntegration();

// Example: Configure with OpenAI (optional)
// aiIntegration.configureAPI('https://api.openai.com/v1/chat/completions', 'your-api-key');
