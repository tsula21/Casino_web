"use client";
import React, { useMemo, useState } from "react";
import styles from "@/app/styles/Games.module.scss";
import CustomSelect from "../customInputs/CustomSelect";
import games from "@/app/data/games.json";
import Image from "next/image";
import FilterDropdown from "../customInputs/FilterDropdown";
import Link from "next/link";

const AllGames = () => {
  const [items, setItems] = useState<any[]>(games);
  // Selected filters
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const filterOptions = [
    "slot",
    "casino",
    "mini",
    "Pragmatic",
    "Novomatic",
    "Evolution",
  ];

  // Filtering logic (matches either provider or type)
  const filteredItems = useMemo(() => {
    if (selectedFilters.length === 0) return items;

    return items.filter(
      (game) =>
        selectedFilters.includes(game.provider) ||
        selectedFilters.includes(game.type)
    );
  }, [items, selectedFilters]);
  return (
    <div>
      <div className={styles.filter_header}>
        <div className={`${styles.options} ${styles.filter}`}>
          <svg
            data-ds-icon="Filter"
            width={20}
            height={20}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            className="inline-block shrink-0 text-[var(--color-grey-200)]"
          >
            <path fill="currentColor" d="M22 3H2l7 10.5V21h6v-7.5z" />
          </svg>
          <p>Filter</p>
          <FilterDropdown
            label="Filter Options"
            options={filterOptions}
            selectedValues={selectedFilters}
            onChange={setSelectedFilters}
          />
        </div>
        <div className={`${styles.options} ${styles.sort}`}>
          <svg
            data-ds-icon="Sort"
            width={20}
            height={20}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            className="inline-block shrink-0 text-[var(--color-grey-200)]"
          >
            <path
              fill="currentColor"
              d="M20 3H4a2 2 0 1 0 0 4h16a2 2 0 1 0 0-4m-8 7H4a2 2 0 1 0 0 4h8a2 2 0 1 0 0-4m-4 7H4a2 2 0 1 0 0 4h4a2 2 0 1 0 0-4m10.75 3.71 3.96-3.96a.996.996 0 1 0-1.41-1.41l-2.25 2.25V10a1.003 1.003 0 0 0-1.71-.71c-.18.18-.29.43-.29.71v7.59l-2.25-2.25a.996.996 0 1 0-1.41 1.41l3.96 3.96c.39.39 1.02.39 1.41 0z"
            />
          </svg>
          <p>Sort</p>
          <CustomSelect
            data={items}
            setData={setItems}
            nameKey="name"
            ratingKey="rate"
          />
        </div>
      </div>

      <h4 className={styles.quntity}>
        {filteredItems.length > 0
          ? `Games Found - ${filteredItems.length}`
          : "Not Found"}{" "}
      </h4>

      <div className={styles.game_list}>
        {filteredItems.map((item, i) => (
          <Link href={`games/${item.id}`} key={i}>
            <img src={item.image} alt={item.name} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllGames;
