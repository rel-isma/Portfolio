import { NextResponse } from "next/server";
import { CohereClient } from "cohere-ai";

const cohere = new CohereClient({
  token: process.env.COHERE_API_KEY,
});

export async function POST(request: Request) {
  try {
    const { messages } = await request.json();

    // Get the last user message
    const lastMessage = messages[messages.length - 1].content;

    // Call the Cohere API
    const response = await cohere.generate({
      prompt: lastMessage,
      maxTokens: 150,
    });

    // Return the AI response
    return NextResponse.json({ content: response.generations[0].text });
  } catch (error) {
    console.error("Error calling Cohere API:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}