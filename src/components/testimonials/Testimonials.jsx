import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

const data = [
  {
    avatar: AVTR1,
    name: "Nijat Mansimov",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. In quidem dignissimos soluta corrupti est quisquam eos totam qui officia. Similique repellat laborum molestiae qui repudiandae soluta quae officiis quo commodi?",
  },
  {
    avatar: AVTR2,
    name: "Nijat Mansimov",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. In quidem dignissimos soluta corrupti est quisquam eos totam qui officia. Similique repellat laborum molestiae qui repudiandae soluta quae officiis quo commodi?",
  },
  {
    avatar: AVTR3,
    name: "Nijat Mansimov",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. In quidem dignissimos soluta corrupti est quisquam eos totam qui officia. Similique repellat laborum molestiae qui repudiandae soluta quae officiis quo commodi?",
  },
  {
    avatar: AVTR4,
    name: "Nijat Mansimov",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. In quidem dignissimos soluta corrupti est quisquam eos totam qui officia. Similique repellat laborum molestiae qui repudiandae soluta quae officiis quo commodi?",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from students and clients</h5>
      <h2>Testimonials</h2>
      <div className="container testimonials__container">
        {data.map(({ avatar, name, review }, index) => {
          return (
            <article key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonials;
