import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Brain, 
  TrendingUp, 
  Zap, 
  Target,
  Users,
  Activity,
  ArrowRight,
  Sparkles
} from "lucide-react";

const InsightCard = ({ 
  title, 
  description, 
  confidence, 
  impact, 
  category,
  action 
}: {
  title: string;
  description: string;
  confidence: number;
  impact: 'high' | 'medium' | 'low';
  category: string;
  action: string;
}) => {
  const impactColors = {
    high: 'text-primary',
    medium: 'text-secondary', 
    low: 'text-accent'
  };

  return (
    <Card className="p-6 bg-gradient-card border-border/20 hover:border-primary/30 transition-all duration-300">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/20 rounded-lg">
            <Brain className="w-5 h-5 text-primary" />
          </div>
          <div>
            <Badge variant="outline" className="text-xs mb-2">{category}</Badge>
            <h3 className="font-heading text-lg font-semibold text-foreground">{title}</h3>
          </div>
        </div>
        <Badge variant={impact === 'high' ? 'cinematic' : 'outline'}>
          {impact.toUpperCase()} IMPACT
        </Badge>
      </div>
      
      <p className="text-muted-foreground mb-4">{description}</p>
      
      <div className="space-y-3 mb-4">
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-foreground">AI Confidence</span>
            <span className="text-sm font-bold text-primary">{confidence}%</span>
          </div>
          <Progress value={confidence} className="h-2" />
        </div>
      </div>
      
      <Button variant="ghost" size="sm" className="w-full justify-between group">
        {action}
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Button>
    </Card>
  );
};

const ModelMetrics = () => (
  <Card className="p-6 bg-gradient-card border-border/20">
    <div className="flex items-center gap-3 mb-6">
      <div className="p-2 bg-accent/20 rounded-lg">
        <Activity className="w-6 h-6 text-accent" />
      </div>
      <div>
        <h3 className="font-heading text-lg font-semibold text-foreground">Model Performance</h3>
        <p className="text-muted-foreground text-sm">Real-time neural network metrics</p>
      </div>
    </div>
    
    <div className="grid grid-cols-2 gap-4 mb-6">
      <div className="bg-background-secondary rounded-lg p-4">
        <div className="flex items-center gap-2 mb-2">
          <Zap className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-foreground">Processing Speed</span>
        </div>
        <div className="text-2xl font-bold text-primary">847ms</div>
        <p className="text-xs text-muted-foreground">Average inference time</p>
      </div>
      
      <div className="bg-background-secondary rounded-lg p-4">
        <div className="flex items-center gap-2 mb-2">
          <Target className="w-4 h-4 text-secondary" />
          <span className="text-sm font-medium text-foreground">Accuracy Rate</span>
        </div>
        <div className="text-2xl font-bold text-secondary">94.7%</div>
        <p className="text-xs text-muted-foreground">Prediction accuracy</p>
      </div>
    </div>
    
    <div className="space-y-3">
      <div>
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-foreground">Neural Network Depth</span>
          <span className="text-sm text-accent font-bold">12 Layers</span>
        </div>
        <Progress value={85} className="h-2" />
      </div>
      
      <div>
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-foreground">Feature Extraction</span>
          <span className="text-sm text-primary font-bold">2.4K Features</span>
        </div>
        <Progress value={92} className="h-2" />
      </div>
    </div>
  </Card>
);

export const AIInsights = () => {
  const insights = [
    {
      title: "Emerging Genre Trend",
      description: "Sci-fi thriller combinations are showing 34% increased engagement. Users are gravitating toward complex narratives with futuristic themes.",
      confidence: 92,
      impact: 'high' as const,
      category: "Trend Analysis",
      action: "Adjust recommendation weights"
    },
    {
      title: "User Behavior Shift",
      description: "Evening viewing sessions have extended by 23 minutes on average. This suggests higher engagement with longer-form content.",
      confidence: 87,
      impact: 'medium' as const,
      category: "Behavioral Pattern",
      action: "Optimize content scheduling"
    },
    {
      title: "Collaborative Filtering Enhancement",
      description: "Adding temporal dynamics to user similarity calculations could improve recommendation accuracy by up to 8%.",
      confidence: 94,
      impact: 'high' as const,
      category: "Algorithm Optimization",
      action: "Deploy model update"
    },
    {
      title: "Content Gap Identification",
      description: "There's an underserved segment interested in documentary-style narratives with sci-fi elements. Market opportunity detected.",
      confidence: 78,
      impact: 'medium' as const,
      category: "Market Analysis",
      action: "Expand content catalog"
    }
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-heading text-2xl font-bold text-foreground mb-2">AI Insights & Intelligence</h2>
          <p className="text-muted-foreground">Machine learning discoveries and automated recommendations for system optimization</p>
        </div>
        <Badge variant="cinematic" className="gap-2">
          <Sparkles className="w-4 h-4" />
          AI Powered
        </Badge>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 gap-6">
            {insights.map((insight, index) => (
              <InsightCard key={index} {...insight} />
            ))}
          </div>
        </div>
        
        <div className="space-y-6">
          <ModelMetrics />
          
          <Card className="p-6 bg-gradient-card border-border/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-secondary/20 rounded-lg">
                <Users className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground">User Clusters</h3>
                <p className="text-muted-foreground text-sm">Behavioral segmentation</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-foreground">Action Enthusiasts</span>
                <span className="text-sm text-primary font-bold">2.8K users</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-foreground">Drama Seekers</span>
                <span className="text-sm text-secondary font-bold">1.9K users</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-foreground">Sci-Fi Explorers</span>
                <span className="text-sm text-accent font-bold">1.4K users</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-foreground">Horror Fans</span>
                <span className="text-sm text-muted-foreground font-bold">892 users</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};