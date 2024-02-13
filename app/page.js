"use client";
import Slider from "../component/Slider";
import Footer from "../component/common/Footer";
import Header from "../component/common/Header";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { FiSend } from "react-icons/fi";
import { FaPenNib } from "react-icons/fa";
import { BsCalendar2Date } from "react-icons/bs";
import { GiMaterialsScience } from "react-icons/gi";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ClientSlider from "../component/ClientSlider";
import client from "../public/images/client/client.png";

export default function Home() {
  const dummyHelpContent = [
    {
      title: "Strategic Planning",
      image: <BsCalendar2Date />,
      desc: "Lorem ipsum dolor sit amet consectetur. Facilisi sagittis vel lacus adipiscing ut in.",
    },
    {
      title: "Marketing & PR",
      image: <FiSend />,
      desc: "Lorem ipsum dolor sit amet consectetur. Facilisi sagittis vel lacus adipiscing ut in.",
    },
    {
      title: "Design & Production",
      image: <FaPenNib />,
      desc: "Lorem ipsum dolor sit amet consectetur. Facilisi sagittis vel lacus adipiscing ut in.",
    },
    {
      title: "Research & Training",
      image: <GiMaterialsScience />,
      desc: "Lorem ipsum dolor sit amet consectetur. Facilisi sagittis vel lacus adipiscing ut in.",
    },
  ];
  const dummywork = [
    {
      title: "Carnival",
      img: "/images/work/carnival.jpg",
      desc: "It is a long established fact that a reader will be distracted by the readable content.",
    },
    {
      title: "Campaign",
      img: "/images/work/compaign.jpg",
      desc: "It is a long established fact that a reader will be distracted by the readable content.",
    },
    {
      title: "Music Event",
      img: "/images/work/music.jpg",
      desc: "It is a long established fact that a reader will be distracted by the readable content.",
    },
  ];
  const [HelpContent, setHelpContent] = useState(dummyHelpContent);
  const dummyNews = [
    {
      img: "/images/news/1.png",
      date: "August 27, 2023",
      title: "Winner Innovative Use of Technology Marketing Award",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id arcu lacus cras nullam ut sed orci aenean. Mi facilisi etiam duis ac. Praesent ut aliquam posuere sit. Nibh eget risus nibh tincidunt.",
    },
    {
      img: "/images/news/2.png",
      date: "January 15, 2023",
      title: "Technology Marketing Award",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id arcu lacus cras nullam ut sed orci aenean. Mi facilisi etiam duis ac. Praesent ut aliquam posuere sit. Nibh eget risus nibh tincidunt.",
    },
    {
      img: "/images/news/3.png",
      date: "February 20, 2023",
      title: "Innovative Use of Technology Marketing Award",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id arcu lacus cras nullam ut sed orci aenean. Mi facilisi etiam duis ac. Praesent ut aliquam posuere sit. Nibh eget risus nibh tincidunt.",
    },
  ];
  const [news, setNews] = useState(dummyNews);
  return (
    <>
      <Header />
      <div>
        <Slider />
      </div>
      <div className="home-help-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="help_heading">
                <h2>What do we help?</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {HelpContent &&
              HelpContent.map((helpcontent, idx) => {
                return (
                  <div className="col-md-3" key={idx}>
                    <div className="help-card">
                      <div className="help-card-image">
                        <div>{helpcontent.image}</div>
                      </div>
                      <div className="help-card-title">
                        <h4>{helpcontent.title}</h4>
                      </div>
                      <div className="help-card-desc">
                        <p>{helpcontent.desc}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>

      <div className="home-quote-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="quote-content">
                <q>We believe the best is yet to come.</q>
              </div>
            </div>
            <div className="col-md-6">
              <div className="quote-writer">
                <h5>- Peter Gibbs</h5>
                <p>{"Founder & Managing Director"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="work-section">
        <div className="container">
          <div className="work-top-section">
            <div className="row">
              <div className="col-md-6">
                <div className="work-section-heading">
                  <h2>{"Latest Work"}</h2>
                </div>
              </div>
              <div className="col-md-6">
                <div className="work-section-more">
                  <Link href={"#"}>See More</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            {dummywork &&
              dummywork.map((work, idx) => {
                return (
                  <div className="col-md-4" key={idx}>
                    <div className="work-card">
                      <div className="work-img">
                        <Link href={"#"}>
                          <Image src={work.img} width={200} height={200} />
                        </Link>
                      </div>
                      <div className="work-content">
                        <div className="row">
                          <div className="col-md-10">
                            <div className="work-title">
                              <Link href={"#"}>
                                <h4>{work.title}</h4>
                              </Link>
                            </div>
                            <div className="work-desc">
                              <Link href={"#"}>
                                <p>{work.desc}</p>
                              </Link>
                            </div>
                          </div>
                          <div className="col-md-2">
                            <div className="detail-link">
                              <div>
                                <Link href={"#"}>
                                  <IoArrowForwardCircleOutline />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>

      <section className="client-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="client-heading">
                <h2>We Shared Value with our clients</h2>
              </div>
            </div>
            <div className="col-md-6">
              <ClientSlider />
            </div>
            <div className="col-md-6">
              <div className="client-image">
                <Image src={client} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="news">
        <div className="container">
          <div className="news-heading">
            <div className="row">
              <div className="col-md-6">
                <h2>News</h2>
              </div>
              <div className="col-md-6">
                <div className="work-section-more">
                  <Link href={"#"}>See More</Link>
                </div>
              </div>
            </div>
          </div>
          {news &&
            news.map((item, idx) => {
              return (
                <div className="news-content" key={idx}>
                  <div className="news-card">
                    <div className="row">
                      <div className="col-md-2">
                        <div className="news-card-img">
                          <Image src={item.img} width={200} height={200} />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="news-card-title">
                          <p>{item.date}</p>
                          <h3>{item.title}</h3>
                        </div>
                      </div>
                      <div className="col-md-5">
                        <div className="news-card-desc">
                          <p>{item.desc}</p>
                        </div>
                      </div>
                      <div className="col-md-1">
                        <div className="news-card-detailView">
                          <Link href={"#"}><IoArrowForwardCircleOutline /></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </section>

      <Footer />
    </>
  );
}
