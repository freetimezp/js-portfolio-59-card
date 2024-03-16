"use client";
import React from 'react';

import Reveal from '../Reveal/Reveal';
import Link from 'next/link';

const CtaDark = () => {
    return (
        <div className='px-6 my-20 md:mt-36'>
            <div className='max-w-5xl px-4 py-6 mx-auto border-transparent bg-radialBlack
                md:px-16 md:py-12 shadow-dark rounded-3xl'>
                <div className='grid items-center md:grid-cols-2'>
                    <div className='my-8'>
                        <Reveal>
                            <h3 className='text-3xl font-bold'>
                                Come & try our services
                            </h3>
                        </Reveal>
                        <Reveal>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Delectus veniam esse aspernatur ullam fugiat maiores quaerat
                                quidem qui ut assumenda.
                            </p>
                        </Reveal>
                    </div>

                    <Link href="#" className='px-4 py-3 mx-auto rounded-md bg-blueRadial'>
                        <Reveal>
                            Start Now
                        </Reveal>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default CtaDark;
