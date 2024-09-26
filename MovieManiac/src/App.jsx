import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import fire from "./assets/fire.png";
import party from "./assets/party.png";
import glow from "./assets/glowingstar.png";
import Navbar from "./components/Navbar/Navbar";
import MovieList from "./components/MovieList/MovieList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <Navbar />
      <main>
        <MovieList title="popular" api="popular" emoji={fire} />
        <MovieList title="toprated" api="top_rated" emoji={glow} />
        <MovieList title="upcoming" api="upcoming" emoji={party} />
      </main>
    </div>
  );
}

export default App;
