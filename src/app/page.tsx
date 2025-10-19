import Link from "next/link";
import Search from "./components/games/Search";
import Hero from "./components/Hero/Hero";
import SlidersWrapper from "./components/SlidersWrapper";

export default function Home() {
  return (
    <div className="main_container">
      <Hero />
      <Search />
      <Link className="redirect_btn" href="/games">
        Discover All Games
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="icon"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </Link>
      <SlidersWrapper />
    </div>
  );
}
