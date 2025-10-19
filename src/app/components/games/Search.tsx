"use client";

import React, { useState, useEffect, useRef } from "react";
import styles from "@/app/styles/Search.module.scss";
import games from "@/app/data/games.json";
import { Game } from "@/app/types/constants";
import Image from "next/image";
import Link from "next/link";

const Search = () => {
  const [active, setActive] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [results, setResults] = useState<Game[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  const getRandomNumber = (min = 1, max = 100) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  useEffect(() => {
    if (searchText.trim() === "") {
      setResults([]);
    } else {
      const filtered = games.filter((game) =>
        game.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setResults(filtered);
    }
  }, [searchText]);

  useEffect(() => {
    if (active) {
      document.body.style.overflow = "hidden";

      // Scroll search input into view
      inputRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [active]);

  useEffect(() => {
    // Scroll results if they appear
    if (active && results.length > 0) {
      resultsRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [results, active]);

  return (
    <div className={styles.search_container}>
      {active && (
        <div
          className={styles.overlay}
          onClick={() => setActive(false)}
          data-testid="search-overlay"
        />
      )}
      {active && (
        <div
          className={styles.close}
          onClick={() => {
            setActive(false);
            setSearchText("");
            setResults([]);
          }}
        >
          <svg
            data-ds-icon="Cross"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            className="inline-block shrink-0"
          >
            <path
              fill="currentColor"
              d="M4.293 4.293a1 1 0 0 1 1.338-.069l.076.069L12 10.586l6.293-6.293.076-.069a1 1 0 0 1 1.407 1.407l-.069.076L13.414 12l6.293 6.293.069.076a1 1 0 0 1-1.407 1.406l-.076-.068L12 13.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L10.586 12 4.293 5.707l-.068-.076a1 1 0 0 1 .068-1.338"
            ></path>
          </svg>
        </div>
      )}
      <input
        ref={inputRef}
        type="text"
        className={styles.search_input}
        placeholder="Search games"
        value={searchText}
        onFocus={() => setActive(true)}
        onChange={(e) => setSearchText(e.target.value)}
        data-testid="search-input"
        title="Search games"
      />

      {searchText.trim() !== "" && active && (
        <div
          ref={resultsRef}
          className={`${results.length > 0 && styles.results_container2} ${
            styles.results_container
          }`}
          data-testid="search-results"
        >
          {results.length > 0 ? (
            results.map((game) => (
              <Link
                href={`games/${game.id}`}
                key={game.id}
                className={styles.result_item}
              >
                <Image
                  src={game.image}
                  alt={game.name}
                  width={80}
                  height={80}
                  style={{ width: "100%", height: "auto" }}
                />
                <div className={styles.now_playing}>
                  <span></span> Playing {getRandomNumber()}
                </div>
              </Link>
            ))
          ) : (
            <p className={styles.not_found}>
              No results found for “{searchText}”
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
