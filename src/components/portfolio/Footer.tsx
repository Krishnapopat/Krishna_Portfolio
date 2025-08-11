"use client"

import { Github, Linkedin, Mail, Heart } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Brand */}
          <div>
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center text-primary-foreground font-bold text-lg">
                K
              </div>
              <span className="font-bold text-xl gradient-text">Krishna Popat</span>
            </div>
            <p className="text-muted-foreground max-w-sm mx-auto md:mx-0">
            AI Engineer passionate about building intelligent solutions, leveraging cutting-edge technologies, and solving real-world problems through agentic workflows and advanced AI systems.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <div className="space-y-2">
              {[
                { label: "About", id: "about" },
                { label: "Experience", id: "experience" },
                { label: "Projects", id: "projects" },
                { label: "Certifications", id: "certifications" },
                { label: "Blogs", id: "blogs" },
                { label: "Contact", id: "contact" },
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => document.getElementById(link.id)?.scrollIntoView({ behavior: "smooth" })}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Let's Connect</h3>
            <div className="flex justify-center md:justify-start space-x-4 mb-4">
              <a
                href="https://github.com/krishnapopat"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-muted rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/krishna-popat-053311233/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-muted rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:nilakrishna2004@gmail.com"
                className="p-3 bg-muted rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
            <p className="text-sm text-muted-foreground">Open to new opportunities and collaborations</p>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            Made with <Heart size={16} className="text-red-500" /> by Krishna Popat © {currentYear}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
