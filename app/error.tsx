"use client";

import { useEffect } from "react";
import { RefreshCcw } from "lucide-react";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
      {/* Icon */}
      <div className="bg-red-100 p-5 rounded-full mb-6">
        <RefreshCcw className="text-red-600 w-8 h-8" />
      </div>

      {/* Heading */}
      <h2 className="text-2xl font-bold text-blue-900 mb-3">
        Something went wrong
      </h2>

      {/* Message */}
      <p className="text-gray-600 max-w-md mb-6">
        We couldn’t load the news at the moment. Please try again.
      </p>

      {/* Retry Button */}
      <button
        onClick={() => reset()}
        className="flex items-center gap-2 bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition"
      >
        <RefreshCcw className="w-4 h-4" />
        Try Again
      </button>
    </div>
  );
}
