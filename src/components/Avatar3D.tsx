"use client"

import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import {
  Download,
  ArrowUpRight,
  Github,
  Send,
  Loader2,
  Instagram,
  Linkedin,
  Globe,
  Lightbulb,
  Check,
} from "lucide-react"
import { FaDiscord, FaWhatsapp } from "react-icons/fa6"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { staggerContainer } from "@/lib/animations"
import { useEffect, useState } from "react"
import { scrollAnimation } from "@/lib/animations"
import type React from "react"
import { AiAssistant } from "@/components/AiAssistant"
import { Star, Mail, Phone, GraduationCap, MapPin, Heart, Briefcase, LayoutGrid } from "lucide-react"
import { projects } from "@/lib/projectData"

// 🔹 Animated Section (With Scroll Tracking)
const AnimatedSection = ({ children, className, id }: { children: React.ReactNode; className: string; id: string }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.section
      id={id}
      ref={ref}
      initial="initial"
      animate={inView ? "animate" : "initial"}
      variants={staggerContainer}
      className={className}
    >
      {children}
    </motion.section>
  )
}

// 🔹 Animated Element (Now Works Like AnimatedSection)
const AnimatedElement = ({ children, className }: { children: React.ReactNode; className: string }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={inView ? "animate" : "initial"}
      variants={scrollAnimation}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export { AnimatedSection, AnimatedElement }

export default function Home() {
  const [typedText, setTypedText] = useState("")
  const fullText = "Full-Stack Web Developer"
  const { toast } = useToast()

  useEffect(() => {
    let i = 0
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(typingInterval)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [])

  const [formState, setFormState] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      })

      if (response.ok) {
        toast({
          title: "Success!",
          description: "Message sent successfully!",
          variant: "default",
        })
        setFormState({
          name: "",
          company: "",
          email: "",
          phone: "",
          message: "",
        })
      } else {
        toast({
          title: "Error",
          description: "Failed to send message. Please try again.",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleOrderService = (serviceTitle: string) => {
    toast({
      title: "Service Order Initiated",
      description: `You've started the order process for ${serviceTitle}. I'll be in touch shortly to discuss your project details.`,
      variant: "default",
    })
    // Here you would typically also send an email or create a database entry for the order
  }

  return (
    <div className="flex flex-col min-h-full bg-gradient-radial from-background to-background/80 dark:from-background-dark dark:to-background-dark/80">
      <AnimatedSection id="home" className="py-16 lg:py-24">
        <AnimatedElement className={""}>
          <h1 className="text-4xl lg:text-6xl font-bold space-y-4">
            <span className="text-foreground/60 dark:text-foreground-dark/60">Hi! I&apos;m</span>
            <br />
            <span className="text-primary">Rachid</span> El-Ismailyly
          </h1>
        </AnimatedElement>
        <AnimatedElement className={""}>
          <h2 className="text-2xl lg:text-4xl font-bold mt-6 flex items-center">
            <span className="text-primary mr-2">&gt;</span> {typedText}
          </h2>
        </AnimatedElement>
        <AnimatedElement className={""}>
          <p className="mt-8 text-lg lg:text-xl leading-relaxed max-w-3xl">
            I Build All Kinds Of <span className="text-primary">Websites</span> And{" "}
            <span className="text-primary">Web Applications</span> That Help Businesses Grow And Meet Their Needs. From
            Interactive User Interfaces To Powerful Backend Systems, I Focus On Delivering{" "}
            <span className="text-primary">High-Quality</span>, Scalable, And{" "}
            <span className="text-primary">User-Friendly</span> Solutions.
          </p>
        </AnimatedElement>
        <AnimatedElement className={""}>
          <div className="flex flex-col sm:flex-row gap-4 mt-12">
            <Button className="text-lg sm:text-base px-8 py-6 text-white" href="/projects">
              <LayoutGrid className="mr-2 h-5 w-5" />
              My works
            </Button>
            <Button
              href="/Rachid_El_ismaiyly_Full-Stack.pdf"
              target="_blank"
              className="text-lg sm:text-base px-8 py-6"
              variant="outline"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>
        </AnimatedElement>
      </AnimatedSection>

      <AnimatedSection id="portfolio" className="pb-16 lg:py-24 scroll-mt-16">
        <AnimatedElement className="grid lg:grid-cols-2 gap-12 mb-12">
          <div className="space-y-4">
            <div className="inline-flex items-center rounded-full border bg-white dark:bg-secondary shadow-sm px-3 py-1 text-sm font-semibold">
              <Star className="mr-1.5 h-4 w-4" />
              Portfolio
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              My latest
              <br />
              awesome <span className="text-primary">Projects</span>
            </h2>
          </div>
          <AnimatedElement className="group relative overflow-hidden rounded-3xl bg-white dark:bg-secondary shadow-lg">
            <Link href={`/projects/${projects[0].slug}`}>
              <div className="aspect-[4/3] relative">
                <Image
                  src={projects[0].image || "/placeholder.svg"}
                  alt={projects[0].title}
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  fill
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 p-6 text-white">
                  <span className="text-sm font-medium px-3 py-1 rounded-full bg-primary/20 backdrop-blur-sm">
                    {projects[0].category}
                  </span>
                  <h3 className="text-2xl font-bold mt-2">{projects[0].title}</h3>
                  <div className="mt-4 inline-flex items-center text-sm font-semibold border-b border-white/30 hover:border-white transition-colors">
                    View Project
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </div>
            </Link>
          </AnimatedElement>
        </AnimatedElement>

        <AnimatedElement className="grid lg:grid-cols-2 gap-12 mb-12">
          {projects.slice(1, 3).map((project) => (
            <AnimatedElement
              key={project.id}
              className="group relative overflow-hidden rounded-3xl bg-white dark:bg-secondary shadow-lg"
            >
              <Link href={`/projects/${project.slug}`}>
                <div className="aspect-[4/3] relative">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    fill
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 p-6 text-white">
                    <span className="text-sm font-medium px-3 py-1 rounded-full bg-primary/20 backdrop-blur-sm">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-bold mt-2">{project.title}</h3>
                    <div className="mt-4 inline-flex items-center text-sm font-semibold border-b border-white/30 hover:border-white transition-colors">
                      View Project
                      <ArrowUpRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </AnimatedElement>
          ))}
        </AnimatedElement>

        <AnimatedElement className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedElement className="group relative overflow-hidden rounded-3xl bg-white dark:bg-secondary shadow-lg">
            <Link href={`/projects/${projects[3].slug}`}>
              <div className="aspect-[4/3] relative">
                <Image
                  src={projects[3].image || "/placeholder.svg"}
                  alt={projects[3].title}
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  fill
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 p-6 text-white">
                  <span className="text-sm font-medium px-3 py-1 rounded-full bg-primary/20 backdrop-blur-sm">
                    {projects[3].category}
                  </span>
                  <h3 className="text-2xl font-bold mt-2">{projects[3].title}</h3>
                  <div className="mt-4 inline-flex items-center text-sm font-semibold border-b border-white/30 hover:border-white transition-colors">
                    View Project
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </div>
            </Link>
          </AnimatedElement>

          <AnimatedElement className="flex justify-center">
            <Link
              href="/projects"
              className="inline-flex items-center text-2xl font-semibold hover:text-primary transition-colors group"
            >
              View all projects
              <ArrowUpRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </AnimatedElement>
        </AnimatedElement>
      </AnimatedSection>

      <AnimatedSection id="service" className="py-16 lg:py-24 scroll-mt-16">
        <AnimatedElement className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="inline-flex items-center rounded-full border bg-white dark:bg-secondary shadow-sm px-3 py-1 text-sm font-semibold mb-4">
              <Star className="mr-1.5 h-4 w-4" />
              Services
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-4">
              Transforming <span className="text-primary">Ideas</span> into{" "}
              <span className="text-primary">Digital Reality</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Explore my range of full-stack development services tailored to your needs
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {[
              {
                title: "Static Website Development",
                description:
                  "Fast, responsive, and SEO-friendly static websites perfect for showcasing your brand or portfolio.",
                features: ["Blazing fast load times", "Responsive design", "SEO optimization", "Easy maintenance"],
                icon: <Globe className="h-8 w-8" />,
              },
              {
                title: "Dynamic Website Creation",
                description:
                  "Powerful, interactive websites with database integration for complex functionalities and user engagement.",
                features: ["User authentication", "Database integration", "Real-time updates", "Scalable architecture"],
                icon: <LayoutGrid className="h-8 w-8" />,
              },
              {
                title: "Idea to Code Conversion",
                description: "Transform your startup or company ideas into fully functional web applications.",
                features: [
                  "Concept refinement",
                  "Prototype development",
                  "Full-stack implementation",
                  "Iterative development",
                ],
                icon: <Lightbulb className="h-8 w-8" />,
              },
            ].map((service, index) => (
              <AnimatedElement key={index} className="group">
                <div className="h-full bg-white dark:bg-secondary rounded-3xl p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-2xl bg-primary/10 text-primary">{service.icon}</div>
                    <ArrowUpRight className="h-5 w-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                        <Check className="h-5 w-5 text-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant="outline" onClick={() => handleOrderService(service.title)}>
                    Order Service
                  </Button>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </AnimatedElement>
      </AnimatedSection>

      <AnimatedSection id="about" className="py-16 lg:py-24 scroll-mt-16">
        <AnimatedElement className="space-y-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full border bg-white dark:bg-secondary shadow-sm px-3 py-1 text-sm font-semibold">
                <Star className="mr-1.5 h-4 w-4" />
                About Me
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-10">
                Why you <span className="text-primary">hire me</span> for your next{" "}
                <span className="text-primary">project</span>?
              </h2>
              <AnimatedElement className="space-y-6">
                <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                  I&apos;m A Full-Stack Developer Specializing In Modern Web Applications. With Expertise In React,
                  Django, And Software Development, I Deliver Clean, Efficient Solutions That Work. Let Me Turn Your
                  Ideas Into Reality.
                </p>
                <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                  As A Graduate Of 1337 School, I Bring Strong Problem-Solving Skills And A Collaborative Mindset.
                  I&apos;m Committed To Delivering Quality Solutions That Exceed Your Expectations.
                </p>
                <Button href="/#contact" className="text-lg px-8 py-6 text-white">
                  Hire Me
                </Button>
              </AnimatedElement>
            </div>
            <AnimatedElement className="relative h-[400px] md:h-[600px] w-full">
              {/* Placeholder for future 3D avatar */}
              <div className="w-full h-full bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl flex items-center justify-center">
                <p className="text-lg font-semibold text-gray-500 dark:text-gray-400">3D Avatar Coming Soon</p>
              </div>
            </AnimatedElement>
          </div>

          <div className="space-y-8">
            <h3 className="text-3xl font-bold">Quick Info</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: "relismailyly@gmail.com",
                  href: "mailto:relismailyly@gmail.com",
                },
                {
                  icon: Phone,
                  label: "Phone",
                  value: "+21211563140",
                  href: "tel:+21211563140",
                },
                {
                  icon: GraduationCap,
                  label: "Education",
                  value: "1337 School",
                  subtext: "Computer Science Engineering",
                  href: "https://1337.ma",
                },
                {
                  icon: MapPin,
                  label: "Location",
                  value: "Taounate, Morocco",
                  href: "https://maps.google.com/?q=Taounate,Morocco",
                },
                {
                  icon: Briefcase,
                  label: "Work Preference",
                  value: "Remote, Flexible Hours",
                  subtext: "Open to night shifts",
                },
                {
                  icon: Heart,
                  label: "Interests",
                  value: "Traveling, Cricket, Football, Design, Reading, Cooking, Biking, Exercise",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl bg-white dark:bg-secondary p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="relative z-10 space-y-3">
                    <div className="inline-flex p-3 rounded-lg bg-primary/10 text-primary mb-4">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">{item.label}</h3>
                      {item.href ? (
                        <Link
                          href={item.href}
                          className="font-semibold text-lg mt-1 group-hover:text-primary transition-colors"
                        >
                          {item.value}
                        </Link>
                      ) : (
                        <p className="font-semibold text-lg mt-1 group-hover:text-primary transition-colors">
                          {item.value}
                        </p>
                      )}
                      {item.subtext && <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{item.subtext}</p>}
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </div>

          <AnimatedElement className="space-y-8">
            <h3 className="text-3xl font-bold">
              My Passion for Programming: <span className="text-primary">Creating</span>,{" "}
              <span className="text-primary">Solving</span>, and <span className="text-primary">Innovating</span>
            </h3>
            <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
              Ever Since I Wrote My First Lines Of Code, I Knew Programming Was More Than Just A Skill—It Was A Way To
              Create, Solve Problems, And Build Something Meaningful. I Love The Challenge Of Breaking Down Complex
              Problems And Turning Ideas Into Real Applications. Whether It&apos;s Developing Efficient Algorithms,
              Crafting Intuitive User Interfaces, Or Optimizing Performance, I&apos;m Always Eager To Learn And Push My
              Limits. For Me, Coding Isn&apos;t Just A Profession; It&apos;s An Ongoing Journey Of Innovation And
              Discovery.
            </p>
          </AnimatedElement>

          <AnimatedElement className="space-y-8">
            <h3 className="text-3xl font-bold">
              Turning <span className="text-primary">Ideas</span> into Reality with{" "}
              <span className="text-primary">My Tech Skills</span>
            </h3>

            <div className="grid gap-8">
              {/* Backend Section */}
              <AnimatedElement className="bg-white dark:bg-secondary p-8 rounded-3xl shadow-lg">
                <h4 className="text-2xl font-semibold mb-6">backend</h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                  {[
                    {
                      name: "Django",
                      icon: "django.svg",
                    },
                    {
                      name: "PostgreSQL",
                      icon: "postgresql.svg",
                    },
                    {
                      name: "DRF",
                      icon: "drf.svg",
                    },
                    {
                      name: "WebSocket",
                      icon: "web.svg",
                    },
                  ].map((tech) => (
                    <motion.div
                      key={tech.name}
                      className="flex flex-col items-center gap-2 group"
                      whileHover={{ y: -5 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 17,
                      }}
                    >
                      <div className="relative p-4 rounded-2xl bg-gray-100 dark:bg-gray-800 group-hover:bg-primary/10 transition-colors">
                        <Image
                          src={tech.icon || "/placeholder.svg"}
                          alt={tech.name}
                          width={60}
                          height={60}
                          className="rounded-lg"
                        />
                      </div>
                      <span className="text-sm font-medium">{tech.name}</span>
                    </motion.div>
                  ))}
                </div>
              </AnimatedElement>

              {/* Frontend Section */}
              <AnimatedElement className="bg-white dark:bg-secondary p-8 rounded-3xl shadow-lg">
                <h4 className="text-2xl font-semibold mb-6">Frontend</h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                  {[
                    {
                      name: "JavaScript",
                      icon: "JavaScript.svg",
                    },
                    {
                      name: "TypeScript",
                      icon: "TypeScript.svg",
                    },
                    {
                      name: "HTML5",
                      icon: "html.svg",
                    },
                    {
                      name: "CSS3",
                      icon: "css.svg",
                    },
                    {
                      name: "Tailwind",
                      icon: "tailwinds.svg",
                    },
                    {
                      name: "React",
                      icon: "react.svg",
                    },
                    {
                      name: "Next.js",
                      icon: "nextjs.svg",
                    },
                  ].map((tech) => (
                    <motion.div
                      key={tech.name}
                      className="flex flex-col items-center gap-2 group"
                      whileHover={{ y: -5 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 17,
                      }}
                    >
                      <div className="relative p-4 rounded-2xl bg-gray-100 dark:bg-gray-800 group-hover:bg-primary/10 transition-colors">
                        <Image
                          src={tech.icon || "/placeholder.svg"}
                          alt={tech.name}
                          width={60}
                          height={60}
                          className="rounded-lg"
                        />
                      </div>
                      <span className="text-sm font-medium">{tech.name}</span>
                    </motion.div>
                  ))}
                </div>
              </AnimatedElement>

              {/* Programming Languages Section */}
              <AnimatedElement className="bg-white dark:bg-secondary p-8 rounded-3xl shadow-lg">
                <h4 className="text-2xl font-semibold mb-6">Programming Lngs</h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                  {[
                    {
                      name: "Python",
                      icon: "python.svg",
                    },
                    {
                      name: "C++",
                      icon: "cpp.svg",
                    },
                    {
                      name: "C",
                      icon: "c.svg",
                    },
                    {
                      name: "JavaScript",
                      icon: "JavaScript.svg",
                    },
                  ].map((tech) => (
                    <motion.div
                      key={tech.name}
                      className="flex flex-col items-center gap-2 group"
                      whileHover={{ y: -5 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 17,
                      }}
                    >
                      <div className="relative p-4 rounded-2xl bg-gray-100 dark:bg-gray-800 group-hover:bg-primary/10 transition-colors">
                        <Image
                          src={tech.icon || "/placeholder.svg"}
                          alt={tech.name}
                          width={60}
                          height={60}
                          className="rounded-lg"
                        />
                      </div>
                      <span className="text-sm font-medium">{tech.name}</span>
                    </motion.div>
                  ))}
                </div>
              </AnimatedElement>

              {/* Tools Section */}
              <AnimatedElement className="bg-white dark:bg-secondary p-8 rounded-3xl shadow-lg">
                <h4 className="text-2xl font-semibold mb-6">Tools</h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                  {[
                    {
                      name: "Docker",
                      icon: "docker.svg",
                    },
                    {
                      name: "Bash",
                      icon: "bash.svg",
                    },
                    {
                      name: "Figma",
                      icon: "figma.svg",
                    },
                    {
                      name: "VSCode",
                      icon: "vscode.svg",
                    },
                    {
                      name: "Notion",
                      icon: "notion.svg",
                    },
                  ].map((tech) => (
                    <motion.div
                      key={tech.name}
                      className="flex flex-col items-center gap-2 group"
                      whileHover={{ y: -5 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 17,
                      }}
                    >
                      <div className="relative p-4 rounded-2xl bg-gray-100 dark:bg-gray-800 group-hover:bg-primary/10 transition-colors">
                        <Image
                          src={tech.icon || "/placeholder.svg"}
                          alt={tech.name}
                          width={60}
                          height={60}
                          className="rounded-lg"
                        />
                      </div>
                      <span className="text-sm font-medium">{tech.name}</span>
                    </motion.div>
                  ))}
                </div>
              </AnimatedElement>
            </div>
          </AnimatedElement>
        </AnimatedElement>
      </AnimatedSection>

      <AnimatedSection id="contact" className="pb-16 lg:py-24 scroll-mt-16">
        <AnimatedElement className="mx-auto px-4">
          <div className="space-y-4 text-start mb-12">
            <div className="inline-flex items-center rounded-full border bg-white dark:bg-secondary shadow-sm px-3 py-1 text-sm font-semibold">
              <Star className="mr-1.5 h-4 w-4" />
              Contact
            </div>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-primary">
              Let&apos;s make something awesome together!
            </h2>
          </div>

          <AnimatedElement className="">
            <form className="space-y-8 mx-auto" onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <Input
                    type="text"
                    name="name"
                    placeholder="Name*"
                    required
                    value={formState.name}
                    onChange={handleInputChange}
                    className="text-lg border-0 border-b-2 border-gray-300 dark:border-gray-700 rounded-none px-0 py-2 bg-transparent focus-visible:ring-0 focus-visible:border-primary placeholder:text-gray-500 dark:placeholder:text-gray-400"
                  />
                </div>
                <div className="space-y-2">
                  <Input
                    type="text"
                    name="company"
                    placeholder="Company Name"
                    value={formState.company}
                    onChange={handleInputChange}
                    className="text-lg border-0 border-b-2 border-gray-300 dark:border-gray-700 rounded-none px-0 py-2 bg-transparent focus-visible:ring-0 focus-visible:border-primary placeholder:text-gray-500 dark:placeholder:text-gray-400"
                  />
                </div>
                <div className="space-y-2">
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email*"
                    required
                    value={formState.email}
                    onChange={handleInputChange}
                    className="text-lg border-0 border-b-2 border-gray-300 dark:border-gray-700 rounded-none px-0 py-2 bg-transparent focus-visible:ring-0 focus-visible:border-primary placeholder:text-gray-500 dark:placeholder:text-gray-400"
                  />
                </div>
                <div className="space-y-2">
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formState.phone}
                    onChange={handleInputChange}
                    className="text-lg border-0 border-b-2 border-gray-300 dark:border-gray-700 rounded-none px-0 py-2 bg-transparent focus-visible:ring-0 focus-visible:border-primary placeholder:text-gray-500 dark:placeholder:text-gray-400"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Textarea
                  name="message"
                  placeholder="A Few Words*"
                  required
                  value={formState.message}
                  onChange={handleInputChange}
                  className="text-lg min-h-[150px] border-0 border-b-2 border-gray-300 dark:border-gray-700 rounded-none px-0 py-2 bg-transparent focus-visible:ring-0 focus-visible:border-primary resize-none placeholder:text-gray-500 dark:placeholder:text-gray-400"
                />
              </div>

              <div className="flex flex-col md:items-start lg:items-center gap-4 pt-4">
                <Button
                  type="submit"
                  size="lg"
                  className="w-fit text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-white rounded-full"
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
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </AnimatedElement>

          <AnimatedElement className="mt-16 text-center space-y-8">
            <div className="flex justify-center">
              <div className="grid grid-cols-4 sm:grid-cols-5 gap-4">
                <Link
                  href="https://www.instagram.com/rel_ismaa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center text-gray-600 dark:text-gray-300 p-3 rounded-full border border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors hover:text-primary"
                >
                  <Instagram className="h-8 w-8" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/rachid-el-isamiyly/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center text-gray-600 dark:text-gray-300 p-3 rounded-full border border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors hover:text-primary"
                >
                  <Linkedin className="h-8 w-8" />
                </Link>
                <Link
                  href="https://discord.com/users/YOUR_DISCORD_ID"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center text-gray-600 dark:text-gray-300 p-3 rounded-full border border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors hover:text-primary"
                >
                  <FaDiscord className="h-8 w-8" />
                </Link>
                <Link
                  href="https://wa.me/YOUR_WHATSAPP_NUMBER"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center text-gray-600 dark:text-gray-300 p-3 rounded-full border border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors hover:text-primary"
                >
                  <FaWhatsapp className="h-8 w-8" />
                </Link>
              </div>
            </div>
          </AnimatedElement>
        </AnimatedElement>
      </AnimatedSection>

      <motion.footer
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="mt-auto py-16 bg-white dark:bg-secondary"
      >
        <AnimatedElement className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white text-2xl">R</span>
                </div>
                <h2 className="text-xl font-semibold">Rachid El-ismailyly</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Full-stack developer specializing in modern web applications.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/#home" className="text-gray-600 dark:text-gray-300 hover:text-primary">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/#portfolio" className="text-gray-600 dark:text-gray-300 hover:text-primary">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="/#service" className="text-gray-600 dark:text-gray-300 hover:text-primary">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/#about" className="text-gray-600 dark:text-gray-300 hover:text-primary">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className="text-gray-600 dark:text-gray-300 hover:text-primary">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li className="text-gray-600 dark:text-gray-300">Frontend Development</li>
                <li className="text-gray-600 dark:text-gray-300">Backend Development</li>
                <li className="text-gray-600 dark:text-gray-300">UI/UX Design</li>
                <li className="text-gray-600 dark:text-gray-300">API Integration</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <Mail className="h-5 w-5 text-primary" />
                  <span className="text-gray-600 dark:text-gray-300">relismailyly@gmail.com</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-primary" />
                  <span className="text-gray-600 dark:text-gray-300">+21211563140</span>
                </li>
                <li className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="text-gray-600 dark:text-gray-300">Taounate, Morocco</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-600 dark:text-gray-300">
                © {new Date().getFullYear()} Rachid El-ismailyly. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary">
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary">
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary">
                  <Github className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </AnimatedElement>
      </motion.footer>

      <AiAssistant />
    </div>
  )
}

