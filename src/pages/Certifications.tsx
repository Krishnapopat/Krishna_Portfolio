import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Cloud } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Google Cloud Professional Machine Learning Engineer",
      issuer: "Google Cloud",
      description: "Validates expertise in designing, building, and deploying ML models on Google Cloud to solve business challenges.",
      url: "https://www.credly.com/badges/57ab6fe0-da96-44ec-90a8-df6875af9f99/public_url",
      badgeType: "Machine Learning",
      date: "2025",
      badgeImage: "/image copy 2.png"
    },
    {
      title: "Google Cloud Associate Cloud Engineer", 
      issuer: "Google Cloud",
      description: "Demonstrates ability to deploy, manage, and secure applications on Google Cloud using core services and tools.",
      url: "https://www.credly.com/badges/7e60dfde-9911-43fe-9f2f-047198014f92/public_url",
      badgeType: "Cloud Infrastructure",
      date: "2025",
      badgeImage: "/image copy 3.png"
    },
    {
      title: "Google Cloud Generative AI Leader",
      issuer: "Google Cloud", 
      description: "Recognizes proficiency in applying generative AI technologies and leading innovation initiatives using Google Cloud AI tools.",
      url: "https://www.credly.com/badges/88efa5f8-2d66-426f-97cc-f138d97abc57/public_url",
      badgeType: "Generative AI",
      date: "2025",
      badgeImage: "/image copy 4.png"
    },
    {
      title: "Google Cloud Digital Leader",
      issuer: "Google Cloud",
      description: "Validates knowledge of cloud concepts, digital transformation, and business application of Google Cloud solutions.", 
      url: "https://www.credly.com/badges/edb126eb-dfc5-4955-a638-c24741435689/public_url",
      badgeType: "Cloud Strategy",
      date: "2025",
      badgeImage: "/image copy 5.png"
    }
  ];

  const getBadgeColor = (badgeType: string) => {
    switch (badgeType) {
      case "Machine Learning":
        return "bg-purple-100 text-purple-800 hover:bg-purple-200";
      case "Cloud Infrastructure":
        return "bg-blue-100 text-blue-800 hover:bg-blue-200";
      case "Generative AI":
        return "bg-green-100 text-green-800 hover:bg-green-200";
      case "Cloud Strategy":
        return "bg-orange-100 text-orange-800 hover:bg-orange-200";
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-200";
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Certifications</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Professional certifications in AI, ML and cloud computing  
          </p>
          <div className="flex items-center justify-center space-x-2">
            <Cloud className="text-primary" size={24} />
            <span className="text-lg font-semibold text-primary">Google Cloud Certified</span>
          </div>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2">
          {certifications.map((cert, index) => (
            <Card 
              key={index}
              className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 border-2 hover:border-primary/30"
              onClick={() => window.open(cert.url, '_blank')}
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-3">
                    <div className="w-16 h-16 rounded-lg overflow-hidden flex items-center justify-center flex-shrink-0 bg-white p-1">
                      <img 
                        src={cert.badgeImage} 
                        alt={cert.title}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          // Fallback to cloud icon if image fails
                          e.currentTarget.style.display = 'none';
                          const fallback = e.currentTarget.parentElement?.querySelector('.fallback-icon') as HTMLElement;
                          if (fallback) fallback.style.display = 'flex';
                        }}
                      />
                      <div className="fallback-icon w-full h-full bg-gradient-to-r from-blue-500 to-green-500 rounded-lg flex items-center justify-center" style={{ display: 'none' }}>
                        <Cloud className="text-white" size={24} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                        {cert.title}
                      </CardTitle>
                      <CardDescription className="text-sm mt-1">
                        {cert.issuer}
                      </CardDescription>
                    </div>
                  </div>
                  <ExternalLink 
                    className="text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" 
                    size={16}
                  />
                </div>
              </CardHeader>
              <CardContent>
                {/* Description */}
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {cert.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    <Badge className={`${getBadgeColor(cert.badgeType)} transition-colors`}>
                      {cert.badgeType}
                    </Badge>
                    <Badge variant="outline" className="border-primary/30">
                      Google Cloud
                    </Badge>
                  </div>
                  <span className="text-sm text-muted-foreground font-medium">
                    {cert.date}
                  </span>
                </div>
                
                <p className="text-xs text-muted-foreground mt-3 flex items-center space-x-1">
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

      
      </div>
    </div>
  );
};

export default Certifications; 