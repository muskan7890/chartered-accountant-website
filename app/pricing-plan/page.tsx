"use client"

import Link from "next/link"
import {
  Check,
  Clock,
  Smartphone,
  Globe,
  Calculator,
  Shield,
  MessageCircle,
  Bell,
  FileText,
  CreditCard,
  BarChart3,
  ArrowLeft,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export default function PricingPlanPage() {
  const whyCANeedWebsite = [
    "Showcase your expertise and services online",
    "Enable secure document sharing with clients",
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
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/">
                <div className="flex items-center cursor-pointer">
                  <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                    <Calculator className="h-6 w-6 text-white" />
                  </div>
                  <span className="ml-3 text-xl font-bold text-gray-900">FinanceExpert.</span>
                </div>
              </Link>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex space-x-8">
              <Link href="/">
                <button className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
                  <b>Home</b>
                </button>
              </Link>
              <Link href="/#services">
                <button className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
                  <b>Services</b>
                </button>
              </Link>
              <Link href="/#about">
                <button className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
                  <b>About</b>
                </button>
              </Link>
              <Link href="/#pricing">
                <button className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
                  <b>Pricing</b>
                </button>
              </Link>
              <button className="text-orange-500 font-medium hover:text-orange-600 transition-colors">
                <b>Pricing Plan</b>
              </button>
              <Link href="/#contact">
                <button className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
                  <b>Contact</b>
                </button>
              </Link>
            </div>

            <Link href="/#contact">
              <Button className="bg-black text-white hover:bg-gray-800 rounded-full px-6">Contact Me</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Back Button */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Link href="/">
          <Button variant="ghost" className="flex items-center gap-2 text-orange-600 hover:text-orange-700">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
        </Link>
      </div>

      {/* Pricing Header */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <div className="text-orange-500 font-medium mb-4">— Digital Solutions</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">CA Website & Mobile App Solutions</h1>
          <p className="text-xl text-gray-600">Complete pricing details and features for your digital transformation</p>
        </div>

        <div className="space-y-8">
          {/* Why CAs Need Website & Mobile App */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl text-orange-500">
                Why Chartered Accountants Need a Website & Mobile App
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {whyCANeedWebsite.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Key Features */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-center">Key Features We Offer</h3>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Website Features */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Globe className="h-5 w-5 text-orange-500" />
                    Website Features
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {websiteFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <feature.icon className="h-4 w-4 text-orange-500 mt-1 flex-shrink-0" />
                        <span className="text-sm">{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Mobile App Features */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Smartphone className="h-5 w-5 text-green-500" />
                    Mobile App Features (Android & iOS)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {mobileFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <feature.icon className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-sm">{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Development Timeframe */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl text-purple-600">Development Timeframe</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
                  <Globe className="h-6 w-6 text-orange-500" />
                  <div>
                    <p className="font-medium">Website Development</p>
                    <p className="text-sm text-gray-600">7–10 working days</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                  <Smartphone className="h-6 w-6 text-green-500" />
                  <div>
                    <p className="font-medium">Mobile App Development</p>
                    <p className="text-sm text-gray-600">25–30 working days (Android & iOS)</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Pricing */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl text-orange-600">Pricing</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Globe className="h-5 w-5 text-orange-500" />
                      <h4 className="font-semibold">Professional CA Website</h4>
                    </div>
                    <p className="text-2xl font-bold text-orange-600">₹15,000 – ₹30,000</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Smartphone className="h-5 w-5 text-green-500" />
                      <h4 className="font-semibold">Mobile App (Android & iOS)</h4>
                    </div>
                    <p className="text-2xl font-bold text-green-600">₹1,20,000 – ₹1,80,000</p>
                  </div>
                </div>

                <Separator />

                {/* Special Combo Offer */}
                <div className="text-center p-6 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg border-2 border-orange-200">
                  <Badge className="mb-2 bg-orange-500">Special Combo Offer</Badge>
                  <h4 className="text-xl font-bold mb-2">Website + Mobile App Package</h4>
                  <p className="text-3xl font-bold text-orange-600 mb-2">Starting at ₹1,30,000 only</p>
                  <p className="text-sm text-gray-600">Save up to ₹80,000 with our combo package!</p>
                </div>

                <p className="text-xs text-gray-500 text-center">
                  *Pricing depends on features, integrations & complexity
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <div className="text-center space-y-4">
            <Link href="/#contact">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                Get Started Today
              </Button>
            </Link>
            <p className="text-sm text-gray-600">Contact us for a free consultation and customized quote</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white py-16 border-t mt-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-6">
              <Link href="/">
                <div className="flex items-center cursor-pointer">
                  <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                    <Calculator className="h-6 w-6 text-white" />
                  </div>
                  <span className="ml-3 text-2xl font-bold text-gray-900">FinanceExpert</span>
                </div>
              </Link>
              <p className="text-gray-600 leading-relaxed">
                Professional chartered accountant services helping businesses achieve financial success and regulatory
                compliance.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-6 text-orange-500">Navigation</h3>
              <ul className="space-y-3 text-gray-600">
                <li>
                  <Link href="/" className="hover:text-orange-500 transition-colors">
                    <b>Home</b>
                  </Link>
                </li>
                <li>
                  <Link href="/#services" className="hover:text-orange-500 transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/#about" className="hover:text-orange-500 transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/#pricing" className="hover:text-orange-500 transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/pricing-plan" className="hover:text-orange-500 transition-colors">
                    Pricing Plan
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className="hover:text-orange-500 transition-colors">
                    Contact
                  </Link>
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
              <h3 className="font-bold text-lg mb-6 text-orange-500">Get Started</h3>
              <p className="text-gray-600 mb-4 text-sm">Ready to transform your CA practice digitally?</p>
              <Link href="/#contact">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6">
                  Contact Us Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
