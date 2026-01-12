
import { GoogleGenAI, Type } from "@google/genai";

function getGeminiApiKey(): string | undefined {
  // Standard Vite exposure (preferred)
  const fromVite =
    import.meta.env.VITE_GEMINI_API_KEY ?? import.meta.env.GEMINI_API_KEY;
  if (typeof fromVite !== "string") return undefined;
  const trimmed = fromVite.trim();
  if (!trimmed) return undefined;
  if (trimmed === "PLACEHOLDER_API_KEY") return undefined;
  return trimmed;
}

export async function getTroubleshootingAdvice(issue: string) {
  const apiKey = getGeminiApiKey();
  if (!apiKey) {
    return "AI Troubleshooter is not configured. Set GEMINI_API_KEY in .env.local (replace the placeholder) and restart the dev server.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
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
