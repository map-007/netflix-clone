import useSwr from "swr";
import fetcher from "@/libs/fetcher";

export const useSingleMovie = (id?: string) => {
  const { data, error, isLoading } = useSwr(
    id ? `/api/movies/${id}` : null,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );
  return {
    data,
    error,
    isLoading,
  };
};

export const useMovieList = () => {
  const { data, error, isLoading } = useSwr("/api/movies", fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  return {
    data,
    error,
    isLoading,
  };
};

export const useFavorites = () => {
  const { data, error, isLoading, mutate } = useSwr("/api/favorite/favorites", fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  return {
    data,
    error,
    isLoading,
    mutate,
  };
};
