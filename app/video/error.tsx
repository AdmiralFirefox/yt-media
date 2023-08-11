"use client";

import { useEffect } from "react";
import ErrorFetchingData from "@/components/Error/ErrorFetchingData";

export default function Error({ error }: { error: Error }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return <ErrorFetchingData />;
}
