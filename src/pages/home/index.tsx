import React from "react";
import List from "../../components/list";

function Home() {
  return (
    <div className="min-h-screen bg-dark text-slate-100">
      <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-center py-20">
        Aram's blog
      </h1>
      <List />
    </div>
  );
}

export default Home;
