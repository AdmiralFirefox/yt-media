import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface InfiniteScrollOptions<T> {
  initialData: T[];
  pageSize: number;
  initialLoadCount: number;
  loadingDelay: number;
}

export function useInfiniteScroll<T>({
  initialData,
  pageSize,
  initialLoadCount,
  loadingDelay,
}: InfiniteScrollOptions<T>) {
  const [data, setData] = useState<T[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(
    Math.ceil(initialLoadCount / pageSize) + 1
  );

  const [loadingRef, inView] = useInView();

  useEffect(() => {
    if (isLoading && inView) {
      const timeout = setTimeout(() => {
        const newData = [
          ...data,
          ...initialData.slice(data.length, data.length + pageSize),
        ];
        setData(newData);
        setIsLoading(false);
      }, loadingDelay);

      return () => clearTimeout(timeout);
    }
  }, [isLoading, inView, data, loadingDelay, initialData, pageSize]);

  useEffect(() => {
    // Check if all data is loaded
    if (data.length === initialData.length) {
      setIsLoading(false);
    }
  }, [data, initialData.length]);

  useEffect(() => {
    if (inView && !isLoading && data.length < initialData.length) {
      setIsLoading(true);
      setCurrentPage((prevPage) => prevPage + 1);
    }
  }, [inView, isLoading, data, initialData.length]);

  useEffect(() => {
    // Load initial data based on initialLoadCount
    const initialRenderData = initialData.slice(0, initialLoadCount);
    setData(initialRenderData);
  }, [initialData, initialLoadCount]);

  return {
    data,
    isLoading,
    loadingRef,
  };
}
