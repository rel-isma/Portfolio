"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Minus, Send, Bot } from "lucide-react";
import ReactMarkdown from "react-markdown";

interface QuickAction {
  id: string;
  text: string;
}

interface Message {
  id: number;
  text: string;
  sender: "user" | "ai";
}

interface AiAssistantProps {
  isOpenExternal?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
}

export function AiAssistant({ isOpenExternal, onOpenChange }: AiAssistantProps) {
  const [isOpenInternal, setIsOpenInternal] = useState(false);
  const isOpen = isOpenExternal !== undefined ? isOpenExternal : isOpenInternal;
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm Rachid's AI Assistant. Ask me anything about Rachid's work and expertise.",
      sender: "ai",
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const messageEndRef = useRef<HTMLDivElement>(null);
  const [showActions, setShowActions] = useState(true);
  const [isTyping, setIsTyping] = useState(false);
  const [hasConversationStarted, setHasConversationStarted] = useState(false);

  const quickActions: QuickAction[] = [
    {
      id: "about",
      text: "Tell me about Rachid",
    },
    {
      id: "skills",
      text: "What are his skills?",
    },
    {
      id: "projects",
      text: "Show his projects",
    },
    {
      id: "contact",
      text: "How to contact him?",
    }
  ];

  useEffect(() => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleOpen = () => {
    if (onOpenChange) {
      onOpenChange(true);
    } else {
      setIsOpenInternal(true);
    }
  };

  const handleClose = () => {
    // Clear conversation when closing
    setMessages([
      {
        id: 1,
        text: "Hi! I'm Rachid's AI Assistant. Ask me anything about Rachid's work and expertise.",
        sender: "ai",
      },
    ]);
    setShowActions(true);
    setHasConversationStarted(false);
    
    if (onOpenChange) {
      onOpenChange(false);
    } else {
      setIsOpenInternal(false);
    }
  };

  const transformMessagesForAPI = (msgs: Message[]) =>
    msgs.map((m) => ({
      role: m.sender === "user" ? "user" : "assistant",
      content: m.text,
    }));

  const fetchAIReply = async (conversation: Message[]) => {
    const payloadMessages = transformMessagesForAPI(conversation);
    const response = await fetch("/api/AiAssistant", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ messages: payloadMessages }),
    });
    const data = await response.json();
    return data.content;
  };

  const handleQuickAction = async (action: QuickAction) => {
    const userMessage: Message = {
      id: Date.now(),
      text: action.text,
      sender: "user",
    };
    const newConversation = [...messages, userMessage];
    setMessages(newConversation);
    setShowActions(false);
    setHasConversationStarted(true);
    setIsTyping(true);

    try {
      const aiReply = await fetchAIReply(newConversation);
      const aiMessage: Message = {
        id: Date.now() + 1,
        text: aiReply,
        sender: "ai",
      };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error("Error fetching AI response:", error);
      const errorMsg: Message = {
        id: Date.now() + 1,
        text: "😔 Oops! Something went wrong. Please try again - I'm here to help!",
        sender: "ai",
      };
      setMessages((prev) => [...prev, errorMsg]);
    }
    setIsTyping(false);
  };

  const handleSendMessage = async () => {
    if (inputMessage.trim()) {
      const userMessage: Message = {
        id: Date.now(),
        text: inputMessage,
        sender: "user",
      };
      const newConversation = [...messages, userMessage];
      setMessages(newConversation);
      setInputMessage("");
      setShowActions(false);
      setHasConversationStarted(true);
      setIsTyping(true);

      try {
        const aiReply = await fetchAIReply(newConversation);
        const aiMessage: Message = {
          id: Date.now() + 1,
          text: aiReply,
          sender: "ai",
        };
        setMessages((prev) => [...prev, aiMessage]);
      } catch (error) {
        console.error("Error fetching AI response:", error);
        const errorMsg: Message = {
          id: Date.now() + 1,
          text: "Sorry, something went wrong. Please try again.",
          sender: "ai",
        };
        setMessages((prev) => [...prev, errorMsg]);
      }
      setIsTyping(false);
    }
  };

  return (
    <>
      {/* Clean Floating Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-50"
      >
        <AnimatePresence>
          {!isOpen ? (
            <motion.button
              key="floating-button"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleOpen}
              className="w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center"
            >
              <MessageSquare className="w-6 h-6" />
            </motion.button>
          ) : (
            <motion.button
              key="minimize-button"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                if (onOpenChange) {
                  onOpenChange(false);
                } else {
                  setIsOpenInternal(false);
                }
              }}
              className="w-12 h-12 rounded-full bg-gray-500 hover:bg-gray-600 text-white shadow-lg transition-all duration-200 flex items-center justify-center"
            >
              <Minus className="w-5 h-5" />
            </motion.button>
          )}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-50 bg-white dark:bg-gray-900 flex flex-col"
          >
            {/* Clean Header */}
            <div className="flex items-center justify-between p-4 border-b border-border bg-white dark:bg-gray-900">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                  <Bot className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Rachid&apos;s AI Assistant</h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Online • Ready to help</p>
                </div>
              </div>
              <button
                onClick={handleClose}
                className="w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center justify-center transition-colors"
              >
                <X className="w-6 h-6 text-gray-500" />
              </button>
            </div>

            {/* Messages Area - Full Screen */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/50 dark:bg-gray-800/50">
              <div className="max-w-4xl mx-auto">
                {messages.map((message, index) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"} mb-4`}
                  >
                    {message.sender === "ai" && (
                      <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                        <Bot className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      </div>
                    )}
                    <div
                      className={`max-w-2xl px-4 py-3 rounded-2xl shadow-sm ${
                        message.sender === "user"
                          ? "bg-blue-600 text-white"
                          : "bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-border"
                      }`}
                    >
                      <div className="text-sm lg:text-base">
                        <ReactMarkdown>{message.text}</ReactMarkdown>
                      </div>
                    </div>
                  </motion.div>
                ))}
                
                {/* Typing Indicator */}
                {isTyping && (
                  <div className="flex justify-start mb-4">
                    <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                      <Bot className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="bg-white dark:bg-gray-800 px-4 py-3 rounded-2xl border border-border">
                      <div className="flex space-x-1">
                        <motion.div
                          animate={{ opacity: [0.4, 1, 0.4] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                          className="w-2 h-2 bg-gray-400 rounded-full"
                        />
                        <motion.div
                          animate={{ opacity: [0.4, 1, 0.4] }}
                          transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                          className="w-2 h-2 bg-gray-400 rounded-full"
                        />
                        <motion.div
                          animate={{ opacity: [0.4, 1, 0.4] }}
                          transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
                          className="w-2 h-2 bg-gray-400 rounded-full"
                        />
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Quick Actions */}
                {showActions && !hasConversationStarted && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-4 mt-8"
                  >
                    <div className="text-center">
                      <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        How can I help you today?
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                        Choose a quick question or ask me anything:
                      </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
                      {quickActions.map((action, index) => (
                        <motion.button
                          key={action.id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 + (index * 0.1) }}
                          onClick={() => handleQuickAction(action)}
                          className="text-left p-4 rounded-xl border border-border hover:bg-blue-50 dark:hover:bg-gray-800 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-200 bg-white dark:bg-gray-800/50"
                        >
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            {action.text}
                          </span>
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}
                <div ref={messageEndRef} />
              </div>
            </div>

            {/* Clean Input Area - Fixed at Bottom */}
            <div className="p-4 border-t border-border bg-white dark:bg-gray-900">
              <div className="max-w-4xl mx-auto">
                <div className="flex space-x-3">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="Ask me anything about Rachid..."
                    className="flex-1 px-6 py-3 border border-input rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 text-base"
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        handleSendMessage();
                      }
                    }}
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={!inputMessage.trim()}
                    className="w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 dark:disabled:bg-gray-700 text-white flex items-center justify-center transition-colors shadow-lg"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
