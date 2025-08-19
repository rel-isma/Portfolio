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
  MessageSquare, 
  Clock,
  CheckCircle,
  Loader2,
  Globe,
  Calendar
} from "lucide-react";
import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa6";
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
      description: "Get in touch via email",
      value: "relismailyly@gmail.com",
      href: "mailto:relismailyly@gmail.com",
      color: "bg-blue-500/10 text-blue-600 border-blue-200"
    },
    {
      icon: FaWhatsapp,
      title: "WhatsApp",
      description: "Quick chat on WhatsApp",
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
    }
  ];

  const socialLinks = [
    {
      icon: FaLinkedin,
      name: "LinkedIn",
      href: "https://linkedin.com/in/rachid-el-ismaiyly",
      color: "hover:text-blue-600"
    },
    {
      icon: FaGithub,
      name: "GitHub", 
      href: "https://github.com/rel-isma",
      color: "hover:text-gray-900 dark:hover:text-white"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
        
        <div className="max-w-4xl mx-auto relative text-center">
          <AnimatedElement>
            <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-6">
              <MessageSquare className="mr-2 h-4 w-4" />
              Let&apos;s Work Together
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Ready to <span className="text-primary">Start</span> Your Next Project?
            </h1>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
              I&apos;m here to help bring your ideas to life. Whether you need a modern website, 
              web application, or custom software solution, let&apos;s discuss how we can work together.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16 max-w-2xl mx-auto">
              <div className="text-center p-6 bg-background/80 backdrop-blur-sm rounded-2xl border">
                <div className="text-3xl font-bold text-primary mb-2">24h</div>
                <div className="text-sm text-muted-foreground">Response Time</div>
              </div>
              <div className="text-center p-6 bg-background/80 backdrop-blur-sm rounded-2xl border">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Projects Done</div>
              </div>
              <div className="text-center p-6 bg-background/80 backdrop-blur-sm rounded-2xl border">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Satisfaction</div>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <AnimatedElement delay={0.2}>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Send Me a <span className="text-primary">Message</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Fill out the form below and I&apos;ll get back to you within 24 hours.
              </p>
            </div>

            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <Input
                    type="text"
                    name="name"
                    placeholder="Name*"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="text-lg border-0 border-b-2 border-gray-300 dark:border-gray-700 rounded-none px-0 py-4 bg-transparent focus-visible:ring-0 focus-visible:border-primary placeholder:text-gray-500 dark:placeholder:text-gray-400 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <Input
                    type="text"
                    name="company"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="text-lg border-0 border-b-2 border-gray-300 dark:border-gray-700 rounded-none px-0 py-4 bg-transparent focus-visible:ring-0 focus-visible:border-primary placeholder:text-gray-500 dark:placeholder:text-gray-400 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email*"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="text-lg border-0 border-b-2 border-gray-300 dark:border-gray-700 rounded-none px-0 py-4 bg-transparent focus-visible:ring-0 focus-visible:border-primary placeholder:text-gray-500 dark:placeholder:text-gray-400 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="text-lg border-0 border-b-2 border-gray-300 dark:border-gray-700 rounded-none px-0 py-4 bg-transparent focus-visible:ring-0 focus-visible:border-primary placeholder:text-gray-500 dark:placeholder:text-gray-400 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Textarea
                  name="message"
                  placeholder="A Few Words*"
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  className="text-lg min-h-[150px] border-0 border-b-2 border-gray-300 dark:border-gray-700 rounded-none px-0 py-4 bg-transparent focus-visible:ring-0 focus-visible:border-primary resize-none placeholder:text-gray-500 dark:placeholder:text-gray-400 transition-colors"
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
              Other Ways to <span className="text-primary">Reach Me</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Choose the communication method that works best for you.
            </p>
          </AnimatedElement>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <AnimatedElement key={method.title} delay={index * 0.1}>
                  <Link href={method.href} target={method.href.startsWith('http') ? '_blank' : undefined}>
                    <motion.div
                      className={`p-8 rounded-2xl border bg-background hover:shadow-lg transition-all duration-300 cursor-pointer h-full text-center group ${method.color}`}
                      whileHover={{ y: -4, scale: 1.02 }}
                    >
                      <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-current/10 mb-6 mx-auto">
                        <Icon className="w-8 h-8" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{method.title}</h3>
                      <p className="text-muted-foreground mb-4">{method.description}</p>
                      <p className="font-medium">{method.value}</p>
                    </motion.div>
                  </Link>
                </AnimatedElement>
              );
            })}
          </div>

          {/* Social Links & Additional Info */}
          <AnimatedElement delay={0.4} className="text-center">
            <h3 className="text-2xl font-bold mb-8">Let&apos;s Connect</h3>
            <div className="flex justify-center space-x-6 mb-12">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Link key={social.name} href={social.href} target="_blank">
                    <motion.div
                      className={`p-6 rounded-2xl bg-background border hover:bg-primary/5 transition-all duration-300 ${social.color}`}
                      whileHover={{ scale: 1.05, y: -4 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon className="w-8 h-8" />
                    </motion.div>
                  </Link>
                );
              })}
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <motion.div 
                className="flex items-center justify-center space-x-3 p-6 bg-background rounded-2xl border"
                whileHover={{ scale: 1.02 }}
              >
                <Clock className="w-6 h-6 text-primary" />
                <span className="font-medium">24h Response</span>
              </motion.div>
              <motion.div 
                className="flex items-center justify-center space-x-3 p-6 bg-background rounded-2xl border"
                whileHover={{ scale: 1.02 }}
              >
                <Globe className="w-6 h-6 text-primary" />
                <span className="font-medium">Morocco (GMT+1)</span>
              </motion.div>
              <motion.div 
                className="flex items-center justify-center space-x-3 p-6 bg-background rounded-2xl border"
                whileHover={{ scale: 1.02 }}
              >
                <Calendar className="w-6 h-6 text-primary" />
                <span className="font-medium">Available Mon-Sat</span>
              </motion.div>
              <motion.div 
                className="flex items-center justify-center space-x-3 p-6 bg-background rounded-2xl border"
                whileHover={{ scale: 1.02 }}
              >
                <CheckCircle className="w-6 h-6 text-primary" />
                <span className="font-medium">Free Consultation</span>
              </motion.div>
            </div>
          </AnimatedElement>
        </div>
      </section>
    </div>
  );
}
