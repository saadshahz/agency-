import Image from "next/image";
import Slider from "../../component/Slider";
import Footer from "../../component/common/Footer";
import Header from "../../component/common/Header";
import burger from "../../public/images/burger.png";
import adidas from "../../public/images/adidas.png";
import Link from "next/link";
export default function Team() {
  const team = [
    {
      key: "1",
      image: "/images/team/1.png",
      name: "John Doe",
      Position: "Manager",
    },
    {
      key: "2",
      image: "/images/team/1.png",
      name: "Smith joe",
      Position: "Marketing Head",
    },
    {
      key: "3",
      image: "/images/team/1.png",
      name: "Sager jae",
      Position: "Manager",
    },
    {
      key: "4",
      image: "/images/team/1.png",
      name: "James Hames",
      Position: "Technical Manager",
    },
    {
      key: "5",
      image: "/images/team/1.png",
      name: "Will Smith",
      Position: "Developer",
    },
    {
      key: "6",
      image: "/images/team/1.png",
      name: "Tom Smith",
      Position: "IT Manager",
    },
    {
      key: "7",
      image: "/images/team/1.png",
      name: "John Doe",
      Position: "Social Meadia Manager",
    },
    {
      key: "8",
      image: "/images/team/1.png",
      name: "Smith joe",
      Position: "Marketing Agent",
    },
  ];

  const awards = [
    {
      key: "1",
      Year: "2015",
      title: "The Marketing Excellence Awards",
      desc: [
        "Excellence in Event Marketing- Gold",
        "Excellence in Partnership- Gold",
      ],
    },
    {
      key: "2",
      Year: "2016",
      title: "The Golden Globe Tigers Awards",
      desc: ["Best Use of Social Media in Marketing"],
    },
    {
      key: "3",
      Year: "2018",
      title: "The Marketing Event Awards",
      desc: ["Best Sponsorship - Gold", "Best Integrated Marketing Campaign"],
    },
    {
      key: "4",
      Year: "2021",
      title: "The Marketing Society Awards",
      desc: ["Innovative Use of Technology Marketing Award"],
    },
    {
      key: "5",
      Year: "2019",
      title: "Event Marketing Awards",
      desc: [
        "Best Live Event - Gold",
        "Best Use of Technology - Silver",
        "Best Game Changer - Silver",
        "Best Integrated Marketing Campaign- Bronze",
      ],
    },
  ];

  return (
    <>
      <Header />
      <Slider />
      <div className="home-quote-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="quote-content">
                <q>Our Team</q>
                <p>
                  Our dynamic team ensures our clients have their fingers on the
                  pulse
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div>
                <div className="quote-writer-image">
                  <div>
                    <Image src={burger} />
                  </div>
                  <div>
                    <Image src={adidas} />
                  </div>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Id quisque fames
                    lacus cras mus quisque est. Id molestie viverra amet
                    tincidunt ultrices enim.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="team_section">
        <div className="container">
          <div className="row">
            {team &&
              team.map((item, idx) => {
                return (
                  <div className="col-md-3">
                    <div className="team_card">
                      <div className="team_card_img">
                        <Image
                          src={`/images/team/${item.key}.jpg`}
                          width={200}
                          height={200}
                        />
                      </div>
                      <div className="team_card_desc">
                        <h4>{item.name}</h4>
                        <p>{item.Position}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>

      <section className="award-section">
        <div className="container">
          <div className="award-section-title">
            <h2>Awards</h2>
          </div>
          <div className="row inner">
            {awards &&
              awards.map((item) => {
                return (
                  <div className="col-md-4" key={item.key}>
                    <div className="award-details">
                      <h4>{item.Year}</h4>
                      <div>
                        <Image
                          src={`/images/awards/${item.key}.png`}
                          width={100}
                          height={100}
                          alt="Awards"
                        />
                      </div>

                      <h5>{item.title}</h5>
                      <ul>
                        {item.desc.map((desc) => {
                          return <li>{desc}</li>;
                        })}
                      </ul>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>

      <section className="team-btn">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div style={{ width: "50%" }}>
                <div className="work-section-more">
                  <Link href={"/"}>Back To Home</Link>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="work-section-more">
                <Link href={"#"}>Checkout Our Work</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
