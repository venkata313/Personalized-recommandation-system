import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { 
  User, 
  Mail, 
  Calendar, 
  MapPin, 
  Heart, 
  Star, 
  Clock, 
  Film,
  Trophy,
  Activity,
  Settings,
  Edit
} from "lucide-react";

// Demo user data
const demoUser = {
  name: "Sarah Johnson",
  email: "sarah.johnson@example.com",
  avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
  joinDate: "March 2024",
  location: "San Francisco, CA",
  bio: "Movie enthusiast who loves discovering hidden gems and sharing recommendations with friends.",
  stats: {
    moviesWatched: 247,
    ratingsGiven: 189,
    listsCreated: 12,
    followers: 89,
    following: 156
  },
  favoriteGenres: [
    { name: "Drama", count: 45, color: "primary" },
    { name: "Sci-Fi", count: 38, color: "secondary" },
    { name: "Comedy", count: 32, color: "accent" },
    { name: "Thriller", count: 28, color: "primary-glow" }
  ],
  recentActivity: [
    { type: "rated", movie: "Quantum Edge", rating: 9, time: "2 hours ago" },
    { type: "added", movie: "The Veil", list: "Must Watch", time: "1 day ago" },
    { type: "reviewed", movie: "Shadow Protocol", time: "3 days ago" },
    { type: "followed", user: "Alex Chen", time: "1 week ago" }
  ],
  watchStats: {
    thisMonth: 18,
    avgRating: 8.2,
    totalHours: 847,
    streak: 12
  }
};

export const UserProfile = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-heading text-2xl font-bold text-foreground mb-2">User Profile</h2>
        <p className="text-muted-foreground">Demo profile showcasing user details and activity</p>
      </div>

      {/* Profile Header */}
      <Card className="p-6 bg-gradient-card border-border/20">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex items-center gap-4">
            <Avatar className="w-20 h-20 ring-2 ring-primary/20">
              <AvatarImage src={demoUser.avatar} alt={demoUser.name} />
              <AvatarFallback>{demoUser.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="font-heading text-xl font-bold text-foreground">{demoUser.name}</h3>
                <Badge variant="cinematic">Pro User</Badge>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                <div className="flex items-center gap-1">
                  <Mail className="w-4 h-4" />
                  {demoUser.email}
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  Joined {demoUser.joinDate}
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {demoUser.location}
                </div>
              </div>
              <p className="text-foreground text-sm mb-4">{demoUser.bio}</p>
              <div className="flex gap-2">
                <Button size="sm" className="gap-2">
                  <Edit className="w-4 h-4" />
                  Edit Profile
                </Button>
                <Button variant="outline" size="sm" className="gap-2">
                  <Settings className="w-4 h-4" />
                  Settings
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Stats Overview */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <Card className="p-4 bg-gradient-card border-border/20 text-center">
          <Film className="w-6 h-6 text-primary mx-auto mb-2" />
          <div className="text-2xl font-bold text-foreground">{demoUser.stats.moviesWatched}</div>
          <div className="text-xs text-muted-foreground">Movies Watched</div>
        </Card>
        <Card className="p-4 bg-gradient-card border-border/20 text-center">
          <Star className="w-6 h-6 text-secondary mx-auto mb-2" />
          <div className="text-2xl font-bold text-foreground">{demoUser.stats.ratingsGiven}</div>
          <div className="text-xs text-muted-foreground">Ratings Given</div>
        </Card>
        <Card className="p-4 bg-gradient-card border-border/20 text-center">
          <Heart className="w-6 h-6 text-accent mx-auto mb-2" />
          <div className="text-2xl font-bold text-foreground">{demoUser.stats.listsCreated}</div>
          <div className="text-xs text-muted-foreground">Lists Created</div>
        </Card>
        <Card className="p-4 bg-gradient-card border-border/20 text-center">
          <User className="w-6 h-6 text-primary-glow mx-auto mb-2" />
          <div className="text-2xl font-bold text-foreground">{demoUser.stats.followers}</div>
          <div className="text-xs text-muted-foreground">Followers</div>
        </Card>
        <Card className="p-4 bg-gradient-card border-border/20 text-center">
          <Activity className="w-6 h-6 text-primary mx-auto mb-2" />
          <div className="text-2xl font-bold text-foreground">{demoUser.stats.following}</div>
          <div className="text-xs text-muted-foreground">Following</div>
        </Card>
      </div>

      {/* Detailed Stats & Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Watch Statistics */}
        <Card className="p-6 bg-gradient-card border-border/20">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-primary/20 rounded-lg">
              <Trophy className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-heading text-lg font-semibold text-foreground">Watch Statistics</h3>
              <p className="text-muted-foreground text-sm">Your viewing activity overview</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center p-3 bg-background-secondary rounded-lg">
              <span className="text-sm font-medium text-foreground">Movies This Month</span>
              <span className="text-lg font-bold text-primary">{demoUser.watchStats.thisMonth}</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-background-secondary rounded-lg">
              <span className="text-sm font-medium text-foreground">Average Rating</span>
              <span className="text-lg font-bold text-secondary">{demoUser.watchStats.avgRating}/10</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-background-secondary rounded-lg">
              <span className="text-sm font-medium text-foreground">Total Watch Time</span>
              <span className="text-lg font-bold text-accent">{demoUser.watchStats.totalHours}h</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-background-secondary rounded-lg">
              <span className="text-sm font-medium text-foreground">Current Streak</span>
              <span className="text-lg font-bold text-primary-glow">{demoUser.watchStats.streak} days</span>
            </div>
          </div>
        </Card>

        {/* Favorite Genres */}
        <Card className="p-6 bg-gradient-card border-border/20">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-secondary/20 rounded-lg">
              <Heart className="w-6 h-6 text-secondary" />
            </div>
            <div>
              <h3 className="font-heading text-lg font-semibold text-foreground">Favorite Genres</h3>
              <p className="text-muted-foreground text-sm">Based on your viewing history</p>
            </div>
          </div>
          
          <div className="space-y-4">
            {demoUser.favoriteGenres.map((genre, index) => (
              <div key={genre.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-foreground">{genre.name}</span>
                  <span className="text-sm text-muted-foreground">{genre.count} movies</span>
                </div>
                <Progress 
                  value={(genre.count / demoUser.favoriteGenres[0].count) * 100} 
                  className="h-2" 
                />
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card className="p-6 bg-gradient-card border-border/20">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-accent/20 rounded-lg">
            <Clock className="w-6 h-6 text-accent" />
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-foreground">Recent Activity</h3>
            <p className="text-muted-foreground text-sm">Your latest interactions</p>
          </div>
        </div>
        
        <div className="space-y-4">
          {demoUser.recentActivity.map((activity, index) => (
            <div key={index} className="flex items-center gap-4 p-3 bg-background-secondary rounded-lg">
              <div className="p-2 bg-primary/10 rounded-lg">
                {activity.type === 'rated' && <Star className="w-4 h-4 text-primary" />}
                {activity.type === 'added' && <Heart className="w-4 h-4 text-secondary" />}
                {activity.type === 'reviewed' && <Film className="w-4 h-4 text-accent" />}
                {activity.type === 'followed' && <User className="w-4 h-4 text-primary-glow" />}
              </div>
              <div className="flex-1">
                <div className="text-sm text-foreground">
                  {activity.type === 'rated' && (
                    <>Rated <strong>{activity.movie}</strong> {activity.rating}/10</>
                  )}
                  {activity.type === 'added' && (
                    <>Added <strong>{activity.movie}</strong> to <strong>{activity.list}</strong></>
                  )}
                  {activity.type === 'reviewed' && (
                    <>Wrote a review for <strong>{activity.movie}</strong></>
                  )}
                  {activity.type === 'followed' && (
                    <>Started following <strong>{activity.user}</strong></>
                  )}
                </div>
                <div className="text-xs text-muted-foreground">{activity.time}</div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};