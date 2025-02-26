import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(request: Request) {
  try {
    const { messages } = await request.json();

    // Validate environment variables
    const apiUrl = process.env.DEEPSEEK_API_URL;
    const apiKey = process.env.DEEPSEEK_API_KEY;
    console.log("API URL:", apiUrl);
    console.log("API Key:", apiKey);

    if (!apiUrl || !apiKey) {
      console.error("Missing environment variables");
      return NextResponse.json(
        { message: "Internal server error" },
        { status: 500 }
      );
    }

    // Call the DeepSeek API
    const response = await axios.post(
      apiUrl,
      {
        model: "deepseek-chat", // Replace with the correct model name
        messages: messages,
        max_tokens: 150,
      },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
      }
    );

    // Log the API response for debugging
    console.log("DeepSeek API Response:", response.data);

    // Return the AI response
    return NextResponse.json(response.data);
  } catch (error) {
    console.error("Error calling DeepSeek API:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}