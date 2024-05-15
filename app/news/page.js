"use client"
import Header from "../../component/common/Header";
import Footer from "../../component/common/Footer";
import WorksTabs from "../../component/WorksTabs";

export default function News() {
  return (
    <>
      <Header />
      {/* <section className="our-works-title">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1>News</h1>
            </div>
            <div className="col-md-6"></div>
          </div>
        </div>
      </section> */}

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
