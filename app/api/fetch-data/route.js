// import { GoogleGenerativeAI } from "@google/generative-ai";
import { GoogleGenAI } from "@google/genai";
import { generatePrompt } from "./helperFunction"; // Import the helper function to generate the prompt

export const dynamic = "force-dynamic"; // Force revalidation on every request

export async function POST(req) {
  const  {inputs}  = await req.json(); // Destructure the request body to get topic and words
  console.log("Received inputs:", inputs); // Log the received inputs for debugging
  // const { car, 100 } = await req.json();
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return new Response(JSON.stringify({ error: "API key is missing" }), {
      status: 500,
    });
  }
  const ai = new GoogleGenAI({apiKey:apiKey});

  // console.log("Generated prompt:", contants); // Log the generated prompt for debugging
  try {
    const contents = generatePrompt(inputs);
    const response=await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: contents,
      
    });
    
    console.log("Response from Gemini:", response);
    const unfilteredJsonString = response.text; // Extract text output
    const jsonString = unfilteredJsonString.replace(/```json|```/g, "");
    const jsonData = JSON.parse(jsonString);

    return new Response(JSON.stringify(jsonData), { status: 200 });
    // return new Response(JSON.stringify(response), { status: 200 });
  } catch (error) {
    return new Response(

      // JSON.stringify({ error: "Failed to fetch typing data" }),
      JSON.stringify({ error: error.message || "Failed to fetch  data" }),
      { status: 500 }
    );
  }
}
