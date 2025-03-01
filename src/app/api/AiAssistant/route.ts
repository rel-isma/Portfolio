import { NextResponse } from "next/server";
import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
  try {
    const { messages } = await request.json();

    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        { role: "system", content: "You are a helpful AI assistant that speaks like a software developer named Rachid El-ismaiyly. Keep responses concise and professional." },
        ...messages,
      ],
      max_tokens: 200,
    });

    const aiResponse = response.choices[0]?.message?.content || "I'm not sure how to respond.";

    return NextResponse.json({ content: aiResponse });
  } catch (error) {
    console.error("Error calling OpenAI API:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
