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
  Bell,
  Share2,
  Copy,
  ExternalLink
} from "lucide-react";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { toast } from "@/hooks/use-toast";

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

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link copied!",
        description: "Website link copied to clipboard",
      });
    } catch (error) {
      toast({
        title: "Failed to copy",
        description: "Please copy the link manually",
        variant: "destructive",
      });
    }
  };

  const handleSocialShare = (platform: string) => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent("Check out this amazing Movie Recommendation System!");
    const description = encodeURIComponent("Discover your next favorite movie with AI-powered recommendations");

    const shareUrls = {
      twitter: `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      whatsapp: `https://wa.me/?text=${title}%20${url}`,
      telegram: `https://t.me/share/url?url=${url}&text=${title}`,
    };

    const shareUrl = shareUrls[platform as keyof typeof shareUrls];
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }
  };

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
            
            {/* Share Website */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-2">
                  <Share2 className="w-4 h-4" />
                  Share
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem onClick={handleCopyLink} className="gap-2">
                  <Copy className="w-4 h-4" />
                  Copy Link
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => handleSocialShare('twitter')} className="gap-2">
                  <ExternalLink className="w-4 h-4" />
                  Share on Twitter
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleSocialShare('facebook')} className="gap-2">
                  <ExternalLink className="w-4 h-4" />
                  Share on Facebook
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleSocialShare('linkedin')} className="gap-2">
                  <ExternalLink className="w-4 h-4" />
                  Share on LinkedIn
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleSocialShare('whatsapp')} className="gap-2">
                  <ExternalLink className="w-4 h-4" />
                  Share on WhatsApp
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleSocialShare('telegram')} className="gap-2">
                  <ExternalLink className="w-4 h-4" />
                  Share on Telegram
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

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