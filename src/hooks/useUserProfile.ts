import { useState } from 'react';

export interface UserProfile {
  name: string;
  email: string;
  avatar: string;
  joinDate: string;
  location: string;
  bio: string;
  stats: {
    moviesWatched: number;
    ratingsGiven: number;
    listsCreated: number;
    followers: number;
    following: number;
  };
  favoriteGenres: Array<{
    name: string;
    count: number;
    color: string;
  }>;
  recentActivity: Array<{
    type: 'rated' | 'added' | 'reviewed' | 'followed';
    movie?: string;
    rating?: number;
    list?: string;
    user?: string;
    time: string;
  }>;
  watchStats: {
    thisMonth: number;
    avgRating: number;
    totalHours: number;
    streak: number;
  };
  settings: {
    notifications: {
      email: boolean;
      push: boolean;
      recommendations: boolean;
      social: boolean;
    };
    privacy: {
      profilePublic: boolean;
      showActivity: boolean;
      showStats: boolean;
    };
    preferences: {
      autoplay: boolean;
      darkMode: boolean;
      language: string;
      quality: string;
    };
  };
}

const initialUserData: UserProfile = {
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
  },
  settings: {
    notifications: {
      email: true,
      push: true,
      recommendations: true,
      social: false
    },
    privacy: {
      profilePublic: true,
      showActivity: true,
      showStats: true
    },
    preferences: {
      autoplay: false,
      darkMode: true,
      language: "English",
      quality: "HD"
    }
  }
};

export const useUserProfile = () => {
  const [userProfile, setUserProfile] = useState<UserProfile>(initialUserData);
  const [isLoading, setIsLoading] = useState(false);

  const updateProfile = async (updates: Partial<UserProfile>) => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setUserProfile(prev => ({ ...prev, ...updates }));
    setIsLoading(false);
  };

  const updateSettings = async (settings: UserProfile['settings']) => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 500));
    setUserProfile(prev => ({ ...prev, settings }));
    setIsLoading(false);
  };

  const addActivity = (activity: UserProfile['recentActivity'][0]) => {
    setUserProfile(prev => ({
      ...prev,
      recentActivity: [activity, ...prev.recentActivity.slice(0, 9)] // Keep only last 10 activities
    }));
  };

  const updateGenrePreference = (genreName: string, increment: boolean = true) => {
    setUserProfile(prev => ({
      ...prev,
      favoriteGenres: prev.favoriteGenres.map(genre =>
        genre.name === genreName
          ? { ...genre, count: Math.max(0, genre.count + (increment ? 1 : -1)) }
          : genre
      ).sort((a, b) => b.count - a.count)
    }));
  };

  return {
    userProfile,
    isLoading,
    updateProfile,
    updateSettings,
    addActivity,
    updateGenrePreference
  };
};