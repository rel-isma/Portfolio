"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  Phone, 
  Send,
  Clock,
  CheckCircle,
  Loader2,
  Globe,
  Calendar,
  MessageSquare,
  ArrowDown
} from "lucide-react";
import { FaWhatsapp, FaLinkedin, FaDiscord } from "react-icons/fa6";
import Link from "next/link";
import toast from "react-hot-toast";

// Animation component
const AnimatedElement = ({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.6, delay, ease: [0.6, -0.05, 0.01, 0.99] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Message sent successfully! I'll get back to you soon.", {
          duration: 5000,
          icon: "✅",
        });
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          message: ""
        });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.log("Error sending message:", error);
      toast.error("Failed to send message. Please try again or contact me directly.", {
        duration: 5000,
        icon: "❌",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "Drop me an email",
      value: "relismailyly@gmail.com",
      href: "mailto:relismailyly@gmail.com",
      color: "bg-blue-500/10 text-blue-600 border-blue-200"
    },
    {
      icon: FaWhatsapp,
      title: "WhatsApp",
      description: "Quick chat",
      value: "+212 611 563 140",
      href: "https://wa.me/+212611563140",
      color: "bg-green-500/10 text-green-600 border-green-200"
    },
    {
      icon: Phone,
      title: "Phone",
      description: "Give me a call",
      value: "+212 611 563 140",
      href: "tel:+212611563140",
      color: "bg-purple-500/10 text-purple-600 border-purple-200"
    },
    {
      icon: FaDiscord,
      title: "Discord",
      description: "Chat on Discord",
      value: "@rel_isma",
      href: "https://discord.com/users/rel_isma",
      color: "bg-indigo-500/10 text-indigo-600 border-indigo-200"
    },
    {
      icon: FaLinkedin,
      title: "LinkedIn",
      description: "Connect professionally",
      value: "Rachid El Ismaiyly",
      href: "https://linkedin.com/in/rachid-el-ismaiyly",
      color: "bg-blue-700/10 text-blue-700 border-blue-300"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-transparent to-transparent">
        <div className="max-w-7xl mx-auto text-center">
          <AnimatedElement>
            <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-6">
              <MessageSquare className="mr-2 h-4 w-4" />
              Get In Touch
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Let&apos;s Build Something <span className="text-primary">Amazing</span>
              <br />
              Together
            </h1>
            <p className="text-xl text-foreground max-w-3xl mx-auto mb-8 font-medium">
              Have a project in mind? I&apos;m here to help turn your ideas into reality. 
              Reach out and let&apos;s start the conversation.
            </p>
            <Button asChild size="lg" variant="outline">
              <Link href="#contact-form">
                Start Conversation
                <ArrowDown className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </AnimatedElement>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <AnimatedElement delay={0.2}>
            <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Send Me a <span className="text-primary">Message</span>
            </h2>
              <p className="text-lg text-foreground font-medium">
                Fill out the form below and I&apos;ll get back to you within 24 hours.
              </p>
            </div>

            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name*"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="text-lg border-0 border-b-2 border-input rounded-none px-0 py-4 bg-transparent focus-visible:ring-0 focus-visible:border-primary placeholder:text-foreground/50 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <Input
                    type="text"
                    name="company"
                    placeholder="Company Name (Optional)"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="text-lg border-0 border-b-2 border-input rounded-none px-0 py-4 bg-transparent focus-visible:ring-0 focus-visible:border-primary placeholder:text-foreground/50 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email*"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="text-lg border-0 border-b-2 border-input rounded-none px-0 py-4 bg-transparent focus-visible:ring-0 focus-visible:border-primary placeholder:text-foreground/50 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number (Optional)"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="text-lg border-0 border-b-2 border-input rounded-none px-0 py-4 bg-transparent focus-visible:ring-0 focus-visible:border-primary placeholder:text-foreground/50 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Textarea
                  name="message"
                  placeholder="Tell me about your project...*"
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  className="text-lg min-h-[150px] border-0 border-b-2 border-input rounded-none px-0 py-4 bg-transparent focus-visible:ring-0 focus-visible:border-primary resize-none placeholder:text-foreground/50 transition-colors"
                />
              </div>

              <div className="flex justify-center pt-8">
                <Button
                  type="submit"
                  size="lg"
                  className="text-lg px-12 py-6 bg-primary hover:bg-primary/90 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 group"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </AnimatedElement>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <AnimatedElement className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Other Ways to <span className="text-primary">Connect</span>
            </h2>
            <p className="text-lg text-foreground font-medium">
              Choose the communication method that works best for you.
            </p>
          </AnimatedElement>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <AnimatedElement key={method.title} delay={index * 0.1}>
                  <Link href={method.href} target={method.href.startsWith('http') ? '_blank' : undefined}>
                    <motion.div
                      className={`p-6 rounded-2xl border bg-background hover:shadow-lg transition-all duration-300 cursor-pointer h-full text-center group ${method.color}`}
                      whileHover={{ y: -4, scale: 1.02 }}
                    >
                      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-current/10 mb-4 mx-auto">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-base font-semibold mb-1 group-hover:text-primary transition-colors">{method.title}</h3>
                      <p className="text-xs text-foreground/70 mb-3 font-medium">{method.description}</p>
                      <p className="text-sm font-bold text-foreground break-words">{method.value}</p>
                    </motion.div>
                  </Link>
                </AnimatedElement>
              );
            })}
          </div>

        </div>
      </section>
    </div>
  );
}
