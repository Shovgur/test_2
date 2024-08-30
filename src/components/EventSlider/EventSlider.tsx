import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import styles from "./EventSlider.module.scss";

interface EventSliderProps {
  events: string[];
}

const EventSlider: React.FC<EventSliderProps> = ({ events }) => {
  return (
    <Swiper spaceBetween={50} slidesPerView={1} className={styles.swiper}>
      {events.map((event, index) => (
        <SwiperSlide key={index}>
          <div className={styles.eventSlide}>{event}</div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default EventSlider;
