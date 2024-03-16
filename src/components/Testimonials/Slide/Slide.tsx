"use client";
import React from 'react';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Mousewheel, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import { dataTestimonials } from '../Testimonials.data';
import Reveal from '@/components/Reveal/Reveal';

const Slide = () => {
    return (
        <Swiper
            loop={true}
            breakpoints={{
                320: {
                    slidesPerView: 1,
                    spaceBetween: 15
                },
                678: {
                    slidesPerView: 3,
                    spaceBetween: 15
                }
            }}
            freeMode={true}
            pagination={{
                clickable: true
            }}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className='h-[250px] w-full md:max-w-5xl'
        >
            {dataTestimonials.map(({ id, name, work, testimonial, image }) => (
                <SwiperSlide key={id} className='my-5 cursor-pointer md:px-10'>
                    <Reveal>
                        <Image src="/assets/testimonial-icon.png"
                            alt="icon" width={50} height={50}
                            className='w-auto h-auto'
                        />
                        <div className='py-5'>
                            {testimonial}
                        </div>
                        <div className='flex'>
                            <Image src={image} alt="slide" width={50} height={50} className='mr-5' />
                            <div>
                                <h4 className='text-center'>
                                    {name}
                                </h4>
                                <p className='text-primaryDark'>
                                    {work}
                                </p>
                            </div>
                        </div>
                    </Reveal>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default Slide;
