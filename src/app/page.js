"use client"; // Ensure the component is client-side

import React, { useState, useEffect } from "react";
import CategoryList from "./components/CategoryList";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [hasMounted, setHasMounted] = useState(false); // Track if the component has mounted

  // Ensuring the component has mounted before rendering content that relies on the client-side
  useEffect(() => {
    setHasMounted(true); // Set to true after the component mounts
    // Simulating data fetching
    setTimeout(() => {
      setLoading(false);
    }, 500); // Simulate 2 seconds loading time
  }, []);

  // This ensures the content is rendered only after the component has mounted to avoid hydration issues
  if (!hasMounted) {
    return null; // Don't render anything during the initial SSR render
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center dark:bg-gray-900 dark:text-white">
      <div className="w-full max-w-6xl px-4">
        {loading ? (
          <div className="text-center text-lg">Loading Categories...</div>
        ) : (
          <CategoryList />
        )}
      </div>
    </div>
  );
}
