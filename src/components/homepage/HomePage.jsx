import React from "react";
import "./HomePage.css";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
} from "@material-tailwind/react";

const HomePage = () => {
  const events = [
    {
      location: "Area Hutan, Kalisoro",
      date: "11 - 13 Desember 2025",
      regis: "Registration Open",
      image: "siksorogo.jpg",
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
      image: "btr.jpg",
      iconNationalis: "indonesia.png",
      iconCalendar: "calendar.png",
      iconJarak: "jarak.png",
      iconRegistrasi: "redCircle.png",
      icon7k: "7k.png",
      icon15k: "15k.png",
      icon30k: "30k.png",
    },
  ];

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
        <div className="event-labelcontainer">
          <p className="text-2xl">UPCOMING</p>
          <p className="font-bold text-8xl">BIG EVENT</p>
        </div>
        <div className="event-section gap-14">
          {events.map((event, index) => (
            <Card
              key={index}
              className="max-w-[28rem] h-full flex flex-col justify-between overflow-hidden"
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
              </CardBody>
            </Card>
          ))}
        </div>
      </main>
      <footer>
        <div className="footer"></div>
      </footer>
    </>
  );
};

export default HomePage;
