import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Cpu, Database, Cloud } from "lucide-react"

const About = () => {
  const skills = [
    { category: "Languages", items: ["Python", "Java", "C/C++", "JavaScript", "SQL", "HTML/CSS"], icon: Code },
    { category: "AI/ML & Frameworks", items: ["Streamlit", "Flask", "FastAPI", "Langchain", "Langgraph","Google ADK","MCP","Google A2A","Google Document AI","YOLO"], icon: Cpu },
    { category: "Databases & Tools", items: ["SQLite", "Git", "Postman", "VS Code"], icon: Database },
    {
      category: "Cloud & Libraries",
      items: ["Google Cloud Platform", "Google GenAI SDK", "numpy", "pandas", "pytesseract", "pyPDF2"],
      icon: Cloud,
    },
  ]

  return (
    <div className="min-h-screen py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          AI Engineer passionate about solving complex problems and building innovative AI-powered solutions that make a real impact. Skilled in agentic workflows, chatbots, and cloud-based AI systems, with a strong foundation in machine learning, Python, and scalable software development. I thrive on turning ideas into intelligent, production-ready solutions.


          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skills.map((skillGroup, index) => {
            const IconComponent = skillGroup.icon
            return (
              <Card
                key={skillGroup.category}
                className="p-6 hover-glow glass-effect animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  <IconComponent className="text-primary mr-3" size={24} />
                  <h3 className="text-lg font-semibold">{skillGroup.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            )
          })}
        </div>


        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="p-8 glass-effect hover-glow animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <h2 className="text-2xl font-bold mb-6 text-center">My Journey</h2>
            <div className="prose prose-lg mx-auto text-muted-foreground">
              <p className="mb-4">
              My journey in technology began with a curiosity about how machines can learn and make decisions. What started as simple coding experiments has grown into a passion for building intelligent systems that can understand, reason, and solve real-world problems.


              </p>
              <p className="mb-4">
              Currently working as an AI Engineer at Searce, I specialize in designing and deploying production-grade AI solutions, from LLM-powered applications and agentic workflows to intelligent automation systems. I actively explore new AI architectures, optimize large-scale models, and integrate them into scalable, high-impact business solutions.
              </p>
              <p>
              I believe in continuous learning and staying at the forefront of AI innovation. Whether it’s experimenting with emerging LLM frameworks, architecting multi-agent systems, or developing tools that transform how businesses operate, I’m driven to push the boundaries of what’s possible in artificial intelligence.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default About
