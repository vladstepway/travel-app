import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import './Gallery.css';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Gallery(props: any) {
  // const settings = {
  //   responsive: [
  //     {
  //       breakpoint: 700,
  //       settings: {
  //         arrows: false,
  //         slidesToShow: 3,
  //       },
  //     },
  //     {
  //       breakpoint: 500,
  //       settings: {
  //         arrows: false,
  //         slidesToShow: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 400,
  //       settings: {
  //         arrows: false,
  //         slidesToShow: 1,
  //       },
  //     },
  //   ],
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   arrows: true,

  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   prevArrow: <SlickArrowLeft />,
  //   nextArrow: <SlickArrowRight />,
  // };

  const [nav1, setNav1] = useState<any>(null);
  const [nav2, setNav2] = useState<any>(null);
  const [slider1, setSlider1] = useState<any>(null);
  const [slider2, setSlider2] = useState<any>(null);

  useEffect(() => {
    setNav1(slider1);
  }, [slider1]);

  useEffect(() => {
    setNav2(slider2);
    // return () => setNav2(slider2);
  }, [slider2]);

  const settingsMain = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    swipeToSlide: true,
    asNavFor: nav1,
    speed: 600,

  };

  const settingsThumbs = {
    slidesToShow: 2,
    slidesToScroll: 1,
    asNavFor: nav2,
    arrows: true,
    dots: true,
    centerMode: true,
    swipeToSlide: true,
    focusOnSelect: true,
    centerPadding: '10px',
    adaptiveHeight: true,

    responsive: [
      {
        breakpoint: 700,
        settings: {
          arrows: false,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 500,
        settings: {
          arrows: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 400,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  };
  const { views, lang } = props;
  return (
    <div className="slider-wrapper">
      <Slider
        {...settingsMain}
        asNavFor={nav2}
        ref={(slider: any) => setSlider1(slider)}
      >
        {views.map((v: any, i: number) => {
          return (
            <div className="slick-slide " key={v.viewName[lang]}>
              <h2 className="slick-slide-title">{v.viewName[lang]}</h2>
              <img
                className="slick-slide-image"
                src={`${v.imgURL}`}
                alt={`${v.viewName[lang]}`}
              />
              <div className="slick-slide-label">{v.about[lang]}</div>
            </div>
          );
        })}
      </Slider>
      <div className="thumbnail-slider-wrap">
        <Slider
          {...settingsThumbs}
          asNavFor={nav1}
          ref={(slider: any) => setSlider2(slider)}
        >
          {views.map((v: any, i: number) => (
            <div className="slick-slide" key={v.viewName[lang]}>
              <img
                className="slick-slide-image"
                src={`${v.imgURL}`}
                alt={`${v.viewName[lang]}`}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Gallery;
