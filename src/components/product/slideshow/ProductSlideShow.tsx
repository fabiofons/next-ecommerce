'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Swiper as SwiperObject } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './slideshow.css';

import { Autoplay, FreeMode, Navigation, Thumbs } from 'swiper/modules';

interface Props {
  title: string;
  images: string[];
  className?: string;
}

export const ProductSlideShow = ({ title, images, className }: Props) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperObject>();
  return (
    <div className={className}>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        } as React.CSSProperties}
        spaceBetween={10}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
        className="mySwiper2"
      >
        {
          images.map((image) => {
            return (
              <SwiperSlide key={image}>
                <Image
                  src={`/products/${image}`}
                  width={1024}
                  height={800}
                  alt={title}
                  className='rounded-xl object-fill'
                />
              </SwiperSlide>
            )
          })
        }
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {
          images.map((image) => {
            return (
              <SwiperSlide key={image}>
                <Image
                  src={`/products/${image}`}
                  width={1024}
                  height={800}
                  alt={title}
                  className='rounded-xl object-fill'
                />
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </div>
  );
}
