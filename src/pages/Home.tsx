"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import { useNavigate } from "react-router-dom"

const Home = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-background via-secondary/50 to-accent/20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-60 h-60 bg-primary/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 h-screen flex items-center justify-center relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl w-full">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Hi, I'm <span className="gradient-text">Krishna</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-muted-foreground">AI Engineer</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              Passionate about building intelligent systems and exploring cutting-edge AI innovations. Experienced in agentic workflows, autonomous AI agents, and chatbots that solve real-world problems. Skilled in Python, AI/ML, and cloud technologies, with a strong focus on delivering scalable, impactful AI solutions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="hover-glow bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg"
                onClick={() => navigate("/projects")}
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="hover-glow border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg bg-transparent"
                onClick={() => navigate("/contact")}
              >
                Get In Touch
              </Button>
            </div>

            <div className="flex gap-6 justify-center lg:justify-start">
              <a
                href="https://github.com/krishnapopat"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/krishna-popat-053311233/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:nilakrishna2004@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center animate-scale-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-xl opacity-70 animate-pulse"></div>
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl hover-glow">
                <img
                  src="/lovable-uploads/84b24489-1770-47c9-a60f-008b49b01bf7.png"
                  alt="Krishna Popat"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
