"use client";
import Slider from "../component/Slider";
import Footer from "../component/common/Footer";
import Header from "../component/common/Header";
import { CiCalendarDate } from "react-icons/ci";
import { FiSend } from "react-icons/fi";
import { FaPenNib } from "react-icons/fa";
import { BsCalendar2Date } from "react-icons/bs";

import { GiMaterialsScience } from "react-icons/gi";
import { useState } from "react";

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

  const [HelpContent, setHelpContent] = useState(dummyHelpContent);
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
                        <span>{helpcontent.image}</span>
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

      <Footer />
    </>
  );
}
