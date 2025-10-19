"use client";
import React, { useState, useEffect, useRef } from "react";
import styles from "@/app/styles/FilterDropdown.module.scss";

interface FilterDropdownProps {
  label: string;
  options: string[];
  selectedValues: string[];
  onChange: (selected: string[]) => void;
}

const FilterDropdown: React.FC<FilterDropdownProps> = ({
  label,
  options,
  selectedValues,
  onChange,
}) => {
  const [open, setOpen] = useState(false);
  const [tempSelected, setTempSelected] = useState<string[]>(selectedValues);
  const rootRef = useRef<HTMLDivElement | null>(null);

  const toggleOption = (option: string) => {
    if (tempSelected.includes(option)) {
      setTempSelected((prev) => prev.filter((item) => item !== option));
    } else {
      setTempSelected((prev) => [...prev, option]);
    }
  };

  const handleApply = () => {
    onChange(tempSelected);
    setOpen(false);
  };

  const handleReset = () => {
    setTempSelected([]);
  };

  // Keep temporary state synced when opening or when parent changes selectedValues
  useEffect(() => {
    if (open) setTempSelected(selectedValues);
  }, [open, selectedValues]);

  // Close when clicking outside the dropdown (uses ref.contains)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node | null;
      if (rootRef.current && target && !rootRef.current.contains(target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []); // listener can be always active; it references the ref

  return (
    <div className={styles.dropdown} ref={rootRef}>
      <button
        type="button"
        className={styles.dropdown_button}
        onClick={() => setOpen((prev) => !prev)}
      >
        {label}
      </button>

      {open && (
        <div className={styles.dropdown_menu} role="menu" aria-label={label}>
          {options.map((option) => (
            <label key={option} className={styles.option}>
              <input
                type="checkbox"
                checked={tempSelected.includes(option)}
                onChange={() => toggleOption(option)}
              />
              {option}
            </label>
          ))}

          <div className={styles.actions}>
            <button
              type="button"
              className={styles.reset_btn}
              onClick={handleReset}
            >
              Reset
            </button>
            <button
              type="button"
              className={styles.apply_btn}
              onClick={handleApply}
            >
              Apply Filters
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;
