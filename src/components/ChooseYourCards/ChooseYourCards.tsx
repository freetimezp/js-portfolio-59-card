"use client";
import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { EffectCards } from 'swiper/modules';
import 'swiper/css/effect-cards';

import BackgroundRadialRight from '../BackgroundRadialRight/BackgroundRadialRight';
import Reveal from '../Reveal/Reveal';
import { MotionTransition } from '../MotionTransition';
import { dataCards } from './ChooseYourCards.data';
import Image from 'next/image';

const ChooseYourCards = () => {
    return (
        <div className='relative px-6 py-20 md:py-64' id="cards">
            <BackgroundRadialRight />

            <div className='block max-w-5xl mx-auto md:grid md:grid-cols-2'>
                <Reveal>
                    <h2 className='text-5xl font-semibold'>
                        Choose the card that most
                        <span className='block degradedBlue bg-blueLight'>
                            adapts to your needs
                        </span>
                    </h2>
                </Reveal>
                <div className='px-5'>
                    <MotionTransition>
                        <Swiper
                            effect={"cards"}
                            grabCursor={true}
                            modules={[EffectCards]}
                        >
                            {dataCards.map(({ id, image }) => (
                                <SwiperSlide key={id}>
                                    <Image src={image} alt="slide" width={400} height={300} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </MotionTransition>
                </div>
            </div>
        </div>
    );
}

export default ChooseYourCards;
