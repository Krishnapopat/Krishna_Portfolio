import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Building, CheckCircle } from "lucide-react"

const Experience = () => {
  const experiences = [
    {
      title: "AI Engineer",
      company: "Searce Inc",
      location: "Pune",
      duration: "Jan 2025 - Present",
      description: [
        "Led the development of an AI-powered Web Security Analysis Dashboard processing behavioral data from 1,000+ users, integrating a Gemini-based chatbot for intelligent threat detection and natural language querying.",
        "Designed a FastAPI application leveraging the Mistral LLM to classify queries, convert them into SQL, and provide context-aware insights from a large-scale retail database, improving analyst productivity.",
        "Optimized system performance through smart caching mechanisms and query-type detection, reducing response latency and improving backend efficiency.",
        "Collaborated cross-functionally with engineering, security, and product teams to deliver scalable, production-ready AI solutions aligned with client and business objectives.",
      ],
      technologies: ["Python","Flask","Google ADK","MCP","Google A2A","Google Document AI","YOLO", "FastAPI", "Mistral LLM", "Gemini", "SQL", "Data Visualization", "AI/ML"],
    },
  ]

  const education = [
    {
      institution: "Institute Technology Nirma University",
      degree: "B.Tech in Computer Science And Engineering",
      location: "Ahmedabad",
      duration: "2021 - 2025",
      grade: "CGPA: 8.93",
      highlights: [
        "Awarded Certificate of Excellence for securing 9.35 SPI in 6th semester",
        "Strong focus on AI/ML, Data Structures, and Software Engineering",
        "Active participation in hackathons and technical competitions",
      ],
    }
  ]

  return (
    <div className="min-h-screen py-20 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Experience & <span className="gradient-text">Education</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My professional journey and educational background that have shaped my expertise in AI engineering and
            software development.
          </p>
        </div>

        {/* Experience Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Professional Experience</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="p-8 hover-glow glass-effect animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    <h2 className="text-2xl font-bold text-primary mb-2">{exp.title}</h2>
                    <div className="flex flex-wrap items-center gap-4 mb-4 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Building size={16} />
                        <span className="font-semibold">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{exp.duration}</span>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                          <span className="text-primary mt-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {education.map((edu, index) => (
              <Card
                key={index}
                className="p-8 hover-glow glass-effect animate-slide-up"
                style={{ animationDelay: `${0.4 + index * 0.2}s` }}
              >
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    <h3 className="text-xl font-bold text-primary mb-2">{edu.degree}</h3>
                    <div className="flex flex-wrap items-center gap-4 mb-4 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Building size={16} />
                        <span className="font-semibold">{edu.institution}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{edu.duration}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <Badge className="bg-accent/10 text-accent font-semibold">{edu.grade}</Badge>
                    </div>

                    <ul className="space-y-3">
                      {edu.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                          <CheckCircle size={18} className="text-primary mt-0.5 flex-shrink-0" />
                          <span className="leading-relaxed">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
