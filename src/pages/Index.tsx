import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { RecommendationEngine } from "@/components/RecommendationEngine";
import { AnalyticsDashboard } from "@/components/AnalyticsDashboard";
import { AIInsights } from "@/components/AIInsights";

const Index = () => {
  const [activeTab, setActiveTab] = useState("recommendations");

  const renderContent = () => {
    switch (activeTab) {
      case "recommendations":
        return <RecommendationEngine />;
      case "analytics":
        return <AnalyticsDashboard />;
      case "ai-insights":
        return <AIInsights />;
      default:
        return <RecommendationEngine />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-cinematic">
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
      
      <main className="max-w-7xl mx-auto px-6 py-8">
        {renderContent()}
      </main>
      
      {/* Background decoration */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-3/4 left-3/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

export default Index;
