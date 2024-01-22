import React, { useState } from "react";
import './certificates.css';


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import { Pagination } from "swiper";

const images = [];

const Certificates = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleImageClick = () => {
        const nextIndex = (currentImageIndex + 1) % images.length;
        setCurrentImageIndex(nextIndex);
    };

    return (
        <section id="certificates">
            <h2>Certificates</h2>

            <Swiper
                className="container certificates__container"
                modules={{ Pagination }} spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index} className="certificate">
                        <div className="client__avatar">
                            <img
                                src={image}
                                alt=""
                                className="certificate__image"
                                onClick={handleImageClick}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}

export default Certificates;
