"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import styles from "@/app/styles/GameSlider.module.scss";
import { GameSliderProps } from "@/app/types/constants";
import Link from "next/link";

const GameSlider: React.FC<GameSliderProps> = ({
  title,
  icon,
  array,
  type,
  sliderQuantity,
}) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: sliderQuantity,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 4000,
    arrows: true,
    draggable: false,
    // swipe: false,
    // touchMove: false,
  };
  return (
    <div className={styles.gameSlider_wrapper} id="single_slider">
      <Link href="/games" className={styles.slider_title}>
        {icon && <span className={styles.icon}>{icon}</span>}
        <span>{title}</span>
      </Link>
      <div className={styles.slider}>
        <Slider {...settings}>
          {array
            .filter((item) => item.type === type)
            .map((item, i) => (
              <Link
                href={`games/${item.id}`}
                className={styles.single_slider_wrapper}
                key={i}
                onClick={() => console.log(item, i)}
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={150} // adjust based on your design
                  height={150} // adjust based on your design
                  style={{ width: "100%", height: "auto" }}
                  priority={i === 0} // optional, preload first slide
                />
              </Link>
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default GameSlider;
