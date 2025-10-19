"use client";

import React, { useState } from "react";
import styles from "@/app/styles/CustomSelect.module.scss";

export type SortOption = "a-z" | "z-a" | "rating-asc" | "rating-desc";

type FilterSelectProps<T> = {
  data: T[];
  setData: React.Dispatch<React.SetStateAction<T[]>>;
  nameKey: keyof T; // key for alphabet sorting
  ratingKey: keyof T; // key for rating sorting (must be number)
};

function CustomSelect<T extends Record<string, string | number>>({
  data,
  setData,
  nameKey,
  ratingKey,
}: FilterSelectProps<T>) {
  const [selected, setSelected] = useState<SortOption | "default">("default");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as SortOption;
    setSelected(value);

    const sorted = [...data]; // ✅ use const

    switch (value) {
      case "a-z":
        sorted.sort((a, b) =>
          String(a[nameKey]).localeCompare(String(b[nameKey]))
        );
        break;
      case "z-a":
        sorted.sort((a, b) =>
          String(b[nameKey]).localeCompare(String(a[nameKey]))
        );
        break;
      case "rating-asc":
        sorted.sort((a, b) => Number(a[ratingKey]) - Number(b[ratingKey]));
        break;
      case "rating-desc":
        sorted.sort((a, b) => Number(b[ratingKey]) - Number(a[ratingKey]));
        break;
    }

    setData(sorted);
  };

  return (
    <div className={styles.filterContainer}>
      <select
        value={selected}
        onChange={handleChange}
        className={styles.select}
      >
        <option value="default" disabled>
          Sort By
        </option>
        <option value="a-z">Alphabet A-Z</option>
        <option value="z-a">Alphabet Z-A</option>
        <option value="rating-asc">Rating Ascending</option>
        <option value="rating-desc">Rating Descending</option>
      </select>
    </div>
  );
}

export default CustomSelect;
