import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Code, Database, Bot, FileText } from "lucide-react"

const Projects = () => {
  const projects = [
    {
      title: "Form16 Information Extraction System (FinDoc)",
      description:
        "A production-grade pipeline to extract fields from Form16 documents using YOLOv10 and Google Document AI OCR with spatial-entity matching and post-processing.",
      technologies: ["Python", "YOLOv10", "Google Document AI", "OCR", "Machine Learning", "Data Processing"],
      category: "AI/ML",
      icon: FileText,
      features: [
        "97.86% accuracy across 70+ test documents",
        "Multi-format export (JSON/Excel)",
        "Accelerated data entry processes by over 5x",
        "Production-grade pipeline architecture",
      ],
      github: "https://github.com/krishnapopat/form16-extraction",
    
    },
    {
      title: "GitLab-Jira Workflow Automation Agent",
      description:
        "An end-to-end CI/CD orchestrator integrating GitLab and Jira using MCP servers and Google ADK with automated merge request flows and contextual summarization.",
      technologies: ["Python", "MCP", "ADK", "GitLab API", "Jira API", "CI/CD", "Automation"],
      category: "DevOps",
      icon: Code,
      features: [
        "Automated 50+ merge request flows",
        "Branch-to-Jira ticket mapping",
        "Contextual merge diff summarization",
        "100% Jira status updates with Gemini-generated comments",
      ],
      github: "https://github.com/krishnapopat/gitlab-jira-automation",
  
    },
    {
      title: "AI-Powered Retail Assistant",
      description:
        "A FastAPI application using Mistral LLM to classify queries, convert them into SQL, and return contextual responses from a Retail database with smart caching.",
      technologies: ["FastAPI", "Mistral LLM", "SQL", "Python", "Caching", "Query Processing"],
      category: "AI/ML",
      icon: Bot,
      features: [
        "Intelligent query classification",
        "Natural language to SQL conversion",
        "Smart caching mechanisms",
        "Contextual response generation",
      ],
      github: "https://github.com/krishnapopat/retail-assistant",
     
    },
    {
      title: "Web Security Analysis Dashboard",
      description:
        "An AI-based dashboard for 1000+ users leveraging behavioral data visualization and Gemini chatbot integration for intelligent threat detection and querying.",
      technologies: ["Python", "Gemini", "Data Visualization", "Security Analysis", "Dashboard", "AI"],
      category: "Security",
      icon: Database,
      features: [
        "Behavioral data visualization",
        "Intelligent threat detection",
        "Gemini chatbot integration",
        "Real-time security monitoring",
      ],
      github: "https://github.com/krishnapopat/security-dashboard",
    
    },
  ]

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "AI/ML": "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
      DevOps: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
      Security: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
      "Full Stack": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    }
    return colors[category] || "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
  }

  return (
    <div className="min-h-screen py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my best work in AI engineering, automation, and software development, demonstrating
            production-grade solutions and innovative approaches.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => {
            const IconComponent = project.icon
            return (
              <Card
                key={index}
                className="overflow-hidden hover-glow glass-effect animate-slide-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <IconComponent className="text-primary" size={24} />
                      </div>
                      <Badge className={getCategoryColor(project.category)}>{project.category}</Badge>
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h2>

                  <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>

                  <div className="space-y-4 mb-6">
                    <h3 className="font-semibold text-sm uppercase tracking-wide">Key Features</h3>
                    <ul className="space-y-2">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-primary mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4 mb-6">
                    <h3 className="font-semibold text-sm uppercase tracking-wide">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-colors text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github size={16} className="mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                    </Button>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>

        <div className="mt-16 text-center">
          <Card
            className="p-8 glass-effect hover-glow animate-fade-in max-w-2xl mx-auto"
            style={{ animationDelay: "0.6s" }}
          >
            <h2 className="text-2xl font-bold mb-4">More Projects</h2>
            <p className="text-muted-foreground mb-6">
              These are just a few highlights from my portfolio. I'm constantly working on new AI projects and
              experimenting with emerging technologies. Check out my GitHub for more work!
            </p>
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <a href="https://github.com/krishnapopat" target="_blank" rel="noopener noreferrer">
                <Github size={16} className="mr-2" />
                View All Projects on GitHub
              </a>
            </Button>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Projects
