import Image from "next/image";
import Slider from "../../component/Slider";
import Footer from "../../component/common/Footer";
import Header from "../../component/common/Header";
import burger from "../../public/images/burger.png";
import adidas from "../../public/images/adidas.png";
export default function Team() {
  const team = [
    {
      image: "/images/team/1.png",
      name: "John Doe",
      Position: "Manager",
    },
    {
      image: "/images/team/1.png",
      name: "Smith joe",
      Position: "Marketing Head",
    },
    {
      image: "/images/team/1.png",
      name: "Sager jae",
      Position: "Manager",
    },
    {
      image: "/images/team/1.png",
      name: "James Hames",
      Position: "Technical Manager",
    },
    {
      image: "/images/team/1.png",
      name: "Will Smith",
      Position: "Developer",
    },
    {
      image: "/images/team/1.png",
      name: "Tom Smith",
      Position: "IT Manager",
    },
    {
      image: "/images/team/1.png",
      name: "John Doe",
      Position: "Social Meadia Manager",
    },
    {
      image: "/images/team/1.png",
      name: "Smith joe",
      Position: "Marketing Agent",
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
                          src={item.image}
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
      <Footer />
    </>
  );
}
