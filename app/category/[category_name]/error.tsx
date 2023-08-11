"use client";

import { useEffect } from "react";
import ErrorFetchingRequests from "@/components/Error/ErrorFetchingRequests";

export default function Error({ error }: { error: Error }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return <ErrorFetchingRequests />;
}
