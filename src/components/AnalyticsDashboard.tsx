import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  Users, 
  Eye, 
  Target, 
  Activity, 
  Brain,
  BarChart3,
  Clock
} from "lucide-react";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";

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

const GenreDistributionChart = () => {
  const genreData = [
    { name: "Action", value: 35, fill: "hsl(var(--primary))" },
    { name: "Drama", value: 28, fill: "hsl(var(--secondary))" },
    { name: "Comedy", value: 20, fill: "hsl(var(--accent))" },
    { name: "Sci-Fi", value: 17, fill: "hsl(var(--primary-glow))" },
  ];

  return (
    <Card className="p-6 bg-gradient-card border-border/20">
      <h3 className="font-heading text-lg font-semibold text-foreground mb-6">Genre Distribution</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={genreData}
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
            >
              {genreData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Pie>
            <ChartTooltip content={<ChartTooltipContent />} />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        {genreData.map((genre) => (
          <div key={genre.name} className="flex items-center gap-2">
            <div 
              className="w-3 h-3 rounded-full" 
              style={{ backgroundColor: genre.fill }}
            />
            <span className="text-sm text-muted-foreground">{genre.name}</span>
            <span className="text-sm font-semibold text-foreground ml-auto">{genre.value}%</span>
          </div>
        ))}
      </div>
    </Card>
  );
};

const UserEngagementChart = () => {
  const engagementData = [
    { day: "Mon", views: 1200, clicks: 240 },
    { day: "Tue", views: 1800, clicks: 360 },
    { day: "Wed", views: 1600, clicks: 320 },
    { day: "Thu", views: 2200, clicks: 440 },
    { day: "Fri", views: 2800, clicks: 560 },
    { day: "Sat", views: 3200, clicks: 640 },
    { day: "Sun", views: 2400, clicks: 480 },
  ];

  return (
    <Card className="p-6 bg-gradient-card border-border/20">
      <h3 className="font-heading text-lg font-semibold text-foreground mb-6">Weekly Engagement</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={engagementData}>
            <XAxis 
              dataKey="day" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="views" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
            <Bar dataKey="clicks" fill="hsl(var(--secondary))" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="flex justify-center gap-6 mt-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-primary" />
          <span className="text-sm text-muted-foreground">Views</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-secondary" />
          <span className="text-sm text-muted-foreground">Clicks</span>
        </div>
      </div>
    </Card>
  );
};

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
          title="Active Users"
          value="12.4K"
          change="+8.2%"
          icon={Users}
          description="Daily active users"
        />
        <MetricCard
          title="Recommendations Served"
          value="1.2M"
          change="+15.7%"
          icon={Target}
          description="Total suggestions today"
        />
        <MetricCard
          title="Click-through Rate"
          value="18.4%"
          change="+3.1%"
          icon={Eye}
          description="User engagement rate"
        />
        <MetricCard
          title="Model Latency"
          value="42ms"
          change="-12%"
          icon={Activity}
          description="Average response time"
        />
      </div>

      {/* Performance Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PerformanceChart />
        
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

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <GenreDistributionChart />
        <UserEngagementChart />
      </div>
    </div>
  );
};