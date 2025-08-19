"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { 
  Globe, 
  LayoutGrid, 
  Lightbulb, 
  Check, 
  ArrowUpRight, 
  Star,
  Code,
  Rocket,
  Zap,
  Shield,
  Users,
  Headphones
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { OrderServiceModal } from "@/components/order-service-modal";

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

export default function ServicesPage() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const handleOrderService = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    setIsOrderModalOpen(true);
  };

  const services = [
    {
      title: "Static Website Development",
      description: "Lightning-fast, SEO-optimized static websites perfect for portfolios, landing pages, and business showcases.",
      features: [
        "Blazing fast load times (< 2s)",
        "Mobile-first responsive design",
        "Advanced SEO optimization",
        "Modern UI/UX design",
        "Performance optimization",
        "Easy content management",
      ],
      icon: Globe,
      price: "Starting at $800",
      timeline: "1-2 weeks",
      popular: false,
    },
    {
      title: "Dynamic Web Applications",
      description: "Full-featured web applications with databases, user authentication, and real-time functionality.",
      features: [
        "Custom database design",
        "User authentication & authorization",
        "Real-time updates & notifications",
        "API development & integration",
        "Scalable architecture",
        "Admin dashboard",
        "Payment integration",
        "Advanced security measures",
      ],
      icon: LayoutGrid,
      price: "Starting at $2,500",
      timeline: "4-8 weeks",
      popular: true,
    },
    {
      title: "Custom Software Solutions",
      description: "Transform your unique business ideas into fully functional, scalable software applications.",
      features: [
        "Requirements analysis & planning",
        "Custom architecture design",
        "Full-stack development",
        "Third-party integrations",
        "Testing & quality assurance",
        "Deployment & hosting setup",
        "Ongoing support & maintenance",
        "Performance monitoring",
      ],
      icon: Lightbulb,
      price: "Starting at $5,000",
      timeline: "8-16 weeks",
      popular: false,
    },
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We start by understanding your goals, target audience, and project requirements through detailed discussions.",
      icon: Users,
    },
    {
      step: "02", 
      title: "Design & Prototyping",
      description: "Creating wireframes and design mockups to visualize the final product before development begins.",
      icon: Code,
    },
    {
      step: "03",
      title: "Development",
      description: "Building your application using modern technologies and best practices, with regular progress updates.",
      icon: Rocket,
    },
    {
      step: "04",
      title: "Testing & Launch",
      description: "Comprehensive testing across devices and browsers, followed by deployment and go-live support.",
      icon: Zap,
    },
    {
      step: "05",
      title: "Support & Maintenance",
      description: "Ongoing support, updates, and maintenance to ensure your application stays secure and performs optimally.",
      icon: Shield,
    },
  ];

  const benefits = [
    {
      title: "Fast Delivery",
      description: "Quick turnaround times without compromising on quality",
      icon: Zap,
    },
    {
      title: "Modern Technology",
      description: "Using the latest tools and frameworks for optimal performance",
      icon: Code,
    },
    {
      title: "Responsive Design",
      description: "Perfect experience across all devices and screen sizes",
      icon: LayoutGrid,
    },
    {
      title: "SEO Optimized",
      description: "Built-in SEO best practices for better search visibility",
      icon: Globe,
    },
    {
      title: "Secure & Reliable",
      description: "Following security best practices and reliable hosting",
      icon: Shield,
    },
    {
      title: "Ongoing Support",
      description: "Continued support and maintenance after project completion",
      icon: Headphones,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-transparent to-transparent">
        <div className="max-w-7xl mx-auto text-center">
          <AnimatedElement>
            <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-6">
              <Star className="mr-2 h-4 w-4" />
              Professional Services
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Transforming <span className="text-primary">Ideas</span> into
              <br />
              Digital <span className="text-primary">Reality</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              From simple websites to complex web applications, I provide comprehensive 
              development services tailored to your unique business needs.
            </p>
            <Button asChild size="lg">
              <Link href="#services">
                Explore Services
                <ArrowUpRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </AnimatedElement>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedElement className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Choose Your Perfect <span className="text-primary">Solution</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Whether you need a simple website or a complex application, I have the expertise to deliver.
            </p>
          </AnimatedElement>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <AnimatedElement key={index} delay={index * 0.1}>
                  <motion.div
                    className={`relative h-full bg-background rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${
                      service.popular 
                        ? 'border-primary bg-gradient-to-br from-primary/5 to-transparent' 
                        : 'border-transparent hover:border-primary/20'
                    }`}
                    whileHover={{ y: -8 }}
                  >
                    {service.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium">
                          Most Popular
                        </span>
                      </div>
                    )}

                    <div className="flex items-center justify-between mb-6">
                      <div className="p-3 rounded-2xl bg-primary/10 text-primary">
                        <Icon className="h-8 w-8" />
                      </div>
                      <ArrowUpRight className="h-5 w-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>

                    <div className="mb-6">
                      <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                      <p className="text-muted-foreground mb-4">{service.description}</p>
                      
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-2xl font-bold text-primary">{service.price}</span>
                        <span className="text-sm text-muted-foreground">{service.timeline}</span>
                      </div>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center text-sm">
                          <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Button
                      className="w-full"
                      variant={service.popular ? "default" : "outline"}
                      onClick={() => handleOrderService(service.title)}
                    >
                      Get Started
                      <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Button>
                  </motion.div>
                </AnimatedElement>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <AnimatedElement className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              My <span className="text-primary">Process</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery every time.
            </p>
          </AnimatedElement>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => {
              const Icon = step.icon;
              return (
                <AnimatedElement key={index} delay={index * 0.1}>
                  <motion.div
                    className="relative bg-background rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                    whileHover={{ y: -4 }}
                  >
                    <div className="flex items-center mb-4">
                      <span className="text-4xl font-bold text-primary/20 mr-4">
                        {step.step}
                      </span>
                      <div className="p-2 rounded-xl bg-primary/10 text-primary">
                        <Icon className="h-6 w-6" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </motion.div>
                </AnimatedElement>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedElement className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Why Choose <span className="text-primary">My Services</span>?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The advantages you get when working with me on your next project.
            </p>
          </AnimatedElement>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <AnimatedElement key={index} delay={index * 0.1}>
                  <motion.div
                    className="text-center p-6 rounded-2xl hover:bg-muted/50 transition-colors duration-300"
                    whileHover={{ y: -4 }}
                  >
                    <div className="inline-flex p-4 rounded-2xl bg-primary/10 text-primary mb-4">
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </motion.div>
                </AnimatedElement>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-transparent to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedElement>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Start Your <span className="text-primary">Project</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss your ideas and create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">
                  Hire Me
                  <ArrowUpRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/projects">
                  View My Work
                  <LayoutGrid className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </AnimatedElement>
        </div>
      </section>

      <OrderServiceModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        selectedService={selectedService}
      />
    </div>
  );
}
