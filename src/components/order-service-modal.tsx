"use client";

import type React from "react";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, X, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import toast from "react-hot-toast";

interface OrderServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedService: string;
}

export function OrderServiceModal({
  isOpen,
  onClose,
  selectedService,
}: OrderServiceModalProps) {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/order-service", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formState, service: selectedService }),
      });

      if (response.ok) {
        toast.success("Request submitted successfully! We'll be in touch soon.", {
          duration: 4000,
        });
        onClose();
        setFormState({ name: "", email: "", phone: "", message: "" });
      } else {
        throw new Error("Failed to submit request");
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error("Failed to submit request. Please try again.", {
        duration: 3000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />
          
          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
            <motion.div
              initial={{ scale: 1, opacity: 0, y: "100%" }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 1, opacity: 0, y: "100%" }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full sm:max-w-md sm:mx-auto bg-background border-0 sm:border sm:rounded-xl shadow-2xl overflow-hidden max-h-[95vh] sm:max-h-[90vh] overflow-y-auto sm:rounded-b-xl rounded-t-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Mobile Handle */}
              <div 
                className="sm:hidden flex justify-center py-3 bg-background cursor-pointer" 
                onClick={onClose}
              >
                <div className="w-10 h-1 bg-muted-foreground/30 rounded-full"></div>
              </div>

              {/* Compact Header */}
              <div className="relative bg-gradient-to-r from-primary to-primary/80 px-4 py-4 text-white">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onClose}
                  className="absolute top-2 right-2 text-white hover:bg-white/20 rounded-full h-8 w-8"
                >
                  <X className="h-4 w-4" />
                </Button>
                
                <div className="pr-10">
                  <div className="flex items-center space-x-2 mb-2">
                    <Star className="h-5 w-5" />
                    <h2 className="text-lg font-bold">Get Quote</h2>
                  </div>
                  <div className="bg-white/20 rounded px-2 py-1">
                    <p className="text-xs font-medium truncate">{selectedService}</p>
                  </div>
                </div>
              </div>

              {/* Compact Form */}
              <div className="p-4 pb-6">
                <form onSubmit={handleSubmit} className="space-y-3">
                  {/* Name & Email in Grid */}
                  <div className="grid grid-cols-1 gap-3">
                    <Input
                      type="text"
                      name="name"
                      placeholder="Full Name *"
                      required
                      value={formState.name}
                      onChange={handleInputChange}
                      className="h-11 bg-muted/30 border border-border/60 focus:border-primary focus:ring-2 focus:ring-primary/20 text-base rounded-lg"
                    />
                    <Input
                      type="email"
                      name="email"
                      placeholder="Email Address *"
                      required
                      value={formState.email}
                      onChange={handleInputChange}
                      className="h-11 bg-muted/30 border border-border/60 focus:border-primary focus:ring-2 focus:ring-primary/20 text-base rounded-lg"
                    />
                  </div>

                  {/* Phone */}
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number (optional)"
                    value={formState.phone}
                    onChange={handleInputChange}
                    className="h-11 bg-muted/30 border border-border/60 focus:border-primary focus:ring-2 focus:ring-primary/20 text-base rounded-lg"
                  />

                  {/* Project Details */}
                  <Textarea
                    name="message"
                    placeholder="Project details & requirements..."
                    value={formState.message}
                    onChange={handleInputChange}
                    rows={3}
                    className="bg-muted/30 border border-border/60 focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none text-base min-h-[80px] rounded-lg"
                  />

                  {/* Compact Info */}
                  <div className="bg-primary/5 border border-primary/20 rounded-lg p-3">
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      💡 We&apos;ll respond within 24 hours with a custom quote and timeline.
                    </p>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    className="w-full h-12 font-medium text-base mt-4"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Request
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
