"use client";
import React from 'react';

import { BackgroundRadialLeft } from '../BackgroundRadialLeft';
import Reveal from '../Reveal/Reveal';
import Slide from './Slide/Slide';

const Testimonials = () => {
    return (
        <div className='relative p-8 md:py-64' id='testimonials'>
            <BackgroundRadialLeft />

            <div className='grid max-w-5xl gap-8 mx-auto my-6 md:grid-cols-2'>
                <Reveal>
                    <h2 className='text-5xl mb-5 font-semibold'>
                        What customers say about us
                    </h2>
                </Reveal>
                <Reveal>
                    <div className="self-center">
                        <p className="text-primaryDar">
                            Everything you need to accept payment and grow your
                            business anywhere on the planet.
                        </p>
                    </div>
                </Reveal>
            </div>

            <Slide />
        </div>
    );
}

export default Testimonials;
