"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "@/app/styles/Hero.module.scss";
import Image from "next/image";

const Hero = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  const slides = [
    "https://static.crocobet.com/cms/banners/2025-05/cec11dc201bc4e276b8ec03c63e15562.jpg",
    "https://static.crocobet.com/cms/banners/2025-07/378185894748042c309d6293cfbd70bc.jpg",
    "https://static.crocobet.com/cms/banners/2025-10/74744d3c721d316dd274924f99d24df8.webp",
    "https://static.crocobet.com/cms/banners/2025-06/3f97453dc8b3eb01e9f78d816d11db19.jpg",
    "https://static.crocobet.com/cms/banners/2025-06/92cdc64765b0f733efea59e64290d841.jpg",
  ];

  return (
    <div
      className={styles["hero-slider"]}
      data-testid="hero-slider"
      title="Hero Slider"
    >
      <Slider {...settings}>
        {slides.map((item, i) => (
          <div key={i} className={styles["slide-wrap"]}>
            <img src={item} alt={`Slide ${i + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
