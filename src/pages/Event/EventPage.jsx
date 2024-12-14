import React from "react";
import { Clock, MapPin } from "lucide-react";
import { Fade } from "react-awesome-reveal";
import "./EventPage.css";
import eventImg1 from "../../assets/images/event/e1.png";
import eventImg2 from "../../assets/images/event/e2.png";
import eventImg3 from "../../assets/images/event/e3.png";
import eventImg4 from "../../assets/images/event/e4.png";
import eventImg5 from "../../assets/images/event/e5.png";
import eventImg6 from "../../assets/images/event/e2.png";
import eventImg7 from "../../assets/images/event/e4.png";
import Back from "../../components/Back";

const EventCard = ({ date, month, image, title, time, location }) => (
  <div className="charity-event-card">
    <Fade direction="up">
      <div className="charity-event-date">
        <span>{date}</span>
        {month}
        <div className="charity-event-date-shape"></div>
      </div>
    </Fade>
    <Fade direction="up" delay={100}>
      <div className="charity-event-image">
        <img src={image} alt={title} />
      </div>
    </Fade>
    <Fade direction="up" delay={200}>
      <div className="charity-event-text">
        <h3>
          <a href="#">{title}</a>
        </h3>
        <div className="charity-event-info">
          <span>
            <Clock size={16} />
            {time}
          </span>
          <span>
            <MapPin size={16} />
            {location}
          </span>
        </div>
      </div>
    </Fade>
  </div>
);

const EventsPage = () => {
  const techEvents = [
    {
      date: "22",
      month: "Jan",
      image: eventImg1,
      title: "AI and Machine Learning Summit 2024",
      time: "10:00am-5:00pm",
      location: "San Francisco",
    },
    {
      date: "15",
      month: "Feb",
      image: eventImg2,
      title: "Blockchain and Web3 Conference",
      time: "9:00am-4:00pm",
      location: "New York",
    },
    {
      date: "10",
      month: "Mar",
      image: eventImg3,
      title: "Tech Innovations Expo 2024",
      time: "11:00am-6:00pm",
      location: "Los Angeles",
    },
    {
      date: "05",
      month: "Apr",
      image: eventImg4,
      title: "Cybersecurity Trends and Challenges",
      time: "8:00am-3:00pm",
      location: "Chicago",
    },
    {
      date: "20",
      month: "May",
      image: eventImg5,
      title: "Cloud Computing & DevOps Forum",
      time: "10:00am-4:00pm",
      location: "Seattle",
    },
    {
      date: "12",
      month: "Jun",
      image: eventImg6,
      title: "AR/VR Development Workshop",
      time: "1:00pm-5:00pm",
      location: "Austin",
    },
    {
      date: "18",
      month: "Jul",
      image: eventImg7,
      title: "Sustainable Tech and Green Innovations",
      time: "9:00am-12:00pm",
      location: "Portland",
    },
  ];

  return (
    <>
      <Back title="Events" />
      <section className="charity-events-section">
        <div className="charity-container">
          <Fade direction="down">
            <h2 className="charity-events-subtitle">Let's Help Them Together!</h2>
          </Fade>
          <Fade direction="down" delay={200}>
            <h1 className="charity-events-title">Join Our Upcoming Events</h1>
          </Fade>
          <Fade direction="up" delay={300}>
            <div className="charity-events-grid">
              {techEvents.map((event, index) => (
                <EventCard key={index} {...event} />
              ))}
            </div>
          </Fade>
        </div>
      </section>
    </>
  );
};

export default EventsPage;