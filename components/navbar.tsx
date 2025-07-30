"use client"

import { PricingModal } from "./pricing-modal"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-blue-600">CA Solutions</h1>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Button variant="ghost" className="text-sm font-medium">
                Home
              </Button>
              <Button variant="ghost" className="text-sm font-medium">
                Services
              </Button>
              <Button variant="ghost" className="text-sm font-medium">
                About
              </Button>
              <PricingModal />
              <Button variant="ghost" className="text-sm font-medium">
                Contact
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm">
              Menu
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
