'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './slideshow.css';

import { Pagination } from 'swiper/modules';

interface Props {
  title: string;
  images: string[];
  className?: string;
}

export const ProductMobileSlideShow = ({ title, images, className }: Props) => {
  return (
    <div className={className}>
      <Swiper
        style={{
          // '--swiper-pagination-color': '#fff',
          'width': '100vw',
          'height': '500px',
        } as React.CSSProperties}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper2"
      >
        {
          images.map((image) => {
            return (
              <SwiperSlide key={image}>
                <Image
                  src={`/products/${image}`}
                  width={600}
                  height={300}
                  alt={title}
                  className='object-fill'
                />
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </div>
  );
}
