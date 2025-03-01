const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const generateScript = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: "Write a two different script for 30 Seconds video on Topic: {topic},\n- Do not ad scene description\n- Do not add anything in braces, just return the plain story text\n- Give me response in JSON format and follow the schema\n- {\n\tscript: [\n\t{\n\tcontent: ''\n\t},\n\t],\n\t}",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "script": [\n    {\n      "content": "Are you tired of feeling drained by midday? Boost your energy naturally. Introducing Energex, the all-natural supplement packed with vitamins and nutrients. Feel the difference. Energex. Power your day, naturally."\n    },\n    {\n      "content": "Don\'t let a slow connection ruin your streaming. Introducing FiberBlast internet! Blazing fast speeds, crystal-clear video calls, and seamless online gaming. Switch to FiberBlast today. The future of internet is here."\n    }\n  ]\n}\n```',
        },
      ],
    },
  ],
});

// const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
// console.log(result.response.text());
