import Image from "next/image";
import { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

export default function WorksTabs() {
  const [key, setKey] = useState("All");

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="All" title="All">
        <section className="our-works-card">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <div className="works-card-detail">
                  <div className="card-detail-img">
                    <Image
                      src={"/images/work/carnival.jpg"}
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="card-detail-content">
                    <h2>Media Education Summit</h2>
                    <p>
                      The Media Education Summit brings together a global
                      network of researchers, educators, and practitioners
                      working across all aspects of media and digital literacy
                      education and media and technology in education.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="works-card-detail">
                  <div className="card-detail-img">
                    <Image
                      src={"/images/work/carnival.jpg"}
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="card-detail-content">
                    <h2>Wellness events</h2>
                    <p>
                      A convention may include a mental health wellness event
                      that thousands of people participate in at once, such as a
                      mindfulness exercise or expression of gratitude. In
                      contrast, individual wellness events, such as yoga classes
                      or team challenges, are much smaller.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Tab>
      <Tab eventKey="Education" title="Education">
        <section className="our-works-card">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <div className="works-card-detail">
                  <div className="card-detail-img">
                    <Image
                      src={"/images/work/carnival.jpg"}
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="card-detail-content">
                    <h2>Media Education Summit</h2>
                    <p>
                      The Media Education Summit brings together a global
                      network of researchers, educators, and practitioners
                      working across all aspects of media and digital literacy
                      education and media and technology in education.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Tab>
      <Tab eventKey="Corporate" title="Corporate">
        <section className="our-works-card">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <div className="works-card-detail">
                  <div className="card-detail-img">
                    <Image
                      src={"/images/work/carnival.jpg"}
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="card-detail-content">
                    <h2>Wellness events</h2>
                    <p>
                      A convention may include a mental health wellness event
                      that thousands of people participate in at once, such as a
                      mindfulness exercise or expression of gratitude. In
                      contrast, individual wellness events, such as yoga classes
                      or team challenges, are much smaller.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Tab>
    </Tabs>
  );
}
