import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Slider = () => {
    return (
        <section className='mx-auto mb-16'>
            <Carousel
                autoPlay
                infiniteLoop
                showStatus={false}
                showThumbs={false}
                interval={5000}
            >
                <div>
                    <img loading='lazy' src="/images/slider-1.png" />
                </div>
                <div>
                    <img loading='lazy' src="/images/slider-2.png" />
                </div>
                <div>
                    <img loading='lazy' src="/images/slider-3.png" />
                </div>
                <div>
                    <img loading='lazy' src="/images/slider-4.png" />
                </div>
                <div>
                    <img loading='lazy' src="/images/slider-5.png" />
                </div>
            </Carousel>
        </section>
    )
}

export default Slider