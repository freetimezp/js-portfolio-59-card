"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import BackgroundRadialRight from '../BackgroundRadialRight/BackgroundRadialRight';

import { MotionTransition } from '../MotionTransition';
import Reveal from '../Reveal/Reveal';

const FirstBlock = () => {
    return (
        <div className='relative p-4 md:py-40'>
            <BackgroundRadialRight />

            <div className='grid max-w-5xl mx-auto md:grid-cols-2'>
                <div>
                    <Reveal>
                        <h1 className='text-5xl font-semibold'>
                            New Bank
                            <span className='block degradedBlue bg-blueLight'>
                                Credit Cards
                            </span>
                            For All
                        </h1>
                    </Reveal>

                    <Reveal>
                        <p className='max-w-md mt-10'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Laboriosam similique exercitationem nesciunt? Neque magni
                            adipisci, voluptatum mollitia illo molestiae similique sunt
                            repellat voluptatem odio. Iusto veritatis deserunt labore
                            sequi eos.
                        </p>
                    </Reveal>

                    <Reveal>
                        <div className='my-8'>
                            <Link href="#clients" className='px-4 py-3 rounded-md bg-blueRadial'>
                                Start Now
                            </Link>
                        </div>
                    </Reveal>

                </div>

                <MotionTransition className="flex items-center justify-center">
                    <Image
                        src="/assets/cards-block.png"
                        alt="cards"
                        width={450}
                        height={450}
                        className='h-auto w-72 md:w-full'
                    />
                </MotionTransition>
            </div>
        </div>
    )
}

export default FirstBlock;
