import React from 'react'
import MediaCarouselData from '../assets/data/MediaCarousel'
import ImageSlide from '../components/ImageSlide'
import PageTitle from '../components/PageTitle'


function Media() {
  return (
    <div>
      <PageTitle
        title="Basın & Medya"
        text="" />
      <ImageSlide slides={MediaCarouselData} />
    </div>
  )
}

export default Media