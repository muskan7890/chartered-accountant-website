"use client"

import { useState } from "react"
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
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export function PricingModal() {
  const [isOpen, setIsOpen] = useState(false)

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
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" className="text-sm font-medium">
          Pricing Plans
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center mb-4">CA Website & Mobile App Solutions</DialogTitle>
        </DialogHeader>

        <div className="space-y-8">
          {/* Why CAs Need Website & Mobile App */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-blue-600">
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
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Globe className="h-5 w-5 text-blue-500" />
                    Website Features
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {websiteFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <feature.icon className="h-4 w-4 text-blue-500 mt-1 flex-shrink-0" />
                        <span className="text-sm">{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Mobile App Features */}
              <Card>
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
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-purple-600">Development Timeframe</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                  <Globe className="h-6 w-6 text-blue-500" />
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
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-orange-600">Pricing</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Globe className="h-5 w-5 text-blue-500" />
                      <h4 className="font-semibold">Professional CA Website</h4>
                    </div>
                    <p className="text-2xl font-bold text-blue-600">₹15,000 – ₹30,000</p>
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
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Get Started Today
            </Button>
            <p className="text-sm text-gray-600">Contact us for a free consultation and customized quote</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
