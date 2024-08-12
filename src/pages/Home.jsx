import React from 'react'
import SlideBack from '../components/SlideBack'
import Menu from '../components/Menu'
import ImageSlide from '../components/ImageSlide'
import HomeCarouselData from '../assets/data/HomeCarousel'

function Home() {
    return (
        <div>
            <ImageSlide slides={HomeCarouselData} />
            <SlideBack />
            <Menu />
        </div>
    )
}

export default Home