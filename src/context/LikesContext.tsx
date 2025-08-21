import { createContext, useState, useContext } from "react";
import type { ReactNode } from 'react'

interface Joke {
  id: number;
  setup: string;
  punchline: string;
  type: string;
}

interface LikesContextType {
  likes: Joke[];
  addLike: (joke: Joke) => void;
  removeLike: (id: number) => void;
}

const LikesContext = createContext<LikesContextType | undefined>(undefined);

export const LikesProvider = ({ children }: { children: ReactNode }) => {
  const [likes, setLikes] = useState<Joke[]>([]);

  const addLike = (joke: Joke) => {
    const isAlreadyLiked = likes.some(item => item.id === joke.id);
    if (isAlreadyLiked) return;

    const updated = [...likes, joke];
    setLikes(updated);
    localStorage.setItem("likes", JSON.stringify(updated));
  };

  const removeLike = (id: number) => {
    const updated = likes.filter(item => item.id !== id);
    setLikes(updated);
    localStorage.setItem("likes", JSON.stringify(updated));
  }

  return (
    <LikesContext.Provider value={{ likes, addLike, removeLike }}>
      {children}
    </LikesContext.Provider>
  );
};

export const useLikes = () => {
  const context = useContext(LikesContext);
  if (!context) {
    throw new Error("useLikes must be used within a LikesProvider");
  }
  return context;
};
