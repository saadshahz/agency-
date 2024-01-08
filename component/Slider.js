"use client";
import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";
import banner1 from "/public/images/banner-1.png";
import banner2 from "/public/images/banner-2.png";

export default function Slider() {
  return (
    <>
      <Swiper
        direction={"horizontal"}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="banner">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="banner-content">
                    <h1>Provide solutions with creativity</h1>
                    <p>
                      Vitae massa aliquam tortor nibh diam mauris sed sit.A
                      consectetur vulputate ipsum risus nisi eget. Amet sodales
                      auctor aliquet dictum id. Magna neque commodo dui felis
                      odio. Mus eu integer massa facilisis metus sed eu cursus
                      metus. Purus pharetra adipiscing sed viverra aliquam arcu
                      massa mauris. Morbi nulla a eget duis ipsum facilisi.
                    </p>
                    <div>
                      <Link href={"#"}>Projects</Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="banner-image">
                    <Image src={banner1} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="banner-content">
                    <h1>to drive community engagement</h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur. Sed imperdiet
                      interdum amet amet ligula. Lacus faucibus vitae libero
                      interdum. Semper purus pharetra blandit pulvinar. Vel
                      adipiscing sit dolor fringilla venenatis. Pellentesque
                      volutpat massa rhoncus in et ultricies nec. Malesuada nisl
                      consequat vel mi aliquam.
                    </p>
                    <div>
                      <Link href={"#"}>Projects</Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="banner-image">
                    <Image src={banner2} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </>
  );
}
