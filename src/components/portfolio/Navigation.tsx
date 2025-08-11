"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Home, User, Briefcase, Code, Mail, Sun, Moon, Award, BookOpen } from "lucide-react"
import { Link, useLocation } from "react-router-dom"

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const location = useLocation()

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle("dark")
  }

  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/about", label: "About", icon: User },
    { path: "/experience", label: "Experience", icon: Briefcase },
    { path: "/projects", label: "Projects", icon: Code },
    { path: "/certifications", label: "Certifications", icon: Award },
    { path: "/blogs", label: "Blogs", icon: BookOpen },
    { path: "/contact", label: "Contact", icon: Mail },
  ]

  const isActive = (path: string) => {
    return location.pathname === path
  }

  return (
    <>
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-border/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center text-primary-foreground font-bold text-lg">
                K
              </div>
              <span className="font-bold text-xl gradient-text">Krishna Popat</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => {
                const IconComponent = item.icon
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`relative flex items-center space-x-2 text-sm font-medium transition-all duration-300 group py-2 ${
                      isActive(item.path) ? "text-primary" : "text-muted-foreground hover:text-primary"
                    }`}
                  >
                    <IconComponent size={16} />
                    <span>{item.label}</span>
                    {/* Underline effect */}
                    <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transform transition-transform duration-300 ${
                      isActive(item.path) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`} />
                  </Link>
                )
              })}

              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className="text-muted-foreground hover:text-primary"
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className="text-muted-foreground hover:text-primary"
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
                className="text-muted-foreground hover:text-primary"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden glass-effect border-t border-border/20 animate-fade-in">
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => {
                  const IconComponent = item.icon
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center space-x-3 text-left transition-colors hover:text-primary p-2 rounded-lg hover:bg-muted/50 ${
                        isActive(item.path) ? "text-primary bg-muted/30" : "text-muted-foreground"
                      }`}
                    >
                      <IconComponent size={18} />
                      <span>{item.label}</span>
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Floating Navigation Dots (Desktop) */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
        <div className="flex flex-col space-y-4">
          {navItems.map((item) => {
            const IconComponent = item.icon
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`group relative w-12 h-12 rounded-full border-2 transition-all duration-300 flex items-center justify-center ${
                  isActive(item.path)
                    ? "bg-primary border-primary text-primary-foreground scale-110"
                    : "border-muted-foreground hover:border-primary hover:scale-110 text-muted-foreground hover:text-primary"
                }`}
                title={item.label}
              >
                <IconComponent size={16} />
                {/* Tooltip */}
                <span className="absolute right-16 bg-background border border-border rounded-lg px-3 py-1 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {item.label}
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Navigation
