import React from "react";
import { Clock, MapPin } from "lucide-react";
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
    <div className="charity-event-date">
      <span>{date}</span>
      {month}
      <div className="charity-event-date-shape"></div>
    </div>
    <div className="charity-event-image">
      <img src={image} alt={title} />
    </div>
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
      speakers: ["Dr. John Doe", "Jane Smith", "Elon Ray"],
      description:
        "Explore the latest advancements in AI and machine learning with industry leaders and experts.",
      tags: ["AI", "Machine Learning", "Tech Summit"],
    },
    {
      date: "15",
      month: "Feb",
      image: eventImg2,
      title: "Blockchain and Web3 Conference",
      time: "9:00am-4:00pm",
      location: "New York",
      speakers: ["Alice Johnson", "Bob Williams", "Catherine Zhang"],
      description:
        "Dive into the world of blockchain technology, decentralized finance, and Web3 innovations.",
      tags: ["Blockchain", "Web3", "Crypto"],
    },
    {
      date: "10",
      month: "Mar",
      image: eventImg3,
      title: "Tech Innovations Expo 2024",
      time: "11:00am-6:00pm",
      location: "Los Angeles",
      speakers: ["Michael Brown", "Sarah Lee", "David Kim"],
      description:
        "Showcasing cutting-edge tech innovations and providing networking opportunities for tech enthusiasts.",
      tags: ["Tech Expo", "Innovation", "Networking"],
    },
    {
      date: "05",
      month: "Apr",
      image: eventImg4,
      title: "Cybersecurity Trends and Challenges",
      time: "8:00am-3:00pm",
      location: "Chicago",
      speakers: ["Laura Wilson", "George Clark", "Emily Davis"],
      description:
        "Understand the latest cybersecurity threats and how to mitigate them effectively.",
      tags: ["Cybersecurity", "Hacking", "InfoSec"],
    },
    {
      date: "20",
      month: "May",
      image: eventImg5,
      title: "Cloud Computing & DevOps Forum",
      time: "10:00am-4:00pm",
      location: "Seattle",
      speakers: ["Andrew Harris", "Sophia Green", "Mark Johnson"],
      description:
        "Discover how cloud computing and DevOps methodologies are transforming the tech industry.",
      tags: ["Cloud", "DevOps", "Tech Forum"],
    },
    {
      date: "12",
      month: "Jun",
      image: eventImg6,
      title: "AR/VR Development Workshop",
      time: "1:00pm-5:00pm",
      location: "Austin",
      speakers: ["Rachel Adams", "Chris Parker", "Nicole Taylor"],
      description:
        "A hands-on workshop on building augmented and virtual reality applications.",
      tags: ["AR", "VR", "Workshop"],
    },
    {
      date: "18",
      month: "Jul",
      image: eventImg7,
      title: "Sustainable Tech and Green Innovations",
      time: "9:00am-12:00pm",
      location: "Portland",
      speakers: ["Ethan Moore", "Mia Carter", "William Scott"],
      description:
        "Exploring sustainable technologies and eco-friendly solutions for the tech industry.",
      tags: ["Sustainability", "Green Tech", "Innovation"],
    },
  ];

  return (
    <>
      <Back title="Events" />
      <section className="charity-events-section">
        <div className="charity-container">
          <h2 className="charity-events-subtitle">Let's Help Them Together!</h2>
          <h1 className="charity-events-title">Join Our Upcoming Events</h1>
          <div className="charity-events-grid">
            {techEvents.map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default EventsPage;
