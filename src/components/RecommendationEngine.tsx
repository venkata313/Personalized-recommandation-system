import { useState } from "react";
import { MovieCard } from "./MovieCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, TrendingUp, Brain, Sparkles } from "lucide-react";

// Import movie posters
import quantumEdge from "@/assets/movie-quantum-edge.jpg";
import shadowProtocol from "@/assets/movie-shadow-protocol.jpg";
import midnightParis from "@/assets/movie-midnight-paris.jpg";
import theVeil from "@/assets/movie-the-veil.jpg";

const mockMovies = [
  {
    id: "1",
    title: "Quantum Edge",
    poster: quantumEdge,
    rating: 8.7,
    genre: "Sci-Fi",
    year: 2024,
    description: "A mind-bending journey through parallel dimensions where reality becomes questionable and the future hangs in the balance.",
    recommendationScore: 95
  },
  {
    id: "2", 
    title: "Shadow Protocol",
    poster: shadowProtocol,
    rating: 8.2,
    genre: "Action",
    year: 2024,
    description: "An elite operative must navigate a web of conspiracy and betrayal to prevent a global catastrophe.",
    recommendationScore: 88
  },
  {
    id: "3",
    title: "Midnight in Paris",
    poster: midnightParis,
    rating: 8.9,
    genre: "Romance",
    year: 2024,
    description: "A timeless love story that transcends eras, weaving together past and present in the City of Light.",
    recommendationScore: 92
  },
  {
    id: "4",
    title: "The Veil",
    poster: theVeil,
    rating: 7.8,
    genre: "Horror",
    year: 2024,
    description: "When the barrier between worlds grows thin, ancient terrors emerge to challenge everything we know about reality.",
    recommendationScore: 76
  }
];

const genres = ["All", "Sci-Fi", "Action", "Romance", "Horror", "Drama", "Comedy"];

export const RecommendationEngine = () => {
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredMovies = mockMovies.filter(movie => {
    const matchesGenre = selectedGenre === "All" || movie.genre === selectedGenre;
    const matchesSearch = movie.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesGenre && matchesSearch;
  });

  return (
    <div className="space-y-8">
      {/* AI Insights Header */}
      <div className="bg-gradient-card rounded-2xl p-6 border border-border/20 shadow-card">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-primary/20 rounded-lg">
            <Brain className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground">AI-Powered Recommendations</h2>
            <p className="text-muted-foreground">Personalized content based on your viewing history and preferences</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-background-secondary rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-5 h-5 text-accent" />
              <span className="font-medium text-foreground">Trending Score</span>
            </div>
            <div className="text-2xl font-bold text-accent">94%</div>
            <p className="text-sm text-muted-foreground">Based on global trends</p>
          </div>
          
          <div className="bg-background-secondary rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-5 h-5 text-secondary" />
              <span className="font-medium text-foreground">Match Quality</span>
            </div>
            <div className="text-2xl font-bold text-secondary">89%</div>
            <p className="text-sm text-muted-foreground">Personalization accuracy</p>
          </div>
          
          <div className="bg-background-secondary rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Brain className="w-5 h-5 text-primary" />
              <span className="font-medium text-foreground">Learning Rate</span>
            </div>
            <div className="text-2xl font-bold text-primary">96%</div>
            <p className="text-sm text-muted-foreground">Model improvement</p>
          </div>
        </div>
      </div>

      {/* Search and Filter Controls */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            placeholder="Search movies..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-card border-border/20 focus:border-primary/50"
          />
        </div>
        
        <div className="flex items-center gap-2">
          <Filter className="w-5 h-5 text-muted-foreground" />
          <div className="flex gap-2 flex-wrap">
            {genres.map((genre) => (
              <Badge
                key={genre}
                variant={selectedGenre === genre ? "cinematic" : "outline"}
                className="cursor-pointer transition-all duration-200 hover:scale-105"
                onClick={() => setSelectedGenre(genre)}
              >
                {genre}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Movie Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>

      {filteredMovies.length === 0 && (
        <div className="text-center py-12">
          <div className="text-muted-foreground mb-4">No movies found matching your criteria</div>
          <Button variant="cinematic" onClick={() => {
            setSearchQuery("");
            setSelectedGenre("All");
          }}>
            Clear Filters
          </Button>
        </div>
      )}
    </div>
  );
};