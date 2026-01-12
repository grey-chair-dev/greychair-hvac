
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function getTroubleshootingAdvice(issue: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `A Cincinnati, OH homeowner is reporting this issue: "${issue}". Provide a concise diagnostic.
      Include: 
      1. Potential causes (short list).
      2. Safety warnings if relevant.
      3. A direct recommendation (Call a pro or check a simple breaker).
      Keep it professional, calm, and direct. No fluff. Max 150 words.`,
      config: {
        temperature: 0.1,
        topP: 0.95,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Troubleshooter error:", error);
    return "We are unable to process your request at this moment. Please call us directly for immediate assistance.";
  }
}
