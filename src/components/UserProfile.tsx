import { useState } from "react";
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
  Edit,
  Plus,
  Minus,
  ExternalLink
} from "lucide-react";
import { useUserProfile } from "@/hooks/useUserProfile";
import { EditProfileDialog } from "@/components/EditProfileDialog";
import { SettingsDialog } from "@/components/SettingsDialog";
import { toast } from "@/hooks/use-toast";

export const UserProfile = () => {
  const { 
    userProfile, 
    isLoading, 
    updateProfile, 
    updateSettings, 
    addActivity, 
    updateGenrePreference 
  } = useUserProfile();
  
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isSettingsDialogOpen, setIsSettingsDialogOpen] = useState(false);

  const handleActivityClick = (activity: typeof userProfile.recentActivity[0]) => {
    if (activity.type === 'rated' && activity.movie) {
      toast({
        title: `${activity.movie}`,
        description: `You rated this movie ${activity.rating}/10`,
      });
    } else if (activity.type === 'reviewed' && activity.movie) {
      toast({
        title: `Review for ${activity.movie}`,
        description: "Opening movie details...",
      });
    } else if (activity.type === 'followed' && activity.user) {
      toast({
        title: `Following ${activity.user}`,
        description: "View their profile and activity",
      });
    }
  };

  const handleGenreAdjust = (genreName: string, increment: boolean) => {
    updateGenrePreference(genreName, increment);
    addActivity({
      type: increment ? 'rated' : 'reviewed',
      movie: `${genreName} movie`,
      time: 'Just now'
    });
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-heading text-2xl font-bold text-foreground mb-2">User Profile</h2>
        <p className="text-muted-foreground">Manage your profile, preferences, and viewing activity</p>
      </div>

      {/* Profile Header */}
      <Card className="p-6 bg-gradient-card border-border/20">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex items-center gap-4">
            <Avatar className="w-20 h-20 ring-2 ring-primary/20 cursor-pointer hover:ring-primary/40 transition-all">
              <AvatarImage src={userProfile.avatar} alt={userProfile.name} />
              <AvatarFallback>{userProfile.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="font-heading text-xl font-bold text-foreground">{userProfile.name}</h3>
                <Badge variant="cinematic">Pro User</Badge>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                <div className="flex items-center gap-1">
                  <Mail className="w-4 h-4" />
                  {userProfile.email}
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  Joined {userProfile.joinDate}
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {userProfile.location}
                </div>
              </div>
              <p className="text-foreground text-sm mb-4">{userProfile.bio}</p>
              <div className="flex gap-2">
                <Button 
                  size="sm" 
                  className="gap-2"
                  onClick={() => setIsEditDialogOpen(true)}
                  disabled={isLoading}
                >
                  <Edit className="w-4 h-4" />
                  Edit Profile
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="gap-2"
                  onClick={() => setIsSettingsDialogOpen(true)}
                >
                  <Settings className="w-4 h-4" />
                  Settings
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Stats Overview */}
      {userProfile.settings.privacy.showStats && (
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <Card className="p-4 bg-gradient-card border-border/20 text-center hover:scale-105 transition-transform cursor-pointer">
            <Film className="w-6 h-6 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold text-foreground">{userProfile.stats.moviesWatched}</div>
            <div className="text-xs text-muted-foreground">Movies Watched</div>
          </Card>
          <Card className="p-4 bg-gradient-card border-border/20 text-center hover:scale-105 transition-transform cursor-pointer">
            <Star className="w-6 h-6 text-secondary mx-auto mb-2" />
            <div className="text-2xl font-bold text-foreground">{userProfile.stats.ratingsGiven}</div>
            <div className="text-xs text-muted-foreground">Ratings Given</div>
          </Card>
          <Card className="p-4 bg-gradient-card border-border/20 text-center hover:scale-105 transition-transform cursor-pointer">
            <Heart className="w-6 h-6 text-accent mx-auto mb-2" />
            <div className="text-2xl font-bold text-foreground">{userProfile.stats.listsCreated}</div>
            <div className="text-xs text-muted-foreground">Lists Created</div>
          </Card>
          <Card className="p-4 bg-gradient-card border-border/20 text-center hover:scale-105 transition-transform cursor-pointer">
            <User className="w-6 h-6 text-primary-glow mx-auto mb-2" />
            <div className="text-2xl font-bold text-foreground">{userProfile.stats.followers}</div>
            <div className="text-xs text-muted-foreground">Followers</div>
          </Card>
          <Card className="p-4 bg-gradient-card border-border/20 text-center hover:scale-105 transition-transform cursor-pointer">
            <Activity className="w-6 h-6 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold text-foreground">{userProfile.stats.following}</div>
            <div className="text-xs text-muted-foreground">Following</div>
          </Card>
        </div>
      )}

      {/* Detailed Stats & Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Watch Statistics */}
        {userProfile.settings.privacy.showStats && (
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
              <div className="flex justify-between items-center p-3 bg-background-secondary rounded-lg hover:bg-background-secondary/80 transition-colors cursor-pointer">
                <span className="text-sm font-medium text-foreground">Movies This Month</span>
                <span className="text-lg font-bold text-primary">{userProfile.watchStats.thisMonth}</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-background-secondary rounded-lg hover:bg-background-secondary/80 transition-colors cursor-pointer">
                <span className="text-sm font-medium text-foreground">Average Rating</span>
                <span className="text-lg font-bold text-secondary">{userProfile.watchStats.avgRating}/10</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-background-secondary rounded-lg hover:bg-background-secondary/80 transition-colors cursor-pointer">
                <span className="text-sm font-medium text-foreground">Total Watch Time</span>
                <span className="text-lg font-bold text-accent">{userProfile.watchStats.totalHours}h</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-background-secondary rounded-lg hover:bg-background-secondary/80 transition-colors cursor-pointer">
                <span className="text-sm font-medium text-foreground">Current Streak</span>
                <span className="text-lg font-bold text-primary-glow">{userProfile.watchStats.streak} days</span>
              </div>
            </div>
          </Card>
        )}

        {/* Favorite Genres */}
        <Card className="p-6 bg-gradient-card border-border/20">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-secondary/20 rounded-lg">
              <Heart className="w-6 h-6 text-secondary" />
            </div>
            <div>
              <h3 className="font-heading text-lg font-semibold text-foreground">Favorite Genres</h3>
              <p className="text-muted-foreground text-sm">Adjust your preferences</p>
            </div>
          </div>
          
          <div className="space-y-4">
            {userProfile.favoriteGenres.map((genre, index) => (
              <div key={genre.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-foreground">{genre.name}</span>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-6 w-6 p-0"
                      onClick={() => handleGenreAdjust(genre.name, false)}
                    >
                      <Minus className="w-3 h-3" />
                    </Button>
                    <span className="text-sm text-muted-foreground w-16 text-center">{genre.count} movies</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-6 w-6 p-0"
                      onClick={() => handleGenreAdjust(genre.name, true)}
                    >
                      <Plus className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
                <Progress 
                  value={(genre.count / userProfile.favoriteGenres[0].count) * 100} 
                  className="h-2" 
                />
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Recent Activity */}
      {userProfile.settings.privacy.showActivity && (
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
            {userProfile.recentActivity.map((activity, index) => (
              <div 
                key={index} 
                className="flex items-center gap-4 p-3 bg-background-secondary rounded-lg hover:bg-background-secondary/80 transition-colors cursor-pointer group"
                onClick={() => handleActivityClick(activity)}
              >
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
                <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* Dialogs */}
      <EditProfileDialog
        isOpen={isEditDialogOpen}
        onClose={() => setIsEditDialogOpen(false)}
        userProfile={userProfile}
        onSave={updateProfile}
        isLoading={isLoading}
      />

      <SettingsDialog
        isOpen={isSettingsDialogOpen}
        onClose={() => setIsSettingsDialogOpen(false)}
        userProfile={userProfile}
        onSave={updateSettings}
        isLoading={isLoading}
      />
    </div>
  );
};