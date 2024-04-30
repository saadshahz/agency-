import Image from "next/image";
import React from "react";
import logo from "/public/images/logo.png";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <nav className="navigation">
              <ul>
                <li>
                  {" "}
                  <Link href="/">Home</Link>{" "}
                </li>
                <li>
                  <Link href="/team">Team</Link>
                </li>
                <li>
                  <Link href="/works">Projects</Link>
                </li>
                <li>
                  <Link href="#">News</Link>
                </li>
                <li>
                  <Link href="#">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-md-2">
            <div className="logo">
              <Link href={"/"}>
                <Image src={logo} />
              </Link>
            </div>
          </div>
          <div className="col-md-5">
            <div className="header-contact-btn">
              <button>Contact</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
