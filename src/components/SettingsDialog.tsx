import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Loader2, Bell, Shield, Monitor } from "lucide-react";
import { UserProfile } from "@/hooks/useUserProfile";
import { toast } from "@/hooks/use-toast";

interface SettingsDialogProps {
  isOpen: boolean;
  onClose: () => void;
  userProfile: UserProfile;
  onSave: (settings: UserProfile['settings']) => Promise<void>;
  isLoading: boolean;
}

export const SettingsDialog = ({ 
  isOpen, 
  onClose, 
  userProfile, 
  onSave, 
  isLoading 
}: SettingsDialogProps) => {
  const [settings, setSettings] = useState(userProfile.settings);

  const handleSave = async () => {
    try {
      await onSave(settings);
      toast({
        title: "Settings updated",
        description: "Your preferences have been saved successfully.",
      });
      onClose();
    } catch (error) {
      toast({
        title: "Update failed",
        description: "Failed to update settings. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleClose = () => {
    setSettings(userProfile.settings);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Settings</DialogTitle>
          <DialogDescription>
            Manage your account preferences and privacy settings.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Notifications */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Bell className="w-5 h-5 text-primary" />
              <h3 className="font-semibold text-foreground">Notifications</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="email-notifications">Email Notifications</Label>
                  <p className="text-sm text-muted-foreground">Receive updates via email</p>
                </div>
                <Switch
                  id="email-notifications"
                  checked={settings.notifications.email}
                  onCheckedChange={(checked) => 
                    setSettings(prev => ({
                      ...prev,
                      notifications: { ...prev.notifications, email: checked }
                    }))
                  }
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="push-notifications">Push Notifications</Label>
                  <p className="text-sm text-muted-foreground">Get browser notifications</p>
                </div>
                <Switch
                  id="push-notifications"
                  checked={settings.notifications.push}
                  onCheckedChange={(checked) => 
                    setSettings(prev => ({
                      ...prev,
                      notifications: { ...prev.notifications, push: checked }
                    }))
                  }
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="recommendation-notifications">Recommendation Alerts</Label>
                  <p className="text-sm text-muted-foreground">Notify about new recommendations</p>
                </div>
                <Switch
                  id="recommendation-notifications"
                  checked={settings.notifications.recommendations}
                  onCheckedChange={(checked) => 
                    setSettings(prev => ({
                      ...prev,
                      notifications: { ...prev.notifications, recommendations: checked }
                    }))
                  }
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="social-notifications">Social Activity</Label>
                  <p className="text-sm text-muted-foreground">Notifications about follows and likes</p>
                </div>
                <Switch
                  id="social-notifications"
                  checked={settings.notifications.social}
                  onCheckedChange={(checked) => 
                    setSettings(prev => ({
                      ...prev,
                      notifications: { ...prev.notifications, social: checked }
                    }))
                  }
                />
              </div>
            </div>
          </div>

          <Separator />

          {/* Privacy */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-5 h-5 text-secondary" />
              <h3 className="font-semibold text-foreground">Privacy</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="public-profile">Public Profile</Label>
                  <p className="text-sm text-muted-foreground">Allow others to view your profile</p>
                </div>
                <Switch
                  id="public-profile"
                  checked={settings.privacy.profilePublic}
                  onCheckedChange={(checked) => 
                    setSettings(prev => ({
                      ...prev,
                      privacy: { ...prev.privacy, profilePublic: checked }
                    }))
                  }
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="show-activity">Show Activity</Label>
                  <p className="text-sm text-muted-foreground">Display your recent activity publicly</p>
                </div>
                <Switch
                  id="show-activity"
                  checked={settings.privacy.showActivity}
                  onCheckedChange={(checked) => 
                    setSettings(prev => ({
                      ...prev,
                      privacy: { ...prev.privacy, showActivity: checked }
                    }))
                  }
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="show-stats">Show Statistics</Label>
                  <p className="text-sm text-muted-foreground">Make your viewing stats visible</p>
                </div>
                <Switch
                  id="show-stats"
                  checked={settings.privacy.showStats}
                  onCheckedChange={(checked) => 
                    setSettings(prev => ({
                      ...prev,
                      privacy: { ...prev.privacy, showStats: checked }
                    }))
                  }
                />
              </div>
            </div>
          </div>

          <Separator />

          {/* Preferences */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Monitor className="w-5 h-5 text-accent" />
              <h3 className="font-semibold text-foreground">Preferences</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="autoplay">Autoplay Trailers</Label>
                  <p className="text-sm text-muted-foreground">Automatically play movie trailers</p>
                </div>
                <Switch
                  id="autoplay"
                  checked={settings.preferences.autoplay}
                  onCheckedChange={(checked) => 
                    setSettings(prev => ({
                      ...prev,
                      preferences: { ...prev.preferences, autoplay: checked }
                    }))
                  }
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="language-select">Language</Label>
                  <p className="text-sm text-muted-foreground">Interface language</p>
                </div>
                <Select
                  value={settings.preferences.language}
                  onValueChange={(value) => 
                    setSettings(prev => ({
                      ...prev,
                      preferences: { ...prev.preferences, language: value }
                    }))
                  }
                >
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="English">English</SelectItem>
                    <SelectItem value="Spanish">Spanish</SelectItem>
                    <SelectItem value="French">French</SelectItem>
                    <SelectItem value="German">German</SelectItem>
                    <SelectItem value="Italian">Italian</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="quality-select">Video Quality</Label>
                  <p className="text-sm text-muted-foreground">Default streaming quality</p>
                </div>
                <Select
                  value={settings.preferences.quality}
                  onValueChange={(value) => 
                    setSettings(prev => ({
                      ...prev,
                      preferences: { ...prev.preferences, quality: value }
                    }))
                  }
                >
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Auto">Auto</SelectItem>
                    <SelectItem value="4K">4K</SelectItem>
                    <SelectItem value="HD">HD</SelectItem>
                    <SelectItem value="SD">SD</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={handleClose} disabled={isLoading}>
            Cancel
          </Button>
          <Button onClick={handleSave} disabled={isLoading}>
            {isLoading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
            Save Settings
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};