import React from "react";
// import { FaLongArrowAltRight } from "react-icons/fa";
import Carousel from "react-multi-carousel";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    paritialVisibilityGutter: 60,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    paritialVisibilityGutter: 50,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 30,
  },
};
const images = [
  "https://i.ibb.co/MnJ0tsn/banner-1.jpg",
  // "https://i.ibb.co/MGy27gv/new-1.jpg",
  // "https://i.ibb.co/Y2j3QV5/traveling-3.jpg",
  // "https://i.ibb.co/sVbMrY6/traveling-4.jpg",
  // "https://i.ibb.co/Hn5nzRT/traveling-2.jpg",
  // "https://i.ibb.co/b2Ywf3Q/traveling-1.jpgg",
];

const Hero = ({ deviceType, infinite, autoPlay }) => {
  return (
    <Carousel
      ssr
      deviceType={deviceType}
      itemClass="image-item"
      responsive={responsive}
      showDots={true}
      arrows={false}
      slidesToSlide={0}
      infinite={infinite}
      containerClass="carousel-container"
      autoPlay={autoPlay}
      autoPlaySpeed={1000}
    >
      {images.map((image, index) => {
        return (
          <div key={index} className="hero">
            <img draggable={false} alt="text" src={image} />
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: "60%",
                bottom: "40%",
                color: "white",
                transform: " translateX(-50%)",
              }}
            >
              <h1>
                Where will <b>you go next?</b>
              </h1>
              <h6>
                <b>Welcome to Travelers,</b> Pack your bags, hit the road and
                don't forget to write down all of <b>your amazing stories!</b>
              </h6>
            </div>
          </div>
        );
      })}
    </Carousel>
  );
};

export default Hero;
