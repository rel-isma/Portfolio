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

export function AiAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showClearModal, setShowClearModal] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const assistantRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (isOpen) {
      if (messages.length === 0) {
        handleBotResponse("Welcome! How can I assist you today?");
      } else {
        scrollToBottom();
      }
    }
  }, [isOpen, messages.length, scrollToBottom]);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        assistantRef.current &&
        !assistantRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const handleBotResponse = async (text: string) => {
    setIsTyping(true);
    try {
      const response = await fetch("/api/AiAssistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [{ role: "user", content: text }] }),
      });
      const data = await response.json();
      setMessages((prev) => [
        ...prev,
        { id: Date.now().toString(), type: "bot", text: data.content },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          type: "bot",
          text: "Sorry, something went wrong.",
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
      { id: Date.now().toString(), type: "user", text },
    ]);
    setInputValue("");
    handleBotResponse(text);
  };

  const handleClose = () => {
    if (messages.length > 0) {
      setShowClearModal(true);
    } else {
      setIsOpen(false);
    }
  };

  const confirmClear = () => {
    setMessages([]);
    setShowClearModal(false);
    setIsOpen(false);
  };

  const cancelClear = () => {
    setShowClearModal(false);
  };

  return (
    <div className="fixed bottom-40 md:bottom-24 right-4 z-50">
      <AnimatePresence>
        {isOpen && !isMinimized && (
          <motion.div
            ref={assistantRef}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg w-96 max-h-[500px] flex flex-col overflow-hidden relative"
          >
            <div className="p-4 border-b bg-primary text-white flex justify-between items-center">
              <h3 className="text-lg font-semibold">Ask Me</h3>
              <div className="flex gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMinimized(true)}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" onClick={handleClose}>
                  <X className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Clear Conversation Modal - Now inside the assistant component */}
            {showClearModal && (
              <div className="absolute inset-0 bg-gray-900/60 flex items-center justify-center z-10">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 max-w-[90%] mx-auto">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-lg font-semibold">Clear conversation</h3>
                    <Button variant="ghost" size="icon" onClick={cancelClear}>
                      <X className="h-5 w-5" />
                    </Button>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm">
                    All messages in the chat will be cleared. Would you like to
                    clear this conversation?
                  </p>
                  <div className="flex justify-end gap-2">
                    <Button
                      variant="outline"
                      onClick={cancelClear}
                      size="sm"
                      className="w-20"
                    >
                      Cancel
                    </Button>
                    <Button
                      variant="default"
                      onClick={confirmClear}
                      size="sm"
                      className="w-20 bg-primary hover:bg-primary/90"
                    >
                      Clear
                    </Button>
                  </div>
                </div>
              </div>
            )}

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
                >
                  {msg.type === "bot" && (
                    <Sparkles className="w-5 h-5 text-primary mr-2" />
                  )}
                  <div
                    className={`p-3 rounded-lg ${msg.type === "user" ? "bg-primary text-white" : "bg-gray-200 dark:bg-gray-700"}`}
                  >
                    {msg.text}
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

            <div className="p-4 border-t flex gap-2">
              <Input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) =>
                  e.key === "Enter" && handleSendMessage(inputValue)
                }
                placeholder="Ask a question..."
                className="flex-1"
              />
              <Button
                onClick={() => handleSendMessage(inputValue)}
                disabled={!inputValue.trim()}
              >
                <Send className="h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Button
        onClick={() => {
          setIsOpen(!isOpen);
          setIsMinimized(false);
        }}
        className={`fixed bottom-40 md:bottom-24 right-4 rounded-full w-12 h-12 bg-primary text-white hover:bg-primary/90 ${isOpen && !isMinimized ? "hidden" : ""}`}
      >
        <MessageSquare className="h-6 w-6" />
      </Button>
    </div>
  );
}