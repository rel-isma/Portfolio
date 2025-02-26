"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Minus, Sparkles, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Message {
  id: string;
  type: "user" | "bot";
  text: string;
}

const predefinedQuestions = [
  "Tell me about your services",
  "What technologies do you use?",
  "How can I contact you?",
  "What are your working hours?",
];

export function AiAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      handleBotResponse("Welcome! How can I assist you today?");
    }
  }, [isOpen, messages.length]);

  useEffect(() => {
    scrollToBottom();
  }, [scrollToBottom]);

  const handleBotResponse = async (text: string) => {
	setIsTyping(true);
  
	try {
	  // Call the Next.js API route to get the AI response
	  const response = await fetch("/api/AiAssistant", {
		method: "POST",
		headers: {
		  "Content-Type": "application/json",
		},
		body: JSON.stringify({
		  messages: [
			{
			  role: "user",
			  content: text,
			},
		  ],
		}),
	  });
  
	  const data = await response.json();
	  console.log("API Response:", data); // Log the response
  
	  // Check if the response structure matches your expectations
	  if (data.choices && data.choices.length > 0) {
		const aiResponse = data.choices[0].message.content;
		setMessages((prev) => [
		  ...prev,
		  {
			id: Date.now().toString(),
			type: "bot",
			text: aiResponse,
		  },
		]);
	  } else {
		throw new Error("Invalid response structure from the API");
	  }
	} catch (error) {
	  console.error("Error fetching AI response:", error);
	  setMessages((prev) => [
		...prev,
		{
		  id: Date.now().toString(),
		  type: "bot",
		  text: "Sorry, I couldn't process your request. Please try again.",
		},
	  ]);
	} finally {
	  setIsTyping(false);
	}
  };

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    setMessages((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        type: "user",
        text,
      },
    ]);

    setInputValue("");
    handleBotResponse(text);
  };

  const handlePredefinedQuestion = (question: string) => {
    handleSendMessage(question);
  };

  const handleClose = () => {
    setIsOpen(false);
    setIsMinimized(false);
    setMessages([]);
  };

  return (
    <div className="fixed bottom-24 right-4 z-50">
      {/* Chat Card */}
      <AnimatePresence>
        {isOpen && !isMinimized && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg mb-4 w-[380px] max-h-[600px] flex flex-col"
          >
            {/* Header */}
            <div className="p-4 border-b dark:border-gray-700 bg-primary rounded-t-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold text-white">Ask Me</h3>
                  <span className="px-2 py-1 text-xs bg-white/20 rounded-full text-white">
                    built-in
                  </span>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-white hover:bg-white/20"
                    onClick={() => setIsMinimized(true)}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-white hover:bg-white/20"
                    onClick={handleClose}
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                >
                  {message.type === "bot" && (
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center mr-2">
                      <Sparkles className="w-4 h-4 text-white" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.type === "user"
                        ? "bg-primary text-white"
                        : "bg-gray-100 dark:bg-gray-700"
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Predefined Questions */}
            {messages.length <= 1 && (
              <div className="p-4 grid gap-2">
                {predefinedQuestions.map((question) => (
                  <button
                    key={question}
                    onClick={() => handlePredefinedQuestion(question)}
                    className="text-left p-3 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
                  >
                    {question}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t dark:border-gray-700">
              <div className="flex gap-2">
                <Input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) =>
                    e.key === "Enter" && handleSendMessage(inputValue)
                  }
                  placeholder="Ask a question..."
                  className="flex-1"
                />
                <Button
                  onClick={() => handleSendMessage(inputValue)}
                  disabled={!inputValue.trim()}
                  className="bg-primary text-white hover:bg-primary/90"
                >
                  <Send className="h-5 w-5" />
                </Button>
              </div>
              <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                By chatting, you agree to our terms of service.
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MessageSquare Button */}
      <motion.div
        initial={{ opacity: 1, x: 0 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 1, x: 0 }}
        className="fixed bottom-24 right-4 z-50"
      >
        <Button
          onClick={() => {
            setIsOpen(!isOpen);
            setIsMinimized(false);
          }}
          size="icon"
          className={`rounded-full w-12 h-12 bg-primary text-white hover:bg-primary/90 ${
            isOpen && !isMinimized ? "hidden" : ""
          }`}
        >
          <MessageSquare className="h-6 w-6" />
        </Button>
      </motion.div>
    </div>
  );
}