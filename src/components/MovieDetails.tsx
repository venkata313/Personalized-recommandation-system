import { useState } from "react";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader,
  DialogTitle 
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Star, 
  Play, 
  Heart, 
  Share2, 
  MessageCircle, 
  ThumbsDown, 
  Plus,
  Calendar,
  Clock,
  Users
} from "lucide-react";

interface MovieDetailsProps {
  movie: {
    id: string;
    title: string;
    poster: string;
    rating: number;
    genre: string;
    year: number;
    description: string;
    recommendationScore?: number;
  } | null;
  isOpen: boolean;
  onClose: () => void;
}

export const MovieDetails = ({ movie, isOpen, onClose }: MovieDetailsProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);
  const [isInList, setIsInList] = useState(false);
  const [likes, setLikes] = useState(2847);
  const [comments, setComments] = useState(156);

  if (!movie) return null;

  const handleLike = () => {
    if (isLiked) {
      setLikes(prev => prev - 1);
      setIsLiked(false);
    } else {
      setLikes(prev => prev + 1);
      setIsLiked(true);
      if (isDisliked) setIsDisliked(false);
    }
  };

  const handleDislike = () => {
    if (isDisliked) {
      setIsDisliked(false);
    } else {
      setIsDisliked(true);
      if (isLiked) {
        setLikes(prev => prev - 1);
        setIsLiked(false);
      }
    }
  };

  const handleAddToList = () => {
    setIsInList(!isInList);
  };

  const handleShare = () => {
    // Share functionality
    if (navigator.share) {
      navigator.share({
        title: movie.title,
        text: movie.description,
        url: window.location.href,
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(`Check out ${movie.title}: ${movie.description}`);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-card border-border/20">
        <DialogHeader>
          <DialogTitle className="text-2xl font-heading font-bold text-foreground">
            {movie.title}
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Movie Poster */}
          <div className="relative">
            <div className="aspect-[2/3] overflow-hidden rounded-xl">
              <img 
                src={movie.poster} 
                alt={movie.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Recommendation Score */}
            {movie.recommendationScore && (
              <div className="absolute top-3 right-3">
                <Badge variant="cinematic" className="font-semibold text-sm">
                  {Math.round(movie.recommendationScore)}% Match
                </Badge>
              </div>
            )}
          </div>
          
          {/* Movie Information */}
          <div className="space-y-6">
            {/* Rating and Year */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 fill-primary text-primary" />
                <span className="text-lg font-semibold text-foreground">{movie.rating}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-muted-foreground" />
                <span className="text-muted-foreground">{movie.year}</span>
              </div>
              <Badge variant="outline">{movie.genre}</Badge>
            </div>
            
            {/* Description */}
            <div>
              <h3 className="font-semibold text-foreground mb-2">Synopsis</h3>
              <p className="text-muted-foreground leading-relaxed">{movie.description}</p>
            </div>
            
            {/* Additional Details */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">2h 15m</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Director: Christopher Nolan</span>
              </div>
            </div>
            
            <Separator />
            
            {/* Action Buttons */}
            <div className="space-y-4">
              <div className="flex gap-3">
                <Button variant="cinematic" className="flex-1">
                  <Play className="w-4 h-4 mr-2" />
                  Watch Now
                </Button>
                <Button 
                  variant={isInList ? "cinematic" : "outline"} 
                  size="sm" 
                  onClick={handleAddToList}
                  className="px-4"
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
              
              {/* Social Actions */}
              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center gap-4">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={handleLike}
                    className={`gap-2 ${isLiked ? 'text-red-500' : 'text-muted-foreground'}`}
                  >
                    <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
                    <span className="text-sm">{likes.toLocaleString()}</span>
                  </Button>
                  
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={handleDislike}
                    className={`gap-2 ${isDisliked ? 'text-red-500' : 'text-muted-foreground'}`}
                  >
                    <ThumbsDown className={`w-4 h-4 ${isDisliked ? 'fill-current' : ''}`} />
                  </Button>
                  
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={handleShare}
                    className="gap-2 text-muted-foreground hover:text-foreground"
                  >
                    <Share2 className="w-4 h-4" />
                    Share
                  </Button>
                  
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="gap-2 text-muted-foreground hover:text-foreground"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span className="text-sm">{comments}</span>
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Comments Section Preview */}
            <div className="bg-background-secondary rounded-lg p-4">
              <h4 className="font-semibold text-foreground mb-3">Recent Comments</h4>
              <div className="space-y-3">
                <div className="text-sm">
                  <span className="font-medium text-foreground">Alex M.</span>
                  <span className="text-muted-foreground ml-2">Amazing cinematography! The visuals are absolutely stunning.</span>
                </div>
                <div className="text-sm">
                  <span className="font-medium text-foreground">Sarah K.</span>
                  <span className="text-muted-foreground ml-2">One of the best {movie.genre.toLowerCase()} movies I've seen this year.</span>
                </div>
                <Button variant="ghost" size="sm" className="text-primary hover:text-primary-glow">
                  View all comments
                </Button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};