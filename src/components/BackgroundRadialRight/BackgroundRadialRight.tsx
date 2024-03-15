import React from 'react';
import Image from 'next/image';

const BackgroundRadialRight = () => {
    return (
        <div className='absolute right-0 -z-50 top-0'>
            <Image
                src="/assets/background-floated-right.png"
                alt="hero"
                width={850}
                height={650}
            />
        </div>
    )
}

export default BackgroundRadialRight;
