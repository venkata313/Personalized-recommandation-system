import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { 
  Brain, 
  TrendingUp, 
  Zap, 
  Target,
  Users,
  Activity,
  ArrowRight,
  Sparkles,
  X,
  BarChart3,
  Calendar,
  Clock
} from "lucide-react";

interface InsightData {
  title: string;
  description: string;
  confidence: number;
  impact: 'high' | 'medium' | 'low';
  category: string;
  action: string;
  detailedAnalysis: string;
  recommendations: string[];
  metrics: {
    label: string;
    value: string;
    change: string;
  }[];
}

const InsightCard = ({ 
  insight,
  onOpenDetails
}: {
  insight: InsightData;
  onOpenDetails: (insight: InsightData) => void;
}) => {
  const { title, description, confidence, impact, category, action } = insight;

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
      
      <Button 
        variant="ghost" 
        size="sm" 
        className="w-full justify-between group"
        onClick={() => onOpenDetails(insight)}
      >
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

const InsightDetailModal = ({ insight, isOpen, onClose }: {
  insight: InsightData | null;
  isOpen: boolean;
  onClose: () => void;
}) => {
  if (!insight) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-primary/20 rounded-lg">
              <Brain className="w-5 h-5 text-primary" />
            </div>
            <Badge variant="outline">{insight.category}</Badge>
          </div>
          <DialogTitle className="text-xl">{insight.title}</DialogTitle>
          <DialogDescription>
            {insight.description}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Confidence Score */}
          <div className="bg-background-secondary rounded-lg p-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-foreground">AI Confidence Score</span>
              <span className="text-lg font-bold text-primary">{insight.confidence}%</span>
            </div>
            <Progress value={insight.confidence} className="h-3" />
          </div>

          {/* Detailed Analysis */}
          <div>
            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              Detailed Analysis
            </h4>
            <p className="text-muted-foreground leading-relaxed">
              {insight.detailedAnalysis}
            </p>
          </div>

          {/* Key Metrics */}
          <div>
            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              Key Metrics
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {insight.metrics.map((metric, index) => (
                <div key={index} className="bg-background-secondary rounded-lg p-3">
                  <div className="text-sm text-muted-foreground">{metric.label}</div>
                  <div className="text-lg font-bold text-foreground">{metric.value}</div>
                  <div className="text-xs text-primary font-medium">{metric.change}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Recommendations */}
          <div>
            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <Target className="w-4 h-4" />
              Recommended Actions
            </h4>
            <ul className="space-y-2">
              {insight.recommendations.map((rec, index) => (
                <li key={index} className="flex items-start gap-2 text-muted-foreground">
                  <ArrowRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  {rec}
                </li>
              ))}
            </ul>
          </div>

          {/* Implementation Timeline */}
          <div className="bg-gradient-card border border-border/20 rounded-lg p-4">
            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Implementation Priority
            </h4>
            <Badge variant={insight.impact === 'high' ? 'cinematic' : 'outline'} className="mb-2">
              {insight.impact.toUpperCase()} IMPACT
            </Badge>
            <p className="text-sm text-muted-foreground">
              {insight.impact === 'high' 
                ? "Immediate implementation recommended within 1-2 weeks"
                : insight.impact === 'medium'
                ? "Schedule implementation within 1-2 months"
                : "Consider for next quarterly review cycle"
              }
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export const AIInsights = () => {
  const [selectedInsight, setSelectedInsight] = useState<InsightData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const insights: InsightData[] = [
    {
      title: "Emerging Genre Trend",
      description: "Sci-fi thriller combinations are showing 34% increased engagement. Users are gravitating toward complex narratives with futuristic themes.",
      confidence: 92,
      impact: 'high' as const,
      category: "Trend Analysis",
      action: "Adjust recommendation weights",
      detailedAnalysis: "Our machine learning algorithms have detected a significant shift in user preferences over the past 3 months. The combination of science fiction and thriller genres is experiencing unprecedented growth, with engagement metrics showing a 34% increase compared to traditional single-genre recommendations. This trend appears to be driven by users aged 18-35 who are seeking more intellectually stimulating content that combines action with philosophical themes. The algorithm has identified key narrative elements that resonate with this demographic, including time manipulation, dystopian futures, and moral ambiguity.",
      recommendations: [
        "Increase weighting for sci-fi thriller combinations by 25% in recommendation algorithm",
        "Source additional content that fits this hybrid genre profile",
        "Create specialized content collections featuring sci-fi thriller narratives",
        "Develop targeted marketing campaigns for this emerging segment"
      ],
      metrics: [
        { label: "Engagement Rate", value: "+34%", change: "vs last quarter" },
        { label: "User Retention", value: "+18%", change: "for this genre" },
        { label: "Completion Rate", value: "87%", change: "+12% increase" }
      ]
    },
    {
      title: "User Behavior Shift",
      description: "Evening viewing sessions have extended by 23 minutes on average. This suggests higher engagement with longer-form content.",
      confidence: 87,
      impact: 'medium' as const,
      category: "Behavioral Pattern",
      action: "Optimize content scheduling",
      detailedAnalysis: "Analysis of user viewing patterns reveals a substantial change in consumption behavior during evening hours (6 PM - 11 PM). Sessions have extended by an average of 23 minutes, indicating users are more willing to commit to longer content. This shift correlates with the rise of binge-watching culture and suggests users are seeking more immersive experiences. The data shows this trend is particularly strong on weekends and during seasonal periods, with users showing increased tolerance for multi-episode or longer-format content.",
      recommendations: [
        "Prioritize longer-format content in evening time slots",
        "Adjust recommendation algorithms to suggest series over single movies during peak evening hours",
        "Implement auto-play features for related content during extended viewing sessions",
        "Create curated 'Evening Binge' playlists optimized for extended viewing"
      ],
      metrics: [
        { label: "Avg Session Length", value: "+23 min", change: "vs 3 months ago" },
        { label: "Evening Engagement", value: "78%", change: "+15% increase" },
        { label: "Multi-Episode Views", value: "+41%", change: "evening sessions" }
      ]
    },
    {
      title: "Collaborative Filtering Enhancement",
      description: "Adding temporal dynamics to user similarity calculations could improve recommendation accuracy by up to 8%.",
      confidence: 94,
      impact: 'high' as const,
      category: "Algorithm Optimization",
      action: "Deploy model update",
      detailedAnalysis: "Our research team has developed an enhanced collaborative filtering model that incorporates temporal dynamics into user similarity calculations. Traditional collaborative filtering relies on static user preferences, but our new approach accounts for how user tastes evolve over time and seasonal preferences. Initial testing shows this could improve recommendation accuracy by 8.3%, with particularly strong improvements in predicting user interest in new genres and seasonal content. The model uses advanced machine learning techniques to weight recent interactions more heavily while still considering long-term preference patterns.",
      recommendations: [
        "Deploy the enhanced collaborative filtering model in production",
        "Implement A/B testing framework to measure real-world performance gains",
        "Train customer service team on new recommendation logic",
        "Monitor user engagement metrics closely during initial rollout period"
      ],
      metrics: [
        { label: "Accuracy Improvement", value: "+8.3%", change: "vs current model" },
        { label: "New Genre Discovery", value: "+15%", change: "user adoption" },
        { label: "Seasonal Relevance", value: "92%", change: "+22% improvement" }
      ]
    },
    {
      title: "Content Gap Identification",
      description: "There's an underserved segment interested in documentary-style narratives with sci-fi elements. Market opportunity detected.",
      confidence: 78,
      impact: 'medium' as const,
      category: "Market Analysis",
      action: "Expand content catalog",
      detailedAnalysis: "Market analysis reveals a significant underserved segment of users who express interest in documentary-style content that incorporates science fiction elements. This includes speculative documentaries, science-based narratives, and educational content with futuristic themes. Currently, only 3% of our catalog serves this niche, despite user surveys indicating 18% interest in such content. This represents a substantial market opportunity, particularly among educated millennials and Gen-Z users who value both entertainment and learning.",
      recommendations: [
        "Partner with documentary producers to create sci-fi educational content",
        "License existing documentary series with scientific themes",
        "Develop original content targeting this underserved segment",
        "Create dedicated discovery channels for educational sci-fi content"
      ],
      metrics: [
        { label: "Market Gap", value: "15%", change: "underserved users" },
        { label: "Content Coverage", value: "3%", change: "current catalog" },
        { label: "Interest Score", value: "78%", change: "user surveys" }
      ]
    }
  ];

  const handleOpenDetails = (insight: InsightData) => {
    setSelectedInsight(insight);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedInsight(null);
  };

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
              <InsightCard 
                key={index} 
                insight={insight}
                onOpenDetails={handleOpenDetails}
              />
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

      <InsightDetailModal 
        insight={selectedInsight}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};