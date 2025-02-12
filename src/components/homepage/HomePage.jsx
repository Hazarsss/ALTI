import React from "react";
import "./HomePage.css";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  CardFooter,
} from "@material-tailwind/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import YouTube from "react-youtube";

const HomePage = () => {
  const events = [
    {
      location: "Area Hutan, Kalisoro",
      date: "11 - 13 Desember 2025",
      regis: "Registration Open",
      image: "lawu.jpg",
      iconNationalis: "indonesia.png",
      iconCalendar: "calendar.png",
      iconJarak: "jarak.png",
      iconRegistrasi: "greenCircle.png",
      icon7k: "7k.png",
      icon15k: "15k.png",
      icon30k: "30k.png",
      icon60k: "60k.png",
      icon100k: "100k.png",
    },
    {
      location: "Belanting , Sembalun-Lombok",
      date: "16 - 18 May 2025",
      regis: "Registration Open",
      image: "rinjani.jpg",
      iconNationalis: "indonesia.png",
      iconCalendar: "calendar.png",
      iconJarak: "jarak.png",
      iconRegistrasi: "greenCircle.png",
      icon30k: "30k.png",
      icon60k: "60k.png",
      icon100k: "100k.png",
    },
    {
      location: "Kintamani Bali",
      date: "9 - 11 May 2025",
      regis: "Registration Closed",
      image: "bromo.jpg",
      iconNationalis: "indonesia.png",
      iconCalendar: "calendar.png",
      iconJarak: "jarak.png",
      iconRegistrasi: "redCircle.png",
      icon7k: "7k.png",
      icon15k: "15k.png",
      icon30k: "30k.png",
    },
  ];

  const sponsors = [
    {
      sponsornames: "HOKA TECTON X3",
      sponsordescription:
        "Ready to propel you through gnarly terrain, the Tecton X 3 adds winglets to its carbon fiber plates for extra stability in just the right spots, and two layers of PEBA in the midsole—our lightest",
      sponsorimage: "tectonX3.png",
    },
    {
      sponsornames: "COROS PACE 3",
      sponsordescription:
        "Cutting edge sports technology & training methods for athletes, explorers, and outdoor enthusiasts worldwide. Our motto is simple: #ExplorePerfection",
      sponsorimage: "coros.png",
    },
    {
      sponsornames: "MAURTEN",
      sponsordescription:
        "Hydrogel Sports Fuel – Carbohydrate-rich fuel for endurance sports, based on natural ingredients for energy, hydration and recovery.",
      sponsorimage: "maurten.png",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  const bromobackground = "bromobackground.png";
  const [bgEventImage, setBgEventImage] = useState(bromobackground);

  return (
    <>
      <header className="header">
        <img className="logo" src="alti.png" alt="Logo" />
        <button className="btnSignin flex gap-2">
          <p>MY</p>
          <p className="font-bold">ALTI</p>
          <img className="logoMountain" src="mountain.png" alt="LogoMountain" />
        </button>
      </header>

      <main>
        <div className="hero-section">
          <img src="background.JPG" alt="Background" className="background" />
          <div className="boxMenu">
            <ul>
              <li>HOME</li>
              <li>RACES</li>
              <li>RUNNERS</li>
              <li>ALTI MEDIA</li>
              <li>ALTI LIFE</li>
              <li>ALTI SHOP</li>
            </ul>
          </div>
          <div className="text-container">
            <p className="series">ALTI WORLD SERIES</p>
            <p className="title">PUSH YOUR LIMIT !</p>
            <p className="event">50+ INCREDIBLE EVENT INDONESIA SERIES</p>
            <button className="btnChoseAdventure font-bold">
              CHOSE YOUR ADVENTURE
            </button>
          </div>
        </div>
        <div
          className="event-container transition-all duration-500 bg-cover bg-center h-[100vh]"
          style={{
            backgroundImage: bgEventImage
              ? `url(${bgEventImage})`
              : `url(${bromobackground})`,
          }}
        >
          <div className="event-labelcontainer">
            <p className="upcominglabel">UPCOMING</p>
            <p className="eventlabel font-bold">EVENTS</p>
          </div>
          <div className="event-section gap-14">
            {events.map((event, index) => (
              <Card
                key={index}
                className="w-120 flex flex-col justify-between overflow-hidden transition-all duration-500"
                onMouseEnter={() => setBgEventImage(event.image)} // Change background on hover
                onMouseLeave={() => setBgEventImage("")} // Reset background when leaving
              >
                <CardHeader
                  floated={false}
                  shadow={false}
                  color="transparent"
                  className="m-0 rounded-none"
                >
                  <img
                    src={event.image}
                    alt={event.location}
                    className="w-full h-48 object-cover"
                  />
                </CardHeader>
                <CardBody className="cardevent-body items-center grid grid-cols-7 gap-3">
                  <div className="flex justify-center">
                    <img
                      className="w-8"
                      src={event.iconNationalis}
                      alt="iconNationalis"
                    />
                  </div>
                  <Typography
                    className="col-start-2 col-end-8"
                    variant="h10"
                    color="blue-gray"
                  >
                    {event.location}
                  </Typography>
                  <div className="flex justify-center">
                    <img
                      className="w-8"
                      src={event.iconCalendar}
                      alt="iconCalendar"
                    />
                  </div>
                  <Typography
                    className="col-start-2 col-end-8"
                    variant="h10"
                    color="gray"
                  >
                    {event.date}
                  </Typography>
                  <div className="flex justify-center">
                    <img
                      className="w-8"
                      src={event.iconJarak}
                      alt="iconJarak....."
                    />
                  </div>
                  <Typography
                    className="col-start-2 col-end-8"
                    variant="h10"
                    color="gray"
                  >
                    <div className="flex">
                      {[
                        event.icon100k,
                        event.icon60k,
                        event.icon30k,
                        event.icon15k,
                        event.icon7k,
                      ]
                        .filter((icon) => icon) // Remove empty or undefined icons
                        .slice(0, 5) // Show only the first 3 available icons
                        .map((icon, index) => (
                          <img
                            key={index}
                            className="w-16"
                            src={icon}
                            alt={`icon-${index}`}
                          />
                        ))}
                    </div>
                  </Typography>
                  <div className="flex justify-center">
                    <img
                      className="w-3"
                      src={event.iconRegistrasi}
                      alt="iconCalendar"
                    />
                  </div>
                  <Typography
                    className="col-start-2 col-end-8"
                    variant="h10"
                    color="gray"
                  >
                    {event.regis}
                  </Typography>
                  <button className="btnDiscover col-start-2 col-end-7 font-bold text-white">
                    DISCOVER
                  </button>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
        <div className="mainsponsor-section flex justify-center items-center">
          <Slider {...settings} className="w-full max-w-[100rem]">
            {sponsors.map((event, index) => (
              <div key={index} className="flex justify-center items-center p-4">
                <Card className="w-full max-w-[47rem] h-70 !flex !flex-row mx-auto">
                  {/* Image Section */}
                  <CardHeader
                    shadow={false}
                    floated={false}
                    className="w-2/5 shrink-0 rounded-r-none"
                  >
                    <img
                      src={event.sponsorimage}
                      alt="sponsor"
                      className="h-full w-full object-cover"
                    />
                  </CardHeader>

                  {/* Text & Button Section */}
                  <div className="flex flex-col w-3/5 h-full">
                    <CardBody className="flex-grow cardsponsor-body">
                      <Typography
                        variant="h4"
                        color="blue-gray"
                        className="mb-2"
                      >
                        {event.sponsornames}
                      </Typography>
                      <Typography color="gray" className="mb-2">
                        {event.sponsordescription}
                      </Typography>
                    </CardBody>

                    <CardFooter className="flex justify-end mt-auto cardsponsor-body">
                      <a href="#" className="inline-block">
                        <Button
                          variant="text"
                          className="flex items-center gap-2"
                        >
                          Learn More
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                            className="h-4 w-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                            />
                          </svg>
                        </Button>
                      </a>
                    </CardFooter>
                  </div>
                </Card>
              </div>
            ))}
          </Slider>
        </div>
        <div className="tierevent-section">
          <img
            className="h-full w-full object-cover"
            src="background-tier-event.png"
            alt="LogoTier"
          />
        </div>
        <section className="flex justify-center !m-25">
          <p className="text-4xl">
            WHERE WILL YOU MEET YOUR EXTRAORDINARY IN 2025 ?
          </p>
        </section>
        <div className="youtube-section">
          <iframe
            className="youtube-frame"
            src="https://www.youtube.com/embed/bvMtbOKmbY8?si=YUoJeAtkUpL7uq29"
            frameborder="0"
          ></iframe>
        </div>
      </main>
      <footer>
        <div className="footer"></div>
      </footer>
    </>
  );
};

export default HomePage;
