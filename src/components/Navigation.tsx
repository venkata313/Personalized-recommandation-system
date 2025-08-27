import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Film, 
  BarChart3, 
  Brain, 
  Settings, 
  Search,
  User,
  Bell
} from "lucide-react";

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const Navigation = ({ activeTab, onTabChange }: NavigationProps) => {
  const tabs = [
    { id: "recommendations", label: "Recommendations", icon: Film },
    { id: "analytics", label: "Analytics", icon: BarChart3 },
    { id: "ai-insights", label: "AI Insights", icon: Brain },
    { id: "profile", label: "Profile", icon: User },
  ];

  return (
    <nav className="bg-gradient-card border-b border-border/20 sticky top-0 z-50 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-hero rounded-lg shadow-glow">
              <Film className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="font-heading text-xl font-bold text-foreground">Movie Recommendation System</h1>
              <p className="text-xs text-muted-foreground">AI-Powered Movie Discovery</p>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center gap-1 bg-background-secondary rounded-lg p-1">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <Button
                  key={tab.id}
                  variant={activeTab === tab.id ? "cinematic" : "ghost"}
                  size="sm"
                  onClick={() => onTabChange(tab.id)}
                  className="gap-2 transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                  {tab.id === "analytics" && (
                    <Badge variant="outline" className="ml-1 text-xs">Live</Badge>
                  )}
                </Button>
              );
            })}
          </div>

          {/* User Actions */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="gap-2">
              <Search className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" className="gap-2 relative">
              <Bell className="w-4 h-4" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full"></div>
            </Button>
            <Button variant="ghost" size="sm" className="gap-2">
              <User className="w-4 h-4" />
              Profile
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};