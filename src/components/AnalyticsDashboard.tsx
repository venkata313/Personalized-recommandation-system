import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { 
  TrendingUp, 
  Users, 
  Eye, 
  Target, 
  Activity, 
  Brain,
  BarChart3,
  Clock,
  Star,
  Globe,
  ThumbsUp
} from "lucide-react";

const MetricCard = ({ 
  title, 
  value, 
  change, 
  icon: Icon, 
  description 
}: {
  title: string;
  value: string;
  change: string;
  icon: React.ElementType;
  description: string;
}) => (
  <Card className="p-6 bg-gradient-card border-border/20 hover:border-primary/30 transition-all duration-300">
    <div className="flex items-center gap-4">
      <div className="p-3 bg-primary/20 rounded-lg">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <div className="flex-1">
        <h3 className="font-medium text-muted-foreground text-sm">{title}</h3>
        <div className="flex items-end gap-2">
          <span className="text-2xl font-bold text-foreground">{value}</span>
          <Badge variant={change.startsWith('+') ? 'cinematic' : 'outline'} className="text-xs">
            {change}
          </Badge>
        </div>
        <p className="text-xs text-muted-foreground mt-1">{description}</p>
      </div>
    </div>
  </Card>
);

const PerformanceChart = () => (
  <Card className="p-6 bg-gradient-card border-border/20">
    <div className="flex items-center justify-between mb-6">
      <div>
        <h3 className="font-heading text-lg font-semibold text-foreground">Recommendation Performance</h3>
        <p className="text-muted-foreground text-sm">Real-time ML model accuracy</p>
      </div>
      <Badge variant="cinematic">Live</Badge>
    </div>
    
    <div className="space-y-4">
      <div>
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-foreground">Precision Score</span>
          <span className="text-sm text-primary font-bold">94.7%</span>
        </div>
        <Progress value={94.7} className="h-2" />
      </div>
      
      <div>
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-foreground">Recall Rate</span>
          <span className="text-sm text-secondary font-bold">89.3%</span>
        </div>
        <Progress value={89.3} className="h-2" />
      </div>
      
      <div>
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-foreground">F1 Score</span>
          <span className="text-sm text-accent font-bold">91.8%</span>
        </div>
        <Progress value={91.8} className="h-2" />
      </div>
      
      <div>
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-foreground">Model Confidence</span>
          <span className="text-sm text-primary-glow font-bold">96.2%</span>
        </div>
        <Progress value={96.2} className="h-2" />
      </div>
    </div>
  </Card>
);

export const AnalyticsDashboard = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-heading text-2xl font-bold text-foreground mb-2">Analytics & Performance</h2>
        <p className="text-muted-foreground">Real-time insights into recommendation engine performance and user engagement</p>
      </div>

      {/* Key Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Website Visitors"
          value="45.7K"
          change="+12.3%"
          icon={Globe}
          description="Total visitors today"
        />
        <MetricCard
          title="Total Movie Ratings"
          value="8.9K"
          change="+18.5%"
          icon={Star}
          description="Ratings submitted today"
        />
        <MetricCard
          title="Active Users"
          value="12.4K"
          change="+8.2%"
          icon={Users}
          description="Daily active users"
        />
        <MetricCard
          title="Click-through Rate"
          value="18.4%"
          change="+3.1%"
          icon={Eye}
          description="User engagement rate"
        />
      </div>

      {/* Website & Rating Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6 bg-gradient-card border-border/20">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-primary/20 rounded-lg">
              <Globe className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-heading text-lg font-semibold text-foreground">Visitor Analytics</h3>
              <p className="text-muted-foreground text-sm">Website traffic overview</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center p-3 bg-background-secondary rounded-lg">
              <span className="text-sm font-medium text-foreground">Total Visitors (All Time)</span>
              <span className="text-lg font-bold text-primary">2.8M</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-background-secondary rounded-lg">
              <span className="text-sm font-medium text-foreground">Today's Visitors</span>
              <span className="text-lg font-bold text-secondary">45.7K</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-background-secondary rounded-lg">
              <span className="text-sm font-medium text-foreground">Unique Visitors</span>
              <span className="text-lg font-bold text-accent">38.2K</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-background-secondary rounded-lg">
              <span className="text-sm font-medium text-foreground">Returning Visitors</span>
              <span className="text-lg font-bold text-primary-glow">7.5K</span>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-gradient-card border-border/20">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-secondary/20 rounded-lg">
              <Star className="w-6 h-6 text-secondary" />
            </div>
            <div>
              <h3 className="font-heading text-lg font-semibold text-foreground">Movie Rating Statistics</h3>
              <p className="text-muted-foreground text-sm">User rating activity</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center p-3 bg-background-secondary rounded-lg">
              <span className="text-sm font-medium text-foreground">Total Ratings</span>
              <span className="text-lg font-bold text-secondary">156K</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-background-secondary rounded-lg">
              <span className="text-sm font-medium text-foreground">Average Rating</span>
              <span className="text-lg font-bold text-accent">8.2/10</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-background-secondary rounded-lg">
              <span className="text-sm font-medium text-foreground">Ratings Today</span>
              <span className="text-lg font-bold text-primary">8.9K</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-background-secondary rounded-lg">
              <span className="text-sm font-medium text-foreground">Most Rated Movie</span>
              <span className="text-sm font-bold text-primary-glow">Quantum Edge</span>
            </div>
          </div>
        </Card>
      </div>

      {/* Performance Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <PerformanceChart />
        
        {/* Bar Chart */}
        <Card className="p-6 bg-gradient-card border-border/20">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-accent/20 rounded-lg">
              <BarChart3 className="w-6 h-6 text-accent" />
            </div>
            <div>
              <h3 className="font-heading text-lg font-semibold text-foreground">Genre Performance</h3>
              <p className="text-muted-foreground text-sm">Recommendation accuracy by genre</p>
            </div>
          </div>
          
          <ChartContainer
            config={{
              accuracy: { label: "Accuracy", color: "hsl(var(--primary))" },
            }}
            className="h-[200px]"
          >
            <BarChart
              data={[
                { genre: "Action", accuracy: 94 },
                { genre: "Drama", accuracy: 89 },
                { genre: "Comedy", accuracy: 92 },
                { genre: "Sci-Fi", accuracy: 87 },
                { genre: "Horror", accuracy: 85 },
              ]}
            >
              <XAxis dataKey="genre" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="accuracy" fill="hsl(var(--primary))" radius={4} />
            </BarChart>
          </ChartContainer>
        </Card>

        {/* Pie Chart */}
        <Card className="p-6 bg-gradient-card border-border/20">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-secondary/20 rounded-lg">
              <Brain className="w-6 h-6 text-secondary" />
            </div>
            <div>
              <h3 className="font-heading text-lg font-semibold text-foreground">User Preferences</h3>
              <p className="text-muted-foreground text-sm">Distribution of user genre preferences</p>
            </div>
          </div>
          
          <ChartContainer
            config={{
              action: { label: "Action", color: "hsl(var(--primary))" },
              drama: { label: "Drama", color: "hsl(var(--secondary))" },
              comedy: { label: "Comedy", color: "hsl(var(--accent))" },
              scifi: { label: "Sci-Fi", color: "hsl(var(--primary-glow))" },
              other: { label: "Other", color: "hsl(var(--muted))" },
            }}
            className="h-[200px]"
          >
            <PieChart>
              <Pie
                data={[
                  { name: "Action", value: 35, fill: "hsl(var(--primary))" },
                  { name: "Drama", value: 25, fill: "hsl(var(--secondary))" },
                  { name: "Comedy", value: 20, fill: "hsl(var(--accent))" },
                  { name: "Sci-Fi", value: 15, fill: "hsl(var(--primary-glow))" },
                  { name: "Other", value: 5, fill: "hsl(var(--muted))" },
                ]}
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              />
              <ChartTooltip content={<ChartTooltipContent />} />
            </PieChart>
          </ChartContainer>
        </Card>
      </div>
      
      {/* AI Model Insights */}
      <Card className="p-6 bg-gradient-card border-border/20">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-secondary/20 rounded-lg">
            <Brain className="w-6 h-6 text-secondary" />
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-foreground">AI Model Insights</h3>
            <p className="text-muted-foreground text-sm">Machine learning performance metrics</p>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-background-secondary rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <BarChart3 className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-foreground">Training Epochs</span>
              </div>
              <div className="text-xl font-bold text-accent">847</div>
            </div>
            
            <div className="bg-background-secondary rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">Last Updated</span>
              </div>
              <div className="text-xl font-bold text-primary">2m ago</div>
            </div>
          </div>
          
          <div className="bg-background-secondary rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-3">Feature Importance</h4>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">User Rating History</span>
                <span className="text-sm font-bold text-primary">0.84</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Genre Preferences</span>
                <span className="text-sm font-bold text-secondary">0.72</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Watch Time Patterns</span>
                <span className="text-sm font-bold text-accent">0.68</span>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};