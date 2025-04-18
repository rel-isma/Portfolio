"use client";

import type React from "react";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, X } from "lucide-react";
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
        toast.success("Order submitted successfully! We'll be in touch soon.", {
          duration: 3000,
        });
        onClose();
        setFormState({ name: "", email: "", phone: "", message: "" });
      } else {
        throw new Error("Failed to submit order");
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error("Failed to submit order. Please try again.", {
        duration: 3000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white dark:bg-gray-800 rounded-lg p-4 sm:p-6 w-full max-w-sm sm:max-w-md"
          >
            <div className="flex justify-between items-center mb-3 sm:mb-4">
              <h2 className="text-xl sm:text-2xl font-bold">Order Service</h2>
              <Button variant="ghost" size="icon" onClick={onClose}>
                <X className="h-5 w-5 sm:h-6 sm:w-6" />
              </Button>
            </div>
            <p className="mb-3 sm:mb-4 text-sm sm:text-base">
              You are ordering: {selectedService}
            </p>
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              <Input
                type="text"
                name="name"
                placeholder="Your Name*"
                required
                value={formState.name}
                onChange={handleInputChange}
                className="text-sm sm:text-base"
              />
              <Input
                type="email"
                name="email"
                placeholder="Your Email*"
                required
                value={formState.email}
                onChange={handleInputChange}
                className="text-sm sm:text-base"
              />
              <Input
                type="tel"
                name="phone"
                placeholder="Your Phone Number"
                value={formState.phone}
                onChange={handleInputChange}
                className="text-sm sm:text-base"
              />
              <Textarea
                name="message"
                placeholder="Additional Details"
                value={formState.message}
                onChange={handleInputChange}
                className="text-sm sm:text-base"
              />
              <Button
                type="submit"
                className="w-full text-white py-3 sm:py-4 text-sm sm:text-base"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Submit Order"
                )}
              </Button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
