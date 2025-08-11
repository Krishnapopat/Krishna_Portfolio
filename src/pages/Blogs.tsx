import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Calendar, Clock, User, BookOpen } from "lucide-react";

const Blogs = () => {
  const blogPosts = [
    {
      title: "Building Your First Agentic Workflow with LangGraph and Gemini LLM: A Step-by-Step Guide",
      description: "A comprehensive guide to building intelligent systems that can adapt, plan, and act autonomously using LangGraph and Google's Gemini LLM.",
      url: "https://medium.com/searce/building-your-first-agentic-workflow-with-langgraph-and-gemini-llm-a-step-by-step-guide-c173c9dcdfe7",
      date: "Apr 19, 2025",
      readTime: "6 min read",
      publication: "Searce",
      coverImage: "/image.png",
      fallbackImage: "https://miro.medium.com/v2/resize:fit:1200/1*8cU7vGD_-ypKVs2KjBv8dQ.png",
      tags: ["LangGraph", "Gemini LLM", "AI Agents", "Machine Learning", "Python"]
    },
    {
      title: "Unlocking Collaborative AI: Building Multi-Agent Systems with MCP & Gemini",
      description: "Explore how multiple agents can work together, each with their own responsibilities, and dynamically decide who should handle what using Model Context Protocol.",
      url: "https://medium.com/searce/unlocking-collaborative-ai-building-multi-agent-systems-with-mcp-gemini-94d5d08d355c", 
      date: "May 20, 2025",
      readTime: "8 min read",
      publication: "Searce",
      coverImage: "/image copy.png",
      fallbackImage: "https://miro.medium.com/v2/resize:fit:1200/1*2aYb3QfQvF-VbX-cJ9gZ1w.png",
      tags: ["Multi-Agent Systems", "MCP", "Gemini", "Collaborative Agents", "Python"]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Blog Posts</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Thoughts, tutorials, and insights about AI, machine learning, and technology
          </p>
          <div className="flex items-center justify-center space-x-2">
            <User className="text-primary" size={20} />
            <span className="text-lg font-semibold text-primary">Published on Medium</span>
          </div>
        </div>
        
        <div className="grid gap-8">
          {blogPosts.map((post, index) => (
            <Card 
              key={index}
              className="group cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-[1.02] border-2 hover:border-primary/30 overflow-hidden"
              onClick={() => window.open(post.url, '_blank')}
            >
              <div className="md:flex">
                {/* Cover Image */}
                <div className="md:w-1/3 h-48 md:h-auto bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center overflow-hidden relative">
                  <img 
                    src={post.coverImage} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      // Try fallback image first
                      if (e.currentTarget.src !== post.fallbackImage) {
                        e.currentTarget.src = post.fallbackImage;
                      } else {
                        // If fallback also fails, hide image and show placeholder
                        e.currentTarget.style.display = 'none';
                        const placeholder = e.currentTarget.nextElementSibling as HTMLElement;
                        if (placeholder) placeholder.style.display = 'flex';
                      }
                    }}
                  />
                  <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center absolute top-0 left-0" style={{ display: 'none' }}>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-2">
                        <BookOpen className="text-white" size={32} />
                      </div>
                      <span className="text-sm font-medium text-muted-foreground">Medium Article</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="md:w-2/3 p-6">
                  <CardHeader className="p-0 mb-4">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <span className="font-medium text-primary">{post.publication}</span>
                        <span>•</span>
                        <div className="flex items-center space-x-1">
                          <Calendar size={14} />
                          <span>{post.date}</span>
                        </div>
                        <span>•</span>
                        <div className="flex items-center space-x-1">
                          <Clock size={14} />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <ExternalLink 
                        className="text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" 
                        size={18}
                      />
                    </div>
                    <CardTitle className="text-xl leading-tight group-hover:text-primary transition-colors mb-2">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {post.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="p-0">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, tagIndex) => (
                        <Badge 
                          key={tagIndex} 
                          variant="secondary" 
                          className="hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground flex items-center space-x-1">
                      <ExternalLink size={14} />
                      <span>Read full article on Medium</span>
                    </p>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-muted rounded-lg p-4">
            <User className="text-primary" size={20} />
            <span className="text-sm text-muted-foreground">
              Follow me on 
              <a 
                href="https://medium.com/@nilakrishna2004" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline ml-1"
              >
                Medium
              </a>
              {" "}for more insights on AI and technology
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs; 