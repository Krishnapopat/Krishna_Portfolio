import { Toaster } from "@/components/ui/toaster"
import { Toaster as Sonner } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navigation from "./components/portfolio/Navigation"
import Home from "./pages/Home"
import About from "./pages/About"
import Experience from "./pages/Experience"
import Projects from "./pages/Projects"
import Certifications from "./pages/Certifications"
import Blogs from "./pages/Blogs"
import Contact from "./pages/Contact"
import NotFound from "./pages/NotFound"
import { Heart } from "lucide-react"

const queryClient = new QueryClient()

const App = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen">
            <Navigation />
            <main className="pt-16">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/certifications" element={<Certifications />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/contact" element={<Contact />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            
            {/* Minimal Footer with Copyright */}
            <footer className="bg-card border-t border-border py-6">
              <div className="container mx-auto px-4 text-center">
                <p className="text-muted-foreground flex items-center justify-center gap-2">
                  Made with <Heart size={16} className="text-red-500" /> by Krishna Popat © {currentYear}
                </p>
              </div>
            </footer>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  )
}

export default App
