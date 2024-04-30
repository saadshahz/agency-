"use client";
import Image from "next/image";
import Footer from "../../component/common/Footer";
import Header from "../../component/common/Header";
import WorksTabs from "../../component/WorksTabs";

export default function Works() {
  return (
    <>
      <Header />
      <section className="our-works-title">
        <div className="container">
          <div className="row">
            <div className="scol-md-6">
              <h1>OUR WORKS</h1>
              <p>
                Dynamic marketing solutions to drive community engagement and
                social purpose
              </p>
            </div>
            <div className="scol-md-6"></div>
          </div>
        </div>
      </section>

      <section className="our-work-detail">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <WorksTabs />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
