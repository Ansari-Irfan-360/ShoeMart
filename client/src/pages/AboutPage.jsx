import React from "react";
import "./AboutPage.css"; // Make sure to create and import a corresponding CSS file

const AboutPage = () => {
  const combinedText = {
    text1: "#About Us",
    text2: "Learn more about our story, mission, and team!",
    url: "https://nike0197.netlify.app/assets/1-f4da6767.jpg", // Replace with your actual image URL
  };

  return (
    <div className="about-page">
      <div className="header">
        <div
          className="header-background"
          style={{ backgroundImage: `url(${combinedText.url})` }}
        >
          <div className="header-text">
            <h1>{combinedText.text1}</h1>
            <p>{combinedText.text2}</p>
          </div>
        </div>
      </div>
      <div className="about-details">
        <div className="company-story">
          <span>OUR STORY</span>
          <h2>Discover Our Journey and Vision</h2>
          <h3>Who We Are</h3>
          <div className="about-info">
            <ul type="none">
              <li>
                <div className="icon history-icon"></div>
                Founded in 2022, ShoeMart started as a small online store and has grown into a well-known brand in the industry. Our commitment to quality and customer satisfaction has been the driving force behind our growth.
              </li>
              <li>
                <div className="icon vision-icon"></div>
                Our mission is to bring the latest trends and high-quality footwear to our customers at affordable prices. We believe that shoes are more than just a necessity; they are a way to express oneself.
              </li>
              <li>
                <div className="icon team-icon"></div>
                Our team is composed of dedicated professionals passionate about shoes and fashion. From our customer service representatives to our product curators, every member of our team plays a vital role in our success.
              </li>
              <li>
                <div className="icon award-icon"></div>
                We are proud to have served over 1 million satisfied customers and received numerous awards for our exceptional service and product quality.
              </li>
            </ul>
          </div>
        </div>
        <div className="team-section">
          <h2>Meet Our Team</h2>
          <div className="team-members">
            <div className="team-member">
              <img src="team-member-1.jpg" alt="Team Member 1" />
              <h3>John Doe</h3>
              <p>CEO & Founder</p>
            </div>
            <div className="team-member">
              <img src="team-member-2.jpg" alt="Team Member 2" />
              <h3>Jane Smith</h3>
              <p>Chief Marketing Officer</p>
            </div>
            <div className="team-member">
              <img src="team-member-3.jpg" alt="Team Member 3" />
              <h3>Mike Johnson</h3>
              <p>Chief Technology Officer</p>
            </div>
            {/* Add more team members as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
