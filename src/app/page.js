import React from "react";
import CategoryList from "./components/CategoryList";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center dark:bg-gray-900 dark:text-white">
      <div className="w-full max-w-6xl px-4">
        <CategoryList />
      </div>
    </div>
  );
}
