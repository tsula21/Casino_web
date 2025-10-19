"use client";

import React, { useState, useEffect } from "react";
import games from "@/app/data/games.json";
import GameSlider from "@/app/components/games/GameSlider";

const SlidersWrapper = () => {
  const [sliderQuantity, setSliderQuantity] = useState(8);

  const handleResize = () => {
    const width = window.innerWidth;

    if (width <= 380) setSliderQuantity(2);
    else if (width <= 481) setSliderQuantity(3);
    else if (width <= 600) setSliderQuantity(4);
    else if (width <= 768) setSliderQuantity(5);
    else if (width <= 1024) setSliderQuantity(6);
    else setSliderQuantity(8); // default for large screens
  };

  useEffect(() => {
    handleResize(); // set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <GameSlider
        title="Slots"
        array={games}
        type="slot"
        sliderQuantity={sliderQuantity}
        icon={
          <svg
            data-ds-icon="Slots"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            className="inline-block shrink-0"
            style={{ color: "var(--color-grey-200)" }}
          >
            <path
              fill="currentColor"
              d="M7.62 10.61a20 20 0 0 0-1.45 3.96 7.5 7.5 0 0 0 0 3.59l.18.75-4.07 1A9.47 9.47 0 0 1 3 13.43l-3 .71v-2.92l7.34-1.76zM24 11.72l-.23 1.16a21.4 21.4 0 0 0-2.97 2.95 7.64 7.64 0 0 0-1.5 3.26l-.15.75-4.15-.76a9.53 9.53 0 0 1 3.34-5.57l-3-.59 1.26-2.66z"
            ></path>
            <path
              fill="currentColor"
              d="M18 6.03a33.5 33.5 0 0 0-3.8 5.74 12.44 12.44 0 0 0-1.4 5.7v1.25H8.08a13.9 13.9 0 0 1 1.25-5.69 21.7 21.7 0 0 1 3.37-5.28h-7V4.09H18z"
            ></path>
          </svg>
        }
      />
      <br />
      <GameSlider
        title="Live Casino"
        array={games}
        type="casino"
        sliderQuantity={sliderQuantity}
        icon={
          <svg
            data-ds-icon="VIPHost"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            className="inline-block shrink-0"
            style={{ color: "var(--color-grey-200)" }}
          >
            <path
              fill="currentColor"
              d="M15.65 1.775h-.3l-3.4 1.2-3.4-1.2c-.6-.2-1.3.2-1.4.9v2.5c0 .7.6 1.2 1.2 1.2h.3l3.3-1.5 3.4 1.5c.7.2 1.3-.2 1.5-.9v-2.5c0-.7-.6-1.2-1.2-1.2m-5.4 18.9-4.5-15c-.3-.6-.9-.9-1.6-.7l-1.5.5c-.5.1-.8.6-.8 1.1l-.9 14.4c0 .7.5 1.2 1.1 1.3h7c.7 0 1.2-.5 1.2-1.2.1-.1 0-.3 0-.4m11.8-14.1c0-.5-.3-.9-.8-1.1l-1.5-.6c-.6-.2-1.3.1-1.5.7l-4.5 15c-.2.6.2 1.3.8 1.5.1 0 .2.1.4.1h6.9c.7 0 1.2-.5 1.2-1.2z"
            ></path>
          </svg>
        }
      />
      <br />
      <GameSlider
        title="Mini Games"
        array={games}
        type="mini"
        sliderQuantity={sliderQuantity}
        icon={
          <svg
            data-ds-icon="Fire"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            className="inline-block shrink-0"
            style={{ color: "var(--color-grey-200)" }}
          >
            <path
              fill="currentColor"
              d="M19.38 5.59c-.64-.83-1.93-.77-2.51.11L16 7l-2.56-4.48C12.6 1.05 10.7.55 9.27 1.45c-2.82 1.79-6.86 5.28-7.24 10.7-.36 5.11 3.19 9.84 8.24 10.69A10 10 0 0 0 22 12.99c0-3.02-1.13-5.48-2.62-7.41zM12 21c-2.21 0-4-1.22-4-3 0-2.91 4-6 4-6s4 3.09 4 6c0 1.78-1.79 3-4 3"
            ></path>
          </svg>
        }
      />
      <br />
    </>
  );
};

export default SlidersWrapper;
