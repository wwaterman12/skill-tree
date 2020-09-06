import React from "react";
import Carousel from "react-bootstrap/Carousel";
import styles from "./styles.module.css";

const PageTitle = () => {
  return (
    <h1>
      Your jumping-off point to playing well w/ others at{" "}
      <Carousel
        className={styles.companyName}
        indicators={false}
        interval={1000}
        keyboard={false}
        controls={false}
        fade
      >
        <Carousel.Item>Netflix</Carousel.Item>
        <Carousel.Item>Google</Carousel.Item>
        <Carousel.Item>Facebook</Carousel.Item>
        <Carousel.Item>Spotify</Carousel.Item>
        <Carousel.Item>AirBnb</Carousel.Item>
      </Carousel>
    </h1>
  );
};

export default PageTitle;
