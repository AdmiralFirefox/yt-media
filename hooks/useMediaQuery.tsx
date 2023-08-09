import { useState, useEffect } from "react";

export const useMediaQuery = (query: string, defaultMatches = false) => {
  const [matches, setMatches] = useState(defaultMatches);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    setMatches(mediaQuery.matches);

    const updateMatches = () => {
      setMatches(mediaQuery.matches);
    };

    mediaQuery.addEventListener("change", updateMatches);

    return () => {
      mediaQuery.removeEventListener("change", updateMatches);
    };
  }, [query]);

  return matches;
};
