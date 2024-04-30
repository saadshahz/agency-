import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Navigation } from "swiper/modules";
import Image from "next/image";

export default function ClientSlider() {
  const dummyclient = [
    {
      name: "Angelina Ochoa",
      img:  "/images/client/client-2.jpg",
      company : "The Interactive College",
      desc: "I came by some of your work online and love it! The reason I'm contacting you is that I need a logo for my personal brand and was wondering if you could help me out with that. I don't have a very high budget so I would prefer it if you don't spend too much time on it.",
    },
    {
      name:"Susan R. Meadows" ,
      img:"/images/client/client-3.jpg",
      company : "Bloom Marketing",
      desc: "I'm an children's book illustrator and I need a logo of my own name for my website, social media and possibly to be used on my books. What I would like is my name, Michelle Gobeil, displayed like it was written with a pencil or brush or anything like that.",
    },
    {
      name: "Jayda Olive",
      img:"/images/client/client-1.jpg" ,
      company : "The Auto DNA",
      desc: "I came by some of your work online and love it! The reason I'm contacting you is that I need a logo for my personal brand and was wondering if you could help me out with that. I don't have a very high budget so I would prefer it if you don't spend too much time on it.",
    },
  ];

  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {dummyclient &&
          dummyclient.map((client, idx) => {
            return (
              <SwiperSlide key={idx}>
                <div className="client-card">
                  <div className="client-img">
                    <Image
                     src={client.img}
                     width={200}
                     height={200} 
                    />
                  </div>
                  <div className="client-desc">
                    <h5>{client.desc}</h5>
                  </div>
                  <div className="client-name">
                    <h5>{client.name}</h5>
                  </div>
                  <div className="client-company">
                    <p>{client.company}</p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
          
      </Swiper>
    </>
  );
}
