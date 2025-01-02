import React from "react";
import CategoryRow from "./components/CategoryRow";
import movies from "./data/movies";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-200 dark:bg-gray-900 dark:text-white">
      <h1 className="text-4xl font-bold mb-8">Welcome to OneStream</h1>
      <div className="w-full max-w-6xl px-4">
        <CategoryRow title="Most Watched" movies={movies.mostWatched} />
        <CategoryRow title="Top 10" movies={movies.top10} />
        <CategoryRow title="Suggested for You" movies={movies.suggested} />
      </div>
    </div>
  );
}


// import React from "react";
// import CategoryRow from "./components/CategoryRow";
// import movies from "./data/movies";

// export default function Home() {
//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
//       <h1 className="text-4xl font-bold mb-8">Welcome to OneStream</h1>
//       <div className="w-full max-w-6xl px-4">
//         <CategoryRow title="Most Watched" movies={movies.mostWatched} />
//         <CategoryRow title="Top 10" movies={movies.top10} />
//         <CategoryRow title="Suggested for You" movies={movies.suggested} />
//       </div>
//     </div>
//   );
// }
