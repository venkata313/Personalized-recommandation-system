import { Star, Play, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface MovieCardProps {
  id: string;
  title: string;
  poster: string;
  rating: number;
  genre: string;
  year: number;
  description: string;
  recommendationScore?: number;
  onClick?: () => void;
}

export const MovieCard = ({ 
  title, 
  poster, 
  rating, 
  genre, 
  year, 
  description,
  recommendationScore,
  onClick 
}: MovieCardProps) => {
  return (
    <div 
      className="group relative bg-gradient-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-500 hover:scale-105 border border-border/20 cursor-pointer"
      onClick={onClick}
    >
      <div className="relative aspect-[2/3] overflow-hidden">
        <img 
          src={poster} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Recommendation Score Badge */}
        {recommendationScore && (
          <div className="absolute top-3 right-3">
            <Badge variant="cinematic" className="font-semibold">
              {Math.round(recommendationScore)}% Match
            </Badge>
          </div>
        )}
        
        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <Button variant="hero" size="lg" className="rounded-full shadow-glow">
            <Play className="w-6 h-6 ml-1" />
          </Button>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-heading font-semibold text-lg text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2">
            {title}
          </h3>
          <div className="flex items-center gap-1 ml-3">
            <Star className="w-4 h-4 fill-primary text-primary" />
            <span className="text-sm font-medium text-foreground">{rating}</span>
          </div>
        </div>
        
        <div className="flex items-center gap-3 mb-3">
          <Badge variant="outline" className="text-xs">
            {genre}
          </Badge>
          <span className="text-xs text-muted-foreground">{year}</span>
        </div>
        
        <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
          {description}
        </p>
        
        <div className="flex items-center gap-2">
          <Button variant="cinematic" size="sm" className="flex-1">
            <Play className="w-4 h-4 mr-2" />
            Watch Now
          </Button>
          <Button variant="ghost" size="sm" className="px-3">
            <Plus className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};