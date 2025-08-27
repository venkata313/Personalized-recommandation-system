import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  User, 
  Mail, 
  Crown, 
  Settings, 
  Edit,
  Calendar,
  Shield
} from "lucide-react";

export const Profile = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-heading text-2xl font-bold text-foreground mb-2">User Profile</h2>
        <p className="text-muted-foreground">Manage your account settings and subscription</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Information */}
        <Card className="lg:col-span-2 p-6 bg-gradient-card border-border/20">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-heading text-lg font-semibold text-foreground">Profile Information</h3>
            <Button variant="outline" size="sm">
              <Edit className="w-4 h-4 mr-2" />
              Edit Profile
            </Button>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                <User className="w-10 h-10 text-white" />
              </div>
              <div className="flex-1">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <User className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Username</p>
                      <p className="text-lg font-semibold text-foreground">john_moviefan</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-secondary" />
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Email</p>
                      <p className="text-lg font-semibold text-foreground">john.doe@example.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-accent" />
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Member Since</p>
                      <p className="text-lg font-semibold text-foreground">January 2024</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Subscription Card */}
        <Card className="p-6 bg-gradient-card border-border/20">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-primary/20 rounded-lg">
              <Crown className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-heading text-lg font-semibold text-foreground">Subscription</h3>
          </div>
          
          <div className="space-y-4">
            <div className="text-center">
              <Badge variant="cinematic" className="text-lg px-4 py-2">
                Premium Plan
              </Badge>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Status</span>
                <Badge variant="outline" className="text-green-500 border-green-500/30">
                  Active
                </Badge>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Renewal Date</span>
                <span className="text-sm font-medium text-foreground">Mar 15, 2024</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Monthly Cost</span>
                <span className="text-sm font-bold text-primary">$12.99</span>
              </div>
            </div>
            
            <div className="pt-4 border-t border-border/20">
              <h4 className="font-medium text-foreground mb-3">Premium Features</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-primary" />
                  <span className="text-sm text-muted-foreground">Unlimited recommendations</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-primary" />
                  <span className="text-sm text-muted-foreground">Advanced AI insights</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-primary" />
                  <span className="text-sm text-muted-foreground">Priority support</span>
                </div>
              </div>
            </div>
            
            <Button variant="cinematic" className="w-full">
              Manage Subscription
            </Button>
          </div>
        </Card>
      </div>

      {/* Account Settings */}
      <Card className="p-6 bg-gradient-card border-border/20">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-secondary/20 rounded-lg">
            <Settings className="w-6 h-6 text-secondary" />
          </div>
          <h3 className="font-heading text-lg font-semibold text-foreground">Account Settings</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Button variant="outline" className="justify-start">
            <Settings className="w-4 h-4 mr-2" />
            Preferences
          </Button>
          <Button variant="outline" className="justify-start">
            <Shield className="w-4 h-4 mr-2" />
            Privacy
          </Button>
          <Button variant="outline" className="justify-start">
            <Mail className="w-4 h-4 mr-2" />
            Notifications
          </Button>
        </div>
      </Card>
    </div>
  );
};