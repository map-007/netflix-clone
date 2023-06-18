"use client";

import Billboard from "@/components/banner/Billboard";
import MovieList from "@/components/movie/MovieList";
import Navbar from "@/components/nav/Navbar";
import { getSession } from "next-auth/react";
import { useMovieList, useFavorites } from "../hooks/useMovie";
import useInfoModalStore from "@/hooks/useInfoModalStore";
import InfoModal from "@/components/infoModal";

export default function Home() {
  const { data: movies = [] } = useMovieList();
  const { data: favorites = [] } = useFavorites();
  const { isOpen, closeModal } = useInfoModalStore();

  return (
    <>
      <InfoModal visible={isOpen} onClose={closeModal} />
      <Navbar />
      <Billboard />
      <div className="pb-40">
        <MovieList title="Trending Now" data={movies} />
        <MovieList title="My List" data={favorites} />
      </div>
    </>
  );
}
