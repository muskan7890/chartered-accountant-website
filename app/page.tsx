"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Users,
  Phone,
  Mail,
  CheckCircle,
  Star,
  ArrowRight,
  Award,
  Plus,
  Minus,
  Calculator,
  Briefcase,
  TrendingUp,
  FileText,
  Shield,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Clock,
  Globe,
  MessageCircle,
  Bell,
  CreditCard,
  BarChart3,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(2)
  const [showSuccessModal, setShowSuccessModal] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowSuccessModal(true)
    // Auto-close the modal after 3 seconds
    setTimeout(() => {
      setShowSuccessModal(false)
    }, 3000)
  }

  // Pricing Plan Data
  const whyCANeedWebsite = [
    "Showcase your expertise and services online",
    "Enable secure document sharing with clients",
    "Offer secure document sharing with clients",
    "Offer real-time financial updates and reminders",
    "Enhance trust and brand credibility",
    "Generate more client leads through online presence",
  ]

  const websiteFeatures = [
    { icon: Globe, text: "Professional & Responsive Design: Modern, mobile-friendly interface" },
    { icon: FileText, text: "About Us & Services Page: Highlight your CA expertise" },
    { icon: Shield, text: "Secure Client Portal: Upload and download documents safely" },
    { icon: Calculator, text: "Tax Calculators: Integrated GST, Income Tax calculators" },
    { icon: Clock, text: "Appointment Booking: Online scheduling system" },
    { icon: MessageCircle, text: "Live Chat & WhatsApp Integration: Real-time client support" },
    { icon: BarChart3, text: "SEO & Analytics: Optimize your site for better visibility" },
  ]

  const mobileFeatures = [
    { icon: Shield, text: "Client Login: Personalized dashboard for each client" },
    { icon: FileText, text: "Document Upload & Sharing: Secure storage and access" },
    { icon: Bell, text: "Push Notifications: Due date reminders for GST, ITR, audits" },
    { icon: FileText, text: "E-sign Integration: For fast approvals and agreements" },
    { icon: MessageCircle, text: "In-app Chat: Direct communication with clients" },
    { icon: CreditCard, text: "Payment Gateway: Accept professional fees online" },
    { icon: BarChart3, text: "Reports & Statements: Real-time access to financial reports" },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                <Calculator className="h-6 w-6 text-white" />
              </div>
              <span className="ml-3 text-xl font-bold text-gray-900">FinanceExpert.</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-orange-500 font-medium hover:text-orange-600 transition-colors"
              >
                <b>Home</b>
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-gray-700 hover:text-orange-500 font-medium transition-colors"
              >
                <b>Services</b>
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-700 hover:text-orange-500 font-medium transition-colors"
              >
                <b>About</b>
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="text-gray-700 hover:text-orange-500 font-medium transition-colors"
              >
                <b>Pricing</b>
              </button>
              <Link href="/pricing-plan">
                <button className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
                  <b>Pricing Plan</b>
                </button>
              </Link>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-700 hover:text-orange-500 font-medium transition-colors"
              >
                <b>Contact</b>
              </button>
            </div>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-black text-white hover:bg-gray-800 rounded-full px-6"
            >
              Contact Me
            </Button>
            <Image src="/images/download.jpg" alt="ashoka stambha" width={60} height={60} />
          </div>
        </div>
      </nav>

      {/* Page 1: I'm Nirmal - Hero Section */}
      <section id="home" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-4">
              I'm <span className="text-orange-500">Nirmal Jain</span>
            </h1>
            <p className="text-xl text-gray-600">Chartered Accountant based in Delhi</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8 items-center mb-12">
            {/* Left Side - Testimonial */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white rounded-2xl shadow-lg p-6 border">
                <div className="mb-6">
                  <div className="text-3xl text-orange-500 font-bold mb-4">❝</div>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Nirmal's Expert Financial Guidance Transformed Our Business – Highly Recommended!
                  </p>
                </div>
                <div className="flex items-center mb-4">
                  <div className="flex -space-x-2">
                    <Image
                      src="/images/client-woman1.jpg"
                      alt="Client"
                      width={40}
                      height={40}
                      className="rounded-full border-[3px] border-white shadow-sm object-cover"
                    />
                    <Image
                      src="/images/client-woman3.jpg"
                      alt="Client"
                      width={40}
                      height={40}
                      className="rounded-full border-[3px] border-white shadow-sm object-cover"
                    />
                    <Image
                      src="/images/client-sarah.jpg"
                      alt="Client"
                      width={30}
                      height={30}
                      className="rounded-full border-[3px] border-white shadow-sm object-cover"
                    />
                    <Image
                      src="/images/professional-man.jpg"
                      alt="Client"
                      width={40}
                      height={40}
                      className="rounded-full border-[3px] border-white shadow-sm object-cover"
                    />
                  </div>
                </div>
                <div className="text-orange-500 font-bold text-lg">450+ Reviews</div>
                <div className="flex items-center">
                  <span className="text-2xl font-bold text-gray-900 mr-2">(4.9 of 5)</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-orange-400 fill-current" />
                    ))}
                  </div>
                </div>
                <div className="text-gray-500 text-sm mt-1">Reviews from Valued Clients</div>
              </div>
            </div>
            {/* Center - Main Image */}
            <div className="lg:col-span-1 flex justify-center">
              <div className="relative">
                <Image
                  src="/images/indian_man.jpg"
                  alt="Nirmal Jain - Charted Accountant"
                  width={320}
                  height={320}
                  className="rounded-full w-80 h-80 object-cover object-top"
                />
              </div>
            </div>
            {/* Right Side - Service Badges */}
            <div className="lg:col-span-1 space-y-4">
              <div className="flex flex-col space-y-3">
                <div className="flex space-x-3">
                  <Badge className="bg-black text-white rounded-full px-6 py-3 text-sm font-medium">Tax Planning</Badge>
                  <Badge className="bg-orange-500 text-white rounded-full px-6 py-3 text-sm font-medium">
                    Auditing
                  </Badge>
                </div>
                <div className="flex justify-center">
                  <Badge className="bg-orange-500 text-white rounded-full px-6 py-3 text-sm font-medium flex items-center">
                    <Plus className="h-4 w-4 mr-2" />
                    Financial Consulting
                  </Badge>
                </div>
                <div className="flex space-x-3">
                  <Badge className="bg-orange-500 text-white rounded-full px-6 py-3 text-sm font-medium">
                    Bookkeeping
                  </Badge>
                  <Badge className="bg-black text-white rounded-full px-6 py-3 text-sm font-medium">
                    Business Advisory
                  </Badge>
                </div>
              </div>
              <div className="mt-8 text-right">
                <div className="flex justify-end space-x-3">
                  <div className="w-10 h-10 bg-white-800 rounded-full flex items-center justify-center"></div>
                  <div className="w-10 h-10 bg-white-800 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">tw</span>
                  </div>
                  <div className="w-10 h-10 bg-white-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">in</span>
                  </div>
                  <div className="w-10 h-10 bg-white-800 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">ig</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Call to Action Buttons */}
          <div className="flex justify-center space-x-6">
            <Button
              onClick={() => scrollToSection("services")}
              className="bg-black text-white hover:bg-gray-800 rounded-full px-8 py-4 text-lg font-medium flex items-center"
            >
              Portfolio <Plus className="ml-2 h-5 w-5" />
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              variant="outline"
              className="border-2 border-gray-300 text-gray-900 hover:bg-gray-50 rounded-full px-8 py-4 text-lg font-medium"
            >
              Hire Me
            </Button>
          </div>
        </div>
      </section>

      {/* Page 2: Services I Provide */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="text-orange-500 font-medium mb-4">— My Services</div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Services <span className="text-orange-500">I Provide</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive accounting and financial services tailored to help your business thrive and maintain
              regulatory compliance.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-8 border-0 shadow-lg bg-white hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mb-6">
                <Calculator className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Tax Planning</h3>
              <p className="text-gray-600 leading-relaxed">
                Strategic tax planning and preparation services to minimize your tax liability and ensure compliance
                with all regulations.
              </p>
            </Card>
            <Card className="p-8 border-0 shadow-lg bg-white hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mb-6">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Financial Consulting</h3>
              <p className="text-gray-600 leading-relaxed">
                Expert financial advice and consulting to help you make informed business decisions and optimize your
                financial performance.
              </p>
            </Card>
            <Card className="p-8 border-0 shadow-lg bg-white hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Auditing</h3>
              <p className="text-gray-600 leading-relaxed">
                Comprehensive audit services to ensure accuracy, compliance, and transparency in your financial
                reporting.
              </p>
            </Card>
            <Card className="p-8 border-0 shadow-lg bg-white hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mb-6">
                <FileText className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Bookkeeping</h3>
              <p className="text-gray-600 leading-relaxed">
                Accurate and timely bookkeeping services to maintain organized financial records and support business
                growth.
              </p>
            </Card>
            <Card className="p-8 border-0 shadow-lg bg-white hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mb-6">
                <Briefcase className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Business Advisory</h3>
              <p className="text-gray-600 leading-relaxed">
                Strategic business advisory services to help you navigate challenges and capitalize on growth
                opportunities.
              </p>
            </Card>
            <Card className="p-8 border-0 shadow-lg bg-white hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mb-6">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Financial Forecasting</h3>
              <p className="text-gray-600 leading-relaxed">
                Detailed financial forecasting and budgeting to help you plan for the future and make strategic
                decisions.
              </p>
            </Card>
            <Card className="p-8 border-0 shadow-lg bg-white hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Compliance Management</h3>
              <p className="text-gray-600 leading-relaxed">
                Comprehensive compliance management to ensure your business meets all regulatory requirements and
                standards.
              </p>
            </Card>
            <Card className="p-8 border-0 shadow-lg bg-white hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mb-6">
                <Calculator className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Investment Advisory</h3>
              <p className="text-gray-600 leading-relaxed">
                Professional investment advisory services to help you make informed decisions about your financial
                portfolio.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Page 3: About Me */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="rounded-full p-8 relative">
                <Image
                  src="/images/indian_man.jpg"
                  alt="David Miller"
                  width={394}
                  height={394}
                  className="rounded-full w-97 h-97 object-cover"
                />
                <div className="absolute -top-4 -left-8 bg-white rounded-2xl shadow-lg p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                      <Users className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Total Clients</div>
                      <div className="text-2xl font-bold text-gray-900">450+</div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 bg-black text-white rounded-2xl p-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                      <Award className="h-5 w-5 text-black" />
                    </div>
                    <span className="font-semibold text-sm">Certified Chartered Accountant</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="text-orange-500 font-medium">— About Me</div>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                  Who is <span className="text-orange-500">Nirmal Jain</span>?
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  With over 16 years of experience in accounting and financial consulting, I help businesses optimize
                  their financial performance and ensure regulatory compliance. My expertise spans across various
                  industries, providing tailored solutions that drive growth and success.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  I believe in building long-term relationships with my clients, understanding their unique challenges,
                  and delivering personalized financial strategies that align with their business goals.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">750+</div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">25+</div>
                  <div className="text-sm text-gray-600">Industries Covered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">16+</div>
                  <div className="text-sm text-gray-600">Years of Experience</div>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-orange-500" />
                  <span className="text-gray-700">(555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-5 w-5 text-orange-500" />
                  <span className="text-gray-700">Nirmal@financeexpert.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Page 4: My Price Model */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-start mb-16">
            <div>
              <div className="text-orange-500 font-medium mb-4">— Pricing Table</div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                My <span className="text-orange-500">Pricing Model</span>
              </h2>
            </div>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8 py-3 flex items-center"
            >
              Get Started
              <div className="ml-3 w-8 h-8 bg-black rounded-full flex items-center justify-center">
                <ArrowRight className="h-4 w-4 text-white" />
              </div>
            </Button>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Hourly Card */}
            <Card className="border-0 shadow-lg overflow-hidden rounded-2xl">
              <div className="bg-orange-500 text-white p-8 relative">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold">Hourly</h3>
                  <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <ArrowRight className="h-5 w-5 text-white" />
                  </div>
                </div>
                <div className="text-4xl font-bold">
                  ₹13,020 INR<span className="text-lg font-normal opacity-80"> / Hour</span>
                </div>
              </div>
              <CardContent className="p-8">
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mr-4">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">Tax consultation & planning</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mr-4">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">Financial analysis & review</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mr-4">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">Business advisory sessions</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mr-4">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">Compliance guidance</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mr-4">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">Monthly financial reports</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mr-4">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">Priority support access</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mr-4">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">Dedicated account manager</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            {/* Monthly Card */}
            <Card className="border-0 shadow-lg overflow-hidden rounded-2xl">
              <div className="bg-orange-500 text-white p-8 relative">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold">Monthly</h3>
                  <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <ArrowRight className="h-5 w-5 text-white" />
                  </div>
                </div>
                <div className="text-4xl font-bold">
                  ₹243,040 INR<span className="text-lg font-normal opacity-80"> / Month</span>
                </div>
              </div>
              <CardContent className="p-8">
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mr-4">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">Complete bookkeeping services</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mr-4">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">Monthly financial statements</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mr-4">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">Tax planning & preparation</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mr-4">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">Unlimited consultations</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mr-4">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">Priority support access</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mr-4">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">Strategic business planning</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mr-4">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">Dedicated account manager</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            {/* Quarterly Card */}
            <Card className="border-0 shadow-lg overflow-hidden rounded-2xl">
              <div className="bg-orange-500 text-white p-8 relative">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold">Quarterly</h3>
                  <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <ArrowRight className="h-5 w-5 text-white" />
                  </div>
                </div>
                <div className="text-4xl font-bold">
                  ₹651,000 INR<span className="text-lg font-normal opacity-80"> / Qtr.</span>
                </div>
              </div>
              <CardContent className="p-8">
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mr-4">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">Comprehensive audit services</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mr-4">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">Strategic business planning</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mr-4">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">Financial forecasting</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mr-4">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">Investment advisory</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mr-4">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">Priority support access</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mr-4">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">Dedicated account manager</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mr-4">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">24/7 premium support</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Page 5: Contact Me */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="text-orange-500 font-medium mb-4">— Contact Me</div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Let's Talk for <span className="text-orange-500">Your Next Projects</span>
            </h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <Card className="p-8 border-0 shadow-lg bg-white">
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  {/* Keep all existing form fields exactly the same */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">Your Name *</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-gray-50"
                        placeholder="Ex. John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">Email *</label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-gray-50"
                        placeholder="example@gmail.com"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">Phone *</label>
                      <input
                        type="tel"
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-gray-50"
                        placeholder="Enter Phone Number"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">I'm Interested in *</label>
                      <select
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-gray-50"
                      >
                        <option value="">Select Service</option>
                        <option>Tax Planning</option>
                        <option>Financial Consulting</option>
                        <option>Auditing</option>
                        <option>Bookkeeping</option>
                        <option>Website Development</option>
                        <option>Mobile App Development</option>
                      </select>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">Budget Range (INR) *</label>
                      <select
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-gray-50"
                      >
                        <option value="">Select Range</option>
                        <option>₹84,000 INR - ₹435,350 INR</option>
                        <option>₹435,350 INR - ₹865,000 INR</option>
                        <option>₹865,000 INR+</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">Country *</label>
                      <select
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-gray-50"
                      >
                        <option value="">Select Country</option>
                        <option>India</option>
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Your Message *</label>
                    <textarea
                      rows={5}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-gray-50"
                      placeholder="Tell me about your accounting needs..."
                    ></textarea>
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg text-lg font-medium"
                  >
                    Send Message
                  </Button>
                </form>

                {/* Success Modal */}
                {showSuccessModal && (
                  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-2xl p-8 max-w-md mx-4 text-center shadow-2xl transform animate-in fade-in duration-300">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="h-8 w-8 text-green-500" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent Successfully!</h3>
                      <p className="text-gray-600 mb-6">
                        Thank you for reaching out! I'll get back to you within 24 hours to discuss your accounting
                        needs.
                      </p>
                      <div className="flex items-center justify-center space-x-2 text-sm text-gray-500 mb-4">
                        <Clock className="h-4 w-4" />
                        <span>Expected response time: 2-24 hours</span>
                      </div>
                      <Button
                        onClick={() => setShowSuccessModal(false)}
                        className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg"
                      >
                        Close
                      </Button>
                    </div>
                  </div>
                )}
              </Card>
            </div>
            <div>
              <Card className="p-8 bg-black text-white border-0 rounded-3xl">
                <h3 className="text-2xl font-bold text-orange-500 mb-6">Address</h3>
                <p className="text-gray-300 mb-8">
                  123, Financial Square,
                  <br />
                  Suite 456, New Delhi 110001
                </p>
                <h3 className="text-2xl font-bold text-orange-500 mb-6">Contact</h3>
                <div className="space-y-4 mb-8">
                  <div>Phone : +1 (555) 123-4567</div>
                  <div>Email : Nirmal@financeexpert.com</div>
                </div>
                <h3 className="text-2xl font-bold text-orange-500 mb-6">Time</h3>
                <div className="space-y-2 text-gray-300">
                  <div>Monday - Friday : 9:00 - 18:00</div>
                  <div>Saturday : 10:00 - 14:00</div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Page 6: Client Testimonials */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="text-orange-500 font-medium mb-4">— Client Testimonials</div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              What My <span className="text-orange-500">Clients Are Saying</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 border-0 shadow-lg bg-white">
              <div className="flex items-center mb-6">
                <Image
                  src="/images/client-woman1.jpg"
                  alt="Sarah Johnson"
                  width={60}
                  height={60}
                  className="rounded-full mr-4"
                />
                <div>
                  <div className="font-bold text-gray-900">Sarah Johnson</div>
                  <div className="text-orange-500 text-sm">CEO, TechStart Inc.</div>
                </div>
                <div className="ml-auto">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-orange-400 fill-current" />
                    ))}
                    <span className="ml-2 font-bold text-gray-900">5.0</span>
                  </div>
                </div>
              </div>
              <div className="text-3xl text-orange-500 font-bold mb-4">❝</div>
              <p className="text-gray-600 leading-relaxed">
                David's expertise in tax planning saved our company over $50,000 last year. His proactive approach and
                attention to detail are exceptional.
              </p>
            </Card>
            <Card className="p-8 border-0 shadow-lg bg-white">
              <div className="flex items-center mb-6">
                <Image
                  src="/images/client-woman3.jpg"
                  alt="Michael Chen"
                  width={60}
                  height={60}
                  className="rounded-full mr-4"
                />
                <div>
                  <div className="font-bold text-gray-900">Michael Chen</div>
                  <div className="text-orange-500 text-sm">Owner, Manufacturing Co.</div>
                </div>
                <div className="ml-auto">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-orange-400 fill-current" />
                    ))}
                    <span className="ml-2 font-bold text-gray-900">5.0</span>
                  </div>
                </div>
              </div>
              <div className="text-3xl text-orange-500 font-bold mb-4">❝</div>
              <p className="text-gray-600 leading-relaxed">
                Professional, reliable, and always available when we need guidance. David has become an integral part of
                our business success.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Page 7: FAQs */}
      <section id="faq" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 relative">
          <div className="text-center mb-16">
            <div className="text-orange-500 font-medium mb-4">— Frequently Asked Questions</div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Questions? <span className="text-orange-500">Look here</span>
            </h2>
          </div>
          <div className="space-y-4">
            <div className="bg-white rounded-2xl shadow-sm border">
              <button
                onClick={() => setOpenFaq(openFaq === 1 ? null : 1)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-100 rounded-2xl"
              >
                <span className="text-lg font-semibold text-gray-900">
                  Do you provide tax planning services for small businesses?
                </span>
                {openFaq === 1 ? (
                  <Minus className="h-6 w-6 text-gray-400" />
                ) : (
                  <Plus className="h-6 w-6 text-gray-400" />
                )}
              </button>
              {openFaq === 1 && (
                <div className="px-8 pb-6">
                  <p className="text-gray-600">
                    Yes, I specialize in tax planning for small businesses. I help optimize your tax strategy, ensure
                    compliance, and identify opportunities to minimize your tax liability while maximizing your business
                    growth potential.
                  </p>
                </div>
              )}
            </div>
            <div className="bg-orange-500 rounded-2xl shadow-sm">
              <button className="w-full px-8 py-6 text-left flex items-center justify-between text-white rounded-2xl">
                <span className="text-lg font-semibold">What accounting services do you specialize in?</span>
                <Minus className="h-6 w-6 text-white" />
              </button>
              <div className="px-8 pb-6">
                <p className="text-white opacity-90">
                  I specialize in comprehensive accounting services including tax planning and preparation, financial
                  consulting, auditing, bookkeeping, and business advisory services for businesses of all sizes.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-sm border">
              <button
                onClick={() => setOpenFaq(openFaq === 3 ? null : 3)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-100 rounded-2xl"
              >
                <span className="text-lg font-semibold text-gray-900">
                  How do you ensure compliance with tax regulations?
                </span>
                {openFaq === 3 ? (
                  <Minus className="h-6 w-6 text-gray-400" />
                ) : (
                  <Plus className="h-6 w-6 text-gray-400" />
                )}
              </button>
              {openFaq === 3 && (
                <div className="px-8 pb-6">
                  <p className="text-gray-600">
                    I stay updated with the latest tax regulations and compliance requirements. I conduct regular
                    reviews, maintain detailed documentation, and implement systematic processes to ensure your business
                    remains compliant with all applicable tax laws and regulations.
                  </p>
                </div>
              )}
            </div>
            <div className="bg-white rounded-2xl shadow-sm border">
              <button
                onClick={() => setOpenFaq(openFaq === 4 ? null : 4)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-100 rounded-2xl"
              >
                <span className="text-lg font-semibold text-gray-900">
                  Can you help with financial forecasting and budgeting?
                </span>
                {openFaq === 4 ? (
                  <Minus className="h-6 w-6 text-gray-400" />
                ) : (
                  <Plus className="h-6 w-6 text-gray-400" />
                )}
              </button>
              {openFaq === 4 && (
                <div className="px-8 pb-6">
                  <p className="text-gray-600">
                    I provide comprehensive financial forecasting and budgeting services to help you plan for the
                    future, make informed business decisions, and achieve your financial goals through strategic
                    planning.
                  </p>
                </div>
              )}
            </div>
            <div className="bg-white rounded-2xl shadow-sm border">
              <button
                onClick={() => setOpenFaq(openFaq === 5 ? null : 5)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-100 rounded-2xl"
              >
                <span className="text-lg font-semibold text-gray-900">
                  What is your experience with different industries?
                </span>
                {openFaq === 5 ? (
                  <Minus className="h-6 w-6 text-gray-400" />
                ) : (
                  <Plus className="h-6 w-6 text-gray-400" />
                )}
              </button>
              {openFaq === 5 && (
                <div className="px-8 pb-6">
                  <p className="text-gray-600">
                    I have worked with clients across 25+ industries including technology, manufacturing, healthcare,
                    retail, real estate, and professional services. This diverse experience allows me to understand
                    industry-specific challenges and provide tailored solutions.
                  </p>
                </div>
              )}
            </div>
            <div className="bg-white rounded-2xl shadow-sm border">
              <button
                onClick={() => setOpenFaq(openFaq === 6 ? null : 6)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-100 rounded-2xl"
              >
                <span className="text-lg font-semibold text-gray-900">
                  Do you offer ongoing financial advisory services?
                </span>
                {openFaq === 6 ? (
                  <Minus className="h-6 w-6 text-gray-400" />
                ) : (
                  <Plus className="h-6 w-6 text-gray-400" />
                )}
              </button>
              {openFaq === 6 && (
                <div className="px-8 pb-6">
                  <p className="text-gray-600">
                    Yes, I offer ongoing financial advisory services through my monthly and quarterly packages. This
                    includes regular financial reviews, strategic planning sessions, and continuous support to help your
                    business grow and adapt to changing market conditions.
                  </p>
                </div>
              )}
            </div>
          </div>
          {/* Ask Away Section */}
          <div className="mt-16 text-center">
            <Card className="bg-black text-white p-8 rounded-3xl max-w-md mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-3 h-3 bg-white rounded-full mr-1"></div>
                  <div className="w-3 h-3 bg-white rounded-full mr-1"></div>
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <h3 className="text-xl font-bold mb-2">Have different questions? Ask Away!</h3>
                <p className="text-gray-300 text-sm mb-6">Your Questions, My Answers. Quick Responses Guaranteed.</p>
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6"
                >
                  Contact Us
                </Button>
              </div>
            </Card>
            <div className="mt-6">
              <div className="text-orange-500 text-sm mb-2">Your Success, My Priority</div>
              <div className="text-2xl font-bold text-gray-900">Available 24/7</div>
              <div className="text-gray-600">(555) 123-4567</div>
            </div>
          </div>
        </div>
      </section>

      {/* Page 8: Let's Connect There */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="text-orange-500 font-medium mb-4">— Get In Touch</div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Let's <span className="text-orange-500">Connect</span> There
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Ready to take your business finances to the next level? Let's discuss how I can help you achieve your
            financial goals.
          </p>
          <Button
            onClick={() => scrollToSection("contact")}
            className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8 py-4 text-lg font-medium flex items-center mx-auto"
          >
            Contact Us <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-16 border-t">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                  <Calculator className="h-6 w-6 text-white" />
                </div>
                <span className="ml-3 text-2xl font-bold text-gray-900">FinanceExpert</span>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Professional chartered accountant services helping businesses achieve financial success and regulatory
                compliance.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors cursor-pointer">
                  <Facebook className="h-5 w-5 text-white" />
                </div>
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors cursor-pointer">
                  <Youtube className="h-5 w-5 text-white" />
                </div>
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors cursor-pointer">
                  <Twitter className="h-5 w-5 text-white" />
                </div>
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors cursor-pointer">
                  <Linkedin className="h-5 w-5 text-white" />
                </div>
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors cursor-pointer">
                  <Instagram className="h-5 w-5 text-white" />
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-6 text-orange-500">Navigation</h3>
              <ul className="space-y-3 text-gray-600">
                <li>
                  <button onClick={() => scrollToSection("home")} className="hover:text-orange-500 transition-colors">
                    <b>Home</b>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="hover:text-orange-500 transition-colors"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("about")} className="hover:text-orange-500 transition-colors">
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("pricing")}
                    className="hover:text-orange-500 transition-colors"
                  >
                    Pricing
                  </button>
                </li>
                <li>
                  <Link href="/pricing-plan" className="hover:text-orange-500 transition-colors">
                    Pricing Plan
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="hover:text-orange-500 transition-colors"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-6 text-orange-500">Contact</h3>
              <ul className="space-y-3 text-gray-600">
                <li>+0123-456-789</li>
                <li>www.financeexpert.com</li>
                <li>Nirmal@financeexpert.com</li>
                <li>
                  123, Financial Square,
                  <br />
                  Suite 456, New Delhi 110001
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-6 text-orange-500">Newsletter</h3>
              <p className="text-gray-600 mb-4 text-sm">Subscribe to get the latest updates and insights</p>
              <div className="flex rounded-lg overflow-hidden border border-gray-200">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 bg-gray-50 border-0"
                />
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 rounded-none">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
