'use client'
import { CarouselLists } from '@/app/constants'
import Image from 'next/image'
import Carousel from 'react-bootstrap/Carousel'

export function HomepageCarousel() {
  return (
    <div>
      <Carousel fade>
        {CarouselLists.map(function (item) {
          return (
            <Carousel.Item className="d-flex justify-content-start align-start">
              <Image
                className="d-block w-100"
                src="/home-background.png"
                alt="Image One"
                width={1000}
                height={400}
              />
              <Carousel.Caption className="d-flex justify-content-between align-items-center">
                <div className="caption-texts">
                  <h3 className="text-dark">{item.name}</h3>
                  <p className="text-dark">{item.quote}</p>
                  <button className="btn btn-info text-light fw-bold">
                    Check Reviews
                  </button>
                </div>
                <div className="cpation-images">
                  <Image
                    className="d-block w-100"
                    src={item.image}
                    alt={item.name}
                    width={300}
                    height={300}
                  />
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          )
        })}
      </Carousel>
    </div>
  )
}
