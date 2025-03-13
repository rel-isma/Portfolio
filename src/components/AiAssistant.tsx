"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Minus, Send, Bot, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
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

export function AiAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [showClearConfirmation, setShowClearConfirmation] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi, I'm Rachid El ismaiyly Assistant. You can ask me anything about Rachid El ismaiyly.",
      sender: "ai",
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const messageEndRef = useRef<HTMLDivElement>(null);
  const [showActions, setShowActions] = useState(true);
  const [isTyping, setIsTyping] = useState(false);

  const quickActions: QuickAction[] = [
    {
      id: "about",
      text: "Can you introduce yourself?",
    },
    {
      id: "why-best",
      text: "What makes you the best choice for my project?",
    },
    {
      id: "help-project",
      text: "How can you help me with my project?",
    },
    {
      id: "idea-to-website",
      text: "How can you turn my idea into a website?",
    },
    {
      id: "projects",
      text: "What are some projects you've built?",
    }
  ];

  useEffect(() => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    if (messages.length > 1) {
      setShowClearConfirmation(true);
    } else {
      setIsOpen(false);
      setShowActions(true);
    }
  };

  const handleClearConfirm = () => {
    setMessages([messages[0]]);
    setShowClearConfirmation(false);
    setIsOpen(false);
    setShowActions(true);
  };

  const handleClearCancel = () => {
    setShowClearConfirmation(false);
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
        text: "Sorry, there was an error processing your request.",
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
          text: "Sorry, there was an error processing your request.",
          sender: "ai",
        };
        setMessages((prev) => [...prev, errorMsg]);
      }
      setIsTyping(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="fixed  bottom-24 md:bottom-12 right-4 z-50"
          >
            <Button
              onClick={handleOpen}
              className="w-12 h-12 rounded-full bg-primary text-white hover:bg-primary/90 shadow-lg"
            >
              <MessageSquare className="w-6 h-6" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-24 md:bottom-12 right-4 z-50"
          >
            <div
              className={`bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col w-80 md:w-[600px] max-h-[70vh]`}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b bg-primary text-white">
                <div className="flex items-center space-x-2">
                  <h2 className="text-lg font-semibold">
                    Ask M
                  </h2>
                  <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                    built-in
                  </span>
                </div>
                <div className="flex space-x-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                    className="text-white hover:text-gray-200"
                  >
                    <Minus className="w-5 h-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleClose}
                    className="text-white hover:text-gray-200"
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>
              </div>

              <>
                {/* Messages Area */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className="flex items-start space-x-3"
                    >
                      {message.sender === "ai" && (
                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                          <Bot className="w-5 h-5 text-white" />
                        </div>
                      )}
                      <div className="flex-1">
                        <div
                          className={`p-3 rounded-lg ${
                            message.sender === "user"
                              ? "bg-primary text-white ml-auto max-w-[80%]"
                              : "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 max-w-[80%]"
                          }`}
                        >
                          <ReactMarkdown>{message.text}</ReactMarkdown>
                        </div>
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
                  {showActions && (
                    <div className="space-y-2">
                      {quickActions.map((action) => (
                        <button
                          key={action.id}
                          onClick={() => handleQuickAction(action)}
                          className="w-full p-3 text-left rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary hover:bg-primary/10 transition-colors duration-200"
                        >
                          {action.text}
                        </button>
                      ))}
                    </div>
                  )}
                  <div ref={messageEndRef} />
                </div>

                {/* Input Area */}
                <div className="p-4 border-t bg-white dark:bg-gray-800 mt-auto">
                  <div className="relative">
                    <input
                      type="text"
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      placeholder="Ask a question"
                      className="w-full pl-4 pr-12 py-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      onKeyPress={(e) => {
                        if (e.key === "Enter") {
                          handleSendMessage();
                        }
                      }}
                    />
                    <Button
                      onClick={handleSendMessage}
                      className="absolute right-1 top-1 rounded-full w-10 h-10 bg-primary hover:bg-primary/90 text-white transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
                    >
                      <Send className="w-5 h-5" />
                    </Button>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">
                    By chatting, you agree to our terms of service.
                  </p>
                </div>

                {/* Clear Conversation Popup */}
                <AnimatePresence>
                  {showClearConfirmation && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
                    >
                      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 max-w-sm w-full">
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="text-xl font-semibold">
                            Clear conversation
                          </h3>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={handleClearCancel}
                            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                          >
                            <X className="w-5 h-5" />
                          </Button>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 mb-6">
                          All messages in the chat will be cleared. Would you
                          like to clear this conversation?
                        </p>
                        <div className="flex justify-end space-x-3">
                          <Button
                            variant="outline"
                            onClick={handleClearCancel}
                            className="px-4 py-2"
                          >
                            Cancel
                          </Button>
                          <Button
                            onClick={handleClearConfirm}
                            className="px-4 py-2 bg-primary hover:bg-primary/90 text-white"
                          >
                            Clear
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
