import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Filter, 
  Star, 
  Clock, 
  Calendar,
  Share2,
  MessageCircle,
  Heart,
  Play,
  Info
} from "lucide-react";
import { Input } from "@/components/ui/input";

const movieData = [
  {
    id: "1",
    title: "Quantum Edge",
    poster: "/src/assets/movie-quantum-edge.jpg",
    rating: 8.4,
    genre: "Sci-Fi",
    year: 2024,
    duration: "148 min",
    director: "Christopher Nolan",
    description: "A mind-bending journey through quantum realities where the impossible becomes inevitable."
  },
  {
    id: "2", 
    title: "Shadow Protocol",
    poster: "/src/assets/movie-shadow-protocol.jpg",
    rating: 7.9,
    genre: "Action",
    year: 2023,
    duration: "132 min",
    director: "Denis Villeneuve",
    description: "An elite operative must navigate a world of espionage and betrayal to uncover the truth."
  },
  {
    id: "3",
    title: "Midnight in Paris",
    poster: "/src/assets/movie-midnight-paris.jpg", 
    rating: 8.7,
    genre: "Romance",
    year: 2023,
    duration: "124 min",
    director: "Sofia Coppola",
    description: "A romantic tale set against the backdrop of the City of Light's most enchanting hours."
  },
  {
    id: "4",
    title: "The Veil",
    poster: "/src/assets/movie-the-veil.jpg",
    rating: 8.1,
    genre: "Thriller",
    year: 2024,
    duration: "156 min", 
    director: "Jordan Peele",
    description: "A psychological thriller that blurs the line between reality and nightmare."
  }
];

const ActionBar = ({ movieId }: { movieId: string }) => (
  <div className="flex items-center gap-2 mt-4 pt-4 border-t border-border/20">
    <Button variant="ghost" size="sm" className="flex-1">
      <Play className="w-4 h-4 mr-2" />
      Watch
    </Button>
    <Button variant="ghost" size="sm" className="flex-1">
      <Heart className="w-4 h-4 mr-2" />
      Like
    </Button>
    <Button variant="ghost" size="sm" className="flex-1">
      <Share2 className="w-4 h-4 mr-2" />
      Share
    </Button>
    <Button variant="ghost" size="sm" className="flex-1">
      <MessageCircle className="w-4 h-4 mr-2" />
      Comment
    </Button>
  </div>
);

export const Movies = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");

  const genres = ["All", "Sci-Fi", "Action", "Romance", "Thriller"];

  const filteredMovies = movieData.filter(movie => {
    const matchesSearch = movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         movie.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGenre = selectedGenre === "All" || movie.genre === selectedGenre;
    return matchesSearch && matchesGenre;
  });

  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-heading text-2xl font-bold text-foreground mb-2">Movie Collection</h2>
        <p className="text-muted-foreground">Explore our curated collection of movies with detailed information</p>
      </div>

      {/* Search and Filter */}
      <Card className="p-6 bg-gradient-card border-border/20">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search movies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-muted-foreground" />
            <div className="flex gap-2">
              {genres.map((genre) => (
                <Button
                  key={genre}
                  variant={selectedGenre === genre ? "cinematic" : "outline"}
                  size="sm"
                  onClick={() => setSelectedGenre(genre)}
                >
                  {genre}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </Card>

      {/* Movies Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredMovies.map((movie) => (
          <Card key={movie.id} className="p-6 bg-gradient-card border-border/20 hover:border-primary/30 transition-all duration-300">
            <div className="flex gap-6">
              <div className="relative w-32 h-48 rounded-lg overflow-hidden flex-shrink-0">
                <img 
                  src={movie.poster} 
                  alt={movie.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-2 left-2">
                  <Badge variant="cinematic" className="text-xs">
                    HD
                  </Badge>
                </div>
              </div>
              
              <div className="flex-1 space-y-4">
                <div>
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-heading text-xl font-semibold text-foreground">{movie.title}</h3>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-primary text-primary" />
                      <span className="font-semibold text-foreground">{movie.rating}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{movie.year}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{movie.duration}</span>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {movie.genre}
                    </Badge>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div>
                    <span className="text-sm font-medium text-muted-foreground">Director: </span>
                    <span className="text-sm text-foreground">{movie.director}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {movie.description}
                  </p>
                </div>
                
                <ActionBar movieId={movie.id} />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};