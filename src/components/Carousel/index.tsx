'use client'
import { CAROUSEL_ITEMS } from '@/constants'
import Image from 'next/image'
import { Carousel as BsCarousel } from 'react-bootstrap'

export function Carousel() {
  return (
    <div>
      <BsCarousel fade>
        {CAROUSEL_ITEMS.map((item) => (
          <BsCarousel.Item
            key={item.name}
            className="d-flex justify-content-start align-start"
          >
            <Image
              className="d-block w-100"
              src="/images/home-background.png"
              alt="Image One"
              width={1000}
              height={400}
            />
            <BsCarousel.Caption className="d-flex justify-content-between align-items-center">
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
            </BsCarousel.Caption>
          </BsCarousel.Item>
        ))}
      </BsCarousel>
    </div>
  )
}
